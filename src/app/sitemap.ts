import type { MetadataRoute } from "next";

// New Journal guides go live on their date; rebuild the sitemap hourly to include them.
export const revalidate = 3600;

import { destinations } from "@/lib/destinations";
import { livePosts } from "@/lib/journal";
import { journeys } from "@/lib/journeys";
import { packages } from "@/lib/packages";
import { abs } from "@/lib/seo";

/** Every public page, with its lead photograph so images can be indexed too. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  type Entry = MetadataRoute.Sitemap[number];
  const page = (path: string, priority: number, image?: string, changeFrequency: Entry["changeFrequency"] = "monthly"): Entry => ({
    url: abs(path),
    lastModified: now,
    changeFrequency,
    priority,
    ...(image && { images: [abs(image)] }),
  });

  return [
    page("/", 1, "/images/hero-ghats.jpg", "weekly"),
    page("/journeys", 0.9, "/images/temple-tree.jpg", "weekly"),
    page("/destinations", 0.8, "/images/ghats-panorama.jpg"),
    page("/experiences", 0.7, "/images/aarti-priest.jpg"),
    page("/journal", 0.7, "/images/priest-river.jpg", "weekly"),
    page("/about", 0.5, "/images/group.jpg"),
    page("/plan", 0.6, "/images/river-clouds.jpg"),
    page("/privacy", 0.2, undefined, "yearly"),
    ...packages.map((p) => page(`/packages/${p.slug}`, 0.9, p.days[0]?.image ?? p.hero.image)),
    ...journeys.filter((j) => !j.external && !j.page).map((j) => page(`/journeys/${j.slug}`, 0.9, j.image)),
    ...destinations.map((d) => page(`/destinations/${d.slug}`, d.status === "Now" ? 0.8 : 0.6, d.image)),
    ...livePosts()
      .filter((p) => p.index !== false)
      .map((p) => ({
        ...page(`/journal/${p.slug}`, 0.7, p.image),
        ...(p.published && { lastModified: new Date(p.updated ?? p.published) }),
      })),
  ];
}
