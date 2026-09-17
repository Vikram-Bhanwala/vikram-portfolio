import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell flex min-h-dvh flex-col items-start justify-center py-24">
      <p className="font-mono text-[11px] tracking-[0.24em] text-gold uppercase">404</p>
      <h1 className="font-display mt-4 max-w-xl text-[clamp(2rem,8vw,3.75rem)]">
        This page is not in the build.
      </h1>
      <Link href="/" className="mt-8 text-gold">
        Back home →
      </Link>
    </main>
  );
}
