export const metadata = { title: "Flow Heatmaps — Case Study (Data)" };

export default function Page() {
  return (
    <article className="bg-chrome mx-auto max-w-4xl px-6 pb-28 pt-24">
      <Header
        title="Flow Heatmaps"
        eyebrow="Data"
        summary="From clicks to clarity: a time-weighted journey map with effort scores, hesitation halos, and path friction."
      />

      <Section title="Context">
        Page heatmaps looked “fine,” but the journey still leaked users. Friction lived between pages—not on them.
      </Section>

      <Section title="Problem">
        Teams optimized local screens. No shared view of the full flow, no way to quantify “effort” across steps.
      </Section>

      <Section title="Approach (Data)">
        <ul className="list-disc pl-5 space-y-2">
          <li><b>Flow graph:</b> Steps → nodes; transitions → edges with volume &amp; exit rate.</li>
          <li><b>Effort score:</b> latency × backtracks + rage-clicks → edge weight.</li>
          <li><b>Hesitation halos:</b> idle bursts + jitter scrolls near CTAs → highlight friction zones.</li>
          <li><b>Cohorts:</b> compare first action to reveal divergent paths.</li>
        </ul>
      </Section>

      <Section title="Outputs">
        Interactive path map with friction tint, CSV export of edge metrics, experiment candidates ranked by impact.
      </Section>

      <KPI rows={[
        ["Checkout completion time", "—", "−21%"],
        ["Shipping step drop-off", "—", "−12%"],
      ]}/>

      <Section title="Design Insight">
        Depth builds trust. 3D-ish tone mapping turned dense telemetry into a calm, readable story.
      </Section>

      <Related link="/work/perspectiv" label="See related work: Perspectiv →" />
    </article>
  );
}

/* ---------- page primitives ---------- */
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
function Related({ link, label }:{link:string; label:string}) {
  return (
    <div className="mt-8 text-sm text-zinc-300">
      <a href={link} className="hover:text-zinc-100">{label}</a>
    </div>
  );
}
