"use client";

import { motion } from "framer-motion";

export default function DiagramMicroMotion() {
  const blocks = [
    { t: "Timing Grammar", d: "120–180ms, natural cadence" },
    { t: "Curves & Response", d: "Spring • Ease • Overshoot" },
    { t: "Action → Feedback", d: "Cause–effect clarity" },
  ];

  return (
    <section className="relative py-36 overflow-hidden">

      {/* FLOATING WAVE FIELD */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-pink-200/10 via-transparent to-transparent"
        animate={{ opacity: [0.1, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* FLOATING DOTS */}
      {[...Array(26)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[3px] h-[3px] bg-white/25 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
          }}
        />
      ))}

      {/* CARDS */}
      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-10">
        {blocks.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: i * 0.2 }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg shadow-[0_0_60px_rgba(255,255,255,0.07)]"
          >
            <h3 className="text-white text-lg font-semibold">{b.t}</h3>
            <p className="text-white/60 text-sm mt-2">{b.d}</p>

            {/* MOTION CURVE WAVE */}
            <motion.div
              className="mt-6 h-[2px] bg-gradient-to-r from-pink-300 via-white to-purple-300"
              animate={{ width: ["20%", "100%", "20%"] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
