"use client";

/**
 * Inspired by Charlie's Angels vibe: wide, angular cuts, luxe chrome.
 * Uses the next/font family we apply in layout.tsx plus an SVG mask for precise cuts.
 */
export default function LogoWordmark() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-14 flex flex-col items-center select-none">
      <div className="relative mb-3 h-24 w-[min(1120px,92vw)]">
        <svg viewBox="0 0 1120 96" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="frame" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#f5c3b4" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#e2a9a1" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#8be9ff" stopOpacity="0.35" />
            </linearGradient>
          </defs>
          <path d="M20 80 L180 16 H280 L120 80 Z" fill="none" stroke="url(#frame)" strokeWidth="2" opacity="0.7" />
          <path d="M1100 80 L940 16 H840 L1000 80 Z" fill="none" stroke="url(#frame)" strokeWidth="2" opacity="0.7" />
        </svg>
      </div>

      <div className="h1-chrome chrome-sheen relative title-wide">
        <span className="chrome-wordmark">AKHILA&nbsp;BENDRAM</span>
        <div className="neon neon-pulse mx-auto mt-4 h-[2px] w-[min(560px,70vw)] rounded-full opacity-80" />
        <div className="subtitle-wide mt-3 text-[10px] tracking-[0.32em] text-[#e9fbff]/85">
          DATA / DESIGN / AI
        </div>
      </div>
    </div>
  );
}
