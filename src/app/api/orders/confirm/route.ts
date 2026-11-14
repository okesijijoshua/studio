import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/server/firebaseAdmin';
import { sendOrderNotification } from '@/ai/notifications';

const ConfirmSchema = z.object({
  reference: z.string().min(1).max(100).regex(/^order_[a-f0-9-]+$/i),
}).strict();

export async function POST(request: Request) {
  try {
    const body = await request.text();
    if (body.length > 4_000) {
      return NextResponse.json({ error: 'Request is too large' }, { status: 413 });
    }
    const { reference } = ConfirmSchema.parse(JSON.parse(body));
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
    const shouldNotify = await db.runTransaction(async (t) => {
      const snap = await t.get(orderRef);
      if (!snap.exists) throw new Error('Order disappeared');
      const current = snap.data();
      const notificationStartedAt = Date.parse(current?.notificationStartedAt || '');
      const notificationLeaseExpired = Number.isNaN(notificationStartedAt)
        || Date.now() - notificationStartedAt > 5 * 60 * 1000;
      if (current?.status !== 'paid') {
        const now = new Date().toISOString();
        t.update(orderRef, { status: 'paid', paidAt: now, notificationStatus: 'sending', notificationStartedAt: now });
        return true;
      }
      if (current.notificationStatus === 'sent' || (current.notificationStatus === 'sending' && !notificationLeaseExpired)) return false;
      t.update(orderRef, { notificationStatus: 'sending', notificationStartedAt: new Date().toISOString() });
      return true;
    });

    if (shouldNotify) {
      try {
        const sent = await sendOrderNotification({
          customer: orderData.customer,
          cart: orderData.cart,
          total: orderData.total,
          shipping: orderData.shipping,
        });
        await orderRef.update({ notificationStatus: sent ? 'sent' : 'failed' });
      } catch (notificationError) {
        console.error('Order notification error:', notificationError);
        await orderRef.update({ notificationStatus: 'failed' });
      }
    }

    return NextResponse.json({ message: 'Payment verified and order marked as paid', reference });
  } catch (err) {
    console.error('Confirm error', err);
    if (err instanceof z.ZodError || err instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Unable to confirm payment' }, { status: 500 });
  }
}
