import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "Plan a journey with WanderMate";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    image: "/images/river-clouds.jpg",
    kicker: "Plan a journey",
    title: "Every journey begins with",
    italic: "a conversation.",
  });
}
