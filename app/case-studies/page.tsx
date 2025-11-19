import Link from "next/link";
import { caseStudies } from "@data/CaseStudies";

export default function CaseStudyIndex() {
  return (
    <main className="min-h-screen text-white max-w-6xl mx-auto px-6 pt-32 pb-40">
      <h1 className="text-3xl md:text-4xl font-light mb-8">
        Case Studies
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {caseStudies.map(({ slug, eyebrow, title, summary }) => (
          <Link
            key={slug}
            href={`/case-studies/${slug}`}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all"
          >
            <p className="text-white/40 text-xs uppercase tracking-[0.18em] mb-2">
              {eyebrow}
            </p>
            <h2 className="text-xl font-medium">{title}</h2>
            <p className="text-white/60 mt-3">{summary}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
