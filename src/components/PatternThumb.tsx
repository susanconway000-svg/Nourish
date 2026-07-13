import type { Category } from '../data/types'

const ACCENT_COLORS = {
  sol: { bg: '#faecd4', ring: '#e59f42', mark: '#9d4f1a' },
  clay: { bg: '#f3e0d2', ring: '#c17a4e', mark: '#723d25' },
  sage: { bg: '#e4e9d4', ring: '#93a862', mark: '#4a5730' },
} as const

function CategoryIcon({ category, color }: { category: Category; color: string }) {
  switch (category) {
    case 'amigurumi':
      return (
        <g stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="32" cy="24" r="10" />
          <circle cx="32" cy="44" r="13" />
          <circle cx="27" cy="21" r="1.4" fill={color} stroke="none" />
          <circle cx="37" cy="21" r="1.4" fill={color} stroke="none" />
          <path d="M28 26c1.5 1.3 6.5 1.3 8 0" />
        </g>
      )
    case 'garments':
      return (
        <g stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 16l-10 8 5 6 5-3v25h16V27l5 3 5-6-10-8c-2 2.5-14 2.5-16 0z" />
        </g>
      )
    case 'home-decor':
      return (
        <g stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="16" y="16" width="32" height="32" rx="3" />
          <path d="M16 32h32M32 16v32M16 24h12M28 40h12" opacity="0.6" />
        </g>
      )
    case 'accessories':
      return (
        <g stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="26" r="9" />
          <circle cx="38" cy="30" r="7" />
          <path d="M24 35c0 8 3 13 3 13" />
        </g>
      )
    case 'baby':
      return (
        <g stroke={color} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 30c0-7 5-12 12-12s12 5 12 12-4 16-12 16-12-9-12-16z" />
          <circle cx="27" cy="28" r="1.3" fill={color} stroke="none" />
          <circle cx="37" cy="28" r="1.3" fill={color} stroke="none" />
          <path d="M27 34c2 2 8 2 10 0" />
        </g>
      )
    default:
      return null
  }
}

export function PatternThumb({
  category,
  accent,
  className = '',
}: {
  category: Category
  accent: 'sol' | 'clay' | 'sage'
  className?: string
}) {
  const colors = ACCENT_COLORS[accent]
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor: colors.bg }}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 64 64"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id={`stitch-${accent}`} width="10" height="10" patternUnits="userSpaceOnUse">
            <path
              d="M0 5 Q2.5 0 5 5 Q7.5 10 10 5"
              fill="none"
              stroke={colors.ring}
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="64" height="64" fill={`url(#stitch-${accent})`} />
      </svg>
      <svg viewBox="0 0 64 64" className="relative h-full w-full">
        <circle cx="32" cy="32" r="22" fill="none" stroke={colors.ring} strokeWidth="1.5" opacity="0.5" />
        <CategoryIcon category={category} color={colors.mark} />
      </svg>
    </div>
  )
}
