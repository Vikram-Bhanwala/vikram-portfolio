import { skillGroups } from "@/lib/data";
import { Reveal, SectionEyebrow } from "@/components/ui";

export function Skills() {
  return (
    <section id="skills" className="section-shell section-y">
      <SectionEyebrow index="02">Capabilities</SectionEyebrow>
      <Reveal>
        <h2 className="font-display display-h2 max-w-3xl">
          Storefront, checkout, payments, logistics APIs, and the box they run on.
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.05}>
            <article className="h-full rounded-2xl border border-line bg-bg-soft p-5 transition hover:border-gold/40 sm:rounded-3xl sm:p-7">
              <p className="font-mono text-[11px] tracking-[0.24em] text-gold uppercase">
                0{index + 1} / {group.title}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    data-cursor="hover"
                    className="rounded-full border border-line px-3 py-1.5 text-sm text-ink/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
