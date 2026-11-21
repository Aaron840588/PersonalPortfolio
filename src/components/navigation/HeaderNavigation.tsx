"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#work", label: "Work", id: "work" },
  { href: "/#experience", label: "Experience", id: "experience" },
  { href: "/#skills", label: "Skills", id: "skills" },
  { href: "/resume", label: "Résumé", id: "resume" },
];

export function HeaderNavigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (pathname !== "/") {
      return () => window.removeEventListener("scroll", onScroll);
    }

    const sections = ["work", "experience", "skills"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [pathname]);

  const current = pathname === "/resume" ? "resume" : pathname === "/" ? active : null;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex h-14 max-w-[78rem] items-center justify-between gap-3 rounded-full border px-2 pl-5 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? "border-line bg-night/70 backdrop-blur-xl backdrop-saturate-150"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-[1.05rem] font-semibold tracking-tight text-ink"
        >
          <span
            aria-hidden="true"
            className="grid size-7 place-items-center rounded-lg border border-line-2 bg-panel text-[0.7rem] font-bold text-signal"
          >
            AT
          </span>
          <span className="hidden min-[400px]:inline">Aaron Tagapan</span>
          <span className="sr-only">, home</span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-0.5 sm:gap-1">
          {links.map((link) => {
            const isActive = current === link.id;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? (link.id === "resume" ? "page" : "location") : undefined}
                className={`rounded-full px-2.5 py-2 text-[0.9rem] font-medium transition-colors sm:px-3.5 ${
                  link.id === "experience" || link.id === "skills" ? "hidden md:inline-flex" : "inline-flex"
                } ${isActive ? "bg-panel text-ink" : "text-mute hover:text-ink"}`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="mailto:aarontagapan@gmail.com"
            className="ml-1 inline-flex h-10 items-center rounded-full bg-ink px-4 text-[0.9rem] font-semibold text-night transition-colors hover:bg-white"
          >
            Email Aaron
          </a>
        </nav>
      </div>
    </header>
  );
}
