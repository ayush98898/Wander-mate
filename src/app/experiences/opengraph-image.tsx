import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "WanderMate experiences";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    image: "/images/aarti-priest.jpg",
    kicker: "Experiences · from 04:30 to midnight",
    title: "Moments worth",
    italic: "the journey.",
    line: "Sunrise boats, the Ganga Aarti, weavers\u2019 lanes and food walks — alone or added to any trip.",
  });
}
