import Image from "next/image";
import { StickyPhoto } from "@/components/chrome/StickyPhoto";
import { education, site, strengths } from "@/lib/data";
import { Reveal, SectionEyebrow } from "@/components/ui";
import { formatPhoneDisplay } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="section-shell section-y">
      <SectionEyebrow index="01">About</SectionEyebrow>
      <div className="grid min-w-0 gap-8 md:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch lg:gap-16">
        <StickyPhoto>
          <div className="overflow-hidden rounded-[20px] border border-line sm:rounded-[32px]">
            <Image
              src={site.photo}
              alt={site.name}
              width={720}
              height={900}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-[240px] w-full object-cover object-[center_18%] sm:h-[380px] md:h-[440px] lg:h-[560px]"
            />
          </div>
        </StickyPhoto>

        <div className="min-w-0">
          <Reveal>
            <h2 className="font-display display-h2 max-w-3xl tracking-tight">
              Full stack from the API to a custom website — CMS, themes, and checkout included.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-mute sm:mt-8 sm:text-lg sm:leading-8">
              {site.summary}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-mute sm:mt-5 sm:leading-8">
              At {site.company} I work as a full stack developer on live products: custom websites,
              CMS platforms, Shopify and WordPress themes and plugins, REST APIs, Razorpay Magic
              Checkout, Shiprocket, payment gateways, and AWS.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 rounded-2xl border border-line bg-bg-soft p-4 sm:rounded-3xl sm:p-8">
              <p className="font-mono text-[11px] tracking-[0.22em] text-gold uppercase">Profile</p>
              <dl className="mt-6 space-y-5">
                {[
                  ["Role", site.role],
                  ["Studio", site.company],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex flex-col gap-1 border-b border-line pb-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                  >
                    <dt className="shrink-0 text-mute">{label}</dt>
                    <dd className="min-w-0 sm:text-right">{value}</dd>
                  </div>
                ))}
                <div className="flex flex-col gap-1 border-b border-line pb-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <dt className="shrink-0 text-mute">Phone</dt>
                  <dd className="min-w-0 sm:text-right">
                    <a href={site.phoneHref} className="hover:text-gold">
                      {formatPhoneDisplay(site.phone)}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col gap-1 border-b border-line pb-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <dt className="shrink-0 text-mute">Education</dt>
                  <dd className="min-w-0 sm:text-right">
                    {education.degree}
                    <span className="mt-1 block text-sm text-mute">{education.school}</span>
                  </dd>
                </div>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <dt className="shrink-0 text-mute">Based</dt>
                  <dd className="min-w-0 sm:text-right">{site.location}</dd>
                </div>
              </dl>
              <ul className="mt-8 space-y-3 text-sm text-mute">
                {strengths.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    <span className="min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
