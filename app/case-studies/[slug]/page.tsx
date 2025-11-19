// app/case-studies/[slug]/page.tsx
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { caseStudies } from "@data/CaseStudies";

import ParallaxHero from "../components/ParrallaxHero";
import DiagramFlow from "../components/DiagramFlow";
import DiagramRationale from "../components/DiagramRationale";
import DiagramMicroMotion from "../components/DiagramMicroMotion";

type PageParams = Promise<{ slug: string }>;

const diagramMap: Record<string, ReactNode> = {
  "data-quality-engine": <DiagramFlow />,
  "ai-rationale-maps": <DiagramRationale />,
  "micro-motion-system": <DiagramMicroMotion />,
};

export default async function CaseStudyPage({
  params,
}: {
  params: PageParams;
}) {
  const { slug } = await params;
  const study = caseStudies.find((study) => study.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="relative overflow-hidden">
      <ParallaxHero
        title={study.title}
        subtitle={study.summary}
        tags={study.stack}
      />

      <section className="max-w-5xl mx-auto px-6 py-24 text-white">
        <h2 className="text-lg tracking-[0.25em] uppercase text-white/40 mb-8">
          Visual Overview
        </h2>

        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_80px_rgba(255,255,255,0.05)] p-10 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.04),rgba(0,0,0,0))]" />
          {diagramMap[slug] ?? null}
        </div>
      </section>
    </div>
  );
}
