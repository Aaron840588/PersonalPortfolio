"use client";

import { m, useScroll } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <m.div
      aria-hidden="true"
      className="scroll-progress"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
