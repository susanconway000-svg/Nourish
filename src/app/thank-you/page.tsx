import Link from "next/link";
import CandleGlow from "@/components/CandleGlow";
import { getStripe } from "@/lib/stripe";
import { getProduct } from "@/lib/products";

export const metadata = {
  title: "Thank you — Nourish",
};

async function verifySession(sessionId: string) {
  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") {
      return null;
    }
    const slug = session.metadata?.product;
    const product = slug ? getProduct(slug) : undefined;
    if (!product) {
      return null;
    }
    return { product, email: session.customer_details?.email ?? null };
  } catch {
    return null;
  }
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;
  const verified = session_id ? await verifySession(session_id) : null;

  return (
    <main id="main" className="relative overflow-hidden py-24">
      <CandleGlow className="left-1/2 top-[-160px] h-[520px] w-[520px] -translate-x-1/2" />
      <div className="relative mx-auto max-w-[560px] px-6 text-center">
        {verified ? (
          <>
            <p className="eyebrow">Thank you</p>
            <h1 className="mt-3 text-4xl">Your download is ready</h1>
            <p className="mt-5 text-lg text-muted">
              {verified.email
                ? `A receipt is on its way to ${verified.email}.`
                : "A receipt is on its way to your inbox."}{" "}
              If anything goes wrong with the button below, that same email
              will carry a backup copy of your download.
            </p>

            <div className="hairline-card mt-10 text-left">
              <p className="eyebrow">{verified.product.name}</p>
              <p className="mt-3 text-sm text-muted">
                {verified.product.description}
              </p>
              <a
                href={verified.product.downloadUrl}
                className="btn btn-primary mt-6 w-full"
              >
                Download now
              </a>
            </div>

            <p className="mt-8 text-sm text-mauve">
              Keep this page bookmarked, or find the download again anytime
              from the email receipt.
            </p>
          </>
        ) : (
          <>
            <p className="eyebrow">Hmm</p>
            <h1 className="mt-3 text-4xl">We couldn&rsquo;t verify that payment</h1>
            <p className="mt-5 text-lg text-muted">
              This page only unlocks right after a successful checkout. If
              you&rsquo;ve just paid and landed here by mistake, check your
              email for a receipt with your download link — or reach out and
              we&rsquo;ll sort it out by hand.
            </p>
            <Link href="/offerings" className="btn btn-primary mt-8">
              Back to offerings
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
