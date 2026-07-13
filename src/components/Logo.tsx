export function SunMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="var(--color-sol-500)" />
      <circle cx="32" cy="32" r="13" fill="var(--color-sol-50)" />
      <g
        stroke="var(--color-sol-800)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      >
        <path d="M32 4 v9" />
        <path d="M32 51 v9" />
        <path d="M4 32 h9" />
        <path d="M51 32 h9" />
        <path d="M11.5 11.5 l6.5 6.5" />
        <path d="M46 46 l6.5 6.5" />
        <path d="M52.5 11.5 l-6.5 6.5" />
        <path d="M18 46 l-6.5 6.5" />
      </g>
      <path
        d="M24 32c0-4.5 3.5-8 8-8s8 3.5 8 8-3.5 8-8 8"
        fill="none"
        stroke="var(--color-clay-500)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`font-display leading-none ${className}`}>
      <span className="block text-lg font-semibold tracking-tight text-ink-900">
        Haus of Sol
      </span>
      <span className="block text-[0.65rem] uppercase tracking-[0.25em] text-sol-700">
        Artistry
      </span>
    </span>
  )
}
