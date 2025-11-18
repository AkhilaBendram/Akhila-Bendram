export const metadata = { title: "Narrative Metrics — Case Study (AI)" };

export default function Page() {
  return (
    <article className="bg-chrome mx-auto max-w-4xl px-6 pb-28 pt-24">
      <Header
        title="Narrative Metrics"
        eyebrow="AI"
        summary="An explainability layer for dashboards: ‘why’, contrast, next-action, and confidence—grounded by extracted features."
      />

      <Section title="Context">
        Execs scrolled charts and still asked “so what?”. Analysts wrote repetitive summaries.
      </Section>

      <Section title="Problem">
        Inconsistent narratives and weak traceability. We needed structured reasoning tied to evidence.
      </Section>

      <Section title="Approach (AI)">
        <ul className="list-disc pl-5 space-y-2">
          <li><b>Feature extraction:</b> trend slope, variance shift, change-points, seasonality strength.</li>
          <li><b>Prompt schema:</b> JSON → <i>rationale</i>, <i>contrast</i>, <i>action</i>, <i>confidence</i>; facts-only grounding.</li>
          <li><b>Guardrails:</b> counterfactual swap & alternate explanation chip to avoid false certainty.</li>
          <li><b>Tone control:</b> neutral → directive, 160–220 chars; references highlight on hover.</li>
        </ul>
      </Section>

      <KPI rows={[
        ["PM review time", "18 → 9 min", "−50%"],
        ["Action acceptance (48h)", "—", "+34%"],
        ["Disagree/flag rate", "—", "4.8%"],
      ]}/>

      <Section title="Design Insight">
        Reason feels human when rhythm and brevity match editorial voice—not bot verbosity.
      </Section>

      <Related link="/work/resume-analyzer" label="See related work: Resume Analyzer →" />
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
function Related({ link, label }:{link:string; label:string}) {
  return (
    <div className="mt-8 text-sm text-zinc-300">
      <a href={link} className="hover:text-zinc-100">{label}</a>
    </div>
  );
}
