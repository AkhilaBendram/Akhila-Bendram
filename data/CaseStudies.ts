export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  eyebrow: string;
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "data-quality-engine",
    title: "Data Quality Scoring Engine",
    summary:
      "A multi-layer scoring pipeline that profiles datasets, flags anomalies, and creates reliability signals for downstream AI.",
    eyebrow: "Data Infrastructure",
    stack: ["Data Profiling", "ETL", "Anomaly Detection"],
  },
  {
    slug: "ai-rationale-maps",
    title: "AI Rationale Maps",
    summary:
      "A visual reasoning system that maps model decision steps, uncertainty zones, and feature importance with pulsing AI layers.",
    eyebrow: "Explainable AI",
    stack: ["Explainability", "Model Reasoning", "XAI"],
  },
  {
    slug: "micro-motion-system",
    title: "Micro-Motion Behavior System",
    summary:
      "A motion grammar for digital products - timing curves, response dynamics, and micro-interactions mapped as a motion language.",
    eyebrow: "Experience Systems",
    stack: ["Motion Design", "UX Systems", "Easing"],
  },
];
