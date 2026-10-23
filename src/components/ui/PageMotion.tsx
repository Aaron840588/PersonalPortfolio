"use client";

import { useEffect } from "react";

/** Progressive enhancement: content stays visible without JavaScript. */
export function PageMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;

    const animations = new Set<Animation>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        const animation = entry.target.animate(
          [{ transform: "translateY(24px)" }, { transform: "translateY(0)" }],
          { duration: 650, easing: "cubic-bezier(0.16, 1, 0.3, 1)" },
        );
        animations.add(animation);
        animation.finished.then(() => animations.delete(animation)).catch(() => {});
      }
    }, { threshold: 0.08 });

    // Don't animate content already on screen or restored by browser navigation.
    document.querySelectorAll(".project-feature, .experience-record, .capability-row, .letter-close__body")
      .forEach((element) => {
        if (element.getBoundingClientRect().top >= window.innerHeight) observer.observe(element);
      });

    const stop = () => {
      if (!preference.matches) return;
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
    };
    preference.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", stop);
    };
  }, []);

  return null;
}
