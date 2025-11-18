export type CaseStudy = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  role: string;
  duration: string;
  stack: string[];
  problem: string;
  approach: string;
  outcome: string;
  metrics: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "data-quality-scoring",
    eyebrow: "Data Systems",
    title: "Data Quality Scoring Engine",
    summary:
      "A scoring layer that ranks datasets by coverage, reliability, and causal strength before they ever reach a model.",
    role: "Data Designer · System UX · Spec Author",
    duration: "6 weeks",
    stack: ["SQL", "Python", "Looker / BI"],
    problem:
      "Teams shipped models on top of stale, incomplete, or biased datasets. There was no shared vocabulary for \"good enough\" data.",
    approach:
      "Designed a scoring rubric across completeness, freshness, causality, and uncertainty. Built a visual lineage map that shows which sources pull a score down and why. Exposed scores and rationales directly inside dashboards, not hidden in docs.",
    outcome:
      "Stakeholders could reject a dataset before modeling, not after. Reviews shifted from feelings to shared thresholds of trust.",
    metrics: [
      "40% drop in late-stage model rollbacks driven by data issues.",
      "Standardized data health rubric used across 3 product pods.",
    ],
  },
  {
    slug: "ai-rationale-maps",
    eyebrow: "Explainable AI",
    title: "AI Model Rationale Maps",
    summary:
      "Visual maps that show why an AI chose its answer, what it considered next, and where it is uncertain.",
    role: "AI Product Designer · Prompt Architect",
    duration: "4 weeks",
    stack: ["LLMs", "Node.js", "React"],
    problem:
      "Users saw outputs but not reasoning. When the model was wrong, trust collapsed because there was no graceful way to inspect or disagree.",
    approach:
      "Designed a branching map that surfaces input slices, intermediate thoughts, and ranked alternatives. Used LLMs to cluster rationales into human language and highlight contentious steps.",
    outcome:
      "Reviewers could critique individual reasoning steps instead of dismissing the entire model. Hand-offs between AI and human reviewers felt like a conversation, not a verdict.",
    metrics: [
      "Time-to-approve for AI-assisted reviews dropped by ~25%.",
      "Bug reports referencing \"model is random\" reduced significantly.",
    ],
  },
  {
    slug: "micro-motion-system",
    eyebrow: "Motion Language",
    title: "Micro-Motion Behavior System",
    summary:
      "A timing + easing system for 120–180ms motion that makes interfaces feel responsive, not noisy.",
    role: "Motion Designer · Interaction Designer",
    duration: "3 weeks",
    stack: ["Framer Motion", "React"],
    problem:
      "Every team shipped their own animation curves. Some flows felt sluggish, others jittery. Nothing felt cohesive or intentional.",
    approach:
      "Created a small motion token system: entrance, confirmation, error, and background flows. Each motion was tuned within 120–200ms, with spring curves designed for quiet luxury rather than gamification.",
    outcome:
      "Motion felt invisible but missed when removed. Teams had a shared language: 'use confirm-fast-120' instead of custom easing each time.",
    metrics: [
      "Reusable motion presets adopted in 4 flows within the first sprint.",
      "QA bugs related to 'laggy' or 'dizzy' transitions nearly disappeared.",
    ],
  },
  {
    slug: "signal-hygiene-alerts",
    eyebrow: "Tone & Systems",
    title: "Signal Hygiene Alerts",
    summary:
      "An alert system that reduces panic: graded tone, merged duplicates, suggested fixes, and one-tap snooze with context.",
    role: "System UX · Content Design",
    duration: "5 weeks",
    stack: ["Design System", "React"],
    problem:
      "Dashboards screamed at users. Duplicate alerts, all caps, harsh colors. People started ignoring the very signals meant to protect them.",
    approach:
      "Redesigned alerts as a tiered system: quiet, important, urgent. Grouped duplicates, added next-best actions, and created a content guide for humane language and tone.",
    outcome:
      "Alerts became a calm briefing instead of an anxiety feed. Teams could triage by intent, not just by noise level.",
    metrics: [
      "Alert acknowledgement rates improved without increasing volume.",
      "Teams reported 'less panic scrolling' in qualitative interviews.",
    ],
  },
];
