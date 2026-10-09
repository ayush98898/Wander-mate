import { livePosts } from "@/lib/journal";
import { abs } from "@/lib/seo";

// New guides go live on their date; the feed refreshes hourly to carry them.
export const revalidate = 3600;

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** RSS for the Journal: the newest stories first, for feed readers and search crawlers. */
export function GET() {
  const posts = livePosts().filter((p) => p.index !== false);
  const items = posts
    .map((p) => {
      const url = abs(`/journal/${p.slug}`);
      return `    <item>
      <title>${esc(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${esc(p.answer ?? p.excerpt)}</description>
      <category>${esc(p.category)}</category>${p.published ? `\n      <pubDate>${new Date(`${p.published}T06:00:00+05:30`).toUTCString()}</pubDate>` : ""}
    </item>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The WanderMate Journal</title>
    <link>${abs("/journal")}</link>
    <atom:link href="${abs("/journal/feed.xml")}" rel="self" type="application/rss+xml" />
    <description>Heritage, rituals and festivals from Varanasi and the world, by WanderMate.</description>
    <language>en-IN</language>
${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
