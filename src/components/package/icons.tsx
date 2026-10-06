import {
  BedDouble,
  Car,
  Castle,
  Clock,
  Flame,
  Flower2,
  Footprints,
  GraduationCap,
  Landmark,
  MapPinned,
  Moon,
  Sailboat,
  Users,
  type LucideIcon,
} from "lucide-react";

import type { StopIcon, TourPackage } from "@/lib/packages";

export const stopIcons: Record<StopIcon, LucideIcon> = {
  boat: Sailboat,
  temple: Landmark,
  walk: Footprints,
  stupa: Flower2,
  fort: Castle,
  car: Car,
  hotel: BedDouble,
  flame: Flame,
  museum: MapPinned,
  campus: GraduationCap,
};

export const statIcons: Record<TourPackage["stats"][number]["icon"], LucideIcon> = {
  moon: Moon,
  car: Car,
  boat: Sailboat,
  landmark: Landmark,
  clock: Clock,
  users: Users,
};
