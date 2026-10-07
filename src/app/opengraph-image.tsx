import { ogContentType, ogImage, ogSize } from "@/lib/og";
import { site } from "@/lib/content";

export const alt = "WanderMate — heritage and cultural journeys across India and the world";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    image: "/images/hero-ghats.jpg",
    kicker: "Heritage journeys · India & the world",
    title: "Feel the",
    italic: "centuries.",
    line: site.tagline,
  });
}
