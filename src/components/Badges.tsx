import type { Category, SkillLevel } from '../data/types'
import { CATEGORY_LABELS, SKILL_LABELS } from '../data/types'

const SKILL_STYLES: Record<SkillLevel, string> = {
  beginner: 'bg-sage-100 text-sage-800',
  easy: 'bg-sage-100 text-sage-700',
  intermediate: 'bg-sol-100 text-sol-800',
  advanced: 'bg-clay-200 text-clay-900',
}

export function SkillBadge({ level }: { level: SkillLevel }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${SKILL_STYLES[level]}`}
    >
      {SKILL_LABELS[level]}
    </span>
  )
}

export function CategoryPill({ category }: { category: Category }) {
  return (
    <span className="inline-flex items-center rounded-full bg-ink-900/5 px-2.5 py-0.5 text-xs font-medium text-ink-700">
      {CATEGORY_LABELS[category]}
    </span>
  )
}
