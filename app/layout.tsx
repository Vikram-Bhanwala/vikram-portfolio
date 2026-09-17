import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Outfit } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";
import { Providers } from "@/components/chrome/Providers";
import { Sidebar } from "@/components/chrome/Sidebar";
import { MobileNav } from "@/components/chrome/MobileNav";
import { Grain } from "@/components/chrome/Grain";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const title = `${site.name} — ${site.role}`;
const description = site.subhead;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#080807",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "Vikram Bhanwala",
    "Full Stack Developer",
    "PHP",
    "Node.js",
    "Next.js",
    "eCommerce",
    "Magic Checkout",
    "Shiprocket",
    "Razorpay",
    "AWS",
    "Gurugram",
  ],
  authors: [{ name: site.name, url: site.linkedin }],
  openGraph: {
    title,
    description,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${serif.variable} ${plex.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-clip bg-bg text-ink">
        <Grain />
        <Providers>
          <Sidebar />
          <MobileNav />
          <div className="min-w-0 lg:pl-[88px]">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
