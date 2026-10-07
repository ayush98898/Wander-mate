import type { MetadataRoute } from "next";

export const dynamic = "force-static";

import { destinations } from "@/lib/destinations";
import { posts } from "@/lib/journal";
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
    ...packages.map((p) => page(`/packages/${p.slug}`, 0.9, p.days[0]?.image ?? p.hero.image)),
    ...journeys.filter((j) => !j.external).map((j) => page(`/journeys/${j.slug}`, 0.9, j.image)),
    ...destinations.map((d) => page(`/destinations/${d.slug}`, d.status === "Now" ? 0.8 : 0.6, d.image)),
    ...posts.map((p) => page(`/journal/${p.slug}`, 0.6, p.image)),
  ];
}
