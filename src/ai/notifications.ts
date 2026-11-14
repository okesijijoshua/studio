// Notification utilities for order processing (no Genkit)

'use server';

import { z } from 'zod';
import * as nodemailer from 'nodemailer';

// Schemas (same as original order-notification flow)
const CustomerInfoSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string().optional(),
  abujaLocation: z.string().optional(),
  stateLocation: z.string().optional(),
});

const CartItemSchema = z.object({
  product: z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
  }),
  quantity: z.number(),
});

const OrderNotificationInputSchema = z.object({
  customer: CustomerInfoSchema,
  cart: z.array(CartItemSchema),
  total: z.number(),
  shipping: z.number(),
});

export type OrderNotificationInput = z.infer<typeof OrderNotificationInputSchema>;

/**
 * Sends order notification emails to the store owner and the customer.
 * This function replaces the previous Genkit flow.
 */
export async function sendOrderNotification(input: OrderNotificationInput): Promise<void> {
  // Build HTML for cart items (shared between emails)
  const cartItemsHtml = input.cart
    .map(
      (item) => `
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.product.name}</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: center;">${item.quantity}</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd; text-align: right;">₦${item.product.price.toFixed(2)}</td>
        </tr>
      `
    )
    .join('');

  // Owner email HTML
  const ownerEmailHtml = `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px;">
      <h1 style="color: #333;">🎉 New Order Received!</h1>
      <p>You've received a new order from your DekemiScents store. Please process it for fulfillment.</p>
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

  // Customer email HTML
  const customerEmailHtml = `
    <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px;">
      <h1 style="color: #333;">Thank You for Your Order!</h1>
      <p>Hi ${input.customer.fullName},</p>
      <p>We've received your order and will begin processing it shortly. Here is a summary of your purchase:</p>
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
      <h2 style="border-top: 1px solid #ddd; padding-top: 20px; margin-top: 30px;">Shipping Details</h2>
      <p><strong>Name:</strong> ${input.customer.fullName}</p>
      <p><strong>Delivery Location:</strong> ${input.customer.abujaLocation || input.customer.stateLocation}</p>
      ${input.customer.address && input.customer.address !== 'N/A' ? `<p><strong>Address:</strong> ${input.customer.address}</p>` : ''}
      <p>We will contact you via your provided phone number (${input.customer.phone}) regarding delivery.</p>
      <p style="margin-top: 20px;">Thanks again for shopping with DekemiScents!</p>
    </div>
  `;

  // Create transporter using environment variables
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT || 587),
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    tls: { rejectUnauthorized: false },
  });

  const ownerMailOptions = {
    from: `"DekemiScents Orders" <${process.env.MAIL_FROM_ADDRESS}>`,
    to: process.env.MAIL_TO_ADDRESS,
    subject: `New Order Confirmation from ${input.customer.fullName}`,
    html: ownerEmailHtml,
  };

  const customerMailOptions = {
    from: `"DekemiScents" <${process.env.MAIL_FROM_ADDRESS}>`,
    to: input.customer.email,
    subject: `Your DekemiScents Order is Confirmed!`,
    html: customerEmailHtml,
  };

  try {
    const ownerInfo = await transporter.sendMail(ownerMailOptions);
    console.log('Owner notification sent: %s', ownerInfo.messageId);
    const customerInfo = await transporter.sendMail(customerMailOptions);
    console.log('Customer confirmation sent: %s', customerInfo.messageId);
  } catch (error) {
    console.error('Failed to send order notification email(s):', error);
    // Do not rethrow – we do not want the checkout to fail because of email issues.
  }
}
