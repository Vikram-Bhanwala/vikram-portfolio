"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/data";

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function LocalTime() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const text = now
    ? new Intl.DateTimeFormat("en-IN", {
        timeZone: site.timezone,
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(now)
    : "--:--";

  const parts = now
    ? new Intl.DateTimeFormat("en-GB", {
        timeZone: site.timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
        .formatToParts(now)
        .reduce<Record<string, string>>((acc, part) => {
          if (part.type !== "literal") acc[part.type] = part.value;
          return acc;
        }, {})
    : null;

  return (
    <div className="tabular-nums">
      <span className="sr-only">
        Local time in {site.location}: {text}
      </span>
      <span aria-hidden="true">
        {parts
          ? `${pad(Number(parts.hour))}:${parts.minute}:${parts.second}`
          : "00:00:00"}
      </span>
    </div>
  );
}
