"use client";

import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/site/icons";
import { whatsappLink } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Appears once the visitor has scrolled past the hero, so it never covers hero CTAs. */
export function WhatsAppFab() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink("Namaste WanderMate! I'd like to plan a journey.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with a Kashi companion on WhatsApp"
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
      className={cn(
        "group fixed right-4 bottom-4 z-30 flex h-12 items-center gap-3 bg-ink pr-4 pl-3.5 text-bone ring-1 ring-bone/15 transition-[opacity,transform,background-color] duration-500 hover:bg-ochre sm:right-6 sm:bottom-6",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <WhatsAppIcon className="size-5 text-[#25D366] group-hover:text-bone" />
      <span className="label hidden sm:inline">Chat with us</span>
    </a>
  );
}
