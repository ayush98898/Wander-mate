import {
  Marquee,
  MarqueeContent,
  MarqueeEdge,
  MarqueeItem,
} from "@/components/ui/marquee";
import { testimonials } from "@/lib/content";

function Stars() {
  return (
    <span className="tracking-[0.2em] text-marigold" aria-label="5 out of 5 stars">
      ★★★★★
    </span>
  );
}

/** Auto-scrolling review wall (21st.dev Marquee). Pauses on hover / Space key. */
export function Testimonials() {
  return (
    <Marquee
      aria-label="Traveller reviews"
      pauseOnHover
      pauseOnKeyboard
      speed={28}
      gap="1.25rem"
      className="py-2"
    >
      <MarqueeContent>
        {testimonials.map((t) => (
          <MarqueeItem key={t.name} asChild>
            <figure className="flex w-[19rem] flex-col justify-between rounded-2xl border border-ink/10 bg-card p-6 shadow-[0_1px_0_rgba(28,21,17,0.04)] sm:w-[24rem] sm:p-7">
              <div>
                <Stars />
                <p className="mt-3 font-display text-xl leading-snug">{t.title}</p>
                <blockquote className="mt-3 line-clamp-6 text-[0.95rem] leading-relaxed text-ink-soft">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-4">
                <span className="grid size-9 place-items-center rounded-full bg-sand font-display text-sindoor">
                  {t.name.charAt(0)}
                </span>
                <span className="text-sm">
                  <span className="block font-semibold">{t.name}</span>
                  <span className="text-ink-muted">{t.place}</span>
                </span>
              </figcaption>
            </figure>
          </MarqueeItem>
        ))}
      </MarqueeContent>
      <MarqueeEdge side="left" size="sm" />
      <MarqueeEdge side="right" size="sm" />
    </Marquee>
  );
}
