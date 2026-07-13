import { Link, Navigate, useParams } from 'react-router-dom'
import { getPatternBySlug, patterns } from '../data/patterns'
import { PatternThumb } from '../components/PatternThumb'
import { SkillBadge, CategoryPill } from '../components/Badges'
import { FavoriteButton } from '../components/FavoriteButton'
import { PatternCard } from '../components/PatternCard'
import { useFavorites } from '../hooks/useFavorites'
import { CATEGORY_LABELS } from '../data/types'

export function PatternDetail() {
  const { slug } = useParams<{ slug: string }>()
  const { isFavorite, toggleFavorite } = useFavorites()
  const pattern = slug ? getPatternBySlug(slug) : undefined

  if (!pattern) {
    return <Navigate to="/patterns" replace />
  }

  const related = patterns
    .filter((p) => p.id !== pattern.id && p.category === pattern.category)
    .slice(0, 3)

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <nav className="mb-6 text-sm text-ink-500 no-print">
        <Link to="/patterns" className="hover:text-sol-700">
          Patterns
        </Link>
        <span className="mx-2">/</span>
        <Link to={`/patterns?category=${pattern.category}`} className="hover:text-sol-700">
          {CATEGORY_LABELS[pattern.category]}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-ink-700">{pattern.title}</span>
      </nav>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,320px)_1fr]">
        <div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <PatternThumb category={pattern.category} accent={pattern.accent} className="h-full w-full" />
            <FavoriteButton
              active={isFavorite(pattern.id)}
              onToggle={() => toggleFavorite(pattern.id)}
              className="absolute right-3 top-3 no-print"
            />
          </div>

          <div className="mt-5 space-y-3 rounded-2xl bg-white p-5 text-sm ring-1 ring-ink-900/5">
            <h2 className="font-display text-base font-semibold text-ink-900">At a Glance</h2>
            <dl className="space-y-2">
              <div className="flex justify-between gap-4">
                <dt className="text-ink-500">Hook</dt>
                <dd className="text-right font-medium text-ink-800">{pattern.hookSize}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-500">Yarn Weight</dt>
                <dd className="text-right font-medium text-ink-800">{pattern.yarnWeight}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-500">Time</dt>
                <dd className="text-right font-medium text-ink-800">{pattern.estimatedTime}</dd>
              </div>
              {pattern.finishedSize && (
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-500">Finished Size</dt>
                  <dd className="text-right font-medium text-ink-800">{pattern.finishedSize}</dd>
                </div>
              )}
              {pattern.gauge && (
                <div className="flex justify-between gap-4">
                  <dt className="shrink-0 text-ink-500">Gauge</dt>
                  <dd className="text-right font-medium text-ink-800">{pattern.gauge}</dd>
                </div>
              )}
            </dl>
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="no-print mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink-800"
          >
            Print pattern
          </button>
        </div>

        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <CategoryPill category={pattern.category} />
            <SkillBadge level={pattern.skillLevel} />
          </div>
          <h1 className="font-display text-3xl font-semibold text-ink-900 sm:text-4xl">
            {pattern.title}
          </h1>
          <p className="mt-2 text-lg text-ink-600">{pattern.tagline}</p>
          <p className="mt-4 text-ink-700">{pattern.description}</p>

          <section className="mt-8">
            <h2 className="font-display text-xl font-semibold text-ink-900">Materials</h2>
            <ul className="mt-3 space-y-1.5">
              {pattern.materials.map((m) => (
                <li key={m} className="flex gap-2 text-ink-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sol-500" />
                  {m}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="font-display text-xl font-semibold text-ink-900">Abbreviations</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {pattern.abbreviations.map((a) => (
                <span
                  key={a.abbr}
                  className="rounded-full bg-sol-100 px-3 py-1 text-xs text-sol-900"
                >
                  <strong>{a.abbr}</strong> — {a.meaning}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="font-display text-xl font-semibold text-ink-900">Instructions</h2>
            <div className="mt-4 space-y-6">
              {pattern.sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="font-display text-base font-semibold text-clay-700">
                    {section.heading}
                  </h3>
                  <ol className="mt-2 space-y-2 border-l-2 border-sol-200 pl-4">
                    {section.steps.map((step, i) => (
                      <li key={i} className="text-ink-700">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>

          {pattern.notes && pattern.notes.length > 0 && (
            <section className="mt-8 rounded-2xl bg-sage-50 p-5 ring-1 ring-sage-200">
              <h2 className="font-display text-base font-semibold text-sage-900">Notes &amp; Tips</h2>
              <ul className="mt-2 space-y-1.5">
                {pattern.notes.map((n) => (
                  <li key={n} className="text-sm text-sage-800">
                    {n}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <div className="mt-8 flex flex-wrap gap-2 no-print">
            {pattern.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-ink-900/5 px-3 py-1 text-xs text-ink-600">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16 no-print">
          <h2 className="mb-5 font-display text-2xl font-semibold text-ink-900">
            More {CATEGORY_LABELS[pattern.category]}
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <PatternCard
                key={p.id}
                pattern={p}
                isFavorite={isFavorite(p.id)}
                onToggleFavorite={() => toggleFavorite(p.id)}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
