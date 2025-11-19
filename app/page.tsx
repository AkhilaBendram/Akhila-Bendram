// app/page.tsx
import Link from "next/link";

import HeroChrome from "./components/HeroChrome";
import ProjectCard from "./components/ProjectCard";
import CaseStudyCard from "./components/CaseStudyCard";
import AboutSection from "./components/AboutSection"; // NEW
import { projects } from "../data/projects";
import { caseStudies } from "@data/CaseStudies";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 2);
  const featuredCaseStudies = caseStudies.slice(0, 3);

  return (
    <>
      {/* ✦ GLOBAL IMMERSIVE BACKGROUND — fog + soft light */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.14] bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.06),transparent_70%)] animate-[floatLight_14s_ease-in-out_infinite]" />
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.08] bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_55%),radial-gradient(circle_at_80%_40%,rgba(148,163,184,0.12),transparent_60%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.08),transparent_50%)] blur-3xl" />

      {/* HERO — full-bleed chrome */}
      <HeroChrome />

      {/* ✦ ABOUT ME SECTION — buttery scroll, your portrait, skills, resume */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 mt-20 md:mt-28">
        <AboutSection />
      </section>

      {/* WORK SECTION */}
      <section
        id="work"
        className="relative z-10 max-w-6xl mx-auto px-6 pb-20 mt-24 text-white"
      >
        <div className="flex items-baseline justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xs tracking-[0.32em] text-white/45 uppercase">
              Work
            </h2>
            <p className="text-sm text-white/55 mt-2">
              Product AI tools with real code, real data, and real motion.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {featuredProjects.map(({ slug, title, summary, meta, link }) => (
            <ProjectCard
              key={slug}
              title={title}
              blurb={summary}
              meta={meta}
              href={link}
            />
          ))}
        </div>
      </section>

      {/* CASE STUDIES PREVIEW */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-20 text-white">
        <div className="flex items-baseline justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xs tracking-[0.32em] text-white/45 uppercase">
              Case Studies
            </h2>
            <p className="text-sm text-white/55 mt-2">
              Systems that sit between data, AI explainability, and calm UI.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="text-sm text-white/60 hover:text-white/90 underline underline-offset-4 decoration-white/30"
          >
            View all case studies →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featuredCaseStudies.map(
            ({ slug, title, summary, eyebrow, stack }) => (
              <CaseStudyCard
                key={slug}
                title={title}
                category={eyebrow}
                summary={summary}
                slug={slug}
                tags={stack.slice(0, 3)}
              />
            ),
          )}
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section
        id="contact"
        className="relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-md text-white"
      >
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.32em] text-white/40 uppercase">
              Contact
            </p>
            <h3 className="text-lg md:text-xl font-medium mt-2">
              Hiring for data, AI, or product design? I&rsquo;d love to talk.
            </h3>
            <p className="text-sm text-white/55 mt-2 max-w-xl">
              Based in the US, working across time zones.  
              I specialize in data systems, AI reasoning, and interface craft.
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 text-sm">
            <a
              href="mailto:akhilaben25@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-colors"
            >
              Email me — akhilaben25@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
