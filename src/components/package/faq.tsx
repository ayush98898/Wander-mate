import { Plus, Shirt, Smartphone, Users, Wallet, Waves, type LucideIcon } from "lucide-react";

import type { Faq as FaqItem } from "@/lib/packages";

const icons: Record<FaqItem["icon"], LucideIcon> = {
  users: Users,
  phone: Smartphone,
  shirt: Shirt,
  waves: Waves,
  wallet: Wallet,
  plus: Plus,
};

/** Native details/summary accordion — works without JavaScript and with the keyboard. */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="grid gap-x-12 border-t border-ink/15 md:grid-cols-2">
      {items.map((f) => {
        const Icon = icons[f.icon];
        return (
          <details key={f.q} className="group border-b border-ink/15">
            <summary className="flex min-h-11 cursor-pointer list-none items-center gap-5 py-6 [&::-webkit-details-marker]:hidden">
              <span className="grid size-11 shrink-0 place-items-center border border-ink/15 text-ochre transition-colors group-open:border-ochre group-open:bg-ochre group-open:text-bone">
                <Icon aria-hidden className="size-5" strokeWidth={1.5} />
              </span>
              <span className="display flex-1 text-[1.65rem] leading-tight">{f.q}</span>
              <Plus aria-hidden className="size-5 shrink-0 text-smoke transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <p className="pb-7 pl-16 leading-relaxed text-ink-2">{f.a}</p>
          </details>
        );
      })}
    </div>
  );
}
