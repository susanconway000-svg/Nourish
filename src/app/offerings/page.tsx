import Link from "next/link";
import CandleGlow from "@/components/CandleGlow";
import { products } from "@/lib/products";

export const metadata = {
  title: "Offerings — Nourish",
  description:
    "Free and paid ways to be nourished — community, meditations, a monthly circle, and guided courses made slowly.",
};

const freeOfferings = [
  {
    tag: "Community",
    title: "A gentle place to land",
    description:
      "Connect quietly with other women walking a similar path — no performing, no advice-giving, just company.",
  },
  {
    tag: "Meditations",
    title: "Short, guided meditations",
    description:
      "A handful of free recordings to bring you back to your body and breath, whenever the day asks too much of you.",
  },
  {
    tag: "Monthly circle",
    title: "A free live gathering",
    description:
      "Once a month, we meet — to check in, be witnessed, and remember we're not doing this alone.",
  },
];

export default async function OfferingsPage({
  searchParams,
}: {
  searchParams: Promise<{ checkout_error?: string }>;
}) {
  const { checkout_error } = await searchParams;

  return (
    <main id="main">
      <section className="relative overflow-hidden pb-14 pt-20">
        <CandleGlow className="left-1/2 top-[-180px] h-[560px] w-[560px] -translate-x-1/2" />
        <div className="relative mx-auto max-w-[680px] px-6 text-center">
          <p className="eyebrow">Offerings</p>
          <h1 className="mt-4 text-4xl sm:text-5xl">
            Free to come as you are. Paid to go deeper.
          </h1>
          <p className="mx-auto mt-5 max-w-[520px] text-lg text-muted">
            Nothing here is urgent, and nothing is required. Take what
            nourishes you now, and leave the rest for another season.
          </p>
          {checkout_error ? (
            <p className="mx-auto mt-6 max-w-[480px] rounded-2xl border border-surface-line bg-surface px-5 py-3 text-sm text-muted">
              Checkout couldn&rsquo;t start. If you&rsquo;re the site owner,
              double-check the Stripe key in your environment variables — see
              the README for exactly where it goes.
            </p>
          ) : null}
        </div>
      </section>

      {/* FREE */}
      <section className="py-14">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mx-auto max-w-[560px] text-center">
            <p className="eyebrow">Free, always</p>
            <h2 className="mt-3 text-3xl">No card required</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {freeOfferings.map((item) => (
              <div className="hairline-card" key={item.tag}>
                <p className="eyebrow">{item.tag}</p>
                <h3 className="mt-2.5 text-xl">{item.title}</h3>
                <p className="mt-2.5 text-[0.97rem] text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/#signup" className="btn btn-ghost">
              Join free, no card needed
            </Link>
          </div>
        </div>
      </section>

      {/* PAID */}
      <section className="border-t border-surface-line/70 bg-surface py-14">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mx-auto max-w-[560px] text-center">
            <p className="eyebrow">When you&rsquo;re ready</p>
            <h2 className="mt-3 text-3xl">Guided courses &amp; downloads</h2>
            <p className="mt-3 text-muted">
              Made slowly, meant to be lived with. Checkout is handled by
              Stripe, so your card details never touch this site.
            </p>
          </div>
          <div
            className={`mt-10 grid gap-6 ${
              products.length > 1 ? "sm:grid-cols-2" : "mx-auto max-w-[420px]"
            }`}
          >
            {products.map((product) => (
              <div
                key={product.slug}
                className="rounded-[22px] border border-surface-line bg-bg p-7 shadow-[0_1px_2px_rgba(58,46,57,0.06),0_8px_24px_rgba(58,46,57,0.07)]"
              >
                <p className="eyebrow">Digital download</p>
                <h3 className="mt-2 text-xl">{product.name}</h3>
                <p className="mt-2 text-[0.95rem] text-muted">
                  {product.description}
                </p>
                <div className="mt-4.5 flex items-baseline justify-between border-t border-dashed border-surface-line pt-4.5">
                  <span className="font-serif text-2xl text-sage-ink">
                    {product.priceDisplay}
                  </span>
                  <Link
                    href={`/checkout?product=${product.slug}`}
                    className="btn btn-primary btn-small"
                  >
                    Buy
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
