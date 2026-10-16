import type { MetadataRoute } from "next";

import { site } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WanderMate — Heritage & Cultural Journeys",
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f5f2ec",
    theme_color: "#072268",
    icons: [{ src: "/images/logo-mark.png", sizes: "581x618", type: "image/png" }],
  };
}
