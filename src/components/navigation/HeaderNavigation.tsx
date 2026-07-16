"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Work", id: "work" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
] as const;

export function HeaderNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const home = pathname === "/";

  useEffect(() => {
    if (!open) return;

    const main = document.querySelector("main");
    main?.setAttribute("inert", "");
    main?.setAttribute("aria-hidden", "true");
    document.body.classList.add("menu-open");
    firstMobileLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab") return;
      const links = Array.from(
        mobileNavRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [],
      );
      const focusables = [menuButtonRef.current, ...links].filter(
        (item): item is HTMLButtonElement | HTMLAnchorElement => item !== null,
      );
      const activeIndex = focusables.indexOf(
        document.activeElement as HTMLButtonElement | HTMLAnchorElement,
      );

      if (event.shiftKey && activeIndex <= 0) {
        event.preventDefault();
        focusables.at(-1)?.focus();
      } else if (!event.shiftKey && activeIndex === focusables.length - 1) {
        event.preventDefault();
        focusables[0]?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      main?.removeAttribute("inert");
      main?.removeAttribute("aria-hidden");
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const hrefFor = (id: string) => (home ? `#${id}` : `/#${id}`);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner shell">
          <Link className="wordmark" href="/">
            Aaron Tagapan<span className="sr-only">, home</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link key={item.id} href={hrefFor(item.id)}>
                {item.label}
              </Link>
            ))}
            <Link href="/resume">Résumé</Link>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <div
        id="mobile-navigation"
        className={`mobile-nav${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav ref={mobileNavRef} aria-label="Mobile navigation" className="shell">
          {navItems.map((item, index) => (
            <Link
              key={item.id}
              ref={index === 0 ? firstMobileLinkRef : undefined}
              href={hrefFor(item.id)}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/resume" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
            Résumé
          </Link>
        </nav>
      </div>
    </>
  );
}
