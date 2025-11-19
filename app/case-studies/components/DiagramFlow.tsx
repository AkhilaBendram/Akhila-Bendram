"use client";

import { motion } from "framer-motion";

export default function DiagramDataQuality() {
  const stages = [
    { t: "Raw Inputs", d: "CSV • Logs • API Streams" },
    { t: "Profiling Layer", d: "Outliers • Missingness • Drift" },
    { t: "Scoring Engine", d: "Reliability • Quality Score • Flags" },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* LUMINANCE WAVES */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-cyan-200/10 via-transparent to-transparent"
        animate={{ opacity: [0.12, 0.28, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* FLOW ARROWS */}
      <svg
        className="absolute left-1/2 -translate-x-1/2 top-[52%] w-[70%]"
        viewBox="0 0 800 200"
      >
        <motion.path
          d="M50 100 Q 200 20 400 100 Q 600 180 750 100"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          animate={{
            pathLength: [0.2, 1, 0.2],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </svg>

      {/* STAGE CARDS */}
      <div className="relative max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-10">
        {stages.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg shadow-[0_0_60px_rgba(255,255,255,0.06)]"
          >
            <h3 className="text-white text-lg font-semibold">{s.t}</h3>
            <p className="text-white/60 text-sm mt-2">{s.d}</p>

            {/* NODE PULSE */}
            <motion.div
              className="w-3 h-3 rounded-full bg-cyan-300 absolute -top-2 -right-2"
              animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
