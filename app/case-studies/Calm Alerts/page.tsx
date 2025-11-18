export const metadata = { title: "Calm Alerts — Case Study" };

export default function Page() {
  return (
    <article className="bg-chrome mx-auto max-w-4xl px-6 pb-28 pt-24">
      <Header title="Calm Alerts" eyebrow="Signal Hygiene"
        summary="Deduplicated, graded-tone alerts with fix suggestions and one-tap snooze." />
      <Section title="Problem">
        On-call was drowning; true incidents hid among repeats and low-value spikes.
      </Section>
      <Section title="Approach">
        <ul className="list-disc pl-5 space-y-2">
          <li>Text+dimension clustering to merge duplicates into incidents.</li>
          <li>Novelty score and tone scaling for message copy.</li>
          <li>“Why now?” explanation + recommended action from runbooks.</li>
        </ul>
      </Section>
      <KPI items={[
        ["Alert volume", "–41%"],
        ["MTTA", "–29%"],
        ["On-call satisfaction", "+0.8 / 5"]
      ]}/>
      <Section title="Next">
        Reinforcement from triage actions; incident timelines that learn from merges.
      </Section>
    </article>
  );
}

function Header({ title, eyebrow, summary }:{title:string; eyebrow:string; summary:string}) {
  return (
    <header className="mb-8">
      <div className="brand-wide text-[12px] tracking-[0.35em] text-zinc-300/80">{eyebrow}</div>
      <h1 className="mt-2 text-3xl font-semibold text-zinc-50">{title}</h1>
      <p className="mt-3 text-zinc-400">{summary}</p>
    </header>
  );
}
function Section({ title, children }: any) {
  return (
    <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <h2 className="text-zinc-100">{title}</h2>
      <div className="mt-2 text-sm text-zinc-300">{children}</div>
    </section>
  );
}
function KPI({ items }:{items:[string,string][]}) {
  return (
    <Section title="Results">
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {items.map(([k,v])=>(
          <li key={k} className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
            <div className="text-xs text-zinc-400">{k}</div>
            <div className="text-lg text-zinc-100">{v}</div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
