import Link from "next/link";
import CandleGlow from "@/components/CandleGlow";
import { products } from "@/lib/products";

export default function Home() {
  const featured = products[0];

  return (
    <main id="main">
      {/* HERO */}
      <section className="relative overflow-hidden pb-16 pt-20">
        <CandleGlow className="left-1/2 top-[-180px] h-[620px] w-[620px] -translate-x-1/2" />
        <div className="relative mx-auto max-w-[720px] px-6 text-center">
          <p className="eyebrow">A quiet space for women</p>
          <h1 className="mt-4 text-[2.4rem] leading-[1.08] sm:text-6xl">
            Be nourished, <em className="text-sage-ink not-italic italic">in all aspects.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-[540px] text-lg text-muted">
            Spiritual, mental, and emotional wellbeing — held gently, without
            hurry. Nourish is a place to slow down, breathe, and simply be,
            exactly as you are tonight.
          </p>
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/offerings" className="btn btn-primary">
              Explore offerings
            </Link>
            <Link
              href="#signup"
              className="font-semibold underline decoration-surface-line underline-offset-4"
            >
              Join for free &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT NOURISH IS */}
      <section className="border-y border-surface-line/70 bg-surface py-16">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mx-auto max-w-[620px] text-center">
            <p className="eyebrow">What Nourish is</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Not a program to finish. A space to return to.
            </h2>
          </div>
          <p className="mx-auto mt-8 max-w-[640px] text-center text-lg">
            Nourish began with a simple belief: women don&rsquo;t need to do
            more to be well — they need permission to slow down. There&rsquo;s
            no performance here, no urgency, no hustle disguised as healing.
            Just presence, softness, and a little candlelight, for whichever
            part of you needs tending tonight.
          </p>
          <div className="mt-10 flex flex-col items-center gap-2.5 font-serif text-xl italic text-sage-ink sm:flex-row sm:justify-center sm:gap-4">
            <span>Spiritual</span>
            <span aria-hidden="true" className="hidden h-px w-5 bg-gold sm:inline-block" />
            <span>Mental</span>
            <span aria-hidden="true" className="hidden h-px w-5 bg-gold sm:inline-block" />
            <span>Emotional</span>
          </div>
        </div>
      </section>

      {/* FREE OFFERINGS */}
      <section className="py-16" id="free">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="mx-auto max-w-[620px] text-center">
            <p className="eyebrow">Free, always</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Come as you are</h2>
            <p className="mt-3 text-muted">
              A few doors are always open, no card required.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="hairline-card">
              <p className="eyebrow">Community</p>
              <h3 className="mt-2.5 text-xl">A gentle place to land</h3>
              <p className="mt-2.5 text-[0.97rem] text-muted">
                Connect quietly with other women walking a similar path — no
                performing, no advice-giving, just company.
              </p>
            </div>
            <div className="hairline-card">
              <p className="eyebrow">Meditations</p>
              <h3 className="mt-2.5 text-xl">Short, guided meditations</h3>
              <p className="mt-2.5 text-[0.97rem] text-muted">
                A handful of free recordings to bring you back to your body
                and breath, whenever the day asks too much of you.
              </p>
            </div>
            <div className="hairline-card">
              <p className="eyebrow">Monthly circle</p>
              <h3 className="mt-2.5 text-xl">A free live gathering</h3>
              <p className="mt-2.5 text-[0.97rem] text-muted">
                Once a month, we meet — to check in, be witnessed, and
                remember we&rsquo;re not doing this alone.
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="#signup" className="btn btn-ghost">
              Join free, no card needed
            </Link>
          </div>
        </div>
      </section>

      {/* PAID TEASER */}
      <section className="border-y border-surface-line/70 bg-surface py-16" id="offerings">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid items-center gap-10 sm:grid-cols-[1.1fr_0.9fr] sm:gap-14">
            <div>
              <p className="eyebrow">When you&rsquo;re ready to go deeper</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">
                Guided courses &amp; downloads, made slowly
              </h2>
              <p className="mt-3.5 text-muted">
                For the moments that ask for more than a free meditation — a
                few paid offerings, each made with care and meant to be lived
                with, not rushed through.
              </p>
              <Link href="/offerings" className="btn btn-primary mt-6">
                View all offerings
              </Link>
            </div>
            <div className="rounded-[22px] border border-surface-line bg-bg p-7 shadow-[0_1px_2px_rgba(58,46,57,0.06),0_8px_24px_rgba(58,46,57,0.07)]">
              <p className="eyebrow">Featured</p>
              <h3 className="mt-2 text-xl">{featured.name}</h3>
              <p className="mt-2 text-[0.95rem] text-muted">
                {featured.description}
              </p>
              <div className="mt-4.5 flex items-baseline justify-between border-t border-dashed border-surface-line pt-4.5">
                <span className="font-serif text-2xl text-sage-ink">
                  {featured.priceDisplay}
                </span>
                <Link
                  href={`/checkout?product=${featured.slug}`}
                  className="btn btn-primary btn-small"
                >
                  Buy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING CIRCLE */}
      <section className="py-16" id="circle">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="relative overflow-hidden rounded-[22px] border border-surface-line bg-surface px-8 py-11 text-center">
            <CandleGlow className="inset-0 opacity-50" />
            <div className="relative">
              <p className="eyebrow">Upcoming circle</p>
              <p className="mt-3.5 font-serif text-2xl">[DATE], [TIME]</p>
              <p className="mt-2.5 text-muted">
                Free to attend, held over video, and warmly recorded for
                anyone who can&rsquo;t make it live.
              </p>
              <Link href="#signup" className="btn btn-primary mt-6">
                Save my seat
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNUP */}
      <section className="border-t border-surface-line/70 bg-surface py-16" id="signup">
        <div className="mx-auto max-w-[560px] px-6 text-center">
          <p className="eyebrow">Stay close</p>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            A little warmth in your inbox
          </h2>
          <p className="mt-3.5 text-muted">
            One gentle, useful email a month — new meditations, circle dates,
            and the occasional offering. Nothing else.
          </p>
          <form className="mt-7 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              className="flex-1 rounded-full border border-surface-line bg-bg px-4.5 py-3.5 text-[0.97rem] placeholder:text-mauve"
            />
            <button type="submit" className="btn btn-primary">
              Join for free
            </button>
          </form>
          <p className="mt-3.5 text-sm text-mauve">
            Unsubscribe anytime, in one click.
          </p>
        </div>
      </section>
    </main>
  );
}
