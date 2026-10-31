import { Plus } from "lucide-react";

/** Booking terms, folded: each one opens in place and the text stays word for word. */
export function BookingTerms({ terms }: { terms: { title: string; content: string }[] }) {
  return (
    <div className="border-t border-ink/12">
      {terms.map((t) => (
        <details key={t.title} className="group border-b border-ink/12">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <span className="display text-2xl md:text-3xl">{t.title}</span>
            <Plus aria-hidden className="size-5 shrink-0 text-ochre transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <p className="max-w-3xl pb-7 leading-relaxed text-ink-2">{t.content}</p>
        </details>
      ))}
    </div>
  );
}
