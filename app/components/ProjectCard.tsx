import Link from "next/link";

type ProjectCardProps = {
  title: string;
  blurb: string;
  meta: string;
  href: string;
};

export default function ProjectCard({ title, blurb, meta, href }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 ring-1 ring-white/5 transition hover:border-white/30 hover:bg-white/[0.04]"
    >
      <div className="text-[11px] uppercase tracking-[0.28em] text-zinc-400">{meta}</div>
      <h3 className="mt-2 text-2xl font-semibold text-zinc-50">{title}</h3>
      <p className="mt-3 text-sm text-zinc-400">{blurb}</p>
      <span className="mt-6 inline-flex items-center text-sm font-medium text-rose-200 transition group-hover:translate-x-1">
        View project →
      </span>
    </Link>
  );
}
