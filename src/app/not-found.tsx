import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found shell">
      <p className="not-found__code">404</p>
      <h1>That page is not in this portfolio.</h1>
      <p>
        The address may be outdated, or the page may have moved while the portfolio
        was being revised.
      </p>
      <Link className="action action--primary" href="/">
        Return to the portfolio
      </Link>
    </main>
  );
}
