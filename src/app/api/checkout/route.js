// import { useRouter } from "next/router";
import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

async function createStripeSession(items) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: items.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
        },
        unit_amount: item.price,
      },
      quantity: 1,
    })),
    success_url: `${process.env.SERVER_URL}/success`,
    cancel_url: `${process.env.SERVER_URL}/shop`,
    shipping_address_collection: {
      allowed_countries: ['US'],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 1000,
            currency: 'usd',
          },
          display_name: 'Shipping',
        },
      },
    ],
  });

  return session;
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Create a Stripe session
    const session = await createStripeSession(data.items);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    return NextResponse.error('An error occurred while processing your request.');
  }
}