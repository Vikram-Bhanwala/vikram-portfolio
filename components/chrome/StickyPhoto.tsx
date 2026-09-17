"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

const STICKY_TOP = 96;

export function StickyPhoto({ children }: { children: React.ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const readyRef = useRef(false);

  function update() {
    const wrap = wrapRef.current;
    const pin = pinRef.current;
    if (!readyRef.current || !wrap || !pin) return;

    if (!window.matchMedia("(min-width: 1024px)").matches) {
      pin.style.transform = "";
      return;
    }

    const wrapTop = wrap.getBoundingClientRect().top;
    const travel = Math.max(0, wrap.offsetHeight - pin.offsetHeight);
    const y = Math.min(Math.max(STICKY_TOP - wrapTop, 0), travel);
    pin.style.transform = `translate3d(0, ${y}px, 0)`;
  }

  useLenis(update);

  useEffect(() => {
    readyRef.current = true;
    update();
    window.addEventListener("resize", update);
    return () => {
      readyRef.current = false;
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative h-full min-w-0">
      <div ref={pinRef} className="lg:will-change-transform">
        {children}
      </div>
    </div>
  );
}
