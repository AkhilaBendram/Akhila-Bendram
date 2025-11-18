// app/case-studies/page.tsx
import CaseStudyCard from "../components/CaseStudyCard";

export default function CaseStudiesPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          Case Studies
        </h1>
        <p className="max-w-2xl text-sm md:text-base text-white/70">
          Independent explorations that connect{" "}
          <span className="text-rose-200">data</span>,{" "}
          <span className="text-cyan-200">AI</span>, and{" "}
          <span className="text-white/80">interfaces</span>.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <CaseStudyCard
          title="Narrative Metrics"
          category="Data · Explainability"
          summary="Layer that explains why a chart matters using plain-language rationales and actions."
          slug="narrative-metrics"
          tags={["Data", "AI", "UX Writing"]}
        />
        <CaseStudyCard
          title="Flow Heatmaps"
          category="AI · Behavior"
          summary="New format for heatmaps based on journeys — hesitation halos, drop-off narrative, effort score."
          slug="flow-heatmaps"
          tags={["Behavior", "Funnels"]}
        />
        <CaseStudyCard
          title="Calm Alerts"
          category="Systems · Tone"
          summary="Alert spec that reduces panic: graded tone, deduped noise, and one-tap snooze with context."
          slug="calm-alerts"
          tags={["Systems", "Accessibility"]}
        />
      </section>
    </div>
  );
}
