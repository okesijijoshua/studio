import { NextResponse } from 'next/server';
import { z } from 'zod';
import { db } from '@/lib/server/firebaseAdmin';
import { products } from '@/lib/data';
import { getShippingCost } from '@/lib/shipping';
import { GLOBAL_DISCOUNT } from '@/lib/config';
import { randomUUID } from 'crypto';

// Request schema
const InitSchema = z.object({
  customer: z.object({
    fullName: z.string().trim().min(3).max(120),
    email: z.string().email(),
    phone: z.string().trim().min(10).max(30),
    address: z.string().trim().max(300).optional(),
    abujaLocation: z.string().trim().max(100).optional(),
    stateLocation: z.string().trim().max(100).optional(),
  }),
  cart: z.array(
    z.object({
      product: z.object({ id: z.string() }),
      quantity: z.number().int().positive().max(100),
    })
  ).min(1).max(50),
}).strict();

export async function POST(request: Request) {
  try {
    const body = await request.text();
    if (body.length > 32_000) {
      return NextResponse.json({ error: 'Request is too large' }, { status: 413 });
    }
    const raw = JSON.parse(body);
    const parsed = InitSchema.parse(raw);

    const { abujaLocation, stateLocation, address } = parsed.customer;
    if (Boolean(abujaLocation) === Boolean(stateLocation)) {
      return NextResponse.json({ error: 'Select exactly one delivery location' }, { status: 400 });
    }
    if (abujaLocation && (!address || address.trim().length < 5)) {
      return NextResponse.json({ error: 'Enter a street address or landmark for Abuja delivery' }, { status: 400 });
    }

    // Re‑calculate totals on the server
    let subTotal = 0;
    const detailedCart = parsed.cart.map((item) => {
      const prod = products.find((p) => p.id === item.product.id);
      if (!prod) throw new Error(`Product ${item.product.id} not found`);
      const discount = prod.discount ?? GLOBAL_DISCOUNT;
      const unitPrice = Math.round((prod.price * (1 - discount / 100)) * 100) / 100;
      const lineTotal = unitPrice * item.quantity;
      subTotal += lineTotal;
      return { product: { ...prod, price: unitPrice }, quantity: item.quantity };
    });

    const selectedLocation = abujaLocation || stateLocation!;
    const shippingCost = getShippingCost(selectedLocation);
    if (shippingCost === null) {
      return NextResponse.json({ error: 'Selected delivery location is not supported' }, { status: 400 });
    }
    subTotal = Math.round(subTotal * 100) / 100;
    const total = Math.round((subTotal + shippingCost) * 100) / 100;

    // Generate a reference that will be used both as Paystack reference and Firestore doc ID
    const reference = `order_${randomUUID()}`;

    // Persist pending order
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

    const orderDoc = db.collection('orders').doc(reference);
    await orderDoc.set({
      customer: parsed.customer,
      cart: detailedCart,
      subTotal,
      shipping: shippingCost,
      total,
      status: 'pending',
      notificationStatus: 'pending',
      createdAt: new Date().toISOString(),
      reference,
    });

    return NextResponse.json({
      authorization_url: initData.data.authorization_url,
      reference,
      orderId: reference,
    });
  } catch (err) {
    console.error('Order init error', err);
    if (err instanceof z.ZodError || err instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid order request' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Unable to initialize order' }, { status: 500 });
  }
}
