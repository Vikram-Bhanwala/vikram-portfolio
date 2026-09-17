import { services } from "@/lib/data";
import { Reveal, SectionEyebrow } from "@/components/ui";

export function Services() {
  return (
    <section id="services" className="section-shell section-y">
      <SectionEyebrow index="06">How I help</SectionEyebrow>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
        <Reveal>
          <h2 className="font-display display-h2">
            I take the brief from architecture to a URL that stays up.
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <article className="h-full rounded-2xl border border-line bg-bg-soft p-5 sm:rounded-3xl sm:p-7">
                <p className="font-mono text-[11px] tracking-[0.22em] text-gold uppercase">
                  0{index + 1}
                </p>
                <h3 className="font-display mt-4 text-xl sm:text-2xl">{service.title}</h3>
                <p className="mt-3 leading-7 text-mute">{service.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
