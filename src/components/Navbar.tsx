import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SunMark, Wordmark } from './Logo'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/patterns', label: 'Patterns' },
  { to: '/favorites', label: 'Favorites' },
  { to: '/about', label: 'About' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3 py-1.5 text-sm font-medium transition ${
      isActive ? 'bg-sol-500 text-white' : 'text-ink-700 hover:bg-sol-100'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-ink-900/5 bg-sol-50/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <SunMark className="h-9 w-9 shrink-0" />
          <Wordmark />
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-700 hover:bg-sol-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-900/5 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-1 pt-2">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
