import { ogContentType, ogImage, ogSize } from "@/lib/og";
import { beyond, india } from "@/lib/destinations";

export const alt = "WanderMate destinations";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    image: "/images/ghats-panorama.jpg",
    kicker: `${india.length} in India · ${beyond.length} beyond`,
    title: "Where the stories",
    italic: "live.",
    line: "From Kashi, Braj and Rajputana to Angkor, Kyoto, Petra and Machu Picchu.",
  });
}
