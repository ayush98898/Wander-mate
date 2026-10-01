import type { MetadataRoute } from "next";

import { site } from "@/lib/content";
import { posts } from "@/lib/journal";
import { destinations } from "@/lib/destinations";
import { journeys } from "@/lib/journeys";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/destinations", "/journeys", "/experiences", "/plan", "/journal", "/about"];
  return [
    ...routes.map((r) => ({ url: `${site.url}${r}` })),
    ...journeys.filter((j) => !j.external).map((j) => ({ url: `${site.url}/journeys/${j.slug}` })),
    ...destinations.map((d) => ({ url: `${site.url}/destinations/${d.slug}` })),
    ...posts.map((p) => ({ url: `${site.url}/journal/${p.slug}` })),
  ];
}
