import { ogContentType, ogImage, ogSize } from "@/lib/og";
import { allTrips, destinations } from "@/lib/destinations";

export const alt = "All WanderMate tours";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    image: "/images/temple-tree.jpg",
    position: "50% 40%",
    kicker: `${allTrips.length} tours · ${destinations.length} destinations`,
    title: "Every way",
    italic: "in.",
    line: "Private and small-group heritage journeys — filter by region, length, style and feeling.",
  });
}
