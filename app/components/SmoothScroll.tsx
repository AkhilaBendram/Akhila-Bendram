// app/components/SmoothScroll.tsx
"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      syncTouch: true,
      touchInertiaMultiplier: 1.3,
    });

    let frame: number;

    const onFrame = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(onFrame);
    };

    frame = requestAnimationFrame(onFrame);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
