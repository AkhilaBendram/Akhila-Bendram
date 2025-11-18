// app/vision/page.tsx
export default function VisionPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          Vision
        </h1>
        <p className="max-w-2xl text-sm md:text-base text-white/70">
          Interfaces where emotion and intelligence coexist — clarity with
          feeling, data with story, motion with meaning.
        </p>
      </section>

      {/* Principle cards */}
      <section className="grid gap-6 md:grid-cols-3">
        <VisionCard
          title="Evidence &gt; Aesthetics"
          body="Decisions start from signal quality: coverage, causality, uncertainty. UI shows story, not theater."
        />
        <VisionCard
          title="AI as a Feeling Machine"
          body="Models explain themselves: why-now, what-next, and rationale. Contrast, not blind confidence."
        />
        <VisionCard
          title="Quiet Luxury"
          body="Sheen below perception, 120–200ms motion, rose-gold accents for hierarchy only. Depth for trust."
        />
      </section>

      {/* Simple system diagram */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold tracking-[0.25em] text-white/60 uppercase">
          System Diagram
        </h2>

        <div className="rounded-3xl border border-white/8 bg-black/60 px-6 py-8">
          <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-center">
            <DiagramNode
              title="Data Quality"
              body="Coverage, causality, drift, uncertainty."
            />
            <DiagramConnector />
            <DiagramNode
              title="AI Rationale"
              body="Rationales, contrast, next best suggestion."
            />
            <DiagramConnector />
            <DiagramNode
              title="Human Interface"
              body="Calm motion, humane defaults, focus."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function VisionCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-black/70 px-5 py-6 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
      <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
      <p className="text-xs md:text-sm text-white/70 leading-relaxed">{body}</p>
    </div>
  );
}

function DiagramNode({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/4 to-white/0 px-4 py-4">
      <h3 className="text-xs font-semibold text-white mb-1">{title}</h3>
      <p className="text-[11px] text-white/70">{body}</p>
    </div>
  );
}

function DiagramConnector() {
  return (
    <div className="hidden md:flex flex-1 items-center justify-center">
      <div className="h-px w-full max-w-24 bg-gradient-to-r from-rose-300/40 via-white/30 to-cyan-300/50" />
    </div>
  );
}
