"use client";

import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/data";
import { LocalTime } from "@/components/chrome/LocalTime";
import { formatPhoneDisplay } from "@/lib/utils";

export function Sidebar() {
  return (
    <aside className="print-hide fixed inset-y-0 left-0 z-50 hidden w-[88px] flex-col justify-between overflow-y-auto border-r border-line bg-bg/80 px-3 py-6 backdrop-blur-md lg:flex">
      <Link href="/" className="flex flex-col items-center gap-3">
        <span className="h-11 w-11 overflow-hidden rounded-full border border-gold/40">
          <Image
            src={site.photo}
            alt={site.name}
            width={44}
            height={44}
            className="h-full w-full object-cover object-[center_20%]"
          />
        </span>
      </Link>

      <p className="pointer-events-none origin-center rotate-180 text-center font-mono text-[10px] tracking-[0.42em] text-mute uppercase [writing-mode:vertical-rl]">
        {site.name}
      </p>

      <div className="flex flex-col items-center gap-6">
        <nav className="flex flex-col items-center gap-4">
          {nav.slice(0, 4).map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="font-mono text-[10px] tracking-[0.2em] text-mute uppercase [writing-mode:vertical-rl] hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={site.phoneHref}
          className="font-mono text-[9px] tracking-[0.12em] text-gold [writing-mode:vertical-rl]"
        >
          {formatPhoneDisplay(site.phone)}
        </a>
        <div className="font-mono text-[10px] tracking-[0.12em] text-mute">
          <LocalTime />
        </div>
      </div>
    </aside>
  );
}
