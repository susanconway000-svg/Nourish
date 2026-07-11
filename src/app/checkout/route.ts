import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getProduct } from "@/lib/products";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("product");
  const product = slug ? getProduct(slug) : undefined;

  if (!product) {
    return NextResponse.redirect(new URL("/offerings", request.url));
  }

  const origin = request.nextUrl.origin;

  try {
    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: product.currency,
            unit_amount: product.priceInCents,
            product_data: {
              name: product.name,
              description: product.description,
            },
          },
        },
      ],
      metadata: {
        product: product.slug,
      },
      success_url: `${origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/offerings`,
    });

    if (!session.url) {
      return NextResponse.redirect(new URL("/offerings", request.url));
    }

    return NextResponse.redirect(session.url, { status: 303 });
  } catch (error) {
    console.error("Stripe checkout session failed:", error);
    return NextResponse.redirect(
      new URL("/offerings?checkout_error=1", request.url),
    );
  }
}
