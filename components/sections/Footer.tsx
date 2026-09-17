import Link from "next/link";
import { nav, site } from "@/lib/data";
import { formatPhoneDisplay } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="section-shell print-hide border-t border-line py-8 pb-[max(2rem,env(safe-area-inset-bottom,0px))] sm:py-10">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0">
          <p className="font-display text-2xl tracking-tight sm:text-4xl">{site.name}</p>
          <p className="mt-2 text-sm text-mute sm:text-base">
            {site.role} · {site.location}
          </p>
          <a href={site.phoneHref} className="mt-3 inline-block text-gold hover:text-gold-2">
            {formatPhoneDisplay(site.phone)}
          </a>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] tracking-[0.16em] text-mute uppercase sm:text-[11px] sm:tracking-[0.2em]">
          {nav.map((item) => (
            <Link key={item.id} href={item.href} className="hover:text-gold">
              {item.label}
            </Link>
          ))}
          <Link href="/resume" className="hover:text-gold">
            Resume
          </Link>
        </nav>
      </div>
      <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-sm text-mute sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}.</p>
        <a href={site.phoneHref} className="font-mono text-[10px] tracking-[0.2em] text-gold uppercase">
          {formatPhoneDisplay(site.phone)}
        </a>
      </div>
    </footer>
  );
}
