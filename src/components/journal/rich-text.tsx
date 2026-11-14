import Link from "next/link";
import { Fragment } from "react";

import { getPost, isLive } from "@/lib/journal";

/**
 * Inline text for the Journal: **bold** and [links](/path). Internal links use
 * the router; outside links open in a new tab. A link to a guide that isn't
 * published yet reads as plain text until its day comes.
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*.+?\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const bold = part.match(/^\*\*(.+)\*\*$/);
        if (bold) return <strong key={i} className="font-medium text-ink">{bold[1]}</strong>;
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          const guide = href.match(/^\/journal\/([^/#?]+)/)?.[1];
          if (guide) {
            const post = getPost(guide);
            if (!post || !isLive(post)) return <Fragment key={i}>{label}</Fragment>;
          }
          const cls = "text-ochre underline decoration-ochre/40 underline-offset-4 transition-colors hover:decoration-ochre";
          return href.startsWith("/") ? (
            <Link key={i} href={href} className={cls}>
              {label}
            </Link>
          ) : (
            <a key={i} href={href} target="_blank" rel="noopener" className={cls}>
              {label}
            </a>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
