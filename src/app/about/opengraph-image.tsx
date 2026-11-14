import { ogContentType, ogImage, ogSize } from "@/lib/og";

export const alt = "About WanderMate";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return ogImage({
    image: "/images/group.jpg",
    position: "50% 35%",
    kicker: "About WanderMate",
    title: "Local roots,",
    italic: "modern ease.",
    line: "Founded in Varanasi by Ayush Singh, Ritesh Singh and Vineet.",
  });
}
