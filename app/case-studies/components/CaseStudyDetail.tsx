"use client";

import type { CaseStudy } from "@data/CaseStudies";
import Link from "next/link";
import { motion } from "framer-motion";

type CaseStudyDetailProps = {
  study: CaseStudy;
};

export default function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  return (
    <main className="min-h-screen bg-[#050505] text-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="pointer-events-none fixed inset-0 bg-gradient-radial from-rose-500/10 via-cyan-500/10 to-transparent blur-3xl"
        style={{ zIndex: 0 }}
      />

      <section className="relative max-w-5xl mx-auto px-6 pt-32 pb-20 z-10">
        <Link
          href="/case-studies"
          className="text-sm text-white/40 hover:text-white/80 underline underline-offset-4"
        >
          ← Back to Case Studies
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-light tracking-wide mt-6 leading-tight"
        >
          {study.title}
        </motion.h1>

        <p className="text-white/60 mt-4 text-lg max-w-3xl">{study.summary}</p>

        <div className="flex gap-3 mt-6 flex-wrap">
          {study.stack.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="relative max-w-5xl mx-auto px-6 pb-32 z-10">
        <h2 className="text-xl tracking-[0.25em] uppercase text-white/40 mb-10">
          Visual Overview
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-10 shadow-[0_0_40px_rgba(255,255,255,0.03)]"
        >
          {study.slug === "data-quality-engine" && (
            <img
              src="/diagrams/data-quality-flow.png"
              alt="Data Quality Diagram"
              className="w-full rounded-lg opacity-90"
            />
          )}

          {study.slug === "ai-rationale-maps" && (
            <img
              src="/diagrams/ai-rationale-map.png"
              alt="AI Rationale Map"
              className="w-full rounded-lg opacity-90"
            />
          )}

          {study.slug === "micro-motion-system" && (
            <img
              src="/diagrams/micro-motion-system.png"
              alt="Micro Motion Diagram"
              className="w-full rounded-lg opacity-90"
            />
          )}
        </motion.div>
      </section>

      <section className="relative max-w-5xl mx-auto px-6 pb-40 z-10">
        <h2 className="text-xl tracking-[0.25em] uppercase text-white/40 mb-10">
          Key Insights
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <InsightCard
            title="Problem"
            text="What the system needed to solve, reduce, or clarify — based on real data, constraints, and UX needs."
          />
          <InsightCard
            title="Approach"
            text="A structured, multi-layer approach blending analytics, AI reasoning, and product design."
          />
          <InsightCard
            title="Outcome"
            text="A smarter, calmer system that produces clarity instead of noise — measurable improvements included."
          />
          <InsightCard
            title="Impact"
            text="Design reasoning, reduced cognitive friction, higher trust, and faster interpretation of data or model decisions."
          />
        </div>
      </section>
    </main>
  );
}

function InsightCard({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 bg-white/[0.03] border border-white/10 rounded-xl backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.04)]"
    >
      <h3 className="text-white/90 font-medium text-lg mb-2">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{text}</p>
    </motion.div>
  );
}
