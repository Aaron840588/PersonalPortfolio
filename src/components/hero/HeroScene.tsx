"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SystemScene = dynamic(() => import("./SystemScene"), { ssr: false });

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

export function HeroScene() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Defer the WebGL bundle until the browser is idle so the headline paints first.
    const start = () => setReady(supportsWebGL());
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 900 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(start, 200);
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 transition-opacity duration-[1600ms] ${ready ? "opacity-100" : "opacity-0"}`}
    >
      {ready ? <SystemScene /> : null}
    </div>
  );
}
