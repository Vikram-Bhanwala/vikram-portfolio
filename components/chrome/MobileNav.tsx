"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { nav, site } from "@/lib/data";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) lenis?.stop();
    else lenis?.start();
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [open, lenis]);

  return (
    <>
      <header className="print-hide fixed top-0 right-0 left-0 z-[60] flex items-center justify-between border-b border-line bg-bg/85 px-4 pt-[max(0.75rem,env(safe-area-inset-top,0px))] pb-3 backdrop-blur-md sm:px-5 lg:hidden">
        <Link href="/" className="min-w-0 truncate font-mono text-[10px] tracking-[0.22em] text-gold uppercase sm:text-xs sm:tracking-[0.28em]">
          {site.short} — {site.name.split(" ")[0]}
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="relative h-11 w-11 shrink-0"
        >
          <span
            className={`absolute top-5 right-3 left-3 h-px bg-ink transition ${open ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span
            className={`absolute top-7 right-3 left-3 h-px bg-ink transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </button>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] overflow-y-auto bg-bg pt-[calc(4.75rem+env(safe-area-inset-top,0px))] pb-[max(2rem,env(safe-area-inset-bottom,0px))] lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 sm:px-6">
              {nav.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * index }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display block py-2 text-[clamp(1.85rem,9vw,3.25rem)] tracking-tight"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 * nav.length }}
              >
                <Link
                  href="/resume"
                  onClick={() => setOpen(false)}
                  className="font-display block py-2 text-[clamp(1.85rem,9vw,3.25rem)] tracking-tight"
                >
                  Resume
                </Link>
              </motion.div>
            </nav>
            <div className="mt-10 space-y-2 px-5 font-mono text-xs tracking-[0.18em] text-mute uppercase sm:px-6">
              <a href={site.phoneHref} className="block text-gold">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="block break-all normal-case tracking-normal">
                {site.email}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
