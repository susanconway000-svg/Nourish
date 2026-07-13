import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { patterns } from '../data/patterns'
import { PatternCard } from '../components/PatternCard'
import { SearchBar } from '../components/SearchBar'
import { useFavorites } from '../hooks/useFavorites'
import {
  CATEGORY_LABELS,
  SKILL_LABELS,
  type Category,
  type SkillLevel,
} from '../data/types'

const CATEGORY_OPTIONS = Object.keys(CATEGORY_LABELS) as Category[]
const SKILL_OPTIONS = Object.keys(SKILL_LABELS) as SkillLevel[]

export function Patterns() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const { isFavorite, toggleFavorite } = useFavorites()

  const activeCategory = searchParams.get('category') as Category | null
  const activeSkill = searchParams.get('skill') as SkillLevel | null

  const setCategory = (cat: Category | null) => {
    const next = new URLSearchParams(searchParams)
    if (cat) next.set('category', cat)
    else next.delete('category')
    setSearchParams(next)
  }

  const setSkill = (skill: SkillLevel | null) => {
    const next = new URLSearchParams(searchParams)
    if (skill) next.set('skill', skill)
    else next.delete('skill')
    setSearchParams(next)
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return patterns.filter((p) => {
      if (activeCategory && p.category !== activeCategory) return false
      if (activeSkill && p.skillLevel !== activeSkill) return false
      if (!q) return true
      return (
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      )
    })
  }, [query, activeCategory, activeSkill])

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-semibold text-ink-900">All Patterns</h1>
        <p className="mt-1 text-ink-600">{patterns.length} free patterns and counting.</p>
      </div>

      <div className="mb-6 max-w-md">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory(null)}
          className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
            !activeCategory ? 'bg-ink-900 text-white' : 'bg-white text-ink-700 ring-1 ring-ink-900/10 hover:bg-sol-100'
          }`}
        >
          All categories
        </button>
        {CATEGORY_OPTIONS.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(activeCategory === cat ? null : cat)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
              activeCategory === cat ? 'bg-ink-900 text-white' : 'bg-white text-ink-700 ring-1 ring-ink-900/10 hover:bg-sol-100'
            }`}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <span className="py-1.5 text-sm text-ink-500">Skill:</span>
        {SKILL_OPTIONS.map((skill) => (
          <button
            key={skill}
            type="button"
            onClick={() => setSkill(activeSkill === skill ? null : skill)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              activeSkill === skill
                ? 'bg-sol-500 text-white'
                : 'bg-sol-100 text-sol-800 hover:bg-sol-200'
            }`}
          >
            {SKILL_LABELS[skill]}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl bg-white p-10 text-center ring-1 ring-ink-900/5">
          <p className="text-ink-700">No patterns match your search yet.</p>
          <p className="mt-1 text-sm text-ink-500">Try a different keyword or clear your filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((pattern) => (
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
