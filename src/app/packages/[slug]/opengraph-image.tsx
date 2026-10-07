import { ogContentType, ogImage, ogSize, oneLine } from "@/lib/og";
import { getPackage, packages } from "@/lib/packages";

export const alt = "A WanderMate journey";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPackage(slug)!;
  const words = p.name.split(" ");
  return ogImage({
    image: p.days[0]?.image ?? p.hero.image,
    position: p.days[0]?.position,
    kicker: `Varanasi · ${p.length}`,
    title: words.slice(0, -2).join(" "),
    italic: words.slice(-2).join(" "),
    line: oneLine(p.tagline),
  });
}
