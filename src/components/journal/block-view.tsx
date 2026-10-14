import { Compass, Info, TriangleAlert } from "lucide-react";
import Image from "next/image";

import { RichText } from "@/components/journal/rich-text";
import { headingId, type Block } from "@/lib/journal";

const tipStyle = {
  local: { label: "From Kashi", Icon: Compass, cls: "bg-ink text-bone", accent: "text-ochre-lit", body: "text-bone/80 [&_a]:text-ochre-lit [&_strong]:text-bone" },
  know: { label: "Good to know", Icon: Info, cls: "bg-paper text-ink", accent: "text-ochre", body: "text-ink-2" },
  avoid: { label: "Avoid", Icon: TriangleAlert, cls: "border border-ink/15 text-ink", accent: "text-[#a4321b]", body: "text-ink-2" },
} as const;

/** One block of a Journal story. */
export function BlockView({ b, first }: { b: Block; first?: boolean }) {
  switch (b.t) {
    case "p":
      return (
        <p
          className={
            "mb-7 text-[1.15rem] leading-[1.75] text-ink-2 " +
            (first
              ? "first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:font-display first-letter:text-[4.6rem] first-letter:leading-[0.8] first-letter:text-ochre"
              : "")
          }
        >
          <RichText text={b.text} />
        </p>
      );
    case "h":
      return (
        <h2 id={headingId(b.text)} className="display mt-16 mb-6 scroll-mt-28 text-[2.2rem] leading-[1.1] text-balance text-ink md:text-[2.6rem]">
          {b.text}
        </h2>
      );
    case "h3":
      return <h3 className="mt-10 mb-4 text-[1.2rem] font-medium tracking-[-0.005em] text-ink">{b.text}</h3>;
    case "quote":
      return (
        <figure className="my-14 border-l-2 border-ochre pl-6 md:-ml-8 md:pl-8">
          <blockquote className="display text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.2] text-ink italic">&ldquo;{b.text}&rdquo;</blockquote>
          {b.cite ? <figcaption className="label mt-5 text-smoke">{b.cite}</figcaption> : null}
        </figure>
      );
    case "img":
      return (
        <figure className="my-14">
          <div className="relative aspect-[3/2] overflow-hidden bg-ink">
            <Image src={b.src} alt={b.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
          </div>
          {b.caption || b.credit ? (
            <figcaption className="mt-3 flex flex-wrap justify-between gap-x-6 gap-y-1 text-sm leading-relaxed text-smoke">
              {b.caption ? <span>{b.caption}</span> : null}
              {b.credit ? <span className="label text-[0.65rem] text-smoke/80">{b.credit}</span> : null}
            </figcaption>
          ) : null}
        </figure>
      );
    case "list":
      return b.ordered ? (
        <ol className="mb-8 space-y-0 border-t border-ink/12">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-5 border-b border-ink/12 py-4 text-[1.08rem] leading-[1.65] text-ink-2">
              <span className="display w-7 shrink-0 text-2xl leading-[1.15] text-ochre tabular-nums">{i + 1}</span>
              <span className="min-w-0">
                <RichText text={it} />
              </span>
            </li>
          ))}
        </ol>
      ) : (
        <ul className="mb-8 space-y-3">
          {b.items.map((it, i) => (
            <li key={i} className="flex gap-4 text-[1.08rem] leading-[1.65] text-ink-2">
              <span aria-hidden className="mt-[0.8em] h-px w-4 shrink-0 bg-ochre" />
              <span className="min-w-0">
                <RichText text={it} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <figure className="my-10">
          {b.caption ? <figcaption className="label mb-4 text-ochre">{b.caption}</figcaption> : null}
          {/* Phones: each row as a small card. */}
          <dl className="border-t-2 border-ink sm:hidden">
            {b.rows.map((r, i) => (
              <div key={i} className="border-b border-ink/12 py-4">
                <dt className="font-medium text-ink">
                  <RichText text={r[0]} />
                </dt>
                {r.slice(1).map((c, j) => (
                  <dd key={j} className="mt-1.5 text-[0.98rem] leading-snug text-ink-2">
                    {b.head.length > 2 ? <span className="label mr-2 text-[0.62rem] text-smoke">{b.head[j + 1]}</span> : null}
                    <RichText text={c} />
                  </dd>
                ))}
              </div>
            ))}
          </dl>
          <div className="hidden overflow-x-auto border-t-2 border-ink sm:block">
            <table className="w-full border-collapse text-left text-[0.98rem] tabular-nums">
              <thead>
                <tr className="border-b border-ink/20">
                  {b.head.map((h) => (
                    <th key={h} scope="col" className="label px-3 py-3 align-bottom font-normal text-smoke first:pl-0">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.rows.map((r, i) => (
                  <tr key={i} className="border-b border-ink/12 align-top">
                    {r.map((c, j) =>
                      j === 0 ? (
                        <th key={j} scope="row" className="px-3 py-3.5 font-medium text-ink first:pl-0">
                          <RichText text={c} />
                        </th>
                      ) : (
                        <td key={j} className="px-3 py-3.5 leading-snug text-ink-2">
                          <RichText text={c} />
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {b.note ? <p className="mt-3 text-sm leading-relaxed text-smoke">{b.note}</p> : null}
        </figure>
      );
    case "tip": {
      const s = tipStyle[b.kind];
      return (
        <aside className={`my-10 px-6 py-6 md:px-8 md:py-7 ${s.cls}`}>
          <p className={`label flex items-center gap-2.5 ${s.accent}`}>
            <s.Icon aria-hidden className="size-4" />
            {b.title ?? s.label}
          </p>
          <p className={`mt-3 text-[1.05rem] leading-relaxed ${s.body}`}>
            <RichText text={b.text} />
          </p>
        </aside>
      );
    }
  }
}
