"use client";

import { motion } from "framer-motion";

export default function MotionBG() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 2 }}
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background:
          "radial-gradient(circle at 60% 40%, rgba(255,170,200,0.08), transparent 70%), radial-gradient(circle at 30% 80%, rgba(120,180,255,0.06), transparent 70%)",
        filter: "blur(100px)",
      }}
    />
  );
}
