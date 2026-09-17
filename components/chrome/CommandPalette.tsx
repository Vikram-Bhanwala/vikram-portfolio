"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { nav, projects, site } from "@/lib/data";

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const pages = [
      ...nav.map((item) => ({ label: item.label, href: item.href, group: "Navigate" })),
      { label: "Resume", href: "/resume", group: "Navigate" },
      ...projects.map((project) => ({
        label: project.name,
        href: `/work/${project.slug}`,
        group: "Work",
      })),
    ];
    const needle = query.trim().toLowerCase();
    if (!needle) return pages;
    return pages.filter((item) => item.label.toLowerCase().includes(needle));
  }, [query]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="print-hide fixed inset-0 z-[100] flex items-start justify-center bg-black/55 px-3 pt-[max(12vh,env(safe-area-inset-top,0px)+2rem)] pb-[env(safe-area-inset-bottom,0px)] backdrop-blur-sm sm:px-4 sm:pt-[18vh]"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-bg-soft shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="border-b border-line px-4 py-3">
          <p className="mb-2 font-mono text-[10px] tracking-[0.22em] text-mute uppercase">
            {site.name} · Jump
          </p>
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Work, skills, a project…"
            className="w-full bg-transparent text-base text-ink outline-none placeholder:text-mute sm:text-lg"
          />
        </div>
        <ul className="max-h-[min(50vh,20rem)] overflow-auto py-2 sm:max-h-80">
          {items.length === 0 ? (
            <li className="px-4 py-3 text-sm text-mute">Nothing matches.</li>
          ) : (
            items.map((item) => (
              <li key={`${item.group}-${item.href}`}>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    router.push(item.href);
                  }}
                  className="flex w-full min-w-0 items-center justify-between gap-3 px-4 py-2.5 text-left hover:bg-white/5"
                >
                  <span className="min-w-0 truncate">{item.label}</span>
                  <span className="shrink-0 font-mono text-[10px] tracking-[0.18em] text-mute uppercase">
                    {item.group}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
        <p className="hidden border-t border-line px-4 py-2 font-mono text-[10px] tracking-[0.16em] text-mute uppercase sm:block">
          Esc to close · Enter to go
        </p>
      </div>
    </div>
  );
}
