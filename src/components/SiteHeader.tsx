import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-surface-line/70 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1120px] items-center justify-between px-6">
        <Link href="/" className="font-serif text-xl tracking-tight">
          Nourish<span className="text-gold">.</span>
        </Link>
        <nav aria-label="Primary" className="hidden gap-8 sm:flex">
          <Link
            href="/offerings"
            className="border-b border-transparent pb-1 text-sm font-semibold hover:border-gold"
          >
            Offerings
          </Link>
          <Link
            href="/#circle"
            className="border-b border-transparent pb-1 text-sm font-semibold hover:border-gold"
          >
            Circle
          </Link>
          <Link
            href="/#signup"
            className="border-b border-transparent pb-1 text-sm font-semibold hover:border-gold"
          >
            Join free
          </Link>
        </nav>
        <Link href="/offerings" className="btn btn-primary btn-small hidden sm:inline-flex">
          Explore offerings
        </Link>
      </div>
    </header>
  );
}
