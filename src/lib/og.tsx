/*
 * Branded share images (1200×630) for Open Graph and X: the page's own photograph
 * under a black veil, the WanderMate wordmark, a small kicker and the title in
 * Cormorant Garamond, saved as a compact JPEG. Used by each route's opengraph-image.tsx.
 *
 * Fonts are the brand's own (Cormorant Garamond, Jost — SIL Open Font Licence),
 * kept in src/assets/fonts so images render at build time without the network.
 */

import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";
import sharp from "sharp";

export const ogSize = { width: 1200, height: 630 };
// JPEG, not PNG: photographic cards come out ~10x smaller, and WhatsApp skips
// link-preview images much over 300 KB.
export const ogContentType = "image/jpeg";

const font = (f: string) => readFile(join(process.cwd(), "src/assets/fonts", f));

async function photo(path: string) {
  const ext = path.toLowerCase().endsWith(".png") ? "png" : "jpeg";
  const data = await readFile(join(process.cwd(), "public", path));
  return `data:image/${ext};base64,${data.toString("base64")}`;
}

export async function ogImage({
  image,
  kicker,
  title,
  italic,
  line,
  position = "50% 50%",
}: {
  /** A photo under /public, e.g. "/images/hero-ghats.jpg". */
  image: string;
  /** Small caps line above the title, e.g. "Varanasi · 3 nights · 4 days". */
  kicker: string;
  title: string;
  /** Optional last words of the title, set in italic. */
  italic?: string;
  /** One line under the title. */
  line?: string;
  position?: string;
}) {
  const [cormorant, cormorantItalic, jost, jostMedium, bg] = await Promise.all([
    font("cormorant-regular.ttf"),
    font("cormorant-italic.ttf"),
    font("jost-regular.ttf"),
    font("jost-medium.ttf"),
    photo(image),
  ]);
  const long = title.length + (italic?.length ?? 0) > 34;

  const png = new ImageResponse(
    (
      <div style={{ position: "relative", display: "flex", width: "100%", height: "100%", background: "#072268", color: "#f5f2ec" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain img */}
        <img src={bg} alt="" width={1200} height={630} style={{ position: "absolute", inset: 0, width: 1200, height: 630, objectFit: "cover", objectPosition: position }} />
        {/* Black only, per the brand: a veil at the top for the wordmark, deeper at the bottom for the words. */}
        <div style={{ position: "absolute", inset: 0, display: "flex", background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.05) 38%, rgba(0,0,0,0.82) 100%)" }} />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", padding: "52px 64px 56px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ fontFamily: "Jost", fontWeight: 500, fontSize: 22, letterSpacing: 9 }}>WANDERMATE</div>
            <div style={{ fontFamily: "Jost", fontSize: 16, letterSpacing: 4, opacity: 0.75 }}>HERITAGE · CULTURE · LIVING TRADITIONS</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", fontFamily: "Jost", fontSize: 20, letterSpacing: 5, color: "#c8d4ff" }}>
              <div style={{ width: 44, height: 1, background: "#c8d4ff", marginRight: 18 }} />
              {kicker.toUpperCase()}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", marginTop: 18, fontFamily: "Cormorant", fontSize: long ? 76 : 96, lineHeight: 1, letterSpacing: -1 }}>
              <span>{title}</span>
              {italic ? <span style={{ fontFamily: "Cormorant Italic", marginLeft: 22 }}>{italic}</span> : null}
            </div>
            {line ? (
              <div style={{ marginTop: 22, maxWidth: 900, fontFamily: "Jost", fontSize: 24, lineHeight: 1.4, opacity: 0.85 }}>{line}</div>
            ) : null}
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Cormorant", data: cormorant, weight: 400, style: "normal" },
        { name: "Cormorant Italic", data: cormorantItalic, weight: 400, style: "normal" },
        { name: "Jost", data: jost, weight: 400, style: "normal" },
        { name: "Jost", data: jostMedium, weight: 500, style: "normal" },
      ],
    },
  );
  const jpeg = await sharp(Buffer.from(await png.arrayBuffer())).jpeg({ quality: 78, mozjpeg: true }).toBuffer();
  return new Response(new Uint8Array(jpeg), { headers: { "Content-Type": ogContentType } });
}

/** Shorten a description to one share-card line. */
export function oneLine(text: string, max = 120) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:—–-]\s*$/, "") + "…";
}
