import { ogContentType, ogImage, ogSize, oneLine } from "@/lib/og";
import { destinations, getDestination } from "@/lib/destinations";

export const alt = "A WanderMate destination";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDestination(slug)!;
  return ogImage({
    image: d.image ?? "/images/hero-ghats.jpg",
    kicker: `${d.group === "india" ? "India" : d.country} · ${d.trips.length} journeys`,
    title: d.name,
    line: oneLine(d.line),
  });
}
