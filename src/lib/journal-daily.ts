/*
 * Daily guides for the Journal. Each guide is its own file in src/content/guides,
 * carries a `published` date and goes live on that day (see journal.ts).
 *
 * This file is generated: add a guide file, then run
 *   python3 scripts/journal-register.py
 * The guides in src/content/guides set the standard for depth and shape.
 */

import type { Post } from "@/lib/journal";
import g_angkor_wat_sunrise_tickets_guide from "@/content/guides/angkor-wat-sunrise-tickets-guide";
import g_best_time_to_visit_varanasi from "@/content/guides/best-time-to-visit-varanasi";
import g_dev_deepawali_2026_varanasi_guide from "@/content/guides/dev-deepawali-2026-varanasi-guide";
import g_durga_puja_kolkata_2026_guide from "@/content/guides/durga-puja-kolkata-2026-guide";
import g_ganga_aarti_timings_varanasi from "@/content/guides/ganga-aarti-timings-varanasi";
import g_how_many_days_in_varanasi from "@/content/guides/how-many-days-in-varanasi";
import g_kashi_vishwanath_darshan_guide from "@/content/guides/kashi-vishwanath-darshan-guide";
import g_kyoto_autumn_leaves_guide from "@/content/guides/kyoto-autumn-leaves-guide";
import g_loy_krathong_yi_peng_2026_guide from "@/content/guides/loy-krathong-yi-peng-2026-guide";
import g_manikarnika_ghat_what_to_know from "@/content/guides/manikarnika-ghat-what-to-know";
import g_pushkar_fair_2026_guide from "@/content/guides/pushkar-fair-2026-guide";
import g_sarnath_from_varanasi from "@/content/guides/sarnath-from-varanasi";
import g_taj_mahal_tickets_timings_guide from "@/content/guides/taj-mahal-tickets-timings-guide";
import g_tihar_nepal_2026_guide from "@/content/guides/tihar-nepal-2026-guide";
import g_varanasi_street_food_guide from "@/content/guides/varanasi-street-food-guide";
import g_varanasi_sunrise_boat_ride_guide from "@/content/guides/varanasi-sunrise-boat-ride-guide";

export const dailyPosts: Post[] = [
  g_angkor_wat_sunrise_tickets_guide,
  g_best_time_to_visit_varanasi,
  g_dev_deepawali_2026_varanasi_guide,
  g_durga_puja_kolkata_2026_guide,
  g_ganga_aarti_timings_varanasi,
  g_how_many_days_in_varanasi,
  g_kashi_vishwanath_darshan_guide,
  g_kyoto_autumn_leaves_guide,
  g_loy_krathong_yi_peng_2026_guide,
  g_manikarnika_ghat_what_to_know,
  g_pushkar_fair_2026_guide,
  g_sarnath_from_varanasi,
  g_taj_mahal_tickets_timings_guide,
  g_tihar_nepal_2026_guide,
  g_varanasi_street_food_guide,
  g_varanasi_sunrise_boat_ride_guide,
];
