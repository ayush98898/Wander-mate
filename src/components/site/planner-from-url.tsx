"use client";

import { useSearchParams } from "next/navigation";

import { Planner } from "@/components/site/planner";
import { plannerInitialFrom } from "@/lib/planner-initial";

/** Reads planner defaults from the query string in the browser, so /plan can be a static page. */
export function PlannerFromUrl() {
  const params = useSearchParams();
  return <Planner key={params.toString()} initial={plannerInitialFrom((k) => params.get(k))} />;
}
