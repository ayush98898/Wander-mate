import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="WanderMate home"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "grid size-10 place-items-center rounded-full transition-colors",
          tone === "dark" ? "bg-ink" : "bg-white/10 ring-1 ring-white/25",
        )}
      >
        <Image
          src="/images/logo-mark.png"
          alt=""
          width={28}
          height={30}
          className="h-[30px] w-auto"
          priority
        />
      </span>
      <span
        className={cn(
          "font-display text-[1.35rem] leading-none tracking-tight",
          tone === "dark" ? "text-ink" : "text-white",
        )}
      >
        Wander
        <span className={cn("italic", tone === "dark" ? "text-sindoor" : "text-marigold")}>mate</span>
      </span>
    </Link>
  );
}
