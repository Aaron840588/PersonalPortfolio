import Link from "next/link";

export function HeaderNavigation() {
  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <Link className="wordmark" href="/">
          Aaron Tagapan<span className="sr-only">, home</span>
        </Link>
        <a className="header-contact" href="mailto:aarontagapan@gmail.com">
          Email Aaron <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
