"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";
import { SectionEyebrow } from "@/components/ui";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-shell section-y">
      <SectionEyebrow index="07">Questions</SectionEyebrow>
      <h2 className="font-display display-h2 max-w-3xl">
        Straight answers before you send the brief.
      </h2>
      <div className="mt-10 divide-y divide-line border-y border-line sm:mt-12">
        {faqs.map((item, index) => {
          const active = open === index;
          return (
            <div key={item.q} className="min-w-0">
              <button
                type="button"
                onClick={() => setOpen(active ? -1 : index)}
                className="flex w-full items-start justify-between gap-3 py-5 text-left sm:gap-6 sm:py-6"
              >
                <span className="min-w-0 pr-2 text-base sm:text-xl">{item.q}</span>
                <span className="mt-0.5 shrink-0 font-mono text-gold">{active ? "−" : "+"}</span>
              </button>
              {active ? <p className="max-w-3xl pb-6 text-sm leading-7 text-mute sm:text-base sm:leading-8">{item.a}</p> : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
