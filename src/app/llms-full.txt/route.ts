import { site } from "@/lib/content";
import { livePosts, plain, type Block } from "@/lib/journal";
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
      const body = p.body.map(blockToText).filter(Boolean).join("\n");
      const faqs = (p.faqs ?? []).map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n");
      const points = p.takeaways?.length ? `\nKey points:\n${p.takeaways.map((t) => `- ${t}`).join("\n")}` : "";
      return `### ${p.title}\nURL: ${abs(`/journal/${p.slug}`)}${p.published ? `\nPublished: ${p.published}` : ""}\n${p.answer ?? p.excerpt}${points}\n${body}${faqs ? `\n\n${faqs}` : ""}`;
    });
  const text = `# ${site.name}: full text\n\n> ${site.description}\n\nWanderMate is a heritage travel company in Varanasi (Kashi), India. Contact: WhatsApp ${site.phoneDisplay}, ${site.email}. Summary map: ${abs("/llms.txt")}\n\n## Tours\n\n${tours.join("\n\n---\n\n")}\n\n## Journal guides and stories\n\n${guides.join("\n\n---\n\n")}\n`;
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}

/** A Journal block as plain text, tables as Markdown. */
function blockToText(b: Block): string {
  switch (b.t) {
    case "h":
      return `\n#### ${b.text}`;
    case "h3":
      return `\n##### ${b.text}`;
    case "p":
      return plain(b.text);
    case "quote":
      return `> ${b.text}`;
    case "list":
      return b.items.map((it, i) => `${b.ordered ? `${i + 1}.` : "-"} ${plain(it)}`).join("\n");
    case "table":
      return [b.caption ?? "", `| ${b.head.join(" | ")} |`, `| ${b.head.map(() => "---").join(" | ")} |`, ...b.rows.map((r) => `| ${r.map(plain).join(" | ")} |`), b.note ?? ""]
        .filter(Boolean)
        .join("\n");
    case "tip":
      return `${b.title ?? (b.kind === "avoid" ? "Avoid" : b.kind === "local" ? "Local knowledge" : "Good to know")}: ${plain(b.text)}`;
    case "img":
      return "";
  }
}
