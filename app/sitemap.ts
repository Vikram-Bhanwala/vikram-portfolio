import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/resume`, lastModified: new Date() },
    ...projects.map((project) => ({
      url: `${base}/work/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
