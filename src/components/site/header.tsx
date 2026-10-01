"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Logo } from "@/components/site/logo";
import { nav, site } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on navigation
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <a
        href={site.devDeepawaliUrl}
        target="_blank"
        rel="noreferrer"
        className="relative z-50 block bg-sindoor-deep px-4 py-2 text-center text-[0.78rem] font-medium tracking-wide text-parchment transition-colors hover:bg-sindoor"
      >
        <span className="mr-2 inline-block size-1.5 -translate-y-px animate-pulse rounded-full bg-marigold" />
        Dev Deepawali 2026 — bookings now open
        <span className="ml-2 underline underline-offset-4">Reserve your ghat view →</span>
      </a>

      <header
        className={cn(
          "sticky top-0 z-40 -mb-[72px] h-[72px] transition-[background-color,box-shadow,color] duration-300",
          solid
            ? "bg-parchment/90 text-ink shadow-[0_1px_0_rgba(28,21,17,0.08)] backdrop-blur-md"
            : "bg-transparent text-white",
        )}
      >
        <div className="container-x flex h-full items-center justify-between gap-6">
          <Logo tone={solid ? "dark" : "light"} />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-[0.9rem] font-medium">
              {nav.map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "link-underline pb-0.5 transition-opacity",
                        active ? "opacity-100" : "opacity-80 hover:opacity-100",
                        active && "bg-[length:100%_1px]",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/enquire"
              className={cn(
                "hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-colors sm:inline-flex",
                solid
                  ? "bg-sindoor text-white hover:bg-sindoor-deep"
                  : "bg-white text-ink hover:bg-marigold-soft",
              )}
            >
              Enquire now
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-full lg:hidden"
            >
              {open ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-0 z-30 overflow-y-auto bg-parchment pt-[120px] lg:hidden"
      >
        <nav aria-label="Mobile" className="container-x pb-12">
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-4 font-display text-3xl"
                >
                  {item.label}
                  <span aria-hidden className="text-base text-sindoor">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/enquire"
            className="mt-8 flex w-full items-center justify-center rounded-full bg-sindoor px-6 py-4 font-semibold text-white"
          >
            Enquire now
          </Link>
        </nav>
      </div>
    </>
  );
}
