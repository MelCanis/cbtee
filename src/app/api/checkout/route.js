// import { useRouter } from "next/router";
import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function POST(request) {
  const data = await request.json();
  const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY)
  const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: data.items.map( i => {
        return {
          price_data: {
            currency: 'usd',
            product_data: {
                name: i.name
            },
            unit_amount: i.price
          },
          quantity: 1
        }
      } ),
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
  })
  return NextResponse.json( { url: session.url } )
  // return new Response ()
    // try {
    //     const data = await request.json();
    //     return NextResponse.json({ content: "Hell yuhhh" })
    //     console.log(body)
    //     return new Response("Hell Yuhhh")
    //     return new Response(body, { status: 200, statusText: "Hell yuhhh" })
        
    //     NextResponse.json(session)
    // } catch (e) {
    //     // console.log()
    //     return new Response(request, {status: 405})
    //     // NextResponse.status(500).json({ error: e.message })
    // }
}