export function SearchBar({
  value,
  onChange,
  placeholder = 'Search patterns…',
}: {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}) {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 24 24"
        className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ink-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
      </svg>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-ink-900/10 bg-white py-2.5 pl-10 pr-4 text-sm text-ink-900 placeholder:text-ink-400 focus:border-sol-400 focus:outline-none focus:ring-2 focus:ring-sol-200"
      />
    </div>
  )
}
