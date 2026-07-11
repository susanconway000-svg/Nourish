import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-surface-line/70 py-12">
      <div className="mx-auto flex max-w-[1120px] flex-col items-start gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="font-serif text-xl tracking-tight">
            Nourish<span className="text-gold">.</span>
          </Link>
          <p className="mt-1.5 text-sm text-mauve">
            A quiet space for women&rsquo;s spiritual, mental &amp; emotional wellbeing.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="mt-2 flex gap-6 text-sm font-semibold">
            <li>
              <Link href="/offerings" className="hover:text-sage-ink">
                Offerings
              </Link>
            </li>
            <li>
              <Link href="/#circle" className="hover:text-sage-ink">
                Circle
              </Link>
            </li>
            <li>
              <Link href="/#signup" className="hover:text-sage-ink">
                Join free
              </Link>
            </li>
            <li>
              <a href="mailto:[CONTACT EMAIL]" className="hover:text-sage-ink">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mx-auto mt-7 max-w-[1120px] px-6">
        <p className="text-sm text-mauve">&copy; {new Date().getFullYear()} Nourish. Held gently, always.</p>
      </div>
    </footer>
  );
}
