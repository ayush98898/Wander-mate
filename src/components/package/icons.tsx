import {
  BedDouble,
  CalendarDays,
  Car,
  Castle,
  Clock,
  Coffee,
  Flame,
  Flower2,
  Footprints,
  GraduationCap,
  Landmark,
  MapPinned,
  Moon,
  Music,
  Palette,
  Sailboat,
  Sparkles,
  Users,
  Wallet,
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
  music: Music,
  cup: Coffee,
  craft: Palette,
  sparkle: Sparkles,
};

export const statIcons: Record<TourPackage["stats"][number]["icon"], LucideIcon> = {
  moon: Moon,
  wallet: Wallet,
  calendar: CalendarDays,
  car: Car,
  boat: Sailboat,
  landmark: Landmark,
  clock: Clock,
  users: Users,
};
