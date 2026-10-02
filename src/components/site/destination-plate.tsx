import Image from "next/image";

import type { Destination, Script } from "@/lib/destinations";
import { cn } from "@/lib/utils";

// Deep brand-navy variations — one per destination, all readable with bone text.
const tones = [
  "#072268", // kashi
  "#0b1d55", // braj
  "#0a2a5e", // rishikesh
  "#102062", // rajputana
  "#081b4f", // khajuraho
  "#0d2766", // hampi
  "#0a1f5a", // temple country
  "#062558", // odisha
  "#111d5c", // nepal
  "#05265a", // sri lanka
  "#0e1a52", // bhutan
  "#0b2360", // cambodia
  "#062a5e", // java & bali
];

// Ring centres: the stupa seen from different corners.
const rings = ["78% 112%", "12% -12%", "108% 30%", "45% 118%"];

const scriptFont: Record<Script, string> = {
  deva: "var(--font-tiro)",
  kannada: "var(--font-kannada)",
  tamil: "var(--font-tamil)",
  oriya: "var(--font-oriya)",
  sinhala: "var(--font-sinhala)",
  tibetan: "var(--font-tibetan)",
  khmer: "var(--font-khmer)",
  javanese: "var(--font-javanese)",
  // System fonts — these destinations all have photographs, so plates rarely render.
  gurmukhi: "serif",
  bengali: "serif",
  malayalam: "serif",
  gujarati: "serif",
  arabic: "serif",
  japanese: "serif",
  greek: "var(--font-display), serif",
  thai: "serif",
  latin: "var(--font-display), serif",
};

/**
 * A destination's visual: our own photography when we have it, otherwise a
 * designed plate — the place name in its own script over rings that echo a
 * stupa seen from above, with its coordinates. Swap in photography by adding
 * `image` to the destination.
 */
export function DestinationPlate({
  d,
  className,
  sizes = "33vw",
  priority,
  showName = true,
  variant = 0,
  image,
}: {
  d: Destination;
  className?: string;
  sizes?: string;
  priority?: boolean;
  showName?: boolean;
  /** Shifts the ring pattern so sibling plates for one place don't repeat. */
  variant?: number;
  /** A specific photo that overrides the destination's own. */
  image?: string;
}) {
  const photo = image ?? d.image;
  if (photo) {
    return (
      <div className={cn("relative overflow-hidden bg-ink", className)}>
        <Image
          src={photo}
          alt={`${d.name}, ${d.country}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-[1.4s] ease-[var(--ease-expo)] group-hover:scale-[1.05]"
        />
      </div>
    );
  }
  const ring = rings.at(variant % rings.length)!;
  return (
    <div
      role="img"
      aria-label={`${d.name}, ${d.country}`}
      className={cn("relative isolate overflow-hidden text-bone", className)}
      style={{
        backgroundColor: tones.at(d.tone % tones.length),
        backgroundImage:
          `repeating-radial-gradient(circle at ${ring}, transparent 0 22px, rgba(168,189,242,0.10) 22px 23px), radial-gradient(120% 90% at ${ring}, rgba(168,189,242,0.16), transparent 60%)`,
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-[4%] bottom-[-6%] leading-none whitespace-nowrap text-ochre-lit/25 transition-transform duration-[1.4s] ease-[var(--ease-expo)] group-hover:-translate-y-2"
        style={{ fontFamily: scriptFont[d.script], fontSize: "clamp(5rem, 13vw, 11rem)" }}
      >
        {d.native}
      </span>
      {showName ? (
        <div aria-hidden className="absolute inset-x-5 top-5 flex items-start justify-between gap-3">
          <span className="label text-bone/60">{d.country}</span>
          <span className="label text-right text-bone/45">{d.coords}</span>
        </div>
      ) : null}
    </div>
  );
}
