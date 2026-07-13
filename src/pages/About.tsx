import { Link } from 'react-router-dom'
import { SunMark } from '../components/Logo'

export function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <SunMark className="h-12 w-12" />
      <h1 className="mt-4 font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
        About Haus of Sol Artistry
      </h1>
      <p className="mt-4 text-lg text-ink-600">
        Haus of Sol Artistry started with a simple hook, a pile of scrap yarn, and the idea that
        good patterns shouldn&apos;t hide behind a paywall.
      </p>

      <div className="prose-none mt-8 space-y-5 text-ink-700">
        <p>
          Every pattern on this site is written, tested, and photographed here — from the
          five-minute coaster you make while your coffee cools, to the wrap cardigan you&apos;ll
          wear all winter. Patterns are organized by category and skill level, so whether you
          picked up a hook yesterday or you&apos;ve got a decade of granny squares behind you,
          there&apos;s something to make.
        </p>
        <h2 className="font-display text-xl font-semibold text-ink-900">Free means free</h2>
        <p>
          No email gate, no login, no expiring links. Save your favorite patterns right in your
          browser and come back anytime. If a pattern helps you make something you love — for
          yourself, as a gift, or to sell at your own market stall — that&apos;s exactly what
          it&apos;s here for.
        </p>
        <h2 className="font-display text-xl font-semibold text-ink-900">A few ground rules</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Sell what you make from these patterns — no permission needed.</li>
          <li>Don&apos;t resell, republish, or claim the written pattern as your own.</li>
          <li>Sharing the pattern? Link back to Haus of Sol Artistry instead of copy-pasting.</li>
        </ul>
      </div>

      <Link
        to="/patterns"
        className="mt-10 inline-flex items-center rounded-full bg-sol-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sol-600"
      >
        Browse all patterns
      </Link>
    </div>
  )
}
