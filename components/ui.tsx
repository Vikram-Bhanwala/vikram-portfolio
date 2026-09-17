"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });

  return (
    <motion.div
      ref={ref}
      className={cn("min-w-0", className)}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionEyebrow({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex min-w-0 items-center gap-3 sm:gap-4">
      <span className="shrink-0 font-mono text-[10px] tracking-[0.22em] text-gold uppercase sm:text-[11px] sm:tracking-[0.28em]">{index}</span>
      <span className="h-px min-w-4 flex-1 bg-line" />
      <span className="shrink-0 font-mono text-[10px] tracking-[0.18em] text-mute uppercase sm:text-[11px] sm:tracking-[0.28em]">{children}</span>
    </div>
  );
}

export function Magnetic({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={cn("inline-block", className)}
      onMouseMove={(event) => {
        if (window.matchMedia("(pointer: coarse)").matches) return;
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        node.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "translate(0, 0)";
      }}
    >
      {children}
    </div>
  );
}

export function Marquee({ items }: { items: readonly string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line py-4 sm:py-5">
      <div className="marquee-track flex w-max gap-6 sm:gap-10">
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="font-mono text-[10px] tracking-[0.18em] text-mute uppercase sm:text-xs sm:tracking-[0.32em]"
          >
            {item}
            <span className="ml-10 text-gold">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
