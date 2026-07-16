"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig
        reducedMotion="user"
        transition={{ duration: 0.42, ease: [0.2, 0.8, 0.2, 1] }}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
