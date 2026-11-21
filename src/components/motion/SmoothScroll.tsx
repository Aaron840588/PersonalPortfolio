"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    // Touch devices already have native momentum scrolling; only smooth wheel input.
    const skip =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches;
    if (skip) return;
    const lenis = new Lenis({ anchors: { offset: -88 }, lerp: 0.11, wheelMultiplier: 0.95 });
    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
