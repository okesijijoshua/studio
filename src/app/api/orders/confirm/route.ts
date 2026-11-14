import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/server/firebaseAdmin';
import { sendOrderNotification } from '@/ai/notifications';

const ConfirmSchema = z.object({
  reference: z.string(),
});

export async function POST(request: Request) {
  try {
    const { reference } = ConfirmSchema.parse(await request.json());
    // Retrieve pending order
    const orderRef = db.collection('orders').doc(reference);
    const orderSnap = await orderRef.get();
    if (!orderSnap.exists) {
      return new NextResponse('Order not found', { status: 404 });
    }
    const orderData = orderSnap.data();
    if (!orderData) {
      return new NextResponse('Invalid order data', { status: 500 });
    }
    if (orderData.status === 'paid') {
      // Idempotent: already processed
      return NextResponse.json({ message: 'Order already paid', reference });
    }
    const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY;
    if (!PAYSTACK_SECRET) throw new Error('PAYSTACK_SECRET_KEY missing');

    const verifyRes = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${PAYSTACK_SECRET}` },
    });
    const verifyData = await verifyRes.json();
    if (!verifyRes.ok || !verifyData.data?.status) {
      throw new Error(verifyData.message || 'Paystack verification failed');
    }
    const { amount, status, currency } = verifyData.data;
    // Paystack amount is in kobo; our order total is in naira
    const expectedAmount = Math.round(orderData.total * 100);
    if (status !== 'success' || amount !== expectedAmount || currency !== 'NGN') {
      return new NextResponse('Payment verification failed', { status: 400 });
    }

    // Mark order as paid atomically
    await db.runTransaction(async (t: any) => {
      const snap = await t.get(orderRef);
      if (!snap.exists) throw new Error('Order disappeared');
      const current = snap.data();
      if (current?.status !== 'paid') {
        t.update(orderRef, { status: 'paid', paidAt: new Date().toISOString() });
      }
    });

    // Send notifications (owner + customer)
    try {
      await sendOrderNotification({
        customer: orderData.customer,
        cart: orderData.cart,
        total: orderData.total,
        shipping: orderData.shipping,
      });
    } catch (e) {
      console.error('Notification error:', e);
    }

    return NextResponse.json({ message: 'Payment verified and order marked as paid', reference });
  } catch (err: any) {
    console.error('Confirm error', err);
    return new NextResponse(err.message || 'Invalid request', { status: 400 });
  }
}
