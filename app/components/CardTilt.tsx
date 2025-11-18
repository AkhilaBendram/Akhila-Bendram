// app/components/CardTilt.tsx
"use client";

import { useRef } from "react";

type Props = React.PropsWithChildren<{ className?: string }>;

export default function CardTilt({ className = "", children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -10; // tilt X
    const ry = (px - 0.5) * 10;  // tilt Y
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    el.style.setProperty("--mx", px.toString());
    el.style.setProperty("--my", py.toString());
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(800px) rotateX(0) rotateY(0) translateZ(0)`;
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`tilt ${className}`}
      style={{ transform: "perspective(800px) rotateX(0) rotateY(0) translateZ(0)" }}
    >
      {children}
    </div>
  );
}
