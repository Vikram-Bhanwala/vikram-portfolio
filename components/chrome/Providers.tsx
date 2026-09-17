"use client";

import { ReactLenis } from "lenis/react";
import { Cursor } from "@/components/chrome/Cursor";
import { CommandPalette } from "@/components/chrome/CommandPalette";
import { ScrollProgress } from "@/components/chrome/ScrollProgress";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.09, duration: 1.15, smoothWheel: true, syncTouch: false }}
    >
      <ScrollProgress />
      <Cursor />
      <CommandPalette />
      {children}
    </ReactLenis>
  );
}
