import Link from "next/link";

export function HeaderNavigation() {
  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <Link className="wordmark" href="/">
          Aaron Tagapan<span className="sr-only">, home</span>
        </Link>
        <nav className="header-nav" aria-label="Main navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/resume">Résumé</Link>
        </nav>
        <a className="header-contact" href="mailto:aarontagapan@gmail.com">
          Email Aaron <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
