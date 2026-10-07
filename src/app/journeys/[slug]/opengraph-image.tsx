import { ogContentType, ogImage, ogSize, oneLine } from "@/lib/og";
import { getJourney, journeys } from "@/lib/journeys";

export const alt = "A WanderMate journey";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return journeys.filter((j) => !j.external && j.slug !== "kashi-premium").map((j) => ({ slug: j.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const j = getJourney(slug)!;
  return ogImage({
    image: j.image,
    kicker: `${j.kind} · ${j.duration}`,
    title: j.name,
    line: oneLine(j.summary),
  });
}
