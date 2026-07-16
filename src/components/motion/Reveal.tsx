"use client";

import { m, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const [enhanced, setEnhanced] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setEnhanced(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!enhanced || reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <m.div
      className={className}
      initial={{ opacity: 0.45, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.42, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </m.div>
  );
}
