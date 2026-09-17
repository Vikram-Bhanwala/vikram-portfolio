"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { displayHost, screenshotUrl } from "@/lib/utils";

export function ProjectShot({
  url,
  name,
  accent,
  engine,
  priority = false,
}: {
  url: string;
  name: string;
  accent: string;
  engine?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative flex h-full min-h-[180px] flex-col overflow-hidden bg-[#12110c] sm:min-h-[240px]">
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate rounded-full bg-white/5 px-3 py-1 font-mono text-[10px] tracking-[0.08em] text-mute">
          {displayHost(url)}
        </span>
      </div>

      <div className="relative min-h-0 flex-1">
        {failed ? (
          <div
            className="flex h-full min-h-[200px] items-end p-8"
            style={{
              background: `linear-gradient(160deg, ${accent} 0%, #080807 78%)`,
            }}
          >
            <div>
              {engine ? (
                <p className="mb-3 font-mono text-[10px] tracking-[0.22em] text-white/70 uppercase">
                  {engine}
                </p>
              ) : null}
              <p className="font-display text-4xl text-white/90">{name}</p>
            </div>
          </div>
        ) : (
          <img
            src={screenshotUrl(url)}
            alt={`${name} live website`}
            className="h-full w-full object-cover object-top"
            loading={priority ? "eager" : "lazy"}
            onError={() => setFailed(true)}
            onLoad={(event) => {
              const image = event.currentTarget;
              if (image.naturalWidth < 400 || image.naturalHeight < 200) {
                setFailed(true);
              }
            }}
          />
        )}
      </div>

      {engine ? (
        <span className="absolute top-12 left-3 max-w-[calc(100%-1.5rem)] truncate rounded-full border border-white/15 bg-black/70 px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-gold uppercase backdrop-blur-md sm:top-14 sm:left-4">
          {engine}
        </span>
      ) : null}
    </div>
  );
}
