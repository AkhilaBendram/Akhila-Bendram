// app/process/page.tsx
export default function ProcessPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          Process
        </h1>
        <p className="max-w-2xl text-sm md:text-base text-white/70">
          A simple loop that keeps data, AI, and people in sync — from signal
          to screen.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <ProcessCard
          step="Step 1"
          title="Research"
          body="Signals, tasks, constraints, truth sources. What actually matters."
        />
        <ProcessCard
          step="Step 2"
          title="Emotion"
          body="What should this feel like? Tone, restraint, and trust thresholds."
        />
        <ProcessCard
          step="Step 3"
          title="Prototype"
          body="Narratives, motion studies, data stress tests, quick experiments."
        />
        <ProcessCard
          step="Step 4"
          title="Feedback"
          body="Run PM/Eng/User loops; measure comprehension and recovery paths."
        />
        <ProcessCard
          step="Step 5"
          title="Vision"
          body="Encode into tokens, motion presets, docs. System &gt; single screen."
        />
      </section>

      {/* Timeline dots */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold tracking-[0.25em] text-white/60 uppercase">
          Timeline (signal gates)
        </h2>
        <div className="rounded-3xl border border-white/8 bg-black/60 px-6 py-6">
          <div className="flex items-center justify-between gap-4">
            {["Research", "Emotion", "Prototype", "Feedback", "Vision"].map(
              (label) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 text-xs text-white/60"
                >
                  <div className="h-3 w-3 rounded-full bg-gradient-to-b from-rose-200 to-cyan-200 shadow-[0_0_16px_rgba(250,200,160,0.7)]" />
                  <span>{label}</span>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProcessCard({
  step,
  title,
  body,
}: {
  step: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-black/70 px-5 py-6 shadow-[0_18px_45px_rgba(0,0,0,0.7)]">
      <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mb-1">
        {step}
      </p>
      <h3 className="text-sm font-semibold text-white mb-2">{title}</h3>
      <p className="text-xs md:text-sm text-white/70 leading-relaxed">{body}</p>
    </div>
  );
}
