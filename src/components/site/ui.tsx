import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "line" | "light" | "line-light";
  className?: string;
  external?: boolean;
  arrow?: boolean;
};

/** Rectangular, 0-radius button link (Swiss editorial). */
export function Btn({ href, children, variant = "solid", className, external, arrow = true }: BtnProps) {
  const styles = {
    solid: "bg-ink text-bone hover:bg-ochre",
    line: "border border-ink text-ink hover:bg-ink hover:text-bone",
    light: "bg-bone text-ink hover:bg-ochre-lit",
    "line-light": "border border-bone/60 text-bone hover:bg-bone hover:text-ink",
  }[variant];
  const cls = cn(
    "group label inline-flex min-h-12 items-center justify-between gap-6 px-6 py-4 transition-colors duration-300",
    styles,
    className,
  );
  const inner = (
    <>
      <span>{children}</span>
      {arrow ? (
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      ) : null}
    </>
  );
  if (external || href.startsWith("http") || href.startsWith("tel:")) {
    return (
      <a href={href} target={href.startsWith("tel:") ? undefined : "_blank"} rel="noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Mono eyebrow with an index number: "01 / Journeys". */
export function Eyebrow({
  index,
  children,
  className,
}: {
  index?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("label flex items-center gap-3", className)}>
      {index ? <span className="opacity-60">{index}</span> : null}
      {index ? <span aria-hidden className="h-px w-6 bg-current opacity-40" /> : null}
      <span>{children}</span>
    </p>
  );
}
