import { site } from "@/lib/content";
import { destinations } from "@/lib/destinations";
import { livePosts } from "@/lib/journal";
import { packages } from "@/lib/packages";
import { abs } from "@/lib/seo";

// Refreshed hourly so new Journal guides are listed on the day they go live.
export const revalidate = 3600;

/**
 * llms.txt: a plain-text map of the site for AI assistants and answer engines,
 * so they can find the right page (and quote it accurately) without crawling everything.
 */
export function GET() {
  const tours = packages.map((p) => `- [${p.name}](${abs(`/packages/${p.slug}`)}): ${p.length}. ${p.seo.description}`);
  const kashi = destinations.find((d) => d.slug === "kashi");
  const guides = livePosts()
    .filter((p) => p.index !== false)
    .map((p) => `- [${p.title}](${abs(`/journal/${p.slug}`)}): ${p.answer ?? p.excerpt}`);
  const body = `# ${site.name}

> ${site.description}

WanderMate is a heritage travel company based in Varanasi (Kashi), India, founded by Ayush Singh, Ritesh Singh and Vineet. It runs private and small-group journeys in Varanasi and plans heritage journeys across India and abroad. Bookings and questions: WhatsApp ${site.phoneDisplay}.

## Varanasi tours

${tours.join("\n")}

## Destinations

- [All destinations](${abs("/destinations")})${kashi ? `\n- [${kashi.name} (Varanasi)](${abs(`/destinations/${kashi.slug}`)}): ${kashi.line}` : ""}
- [All tours](${abs("/journeys")})

## Journal: guides and stories

${guides.join("\n")}

## Contact

- [Plan a journey](${abs("/plan")})
- [About WanderMate](${abs("/about")})
- Instagram: ${site.instagramHandle}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
