import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <h1 className="font-display text-6xl font-semibold text-sol-500">404</h1>
      <p className="mt-4 text-lg text-ink-700">
        Looks like this stitch got dropped. The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center rounded-full bg-sol-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sol-600"
      >
        Back to home
      </Link>
    </div>
  )
}
