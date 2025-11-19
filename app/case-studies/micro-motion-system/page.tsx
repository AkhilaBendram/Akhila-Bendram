import { caseStudies } from "@data/CaseStudies";
import SectionHeader from "@/case-studies/components/SectionHeader";
import DiagramMicroMotion from "../components/DiagramMicroMotion";
import ParallaxHero from "../components/ParrallaxHero";

const study =
  caseStudies.find((entry) => entry.slug === "micro-motion-system") ?? null;

export default function Page() {
  if (!study) {
    throw new Error("Case study data missing for micro-motion-system");
  }

  return (
    <main className="relative text-white pb-32">
      <ParallaxHero
        title={study.title}
        subtitle={study.summary}
        tags={study.stack}
      />

      <SectionHeader
        title="Micro-Motion Behavior System"
        subtitle="Case Study - UI Motion Language"
      />

      <div className="max-w-4xl mx-auto px-6 text-white/70 leading-relaxed space-y-6">
        <p>
          Good interfaces move with intention. This motion grammar establishes
          timing cadence, interpolation curves, and cognitive response windows
          that shift experiences from merely functional to emotionally
          intuitive.
        </p>

        <p>
          The system defines a predictable motion vocabulary: latency thresholds,
          overshoot allowances, easing curves, and micro-feedback loops that
          guide the user through meaningful motion.
        </p>
      </div>

      <DiagramMicroMotion />

      <div className="max-w-4xl mx-auto px-6 text-white/60 leading-relaxed space-y-4 mt-10">
        <p>
          Integrated across three product surfaces, micro-motion increased
          completion rates and reduced cognitive load by creating clarity through
          consistent motion response.
        </p>
      </div>
    </main>
  );
}
