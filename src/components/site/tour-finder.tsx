"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { useId, useState } from "react";

import { TripCard } from "@/components/site/trip-card";
import { feelings, whatsappLink, type FeelingId } from "@/lib/content";
import { allTrips, destinations, type Destination, type Format, type TripWithPlace } from "@/lib/destinations";
import { cn } from "@/lib/utils";

type Region = "all" | "india" | "beyond";

const regions: { id: Region; label: string }[] = [
  { id: "all", label: "All" },
  { id: "india", label: "India" },
  { id: "beyond", label: "The world" },
];

const lengths = [
  { id: "short", label: "Up to 2 nights", test: (n: number) => n <= 2 },
  { id: "mid", label: "3 – 4 nights", test: (n: number) => n >= 3 && n <= 4 },
  { id: "long", label: "5 – 6 nights", test: (n: number) => n >= 5 && n <= 6 },
  { id: "week", label: "A week or more", test: (n: number) => n >= 7 },
] as const;

const styles: { id: Format; label: string }[] = [
  { id: "Private", label: "Private" },
  { id: "Circuit", label: "Circuit" },
  { id: "Festival", label: "Festival" },
  { id: "Solo Series", label: "Solo Series" },
];

// Bookable places first, then the ones opening soon, then on request.
const statusOrder: Record<Destination["status"], number> = { Now: 0, "Opening 2027": 1, "Coming later": 2, "On request": 3 };

/** Nights from a duration like "3N", "2 – 3N" or "2N · 3D" (the shortest version). */
const nights = (t: TripWithPlace) => Number(t.duration.match(/\d+/)?.[0] ?? 0);

const sorted = [...allTrips].sort((a, b) => statusOrder[a.destination.status] - statusOrder[b.destination.status]);

export type TourFilters = { region?: string; dest?: string; len?: string; style?: string; feel?: string };

/**
 * Every tour, with filters for region, destination, length, style and feeling.
 * The server renders the first view from the URL (?region=india&len=mid…); after
 * that, filtering happens in place and the URL is kept in step, so a filtered
 * view can be shared or bookmarked. The result count is announced to screen readers.
 */
export function TourFinder({ initial }: { initial: TourFilters }) {
  const uid = useId();
  const [open, setOpen] = useState(false);
  const [f, setF] = useState<TourFilters>(initial);

  const region = (regions.some((r) => r.id === f.region) ? f.region : "all") as Region;
  const dest = f.dest ?? "";
  const len = f.len ?? "";
  const style = f.style ?? "";
  const feel = (f.feel ?? "") as FeelingId | "";

  function set(next: TourFilters) {
    const merged = { ...f, ...next };
    setF(merged);
    const q = new URLSearchParams();
    for (const [k, v] of Object.entries(merged)) if (v && v !== "all") q.set(k, v);
    const s = q.toString();
    window.history.replaceState(null, "", s ? `${window.location.pathname}?${s}` : window.location.pathname);
  }

  const inRegion = (t: TripWithPlace) => region === "all" || t.destination.group === region;
  const lengthTest = lengths.find((l) => l.id === len)?.test;
  const results = sorted.filter(
    (t) =>
      inRegion(t) &&
      (!dest || t.destination.slug === dest) &&
      (!lengthTest || lengthTest(nights(t))) &&
      (!style || t.format === style) &&
      (!feel || t.feelings.includes(feel)),
  );

  const placeOptions = destinations.filter((d) => region === "all" || d.group === region);
  const active = [
    dest && { key: "dest", label: destinations.find((d) => d.slug === dest)?.name ?? dest },
    len && { key: "len", label: lengths.find((l) => l.id === len)?.label ?? len },
    style && { key: "style", label: style },
    feel && { key: "feel", label: feelings.find((f) => f.id === feel)?.label ?? feel },
  ].filter(Boolean) as { key: string; label: string }[];
  const filtered = active.length > 0 || region !== "all";

  return (
    <div>
      {/* Region — the first, biggest choice */}
      <div className="flex flex-col justify-between gap-6 border-b border-ink/15 md:flex-row md:items-end">
        <div role="radiogroup" aria-label="Region" className="flex gap-6 md:gap-8">
          {regions.map((r) => {
            const on = r.id === region;
            const count = allTrips.filter((t) => r.id === "all" || t.destination.group === r.id).length;
            return (
              <button
                key={r.id}
                type="button"
                role="radio"
                aria-checked={on}
                onClick={() => set({ region: r.id, dest: "" })}
                className={cn(
                  "-mb-px flex min-h-11 items-baseline gap-3 border-b-2 pb-4 transition-colors",
                  on ? "border-ink text-ink" : "border-transparent text-ink/35 hover:text-ink/70",
                )}
              >
                <span className={cn("display text-[1.9rem] whitespace-nowrap sm:text-4xl md:text-5xl", on && "italic")}>{r.label}</span>
                <span className="label tabular-nums">{count}</span>
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`${uid}-filters`}
          className="label mb-4 inline-flex min-h-11 items-center gap-3 self-start border border-ink/25 px-4 md:hidden"
        >
          <SlidersHorizontal aria-hidden className="size-4" />
          Filters{active.length ? ` · ${active.length}` : ""}
        </button>
      </div>

      {/* Filters — always open on larger screens, a toggle on phones */}
      <div id={`${uid}-filters`} className={cn("grid gap-8 border-b border-ink/15 py-8 md:grid md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-x-12", !open && "max-md:hidden")}>
        <div>
          <label htmlFor={`${uid}-dest`} className="label text-smoke">
            Destination
          </label>
          <select
            id={`${uid}-dest`}
            value={dest}
            onChange={(e) => set({ dest: e.target.value })}
            className="mt-3 block min-h-12 w-full cursor-pointer border-b border-ink/30 bg-transparent font-display text-2xl outline-none focus-visible:border-ochre"
          >
            <option value="">Anywhere</option>
            {placeOptions.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-6">
          <ChipGroup label="Length" options={lengths.map((l) => ({ id: l.id, label: l.label }))} value={len} onChange={(v) => set({ len: v })} />
          <ChipGroup label="Style" options={styles} value={style} onChange={(v) => set({ style: v })} />
          <ChipGroup label="Feeling" options={feelings.map((f) => ({ id: f.id, label: f.label }))} value={feel} onChange={(v) => set({ feel: v })} />
        </div>
      </div>

      {/* Result count and active filters */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 py-6">
        <p role="status" aria-atomic="true" className="display text-2xl">
          {results.length} {results.length === 1 ? "tour" : "tours"}
          {region !== "all" ? <span className="text-smoke"> · {regions.find((r) => r.id === region)?.label}</span> : null}
        </p>
        {active.map((a) => (
          <button
            key={a.key}
            type="button"
            onClick={() => set({ [a.key]: "" })}
            className="label inline-flex min-h-9 items-center gap-2 bg-ink px-3 text-bone transition-colors hover:bg-ochre"
            aria-label={`Remove filter: ${a.label}`}
          >
            {a.label}
            <X aria-hidden className="size-3.5" />
          </button>
        ))}
        {filtered ? (
          <button type="button" onClick={() => set({ region: "", dest: "", len: "", style: "", feel: "" })} className="label min-h-9 text-smoke underline-offset-4 hover:text-ink hover:underline">
            Clear all
          </button>
        ) : null}
      </div>

      {results.length ? (
        <ul className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((t) => (
            <li
              key={`${t.destination.slug}-${t.slug}`}
              data-region={t.destination.group}
              data-dest={t.destination.slug}
              data-nights={nights(t)}
              data-style={t.format}
              data-feel={t.feelings.join(" ")}
            >
              <TripCard trip={t} sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw" />
              <p className="mt-3 text-sm leading-relaxed text-smoke">{t.summary}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="border-y border-ink/15 py-16 text-center">
          <p className="display text-4xl md:text-5xl">
            Nothing quite <em>matches.</em>
          </p>
          <p className="mx-auto mt-4 max-w-md text-smoke">
            Try removing a filter — or tell us what you have in mind, and we&apos;ll shape a journey around it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {active.map((a) => (
              <button key={a.key} type="button" onClick={() => set({ [a.key]: "" })} className="label inline-flex min-h-11 items-center gap-2 border border-ink/25 px-4 hover:border-ink">
                Remove “{a.label}”
              </button>
            ))}
            <a
              href={whatsappLink("Namaste WanderMate! I'm looking for a journey that isn't on the list.")}
              target="_blank"
              rel="noreferrer"
              className="label inline-flex min-h-11 items-center bg-ink px-5 text-bone hover:bg-ochre"
            >
              Ask us on WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function ChipGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { id: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  const id = useId();
  return (
    <div role="group" aria-labelledby={id} className="grid gap-3 sm:grid-cols-[6rem_minmax(0,1fr)] sm:items-center">
      <p id={id} className="label text-smoke">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const on = o.id === value;
          return (
            <button
              key={o.id}
              type="button"
              aria-pressed={on}
              onClick={() => onChange(on ? "" : o.id)}
              className={cn(
                "label min-h-10 border px-4 transition-colors",
                on ? "border-ink bg-ink text-bone" : "border-ink/20 text-ink hover:border-ink",
              )}
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
