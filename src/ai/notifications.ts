// Notification utilities for order processing (no Genkit)

'use server';

import { z } from 'zod';
import * as nodemailer from 'nodemailer';

// Schemas (same as original order-notification flow)
const CustomerInfoSchema = z.object({
  fullName: z.string().trim().min(1).max(120),
  email: z.string().email().max(254),
  phone: z.string().trim().max(30),
  address: z.string().trim().max(300).optional(),
  abujaLocation: z.string().trim().max(100).optional(),
  stateLocation: z.string().trim().max(100).optional(),
});

const CartItemSchema = z.object({
  product: z.object({
    id: z.string().max(100),
    name: z.string().max(200),
    price: z.number().finite().nonnegative(),
  }),
  quantity: z.number().int().positive().max(100),
});

const OrderNotificationInputSchema = z.object({
  customer: CustomerInfoSchema,
  cart: z.array(CartItemSchema).min(1).max(50),
  total: z.number().finite().nonnegative(),
  shipping: z.number().finite().nonnegative(),
});

export type OrderNotificationInput = z.infer<typeof OrderNotificationInputSchema>;

/**
 * Sends order notification emails to the store owner and the customer.
 * This function replaces the previous Genkit flow.
 */
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
}

export async function sendOrderNotification(input: OrderNotificationInput): Promise<boolean> {
  const parsed = OrderNotificationInputSchema.safeParse(input);
  if (!parsed.success) {
    console.error('Order notification input was invalid');
    return false;
  }
  input = parsed.data;
  const customerName = escapeHtml(input.customer.fullName);
  const customerPhone = escapeHtml(input.customer.phone);
  const deliveryLocation = escapeHtml(input.customer.abujaLocation || input.customer.stateLocation || '');
  const address = input.customer.address && input.customer.address !== 'N/A'
    ? `<p><strong>Address:</strong> ${escapeHtml(input.customer.address)}</p>`
    : '';

  // Build HTML for cart items (shared between emails)
  const cartItemsHtml = input.cart
    .map(
      (item) => `
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${escapeHtml(item.product.name)}</td>
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
      <p><strong>Name:</strong> ${customerName}</p>
      <p><strong>Email:</strong> ${escapeHtml(input.customer.email)}</p>
      <p><strong>Phone:</strong> ${customerPhone}</p>
      <p><strong>Delivery Location:</strong> ${deliveryLocation}</p>
      ${address}
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
      <p>Hi ${customerName},</p>
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
      <p><strong>Name:</strong> ${customerName}</p>
      <p><strong>Delivery Location:</strong> ${deliveryLocation}</p>
      ${address}
      <p>We will contact you via your provided phone number (${customerPhone}) regarding delivery.</p>
      <p style="margin-top: 20px;">Thanks again for shopping with DekemiScents!</p>
    </div>
  `;

  // Create transporter using environment variables
  const { MAIL_HOST, MAIL_USER, MAIL_PASS, MAIL_FROM_ADDRESS, MAIL_TO_ADDRESS } = process.env;
  if (!MAIL_HOST || !MAIL_USER || !MAIL_PASS || !MAIL_FROM_ADDRESS || !MAIL_TO_ADDRESS) {
    console.error('Order notification email configuration is incomplete');
    return false;
  }
  const ownerMailOptions = {
    from: `"DekemiScents Orders" <${MAIL_FROM_ADDRESS}>`,
    to: MAIL_TO_ADDRESS,
    subject: `New Order Confirmation from ${input.customer.fullName.replace(/[\r\n]/g, ' ')}`,
    html: ownerEmailHtml,
  };

  const customerMailOptions = {
    from: `"DekemiScents" <${MAIL_FROM_ADDRESS}>`,
    to: input.customer.email,
    subject: `Your DekemiScents Order is Confirmed!`,
    html: customerEmailHtml,
  };

  try {
    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: Number(process.env.MAIL_PORT || 587),
      auth: { user: MAIL_USER, pass: MAIL_PASS },
    });
    const results = await Promise.allSettled([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(customerMailOptions),
    ]);
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log(`${index === 0 ? 'Owner' : 'Customer'} notification sent: %s`, result.value.messageId);
      } else {
        console.error(`${index === 0 ? 'Owner' : 'Customer'} notification failed:`, result.reason);
      }
    });
    return results.every((result) => result.status === 'fulfilled');
  } catch (error) {
    console.error('Failed to send order notification email(s):', error);
    return false;
  }
}
