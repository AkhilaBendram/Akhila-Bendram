import ProjectCard from "@/components/ProjectCard";
import { projects } from "@data/projects";

export const metadata = { title: "Work — Akhila Bendram" };

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-6 px-6 py-14">
      <header>
        <h1 className="h-headline">Work</h1>
        <p className="mt-3 max-w-3xl text-neutral-300">Selected product, AI, and system explorations.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map(({ slug, title, summary, meta, link }) => (
          <ProjectCard key={slug} title={title} blurb={summary} meta={meta} href={link} />
        ))}
      </div>
    </main>
  );
}
