import { site } from "@/lib/data";

export function PrintButton() {
  return (
    <a
      href={site.resumePdf}
      target="_blank"
      rel="noreferrer"
      className="inline-flex w-full items-center justify-center rounded-full border border-line px-5 py-3 text-sm hover:border-gold print:hidden sm:w-auto"
    >
      Print / Save PDF
    </a>
  );
}
