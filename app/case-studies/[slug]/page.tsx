import { notFound } from "next/navigation";
import { caseStudies } from "../../../data/CaseStudies";

type PageParams = Promise<{ slug: string }>;

export default async function CaseStudyDetailPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    return notFound();
  }

  return (
    <article className="space-y-10">
      <header className="space-y-3">
        <p className="eyebrow">{study.eyebrow}</p>
        <h1 className="heading-section text-3xl">{study.title}</h1>
        <p className="text-muted max-w-2xl">{study.summary}</p>

        <div className="flex flex-wrap gap-3 mt-4 text-xs text-neutral-300">
          <span className="pill-soft">
            <span className="text-neutral-400 mr-1">Role</span>
            {study.role}
          </span>
          <span className="pill-soft">
            <span className="text-neutral-400 mr-1">Duration</span>
            {study.duration}
          </span>
          {study.stack.map((s) => (
            <span key={s} className="pill-soft">
              {s}
            </span>
          ))}
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <DetailBlock title="Problem" body={study.problem} />
        <DetailBlock title="Approach" body={study.approach} />
        <DetailBlock title="Outcome" body={study.outcome} />
      </section>

      <section className="card-soft p-5">
        <h2 className="text-sm font-semibold mb-3">Signals &amp; Impact</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-neutral-200">
          {study.metrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}

function DetailBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="card-soft p-5">
      <h2 className="text-sm font-semibold mb-2">{title}</h2>
      <p className="text-sm text-neutral-200 leading-relaxed">{body}</p>
    </div>
  );
}
