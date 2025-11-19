"use client";
import { motion } from "framer-motion";

export default function DiagramAI() {
  return (
    <div className="relative w-full max-w-xl mx-auto my-12 opacity-90">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
      >
        <h4 className="text-lg font-medium mb-4 text-white/90">
          Rationale Layers
        </h4>

        <svg width="100%" height="160">
          <motion.rect
            x="40"
            y="40"
            width="260"
            height="30"
            rx="8"
            fill="#C2FFF540"
          />
          <text x="50" y="60" fill="white" fontSize="10">
            TOKEN IMPORTANCE
          </text>

          <motion.rect
            x="40"
            y="75"
            width="260"
            height="30"
            rx="8"
            fill="#E4C3FF40"
          />
          <text x="50" y="95" fill="white" fontSize="10">
            REASONING TRACE
          </text>

          <motion.rect
            x="40"
            y="110"
            width="260"
            height="30"
            rx="8"
            fill="#FFC7DA40"
          />
          <text x="50" y="130" fill="white" fontSize="10">
            DECISION SURFACE
          </text>
        </svg>
      </motion.div>
    </div>
  );
}
