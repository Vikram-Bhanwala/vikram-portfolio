import { process as steps } from "@/lib/data";
import { Reveal, SectionEyebrow } from "@/components/ui";

export function Process() {
  return (
    <section id="process" className="section-shell section-y">
      <SectionEyebrow index="05">Work process</SectionEyebrow>
      <Reveal>
        <h2 className="font-display display-h2 max-w-3xl">
          Architecture first. Pixels second. Launch is a checkpoint.
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((item, index) => (
          <Reveal key={item.step} delay={index * 0.06}>
            <article className="h-full rounded-2xl border border-line p-5 sm:rounded-3xl sm:p-7">
              <p className="font-mono text-xs tracking-[0.28em] text-gold">{item.step}</p>
              <h3 className="font-display mt-5 text-2xl sm:mt-6 sm:text-3xl">{item.title}</h3>
              <p className="mt-4 leading-7 text-mute">{item.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
