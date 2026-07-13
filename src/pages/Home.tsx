import { Link } from 'react-router-dom'
import { patterns } from '../data/patterns'
import { PatternCard } from '../components/PatternCard'
import { useFavorites } from '../hooks/useFavorites'
import { CATEGORY_LABELS, type Category } from '../data/types'
import { PatternThumb } from '../components/PatternThumb'

const CATEGORY_ORDER: Category[] = ['amigurumi', 'garments', 'home-decor', 'accessories', 'baby']

export function Home() {
  const { isFavorite, toggleFavorite } = useFavorites()
  const featured = patterns.filter((p) => p.featured)

  return (
    <div>
      <section className="texture-paper relative overflow-hidden border-b border-ink-900/5">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center rounded-full bg-sol-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sol-800">
              100% free, forever
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
              Crochet patterns, warmed by the sun.
            </h1>
            <p className="mt-4 text-lg text-ink-600">
              Haus of Sol Artistry shares original, tested crochet patterns for makers of every
              skill level — from your first granny square to your first wrap cardigan. No
              paywalls, no email walls, just patterns.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/patterns"
                className="inline-flex items-center rounded-full bg-sol-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sol-600"
              >
                Browse all patterns
              </Link>
              <Link
                to="/patterns?skill=beginner"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-800 ring-1 ring-ink-900/10 transition hover:bg-sol-100"
              >
                Start with beginner picks
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold text-ink-900">Shop the categories</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {CATEGORY_ORDER.map((cat) => (
            <Link
              key={cat}
              to={`/patterns?category=${cat}`}
              className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-4 text-center ring-1 ring-ink-900/5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <PatternThumb category={cat} accent="sol" className="h-16 w-16 rounded-xl" />
              <span className="text-sm font-medium text-ink-800 group-hover:text-sol-700">
                {CATEGORY_LABELS[cat]}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold text-ink-900">Featured patterns</h2>
          <Link to="/patterns" className="text-sm font-medium text-sol-700 hover:text-sol-800">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((pattern) => (
            <PatternCard
              key={pattern.id}
              pattern={pattern}
              isFavorite={isFavorite(pattern.id)}
              onToggleFavorite={() => toggleFavorite(pattern.id)}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-ink-900/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h2 className="font-display text-2xl font-semibold text-ink-900">
            Every pattern, completely free.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-ink-600">
            Haus of Sol Artistry believes good patterns should be accessible to everyone. Make
            them for yourself, make them as gifts, or make them to sell — just don&apos;t resell
            the pattern itself.
          </p>
        </div>
      </section>
    </div>
  )
}
