"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { InstagramIcon, WhatsAppIcon } from "@/components/site/icons";
import { nav, site, whatsappLink } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [preview, setPreview] = useState(0);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  // Solid after the hero; hide while scrolling down, reveal on scroll up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      const hide = y > 400 && y > last;
      setHidden(hide);
      // Lets sticky bars further down sit just under the header while it shows.
      document.documentElement.dataset.head = hide ? "hidden" : "shown";
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (open) firstLink.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        menuBtn.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled && !open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,color] duration-500 ease-[var(--ease-expo)]",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
          solid ? "bg-bone/95 text-ink backdrop-blur-sm" : "bg-transparent text-bone",
          open && "text-bone",
        )}
      >
        <div className="wrap grid h-16 grid-cols-[1fr_auto_1fr] items-center md:h-20">
          <button
            ref={menuBtn}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            className="label group flex min-h-11 items-center gap-3 justify-self-start"
          >
            <span aria-hidden className="relative block h-3 w-6">
              <span
                className={cn(
                  "absolute left-0 h-px w-6 bg-current transition-transform duration-500",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px bg-current transition-all duration-500",
                  open ? "top-1.5 w-6 -rotate-45" : "top-3 w-4 group-hover:w-6",
                )}
              />
            </span>
            {open ? "Close" : "Menu"}
          </button>

          <Link href="/" aria-label="WanderMate — home" className="text-[0.95rem] font-normal tracking-[0.42em] uppercase md:text-[1.05rem]">
            WanderMate
          </Link>

          <Link href="/plan" className="label ul hidden justify-self-end sm:inline">
            Enquire
          </Link>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-0 z-40 overflow-y-auto bg-ink text-bone"
            initial={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={reduce ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
            exit={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="wrap grid min-h-full gap-10 pt-28 pb-10 md:grid-cols-[1.3fr_1fr] md:gap-16 md:pt-32">
              <nav aria-label="Main">
                <ol>
                  {nav.map((item, i) => (
                    <li key={item.href} className="border-b border-bone/12">
                      <Link
                        ref={i === 0 ? firstLink : undefined}
                        href={item.href}
                        onMouseEnter={() => setPreview(i)}
                        onFocus={() => setPreview(i)}
                        aria-current={pathname === item.href ? "page" : undefined}
                        className="group flex items-baseline gap-5 py-3 md:py-4"
                      >
                        <span className="display text-[2.6rem] transition-[color,transform] duration-500 group-hover:translate-x-3 group-hover:text-ochre-lit sm:text-6xl md:text-7xl">
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </nav>

              <div className="flex flex-col justify-between gap-10">
                <div className="relative hidden aspect-[4/5] overflow-hidden md:block">
                  {nav.map((item, i) => (
                    <Image
                      key={item.href}
                      src={item.image}
                      alt=""
                      fill
                      sizes="40vw"
                      className={cn(
                        "object-cover transition-[opacity,transform] duration-700",
                        preview === i ? "scale-100 opacity-100" : "scale-105 opacity-0",
                      )}
                    />
                  ))}
                </div>
                <div className="grid gap-6 text-sm sm:grid-cols-2">
                  <div>
                    <p className="label text-bone/50">Talk to a Kashi companion</p>
                    <a
                      href={whatsappLink("Namaste WanderMate! I'd like to plan a journey.")}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 flex items-center gap-2 hover:text-ochre-lit"
                    >
                      <WhatsAppIcon className="size-4" /> {site.phoneDisplay}
                    </a>
                  </div>
                  <div>
                    <p className="label text-bone/50">Follow</p>
                    <a
                      href={site.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 flex items-center gap-2 hover:text-ochre-lit"
                    >
                      <InstagramIcon className="size-4" /> {site.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
