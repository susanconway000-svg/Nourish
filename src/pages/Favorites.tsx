import { Link } from 'react-router-dom'
import { patterns } from '../data/patterns'
import { PatternCard } from '../components/PatternCard'
import { useFavorites } from '../hooks/useFavorites'

export function Favorites() {
  const { favorites, isFavorite, toggleFavorite } = useFavorites()
  const saved = patterns.filter((p) => favorites.includes(p.id))

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-ink-900">Your Favorites</h1>
      <p className="mt-1 text-ink-600">
        Saved right in your browser — no account needed.
      </p>

      {saved.length === 0 ? (
        <div className="mt-8 rounded-2xl bg-white p-10 text-center ring-1 ring-ink-900/5">
          <p className="text-ink-700">You haven&apos;t saved any patterns yet.</p>
          <Link
            to="/patterns"
            className="mt-4 inline-flex items-center rounded-full bg-sol-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sol-600"
          >
            Browse patterns
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map((pattern) => (
            <PatternCard
              key={pattern.id}
              pattern={pattern}
              isFavorite={isFavorite(pattern.id)}
              onToggleFavorite={() => toggleFavorite(pattern.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
