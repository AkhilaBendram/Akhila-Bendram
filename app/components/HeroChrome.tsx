// app/components/HeroChrome.tsx
export default function HeroChrome() {
  return (
    <>
      <section className="relative isolate overflow-hidden min-h-[70vh] text-white">
        {/* VERY FAINT BACKGROUND GLOWS - NO PANEL */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.20]">
          {/* cool cyan haze on the right */}
          <div
            className="
              absolute top-1/4 right-[-20%]
              h-[360px] w-[360px]
              rounded-full
              bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.38),transparent_65%)]
              blur-3xl
              animate-soft-orbit
            "
          />

          {/* warm rose haze on the left */}
          <div
            className="
              absolute top-[-10%] left-[-25%]
              h-[320px] w-[320px]
              rounded-full
              bg-[radial-gradient(circle_at_center,rgba(244,164,130,0.32),transparent_65%)]
              blur-3xl
              animate-soft-orbit-delayed
            "
          />
        </div>

        {/* CONTENT */}
        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-24">
          <p className="text-xs tracking-[0.32em] text-white/40 uppercase mb-6">
            Portfolio - Akhila Bendram
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-[4.6rem] font-semibold tracking-[0.22em] leading-tight text-white drop-shadow-[0_0_32px_rgba(0,0,0,0.9)]">
            AKHILA&nbsp;BENDRAM
          </h1>

          <p className="mt-6 max-w-3xl text-base sm:text-lg text-white/80">
            Rooted in data, fluent in AI, and shaped by design - a
            multidisciplinary mindset built for clarity, intention, and the
            future.
          </p>

          <p className="mt-3 max-w-2xl text-sm text-white/60">
            Data · AI · UI/UX — engineered clarity, dependable execution, 
            and design precision that strengthens every team I work with.
          </p>
        </div>
      </section>

     
    </>
  );
}
