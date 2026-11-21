import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="shell flex min-h-[90svh] flex-col justify-center pt-24">
      <p className="font-display text-[clamp(5rem,18vw,12rem)] font-semibold leading-none text-line-2">404</p>
      <h1 className="mt-4 max-w-2xl text-[clamp(2rem,5vw,3.5rem)] font-semibold">
        That page is not in this portfolio.
      </h1>
      <p className="mt-4 max-w-xl text-ink-2">
        The address may be outdated, or the page may have moved while the portfolio was revised.
      </p>
      <div className="mt-8">
        <Link className="btn btn-primary" href="/">
          Return to the portfolio
        </Link>
      </div>
    </main>
  );
}
