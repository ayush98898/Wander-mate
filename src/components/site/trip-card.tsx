import Link from "next/link";

import { DestinationPlate } from "@/components/site/destination-plate";
import { tripHref, type TripWithPlace } from "@/lib/destinations";
import { cn } from "@/lib/utils";

/** A trip from any destination: its destination's photo or plate, name, place and length. */
export function TripCard({
  trip,
  className,
  sizes = "(min-width:1024px) 27vw, 78vw",
}: {
  trip: TripWithPlace;
  className?: string;
  sizes?: string;
}) {
  const d = trip.destination;
  return (
    <Link href={tripHref(trip)} className={cn("group block", className)}>
      <div className="relative">
        <DestinationPlate
          d={d}
          image={trip.image}
          variant={d.trips.findIndex((t) => t.slug === trip.slug)}
          sizes={sizes}
          className="aspect-[4/5]"
          showName={!(trip.image ?? d.image)}
        />
        <span className="label absolute bottom-4 left-4 bg-bone px-2.5 py-1.5 text-ink">{trip.format}</span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="display text-[2rem] leading-none md:text-[2.3rem]">
            <span className="ul">{trip.name}</span>
          </h3>
          <p className="label mt-3 text-smoke">
            {d.name}
            {d.group === "beyond" ? `, ${d.country}` : ""} · {trip.duration}
          </p>
        </div>
        {trip.price ? (
          <p className="label shrink-0 pt-1 text-right text-smoke">
            From
            <br />
            <span className="font-sans text-base tracking-normal text-ink normal-case">{trip.price}</span>
          </p>
        ) : null}
      </div>
    </Link>
  );
}
