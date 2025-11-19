export type Project = {
  slug: string;
  title: string;
  summary: string;
  meta: string;
  tags: string[];
  link: string;
};

export const projects: Project[] = [
  {
    slug: "resume-analyzer",
    title: "Skillfox",
    summary: "ATS score plus recruiter lens with donuts, summaries, and keyword heatmaps in a rose-gold chrome UI.",
    meta: "Case Study · Product AI",
    tags: ["Next.js", "FastAPI", "Framer Motion", "Tailwind"],
    link: "https://skillfox.netlify.app/",
  },
  {
    slug: "perspectiv",
    title: "Perspectiv",
    summary: "Auto-charts, pattern detection, and narrative insights for CSVs. Calm exploration with guided motion.",
    meta: "Concept · Data Design",
    tags: ["Next.js", "ECharts", "AI Narrator"],
    link: "https://perspectivv.netlify.app/",
  },
  
];
