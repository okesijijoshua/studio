
'use server';
/**
 * @fileOverview A flow for handling new order notifications.
 *
 * This file defines a Genkit flow that is triggered when a customer
 * successfully completes the checkout process. The flow's purpose is to
 * capture all relevant order information and log it.
 *
 * In a production environment, this flow would be extended to integrate
 * with an email service (like SendGrid, Nodemailer, etc.) to send a
 * formatted email confirmation to the business owner.
 */

import { ai } from '@/ai/genkit';
import type { CartItem } from '@/lib/types';
import { z } from 'zod';

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
    // Add any other product fields you want to include in the notification
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
    console.log('============================================');
    console.log('          🎉 NEW ORDER RECEIVED 🎉          ');
    console.log('============================================');
    console.log('CUSTOMER DETAILS:');
    console.log(`- Name: ${input.customer.fullName}`);
    console.log(`- Email: ${input.customer.email}`);
    console.log(`- Phone: ${input.customer.phone}`);
    if (input.customer.abujaLocation) {
      console.log(`- Delivery Location (Abuja): ${input.customer.abujaLocation}`);
      console.log(`- Address: ${input.customer.address}`);
    } else {
      console.log(`- Delivery Location (State): ${input.customer.stateLocation}`);
    }
    console.log('--------------------------------------------');
    console.log('ORDER SUMMARY:');
    input.cart.forEach(item => {
      console.log(`- ${item.product.name} (x${item.quantity})`);
    });
    console.log('--------------------------------------------');
    console.log(`SHIPPING COST: ${input.shipping.toFixed(2)}`);
    console.log(`ORDER TOTAL: ${input.total.toFixed(2)}`);
    console.log('============================================');
    
    // DEVELOPER NOTE:
    // This is where you would integrate an email sending service.
    // You could use a library like Nodemailer, or an API service like
    // SendGrid, Resend, etc.
    //
    // Example using a hypothetical email service:
    //
    // import { EmailService } from '@/services/emailService';
    //
    // const emailHtml = `<h1>New Order Received!</h1>...`; // build your email content
    //
    // await EmailService.send({
    //   to: 'your-email@example.com',
    //   from: 'noreply@dekemiscents.com',
    //   subject: `New Order from ${input.customer.fullName}`,
    //   html: emailHtml,
    // });
    
    console.log('Order details logged. Email sending logic would be implemented here.');
  }
);
