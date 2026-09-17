"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Reveal, SectionEyebrow } from "@/components/ui";

export function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="section-shell section-y">
      <SectionEyebrow index="04">Experience</SectionEyebrow>
      <Reveal>
        <h2 className="font-display display-h2 max-w-3xl">
          6+ years. Three companies. One through-line: ship the system, then keep it fast.
        </h2>
      </Reveal>
      <div className="mt-10 divide-y divide-line border-y border-line sm:mt-12">
        {experience.map((job, index) => {
          const active = open === index;
          return (
            <article key={job.company} className="min-w-0">
              <button
                type="button"
                onClick={() => setOpen(active ? -1 : index)}
                className="flex w-full items-start justify-between gap-3 py-5 text-left sm:gap-6 sm:py-7"
              >
                <div className="min-w-0">
                  <p className="font-mono text-[10px] tracking-[0.18em] text-gold uppercase sm:text-[11px] sm:tracking-[0.22em]">
                    {job.period}
                  </p>
                  <h3 className="font-display mt-2 text-xl sm:text-3xl lg:text-4xl">{job.company}</h3>
                  <p className="mt-2 text-sm text-mute sm:text-base">{job.role}</p>
                </div>
                <span className="mt-2 shrink-0 font-mono text-gold">{active ? "−" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {active ? (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pb-8"
                  >
                    {job.points.map((point) => (
                      <li key={point} className="max-w-3xl py-1.5 text-sm leading-7 text-mute sm:text-base">
                        {point}
                      </li>
                    ))}
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}
