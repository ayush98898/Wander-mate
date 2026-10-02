import { Marquee, MarqueeContent, MarqueeEdge, MarqueeItem } from "@/components/ui/marquee";
import { testimonials } from "@/lib/content";

/** Slow editorial review band (21st.dev Marquee). Pauses on hover / Space. */
export function Reviews() {
  return (
    <Marquee aria-label="Traveller reviews" pauseOnHover pauseOnKeyboard speed={22} gap="0rem">
      <MarqueeContent>
        {testimonials.map((t) => (
          <MarqueeItem key={t.name} asChild>
            <figure className="flex w-[22rem] flex-col justify-between border-r border-ink/12 px-8 py-2 sm:w-[30rem] md:px-12">
              <blockquote className="display text-[1.65rem] leading-[1.15] md:text-[2rem]">“{t.quote}”</blockquote>
              <figcaption className="label mt-8 text-smoke">
                {t.name} — {t.place}
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
