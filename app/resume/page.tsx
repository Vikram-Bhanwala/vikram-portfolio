import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/chrome/PrintButton";
import { Footer } from "@/components/sections/Footer";
import { education, experience, site, skillGroups } from "@/lib/data";
import { formatPhoneDisplay } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Résumé",
  description: `${site.name} — ${site.role} résumé`,
};

export default function ResumePage() {
  return (
    <>
      <main className="section-shell pt-[calc(5.5rem+env(safe-area-inset-top,0px))] pb-16 sm:pb-24 lg:pt-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
          <div className="flex min-w-0 items-center gap-4 sm:gap-6">
            <img
              src={site.photo}
              alt={site.name}
              width={92}
              height={92}
              className="h-16 w-16 shrink-0 rounded-full object-cover object-[center_18%] sm:h-[92px] sm:w-[92px]"
            />
            <div className="min-w-0">
              <p className="font-mono text-[10px] tracking-[0.2em] text-gold uppercase sm:text-[11px] sm:tracking-[0.24em]">
                Curriculum vitae
              </p>
              <h1 className="font-display mt-2 text-[clamp(1.85rem,7vw,4.5rem)]">{site.name}</h1>
              <p className="mt-2 text-sm text-mute sm:mt-3 sm:text-lg">
                {site.role} · {site.location}
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap print:hidden">
            <PrintButton />
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-center text-sm text-bg"
            >
              Hire me
            </Link>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-7 text-mute sm:mt-10 sm:text-base sm:leading-8">
          {site.summary}
        </p>

        <div className="mt-8 flex flex-col gap-2 font-mono text-sm text-gold sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
          <a href={`mailto:${site.email}`} className="break-all">
            {site.email}
          </a>
          <a href={site.phoneHref}>{formatPhoneDisplay(site.phone)}</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <section className="mt-12 sm:mt-16">
          <h2 className="font-mono text-[11px] tracking-[0.24em] text-gold uppercase">Experience</h2>
          <div className="mt-6 space-y-8 sm:space-y-10">
            {experience.map((job) => (
              <article key={job.company} className="min-w-0">
                <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-3">
                  <h3 className="text-xl sm:text-2xl">
                    {job.role} · {job.company}
                  </h3>
                  <p className="font-mono text-xs text-mute">{job.period}</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-mute sm:text-base">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-2">
          <div className="min-w-0">
            <h2 className="font-mono text-[11px] tracking-[0.24em] text-gold uppercase">Skills</h2>
            <div className="mt-5 space-y-4 text-sm sm:text-base">
              {skillGroups.map((group) => (
                <p key={group.title}>
                  <span className="text-ink">{group.title}: </span>
                  <span className="text-mute">{group.items.join(", ")}</span>
                </p>
              ))}
            </div>
          </div>
          <div className="min-w-0">
            <h2 className="font-mono text-[11px] tracking-[0.24em] text-gold uppercase">Education</h2>
            <p className="mt-5 text-xl sm:text-2xl">{education.degree}</p>
            <p className="mt-2 text-mute">
              {education.school} · {education.period}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
