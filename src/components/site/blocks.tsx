import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { WhatsAppIcon } from "@/components/site/icons";
import { Reveal } from "@/components/site/reveal";
import { whatsappLink } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "eyebrow flex items-center gap-3",
          align === "center" && "justify-center",
          tone === "dark" ? "text-sindoor" : "text-marigold",
        )}
      >
        {index ? <span className="font-display text-sm tracking-normal italic">{index}</span> : null}
        {index ? <span aria-hidden className="h-px w-8 bg-current opacity-60" /> : null}
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 font-display text-[2.4rem] leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-[3.6rem]",
          tone === "dark" ? "text-ink" : "text-parchment",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-pretty sm:text-lg",
            tone === "dark" ? "text-ink-soft" : "text-parchment/70",
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}

export function PageHero({
  image,
  eyebrow,
  title,
  intro,
  deva,
  position = "50% 50%",
  children,
}: {
  image: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  deva?: string;
  position?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-night pt-36 pb-14 text-white md:min-h-[70svh] md:pb-20">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/55 to-night/30" />
      {deva ? (
        <span
          aria-hidden
          className="pointer-events-none absolute top-24 -right-4 -z-10 select-none font-deva text-[9rem] leading-none text-white/10 sm:text-[14rem]"
        >
          {deva}
        </span>
      ) : null}
      <div className="container-x">
        <Reveal>
          <p className="eyebrow text-marigold">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-display text-[2.9rem] leading-[1] tracking-tight text-balance sm:text-6xl md:text-7xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {intro}
            </p>
          ) : null}
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light" | "outline" | "outline-light";
  className?: string;
  external?: boolean;
}) {
  const styles = {
    primary: "bg-sindoor text-white hover:bg-sindoor-deep",
    light: "bg-parchment text-ink hover:bg-marigold-soft",
    outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-parchment",
    "outline-light": "border border-white/40 text-white hover:bg-white hover:text-ink",
  }[variant];
  const cls = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors",
    styles,
    className,
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function CtaBand({
  title = "Book your Kashi trip now",
  body = "Get 15% off when you book directly with us. Tell us your dates and we'll shape the journey around you.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ganga-deep text-parchment">
      <Image
        src="/images/ghats-lamps.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ganga-deep via-ganga-deep/85 to-ganga-deep/40" />
      <div className="container-x grid items-center gap-10 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
        <Reveal>
          <p className="eyebrow text-marigold">Limited offer · 15% off</p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl md:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-parchment/75">{body}</p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end">
          <ButtonLink href="/enquire" variant="light" className="md:w-64">
            Send an enquiry
          </ButtonLink>
          <ButtonLink
            href={whatsappLink("Namaste! I'd like to book a Kashi trip with the 15% offer.")}
            external
            variant="outline-light"
            className="md:w-64"
          >
            <WhatsAppIcon className="size-4" /> WhatsApp us
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
