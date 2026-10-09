import Image from "next/image";
import type { ReactNode } from "react";

import { SplitHeading } from "@/components/site/split-heading";

/** Full-bleed image hero used by inner pages. */
export function PageHero({
  image,
  label,
  title,
  intro,
  position = "50% 50%",
  children,
  tall = false,
}: {
  image: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  position?: string;
  children?: ReactNode;
  tall?: boolean;
}) {
  return (
    <section
      className={`relative isolate flex items-end overflow-hidden bg-ink text-bone ${tall ? "min-h-svh" : "min-h-[82svh]"}`}
    >
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="animate-kenburns -z-20 object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />
      <div className="wrap pt-32 pb-12 md:pb-16">
        <p className="label text-bone/75">{label}</p>
        <SplitHeading as="h1" onLoad className="display mt-5 max-w-6xl text-[3.4rem] sm:text-7xl md:text-8xl lg:text-[8.5rem]">
          {title}
        </SplitHeading>
        {intro ? <p className="mt-7 max-w-xl text-base leading-relaxed text-bone/80 md:text-lg">{intro}</p> : null}
        {children}
      </div>
    </section>
  );
}
