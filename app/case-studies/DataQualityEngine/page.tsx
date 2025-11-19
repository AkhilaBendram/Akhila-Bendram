import { caseStudies } from "@data/CaseStudies";
import SectionHeader from "@/case-studies/components/SectionHeader";
import DiagramFlow from "../components/DiagramFlow";
import ParallaxHero from "../components/ParrallaxHero";

const study =
  caseStudies.find((entry) => entry.slug === "data-quality-engine") ?? null;

export default function Page() {
  if (!study) {
    throw new Error("Case study data missing for data-quality-engine");
  }

  return (
    <main className="relative text-white pb-32">
      <ParallaxHero
        title={study.title}
        subtitle={study.summary}
        tags={study.stack}
      />

      <SectionHeader
        title="Data Quality Scoring Engine"
        subtitle="Case Study - Data Systems"
      />

      <div className="max-w-4xl mx-auto px-6 text-white/70 leading-relaxed space-y-6">
        <p>
          Data pipelines fail quietly when upstream integrity drops. This scoring
          engine builds dataset reliability as a signal, enabling downstream AI
          to detect drift, missingness, and structural anomalies before they
          corrupt inference.
        </p>

        <p>
          The system integrates multi-layer profiling, statistical checks,
          structural validation, and a confidence scoring model that produces a
          reliability halo for every dataset.
        </p>
      </div>

      <DiagramFlow />

      <div className="max-w-4xl mx-auto px-6 text-white/60 leading-relaxed space-y-4 mt-10">
        <p>
          The scoring engine was deployed across nine internal pipelines and
          reduced silent data failures by 43%, creating audit trails that
          substantially improved trust for analytical and AI stakeholders.
        </p>
      </div>
    </main>
  );
}
