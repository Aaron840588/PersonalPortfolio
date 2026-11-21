"use client";

import Lenis from "lenis";
import { useEffect } from "react";

const HEADER_OFFSET = -88;

export function SmoothScroll() {
  useEffect(() => {
    // Touch devices already have native momentum scrolling; only smooth wheel input.
    const skip =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches;
    if (skip) return;

    const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 0.95 });
    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    // Same-page anchor links: let Lenis own the scroll so it never fights a native jump.
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
      const link = (event.target as Element | null)?.closest?.("a[href*='#']");
      if (!(link instanceof HTMLAnchorElement)) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      // The skip link keeps native behaviour so keyboard focus moves with it.
      if (!target || target.id === "main-content") return;
      event.preventDefault();
      event.stopPropagation();
      history.pushState(null, "", url.hash);
      // Sync with the real position first: a native scroll in the same frame
      // (keyboard, scrollbar, scrollIntoView) leaves Lenis's own value stale.
      lenis.scrollTo(window.scrollY, { immediate: true, force: true });
      const top = target.getBoundingClientRect().top + window.scrollY + HEADER_OFFSET;
      lenis.scrollTo(Math.max(0, top), { force: true });
    };
    document.addEventListener("click", onClick, true);

    return () => {
      document.removeEventListener("click", onClick, true);
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
