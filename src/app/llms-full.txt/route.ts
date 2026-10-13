import { site } from "@/lib/content";
import { livePosts } from "@/lib/journal";
import { packages } from "@/lib/packages";
import { abs } from "@/lib/seo";

// Refreshed hourly so new guides are included on the day they go live.
export const revalidate = 3600;

/**
 * llms-full.txt: the full text of WanderMate's tours and Journal guides in plain text,
 * so AI assistants can answer questions from it and cite the right page.
 */
export function GET() {
  const tours = packages.map((p) => {
    const days = p.days.map((d) => `Day ${d.n}: ${d.title}. ${d.stops.map((s) => `${s.title}: ${s.note}`).join(" ")}`).join("\n");
    const faqs = p.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n");
    return `### ${p.name} (${p.length})\nURL: ${abs(`/packages/${p.slug}`)}\n${p.seo.description}\n\n${days}\n\nIncluded: ${p.included.join("; ")}.\nNot included: ${p.excluded.join("; ")}.\n\n${faqs}`;
  });
  const guides = livePosts()
    .filter((p) => p.index !== false)
    .map((p) => {
      const body = p.body
        .map((b) => (b.t === "h" ? `\n#### ${b.text}` : b.t === "p" ? b.text : b.t === "quote" ? `> ${b.text}` : ""))
        .filter(Boolean)
        .join("\n");
      const faqs = (p.faqs ?? []).map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n");
      return `### ${p.title}\nURL: ${abs(`/journal/${p.slug}`)}${p.published ? `\nPublished: ${p.published}` : ""}\n${p.answer ?? p.excerpt}\n${body}${faqs ? `\n\n${faqs}` : ""}`;
    });
  const text = `# ${site.name}: full text\n\n> ${site.description}\n\nWanderMate is a heritage travel company in Varanasi (Kashi), India. Contact: WhatsApp ${site.phoneDisplay}, ${site.email}. Summary map: ${abs("/llms.txt")}\n\n## Tours\n\n${tours.join("\n\n---\n\n")}\n\n## Journal guides and stories\n\n${guides.join("\n\n---\n\n")}\n`;
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
