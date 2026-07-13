import { Link } from 'react-router-dom'
import type { Pattern } from '../data/types'
import { PatternThumb } from './PatternThumb'
import { SkillBadge, CategoryPill } from './Badges'
import { FavoriteButton } from './FavoriteButton'

export function PatternCard({
  pattern,
  isFavorite,
  onToggleFavorite,
}: {
  pattern: Pattern
  isFavorite: boolean
  onToggleFavorite: () => void
}) {
  return (
    <Link
      to={`/patterns/${pattern.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-ink-900/5 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink-900/5"
    >
      <div className="relative aspect-[4/3]">
        <PatternThumb category={pattern.category} accent={pattern.accent} className="h-full w-full" />
        <FavoriteButton
          active={isFavorite}
          onToggle={onToggleFavorite}
          className="absolute right-3 top-3"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex flex-wrap items-center gap-1.5">
          <CategoryPill category={pattern.category} />
          <SkillBadge level={pattern.skillLevel} />
        </div>
        <h3 className="font-display text-lg font-semibold text-ink-900 transition group-hover:text-sol-700">
          {pattern.title}
        </h3>
        <p className="line-clamp-2 text-sm text-ink-600">{pattern.tagline}</p>
        <div className="mt-auto flex items-center gap-3 pt-2 text-xs text-ink-500">
          <span>{pattern.hookSize}</span>
          <span aria-hidden="true">·</span>
          <span>{pattern.estimatedTime}</span>
        </div>
      </div>
    </Link>
  )
}
