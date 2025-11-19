import { caseStudies } from "@data/CaseStudies";
import SectionHeader from "@/case-studies/components/SectionHeader";
import DiagramRationale from "../components/DiagramRationale";
import ParallaxHero from "../components/ParrallaxHero";

const study =
  caseStudies.find((entry) => entry.slug === "ai-rationale-maps") ?? null;

export default function Page() {
  if (!study) {
    throw new Error("Case study data missing for ai-rationale-maps");
  }

  return (
    <main className="relative text-white pb-32">
      <ParallaxHero
        title={study.title}
        subtitle={study.summary}
        tags={study.stack}
      />

      <SectionHeader
        title="AI Rationale Maps"
        subtitle="Case Study - Model Explainability"
      />

      <div className="max-w-4xl mx-auto px-6 text-white/70 leading-relaxed space-y-6">
        <p>
          Most AI models output predictions without transparency. Rationale Maps
          solve this by creating a visual reasoning pathway through layered
          importance signals, uncertainty rings, and sequential inference steps.
        </p>

        <p>
          The framework merges XAI techniques - SHAP, attention weights, and
          confidence gradients - into a cohesive spatial diagram designed for
          product teams, not researchers.
        </p>
      </div>

      <DiagramRationale />

      <div className="max-w-4xl mx-auto px-6 text-white/60 leading-relaxed space-y-4 mt-10">
        <p>
          Once deployed, teams observed a 60% reduction in black-box
          misunderstandings, better auditability, and more confident iteration
          cycles for ML engineers.
        </p>
      </div>
    </main>
  );
}
