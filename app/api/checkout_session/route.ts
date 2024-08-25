import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

export async function POST(request: Request) {
  try {
    const productsToCheckout: stripeProductInfoPopulated[] = await request.json();

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      ui_mode: 'hosted',
      billing_address_collection: 'required',
      payment_method_types: ['card'],
      line_items: productsToCheckout.map(product => {
        return {
          price: product.priceId,
          quantity: product.quantity,
        };
      }),
      success_url: `http://localhost:3000/?success=true`,
      cancel_url: `http://localhost:3000/?success=false`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Unable to create Stripe Checkout session' },
      { status: 500 }
    );
  }
}
