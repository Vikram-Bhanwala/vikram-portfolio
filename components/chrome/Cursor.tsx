"use client";

import { useEffect, useState } from "react";

export function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-on");

    const move = (event: PointerEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
      const target = event.target as HTMLElement | null;
      const interactive = Boolean(
        target?.closest("a, button, input, textarea, [data-cursor='hover']"),
      );
      setHover(interactive);
    };

    window.addEventListener("pointermove", move);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.classList.remove("cursor-on");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="print-hide pointer-events-none fixed top-0 left-0 z-[90] mix-blend-difference"
      style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-ink transition-all duration-200 ${
          hover ? "h-14 w-14 bg-ink/10" : "h-3 w-3 bg-ink"
        }`}
      />
    </div>
  );
}
