import { INDEXNOW_KEY } from "@/lib/indexnow";
import { livePosts, todayIST } from "@/lib/journal";
import { abs } from "@/lib/seo";

export const dynamic = "force-dynamic";

/**
 * Tells IndexNow search engines (Bing, Yandex, Seznam and others; Bing shares with
 * Copilot and ChatGPT search) about the pages that changed today: the guide that went
 * live, the Journal, the sitemap and the homepage. Called daily by Vercel Cron (vercel.json).
 */
export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret && req.headers.get("authorization") !== `Bearer ${secret}`) {
    return new Response("Unauthorized", { status: 401 });
  }
  const today = todayIST();
  const fresh = livePosts().filter((p) => p.published === today || p.updated === today);
  const urlList = [...fresh.map((p) => abs(`/journal/${p.slug}`)), abs("/journal"), abs("/"), abs("/sitemap.xml")];
  const host = new URL(abs("/")).host;
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key: INDEXNOW_KEY, keyLocation: abs(`/${INDEXNOW_KEY}.txt`), urlList }),
  });
  return Response.json({ status: res.status, submitted: urlList });
}
