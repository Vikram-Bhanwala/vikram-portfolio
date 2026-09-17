"use client";

import { useState } from "react";
import { site } from "@/lib/data";
import { Magnetic, SectionEyebrow } from "@/components/ui";
import { formatPhoneDisplay } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "Could not send");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <section id="contact" className="section-shell section-y">
      <SectionEyebrow index="08">Contact</SectionEyebrow>
      <div className="grid min-w-0 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="min-w-0">
          <h2 className="font-display display-h2">
            Have a store that needs faster checkout, payments, or a real full stack build?
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-mute sm:text-lg sm:leading-8">
            Send the brief. Call {formatPhoneDisplay(site.phone)} or email — I reply from Gurugram, usually the same working day.
          </p>
          <div className="mt-8 space-y-4 font-mono text-sm tracking-[0.04em] sm:mt-10">
            <a href={`mailto:${site.email}`} className="block break-all text-gold hover:text-gold-2">
              {site.email}
            </a>
            <a href={site.phoneHref} className="block hover:text-gold">
              {formatPhoneDisplay(site.phone)}
            </a>
            <a href={site.linkedin} className="block hover:text-gold" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={site.whatsapp} className="block hover:text-gold" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-bg-soft p-4 sm:rounded-3xl sm:p-7 lg:p-10">
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" className="hidden" />
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="font-mono text-[10px] tracking-[0.22em] text-mute uppercase">Name</span>
              <input
                required
                name="name"
                className="mt-2 w-full border-b border-line bg-transparent py-3 text-base outline-none focus:border-gold"
              />
            </label>
            <label className="block">
              <span className="font-mono text-[10px] tracking-[0.22em] text-mute uppercase">Email</span>
              <input
                required
                type="email"
                name="email"
                className="mt-2 w-full border-b border-line bg-transparent py-3 text-base outline-none focus:border-gold"
              />
            </label>
          </div>
          <label className="mt-5 block">
            <span className="font-mono text-[10px] tracking-[0.22em] text-mute uppercase">Project</span>
            <input
              name="project"
              placeholder="Magic Checkout, Shiprocket, PWA, API…"
              className="mt-2 w-full border-b border-line bg-transparent py-3 text-base outline-none placeholder:text-mute/50 focus:border-gold"
            />
          </label>
          <label className="mt-5 block">
            <span className="font-mono text-[10px] tracking-[0.22em] text-mute uppercase">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              className="mt-2 w-full resize-none border-b border-line bg-transparent py-3 text-base outline-none focus:border-gold"
            />
          </label>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Magnetic className="w-full sm:w-auto">
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-bg disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? "Sending…" : "Send brief"}
              </button>
            </Magnetic>
            {status === "sent" ? (
              <p className="text-sm text-emerald-400">Received. I’ll get back to you.</p>
            ) : null}
            {status === "error" ? <p className="text-sm text-red-400">{error}</p> : null}
          </div>
        </form>
      </div>
    </section>
  );
}
