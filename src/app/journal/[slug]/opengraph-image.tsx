import { ogContentType, ogImage, ogSize, oneLine } from "@/lib/og";
import { getPost, posts } from "@/lib/journal";

export const alt = "A story from the WanderMate Journal";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug)!;
  return ogImage({
    image: post.image,
    position: post.imagePosition,
    kicker: `${post.category} · ${post.place}`,
    title: post.title,
    line: oneLine(post.excerpt),
  });
}
