"use client";

import { motion } from "framer-motion";

export default function DiagramRationale() {
  return (
    <section className="relative py-40 overflow-hidden flex flex-col items-center">

      {/* CONCENTRIC AI RINGS */}
      {[420, 300, 180].map((size, i) => (
        <motion.div
          key={i}
          className="absolute border border-white/10 rounded-full"
          style={{ width: size, height: size }}
          animate={{
            opacity: [0.12, 0.3, 0.12],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}

      {/* FLOATING AI NODES */}
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-300 rounded-full"
          style={{
            top: `${40 + Math.random() * 20}%`,
            left: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [-8, 8, -8],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
          }}
        />
      ))}

      {/* REASONING CARDS */}
      <motion.div className="relative z-10 grid md:grid-cols-3 gap-10 mt-64 px-10">
        {[
          { t: "Signal Importance", d: "Weighted input drivers" },
          { t: "Reasoning Path", d: "Sequential inference map" },
          { t: "Uncertainty Zones", d: "Confidence cliffs & risks" },
        ].map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.2 }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg shadow-[0_0_60px_rgba(255,255,255,0.06)]"
          >
            <h3 className="text-white text-lg font-semibold">{b.t}</h3>
            <p className="text-white/60 text-sm mt-2">{b.d}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
