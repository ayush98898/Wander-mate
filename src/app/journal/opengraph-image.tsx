import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "The WanderMate Journal";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    image: "/images/priest-river.jpg",
    kicker: "The Journal",
    title: "Heritage,",
    italic: "introduced.",
    line: "Rituals, festivals and the stories behind the places we travel.",
  });
}
