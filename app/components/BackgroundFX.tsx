// app/components/BackgroundFX.tsx
"use client";

import { motion } from "framer-motion";

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-b from-[#050508] via-[#050508] to-[#020206]">
      {/* Rose-gold glow, left */}
      <motion.div
        className="absolute -top-32 left-[-6rem] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,#f8c1a4_0,transparent_60%)] opacity-40 blur-3xl"
        animate={{ x: [0, 40, 10, 0], y: [0, 10, -10, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      />

      {/* Cyan glow, right */}
      <motion.div
        className="absolute -bottom-40 right-[-4rem] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,#7be5ff_0,transparent_60%)] opacity-40 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />

      {/* Soft ellipse under content */}
      <div className="absolute left-1/2 top-1/2 h-96 w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-[999px] bg-[radial-gradient(ellipse_at_center,#ffffff0d_0,transparent_65%)] blur-xl" />
    </div>
  );
}
