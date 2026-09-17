"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LocalTime } from "@/components/chrome/LocalTime";
import { Magnetic } from "@/components/ui";
import { site, stats } from "@/lib/data";
import { formatPhoneDisplay } from "@/lib/utils";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((value) => (value + 1) % site.roles.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="section-shell relative overflow-hidden pt-[calc(5.5rem+env(safe-area-inset-top,0px))] pb-12 sm:pb-16 lg:pt-16 lg:pb-24">
      <div className="mesh pointer-events-none absolute inset-0" />

      <div className="relative flex flex-col gap-3 border-b border-line pb-5 sm:gap-4 sm:pb-8 lg:flex-row lg:items-end lg:justify-between">
        <p className="font-mono text-[10px] tracking-[0.18em] text-gold uppercase sm:text-[11px] sm:tracking-[0.26em]">
          {site.role} · {site.company}
        </p>
        <div className="flex min-w-0 flex-col gap-2 font-mono text-[10px] tracking-[0.12em] text-mute uppercase sm:flex-row sm:flex-wrap sm:gap-x-8 sm:text-[11px] sm:tracking-[0.16em]">
          <a href={`mailto:${site.email}`} className="break-all hover:text-gold">
            {site.email}
          </a>
          <a href={site.phoneHref} className="hover:text-gold">
            {formatPhoneDisplay(site.phone)}
          </a>
          <span className="flex flex-wrap items-center gap-2 text-ink">
            {site.location.split(",")[0]}
            <span className="text-gold">
              <LocalTime />
            </span>
            <span>{site.timezoneLabel}</span>
          </span>
        </div>
      </div>

      <div className="relative mt-8 grid items-center gap-8 sm:mt-12 md:grid-cols-2 md:gap-10 lg:mt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div className="order-2 min-w-0 md:order-1">
          <h1 className="font-display max-w-5xl text-[clamp(2.1rem,10vw,7.4rem)] leading-[0.92] tracking-[-0.03em]">
            Full stack
            <br />
            for brands
            <br />
            that ship.
          </h1>
          <div className="mt-5 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-base text-mute sm:mt-8 sm:text-xl">
            <span>I’m {site.name.split(" ")[0]}, a</span>
            <span className="text-gold italic">{site.roles[roleIndex]}.</span>
          </div>
          <p className="mt-5 max-w-2xl text-base leading-7 text-mute sm:mt-6 sm:text-lg sm:leading-8">
            {site.subhead}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Magnetic className="w-full sm:w-auto">
              <Link
                href="/#work"
                className="inline-flex w-full items-center justify-center rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-bg transition hover:bg-gold-2 sm:w-auto"
              >
                Selected work
              </Link>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <Link
                href="/resume"
                className="inline-flex w-full items-center justify-center rounded-full border border-line px-7 py-3.5 text-sm text-ink transition hover:border-gold hover:text-gold sm:w-auto"
              >
                View résumé
              </Link>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <a
                href={site.phoneHref}
                className="inline-flex w-full items-center justify-center rounded-full border border-line px-7 py-3.5 text-sm text-ink transition hover:border-gold hover:text-gold sm:w-auto"
              >
                {formatPhoneDisplay(site.phone)}
              </a>
            </Magnetic>
            <p className="hidden font-mono text-[10px] tracking-[0.22em] text-mute uppercase lg:block">
              Press ⌘K to jump
            </p>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-md md:order-2 md:max-w-none">
          <div className="absolute -inset-3 hidden rounded-[36px] bg-gold/10 blur-2xl sm:block" />
          <div className="relative overflow-hidden rounded-[20px] border border-line bg-black sm:rounded-[32px]">
            <Image
              src={site.photo}
              alt={site.name}
              width={900}
              height={1100}
              priority
              sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
              className="h-[280px] w-full object-cover object-[center_20%] sm:h-[380px] md:h-[440px] lg:h-full lg:min-h-[520px]"
            />
          </div>
        </div>
      </div>

      <dl className="relative mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:mt-16 lg:mt-20 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="min-w-0 bg-bg-soft px-3 py-4 sm:px-6 sm:py-7">
            <dt className="font-mono text-[9px] tracking-[0.12em] break-words text-mute uppercase sm:text-[10px] sm:tracking-[0.22em]">
              {stat.label}
            </dt>
            <dd className="font-display mt-2 text-2xl sm:mt-3 sm:text-4xl lg:text-5xl">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
