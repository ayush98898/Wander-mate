import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Wandermate Premium — two nights in Varanasi";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    image: "/images/premium/stock/hero-aarti.jpg",
    kicker: "Varanasi · 2 nights · 3 days",
    title: "Wandermate",
    italic: "Premium",
    line: "Our most popular journey: a boutique heritage stay, a private boat and seats beside the Aarti.",
  });
}
