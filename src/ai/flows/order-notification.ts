
'use server';
/**
 * @fileOverview A flow for handling new order notifications.
 *
 * This file defines a Genkit flow that is triggered when a customer
 * successfully completes the checkout process. The flow's purpose is to
 * capture all relevant order information, format it into an email,
 * and send it to the business owner for fulfillment.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import * as nodemailer from 'nodemailer';

// Define the schema for the customer's information.
const CustomerInfoSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string().optional(),
  abujaLocation: z.string().optional(),
  stateLocation: z.string().optional(),
});

// Define the schema for a single item in the cart.
const CartItemSchema = z.object({
  product: z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
  }),
  quantity: z.number(),
});

// Define the schema for the entire order payload.
const OrderNotificationInputSchema = z.object({
  customer: CustomerInfoSchema,
  cart: z.array(CartItemSchema),
  total: z.number(),
  shipping: z.number(),
});

// Export the input type for use in the calling component.
export type OrderNotificationInput = z.infer<typeof OrderNotificationInputSchema>;

/**
 * An exported wrapper function that calls the Genkit flow.
 * This function is called from the checkout page upon successful payment.
 * @param input The order details.
 */
export async function notifyOrder(input: OrderNotificationInput): Promise<void> {
  await orderNotificationFlow(input);
}

const orderNotificationFlow = ai.defineFlow(
  {
    name: 'orderNotificationFlow',
    inputSchema: OrderNotificationInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    // Log the order for debugging and record-keeping purposes
    console.log('============================================');
    console.log('          🎉 NEW ORDER RECEIVED 🎉          ');
    console.log('============================================');
    console.log('Order details received:', JSON.stringify(input, null, 2));

    try {
      // 1. Create a transporter object using SMTP transport.
      // You must provide your email service credentials in the .env file.
      const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT || 587),
        secure: process.env.MAIL_PORT === '465', // true for 465, false for other ports
        auth: {
          user: process.env.MAIL_USER, // Your email address
          pass: process.env.MAIL_PASS, // Your email password or app-specific password
        },
      });

      // 2. Construct the HTML for the email
      const cartItemsHtml = input.cart.map(item => `
        <tr>
          <td>${item.product.name}</td>
          <td style="text-align: center;">${item.quantity}</td>
          <td style="text-align: right;">₦${item.product.price.toFixed(2)}</td>
        </tr>
      `).join('');

      const emailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px;">
          <h1 style="color: #333;">🎉 New Order Received!</h1>
          <p>You've received a new order from your DekemiScents store.</p>
          
          <h2 style="border-bottom: 1px solid #ddd; padding-bottom: 5px;">Customer Details</h2>
          <p><strong>Name:</strong> ${input.customer.fullName}</p>
          <p><strong>Email:</strong> ${input.customer.email}</p>
          <p><strong>Phone:</strong> ${input.customer.phone}</p>
          <p><strong>Delivery Location:</strong> ${input.customer.abujaLocation || input.customer.stateLocation}</p>
          ${input.customer.address && input.customer.address !== 'N/A' ? `<p><strong>Address:</strong> ${input.customer.address}</p>` : ''}
          
          <h2 style="border-bottom: 1px solid #ddd; padding-bottom: 5px;">Order Summary</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr>
                <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Product</th>
                <th style="text-align: center; padding: 8px; border-bottom: 1px solid #ddd;">Quantity</th>
                <th style="text-align: right; padding: 8px; border-bottom: 1px solid #ddd;">Price</th>
              </tr>
            </thead>
            <tbody>
              ${cartItemsHtml}
            </tbody>
          </table>

          <h3 style="text-align: right; margin-top: 20px;">Subtotal: ₦${(input.total - input.shipping).toFixed(2)}</h3>
          <h3 style="text-align: right;">Shipping: ₦${input.shipping.toFixed(2)}</h3>
          <h2 style="text-align: right; color: #333;">Total: ₦${input.total.toFixed(2)}</h2>
        </div>
      `;
      
      // 3. Define the email options
      const mailOptions = {
        from: `"DekemiScents Orders" <${process.env.MAIL_FROM_ADDRESS}>`, // Sender address
        to: process.env.MAIL_TO_ADDRESS, // Your email address to receive notifications
        subject: `New Order Confirmation from ${input.customer.fullName}`,
        html: emailHtml,
      };
      
      // 4. Send the email
      const info = await transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);

    } catch (error) {
      console.error('Failed to send order notification email:', error);
      // It's important to not throw the error here, as it would
      // make the user's checkout process fail. We just log it.
    }
  }
);
