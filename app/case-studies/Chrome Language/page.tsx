export const metadata = { title: "Chrome Language — Case Study (UI/UX)" };

export default function Page() {
  return (
    <article className="bg-chrome mx-auto max-w-4xl px-6 pb-28 pt-24">
      <Header
        title="Chrome Language"
        eyebrow="UI/UX"
        summary="A rose-gold metallic system for data tools: depth, sheen, motion presets, and accessible tone."
      />

      <Section title="Problem">
        Flat greys, harsh motion, glare. Dashboards felt busy and fatiguing.
      </Section>

      <Section title="Approach (System)">
        <ul className="list-disc pl-5 space-y-2">
          <li><b>Tokens:</b> rose-gold hue (#EEC0A6), chrome sheen gradient (#EEC0A6→#B3E7E0), noise, radius, ring.</li>
          <li><b>Lighting logic:</b> elevation = blur radius × shadow opacity; consistent inset/outset rules.</li>
          <li><b>Motion:</b> single-axis, ≤ 200ms eases; one movement per intent; reduced-motion fallbacks.</li>
          <li><b>A11y:</b> contrast checked; hover/focus states glow subtly, not blinding.</li>
        </ul>
      </Section>

      <KPI rows={[
        ["Perceived polish (survey)", "—", "+46%"],
        ["Task success (prototype)", "—", "+9%"],
      ]}/>

      <Section title="Design Insight">
        Luxury is restraint. Chrome isn’t “shine”; it’s calm precision that guides attention.
      </Section>
    </article>
  );
}

/* primitives */
function Header({ title, eyebrow, summary }:{title:string; eyebrow:string; summary:string}) {
  return (
    <header className="mb-8">
      <div className="brand-wide text-[12px] tracking-[0.35em] text-zinc-300/80">{eyebrow}</div>
      <h1 className="mt-2 text-3xl font-semibold text-zinc-50">{title}</h1>
      <p className="mt-3 text-zinc-400">{summary}</p>
    </header>
  );
}
function Section({ title, children }: {title:string; children: React.ReactNode}) {
  return (
    <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <h2 className="text-zinc-100">{title}</h2>
      <div className="mt-2 text-sm leading-relaxed text-zinc-300">{children}</div>
    </section>
  );
}
function KPI({ rows }:{rows:[string,string,string][]}) {
  return (
    <Section title="Results">
      <table className="mt-3 w-full text-sm text-zinc-300">
        <thead className="text-zinc-400">
          <tr><th className="text-left">Metric</th><th className="text-center">Before → After</th><th className="text-center">Delta</th></tr>
        </thead>
        <tbody>
          {rows.map(([m, ba, d]) => (
            <tr key={m} className="border-t border-white/10">
              <td className="py-2">{m}</td><td className="text-center">{ba}</td><td className="text-center">{d}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Section>
  );
}
