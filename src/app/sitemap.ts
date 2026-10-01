import type { MetadataRoute } from "next";

import { site } from "@/lib/content";
import { posts } from "@/lib/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/packages", "/banaras-unfiltered", "/experiences", "/plan", "/journal", "/about", "/enquire"];
  return [
    ...routes.map((r) => ({ url: `${site.url}${r}` })),
    ...posts.map((p) => ({ url: `${site.url}/journal/${p.slug}` })),
  ];
}
