"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  categoryLabels,
  moreWork,
  projects,
  type ProjectCategory,
} from "@/lib/data";
import { ProjectShot } from "@/components/ProjectShot";
import { Reveal, SectionEyebrow } from "@/components/ui";

const filters: Array<"all" | ProjectCategory> = [
  "all",
  "commerce",
  "platform",
  "education",
  "corporate",
];

export function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((project) => project.category === filter)),
    [filter],
  );
  const featured = visible.filter((project) => project.featured);
  const rest = visible.filter((project) => !project.featured);

  return (
    <section id="work" className="section-shell section-y">
      <SectionEyebrow index="03">Selected work</SectionEyebrow>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        <h2 className="font-display display-h2 max-w-3xl">
          A few live products. 30+ shipped. Real checkout, not mockups.
        </h2>
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`shrink-0 rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.2em] uppercase ${
                filter === item
                  ? "border-gold bg-gold text-bg"
                  : "border-line text-mute hover:text-ink"
              }`}
            >
              {item === "all" ? "All" : categoryLabels[item]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 space-y-6 sm:mt-14 sm:space-y-8">
        {featured.map((project, index) => (
          <Reveal key={project.slug}>
            <Link href={`/work/${project.slug}`} className="group block">
              <article className="overflow-hidden rounded-[20px] border border-line bg-bg-soft sm:rounded-[28px]">
                <div className="grid min-w-0 lg:grid-cols-[1.15fr_0.85fr]">
                  <div className="relative min-h-[200px] overflow-hidden sm:min-h-[280px] lg:min-h-[420px]">
                    <div className="absolute inset-0 transition duration-700 group-hover:scale-[1.04]">
                      <ProjectShot
                        url={project.url}
                        name={project.name}
                        accent={project.accent}
                        engine={project.engine}
                        priority={index < 2}
                      />
                    </div>
                  </div>
                  <div className="flex min-w-0 flex-col justify-between p-4 sm:p-7 lg:p-10">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
                        <p className="font-mono text-[10px] tracking-[0.2em] text-gold uppercase sm:text-[11px] sm:tracking-[0.24em]">
                          {String(index + 1).padStart(2, "0")} / {project.engine}
                        </p>
                        {project.highlight ? (
                          <span className="rounded-full border border-gold/40 px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-gold uppercase">
                            {project.highlight}
                          </span>
                        ) : null}
                      </div>
                      <h3 className="font-display mt-4 text-[1.75rem] tracking-tight sm:mt-6 sm:text-4xl lg:text-5xl">
                        {project.name}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-mute sm:mt-4 sm:text-base sm:leading-7">
                        {project.excerpt}
                      </p>
                    </div>
                    <div className="mt-6 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-line px-3 py-1 text-xs text-mute"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
                        Case study →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </Reveal>
        ))}
      </div>

      {rest.length > 0 ? (
        <div className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((project) => (
            <Reveal key={project.slug}>
              <Link href={`/work/${project.slug}`} className="group block h-full">
                <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-bg-soft sm:rounded-3xl">
                  <div className="relative h-44 overflow-hidden sm:h-48">
                    <div className="absolute inset-0 transition duration-500 group-hover:scale-105">
                      <ProjectShot
                        url={project.url}
                        name={project.name}
                        accent={project.accent}
                        engine={project.engine}
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
                      {project.engine} · {project.year}
                    </p>
                    <h3 className="font-display mt-3 text-2xl sm:text-3xl">{project.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-mute">{project.excerpt}</p>
                    <span className="mt-5 font-mono text-[10px] tracking-[0.2em] text-gold uppercase">
                      Open project →
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      ) : null}

      <div className="mt-10 rounded-[20px] border border-line bg-bg-soft p-4 sm:mt-16 sm:rounded-[28px] sm:p-7 lg:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="font-mono text-[11px] tracking-[0.24em] text-gold uppercase">Also shipped</p>
            <h3 className="font-display mt-3 text-2xl sm:text-4xl">+ more live work</h3>
          </div>
          <p className="max-w-md text-sm leading-6 text-mute">
            Selected case studies above. These are more production sites from the same full stack
            practice — commerce, corporate, education, and industrial.
          </p>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {moreWork.map((item) => (
            <li key={item.url} className="min-w-0">
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="flex min-w-0 items-center justify-between gap-3 rounded-2xl border border-line px-4 py-3 transition hover:border-gold/50"
              >
                <span className="min-w-0 truncate">{item.name}</span>
                <span className="shrink-0 font-mono text-[10px] tracking-[0.18em] text-mute uppercase">
                  {item.tag}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
