export function FavoriteButton({
  active,
  onToggle,
  className = '',
}: {
  active: boolean
  onToggle: () => void
  className?: string
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        onToggle()
      }}
      aria-pressed={active}
      aria-label={active ? 'Remove from favorites' : 'Save to favorites'}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-clay-600 shadow-sm ring-1 ring-ink-900/10 transition hover:bg-white hover:text-sol-600 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill={active ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21s-7.5-4.6-10-9.1C.6 8.3 2.3 4.8 6 4.2c2.2-.4 4.2.7 6 2.9 1.8-2.2 3.8-3.3 6-2.9 3.7.6 5.4 4.1 4 7.7C19.5 16.4 12 21 12 21z"
        />
      </svg>
    </button>
  )
}
