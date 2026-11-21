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
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled ? "border-line bg-night/80 backdrop-blur-lg" : "border-transparent bg-transparent"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Link href="/" aria-label="Aaron Tagapan, home" className="-ml-2 flex min-h-11 min-w-11 items-center gap-2.5 px-2 font-display text-[1.02rem] font-semibold tracking-tight text-ink">
          <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4 text-spark">
            <path d="M8 1.5 13.6 4.7 8 7.9 2.4 4.7Z" fill="currentColor" />
            <path d="M2.4 4.7 8 7.9v6.6L2.4 11.3Z" fill="currentColor" opacity=".55" />
            <path d="M13.6 4.7 8 7.9v6.6l5.6-3.2Z" fill="currentColor" opacity=".8" />
          </svg>
          <span className="hidden min-[400px]:inline">Aaron Tagapan</span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => {
            const isActive = current === link.id;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? (link.id === "resume" ? "page" : "location") : undefined}
                className={`relative px-2 py-2 text-[0.92rem] transition-colors sm:px-3 ${
                  link.id === "experience" || link.id === "skills" ? "hidden md:inline-flex" : "inline-flex"
                } ${isActive ? "text-ink" : "text-mute hover:text-ink"}`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-2 -bottom-px h-px bg-spark transition-transform duration-300 sm:inset-x-3 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
          <a
            href="mailto:aarontagapan@gmail.com"
            className="ml-2 inline-flex h-9 items-center rounded-md border border-line-2 px-3.5 text-[0.9rem] font-medium text-ink transition-colors hover:border-ink-2"
          >
            Email Aaron
          </a>
        </nav>
      </div>
    </header>
  );
}
