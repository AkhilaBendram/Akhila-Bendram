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
    title: "Resume Analyzer",
    summary: "ATS score plus recruiter lens with donuts, summaries, and keyword heatmaps in a rose-gold chrome UI.",
    meta: "Case Study · Product AI",
    tags: ["Next.js", "FastAPI", "Framer Motion", "Tailwind"],
    link: "/work/resume-analyzer",
  },
  {
    slug: "perspectiv",
    title: "Perspectiv",
    summary: "Auto-charts, pattern detection, and narrative insights for CSVs. Calm exploration with guided motion.",
    meta: "Concept · Data Design",
    tags: ["Next.js", "ECharts", "AI Narrator"],
    link: "/work/perspectiv",
  },
  {
    slug: "whisper-interfaces",
    title: "Whisper Interfaces",
    summary: "Alive yet unobtrusive feedback loops—delight without noise.",
    meta: "Motion · Micro-Interactions",
    tags: ["Motion", "System Design"],
    link: "/work/whisper-interfaces",
  },
  {
    slug: "chrome-language",
    title: "Chrome Language",
    summary: "A metallic design language for data tools: depth, sheen, restraint.",
    meta: "Vision · Rose-Gold Systems",
    tags: ["Spec", "Visual System"],
    link: "/case-studies/chrome-language",
  },
];
