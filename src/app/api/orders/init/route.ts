import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/server/firebaseAdmin';
import { products } from '@/lib/data';
import { getShippingCost } from '@/lib/shipping';

// Request schema
const InitSchema = z.object({
  customer: z.object({
    fullName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    address: z.string().optional(),
    abujaLocation: z.string().optional(),
    stateLocation: z.string().optional(),
  }),
  cart: z.array(
    z.object({
      product: z.object({ id: z.string() }),
      quantity: z.number().int().positive(),
    })
  ),
});

export async function POST(request: Request) {
  try {
    const raw = await request.json();
    const parsed = InitSchema.parse(raw);

    // Re‑calculate totals on the server
    let subTotal = 0;
    const detailedCart = parsed.cart.map((item) => {
      const prod = products.find((p) => p.id === item.product.id);
      if (!prod) throw new Error(`Product ${item.product.id} not found`);
      const lineTotal = prod.price * item.quantity;
      subTotal += lineTotal;
      return { product: prod, quantity: item.quantity };
    });

    const shippingCost = parsed.customer.abujaLocation
      ? getShippingCost(parsed.customer.abujaLocation)
      : parsed.customer.stateLocation
      ? getShippingCost(parsed.customer.stateLocation)
      : 0;
    const total = subTotal + (shippingCost || 0);

    // Generate a reference that will be used both as Paystack reference and Firestore doc ID
    const reference = `order_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;

    // Persist pending order
    const orderDoc = db.collection('orders').doc(reference);
    await orderDoc.set({
      customer: parsed.customer,
      cart: detailedCart,
      subTotal,
      shipping: shippingCost,
      total,
      status: 'pending',
      createdAt: new Date().toISOString(),
      reference,
    });

    // Initialise Paystack transaction
    const PAYSTACK_SECRET = process.env.PAYSTACK_SECRET_KEY;
    if (!PAYSTACK_SECRET) {
      throw new Error('PAYSTACK_SECRET_KEY env var is missing');
    }
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
    if (!SITE_URL) {
      throw new Error('NEXT_PUBLIC_SITE_URL env var is missing');
    }
    const initRes = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: parsed.customer.email,
        amount: Math.round(total * 100), // kobo
        reference,
        callback_url: `${SITE_URL}/checkout`,
      }),
    });
    const initData = await initRes.json();
    if (!initRes.ok || !initData.data?.authorization_url) {
      throw new Error(initData.message || 'Paystack initialization failed');
    }

    return NextResponse.json({
      authorization_url: initData.data.authorization_url,
      reference,
      orderId: reference,
    });
  } catch (err: any) {
    console.error('Order init error', err);
    return new NextResponse(err.message || 'Invalid request', { status: 400 });
  }
}
