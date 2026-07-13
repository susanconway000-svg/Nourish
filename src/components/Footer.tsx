import { Link } from 'react-router-dom'
import { SunMark } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-ink-900/5 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-3">
          <SunMark className="h-9 w-9 shrink-0" />
          <div>
            <p className="font-display text-base font-semibold text-ink-900">Haus of Sol Artistry</p>
            <p className="mt-1 max-w-xs text-sm text-ink-600">
              Free, original crochet patterns made to be shared — no paywalls, no accounts required.
            </p>
          </div>
        </div>

        <div className="flex gap-12 text-sm">
          <div className="flex flex-col gap-2">
            <p className="font-medium text-ink-900">Explore</p>
            <Link to="/patterns" className="text-ink-600 hover:text-sol-700">All Patterns</Link>
            <Link to="/favorites" className="text-ink-600 hover:text-sol-700">Favorites</Link>
            <Link to="/about" className="text-ink-600 hover:text-sol-700">About</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-medium text-ink-900">Patterns are free to</p>
            <p className="text-ink-600">Make &amp; sell finished items</p>
            <p className="text-ink-600">Share the pattern link</p>
            <p className="text-ink-600">Adapt for personal use</p>
          </div>
        </div>
      </div>
      <div className="border-t border-ink-900/5 py-4 text-center text-xs text-ink-500">
        © {new Date().getFullYear()} Haus of Sol Artistry. Made with care, one stitch at a time.
      </div>
    </footer>
  )
}
