import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/sections/Footer";
import { ProjectShot } from "@/components/ProjectShot";
import {
  getAdjacentProjects,
  getProject,
  projects,
} from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };
  return {
    title: project.name,
    description: project.excerpt,
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { prev, next } = getAdjacentProjects(slug);

  return (
    <>
      <main className="section-shell pt-[calc(5.5rem+env(safe-area-inset-top,0px))] pb-16 sm:pb-24 lg:pt-16">
        <Link
          href="/#work"
          className="font-mono text-[11px] tracking-[0.22em] text-mute uppercase hover:text-gold"
        >
          ← All work
        </Link>

        <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="font-mono text-[10px] tracking-[0.2em] text-gold uppercase sm:text-[11px] sm:tracking-[0.24em]">
              {project.engine} · {project.year}
              {project.highlight ? ` · ${project.highlight}` : ""}
            </p>
            <h1 className="font-display mt-4 text-[clamp(2rem,8vw,4.5rem)] tracking-tight">
              {project.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-mute sm:mt-5 sm:text-lg sm:leading-8">
              {project.description}
            </p>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-bg sm:w-auto"
          >
            Visit live site
          </a>
        </div>

        <div className="mt-10 overflow-hidden rounded-[20px] border border-line sm:mt-12 sm:rounded-[28px]">
          <div className="relative min-h-[220px] sm:min-h-[320px] lg:min-h-[520px]">
            <ProjectShot
              url={project.url}
              name={project.name}
              accent={project.accent}
              engine={project.engine}
              priority
            />
          </div>
        </div>

        <div className="mt-12 grid min-w-0 gap-10 sm:mt-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-gold uppercase">Contribution</p>
            <ul className="mt-5 space-y-3">
              {project.contribution.map((item) => (
                <li key={item} className="flex gap-3 leading-7 text-mute">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-gold uppercase">Stack</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-line px-4 py-2 text-sm">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-8 leading-7 text-mute">{project.excerpt}</p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 border-t border-line pt-8 sm:mt-20 sm:grid-cols-2 sm:pt-10">
          <Link href={`/work/${prev.slug}`} className="min-w-0 rounded-2xl border border-line p-5 sm:rounded-3xl sm:p-6 hover:border-gold/40">
            <p className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase">Previous</p>
            <p className="font-display mt-2 text-2xl sm:text-3xl">{prev.name}</p>
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="min-w-0 rounded-2xl border border-line p-5 text-left sm:rounded-3xl sm:p-6 sm:text-right hover:border-gold/40"
          >
            <p className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase">Next</p>
            <p className="font-display mt-2 text-2xl sm:text-3xl">{next.name}</p>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
