#!/bin/bash
# Contact sheet of Pexels candidates, to compare photos side by side before choosing.
# Usage: scripts/pexels-sheet.sh <out.jpg> <id> [<id> ...]
#   Each tile is labelled with its id and the source size; sources under 2400px are marked.
set -e
cd "$(dirname "$0")/.."
OUT="$1"; shift
TMP="${TMPDIR:-/tmp}/sheet"
mkdir -p "$TMP"
for id in "$@"; do
  [ -s "$TMP/$id.jpg" ] || curl -sSfL --max-time 60 -o "$TMP/$id.jpg" "https://images.pexels.com/photos/$id/pexels-photo-$id.jpeg?auto=compress&cs=tinysrgb&w=3000" || echo "fail $id"
done
node -e '
const sharp = require("sharp"); const fs = require("fs");
const [out, dir, ...ids] = process.argv.slice(1);
const W = 480, H = 320, C = 4;
(async () => {
  const tiles = [];
  for (const [n, id] of ids.entries()) {
    const f = `${dir}/${id}.jpg`; if (!fs.existsSync(f)) continue;
    const m = await sharp(f).rotate().metadata();
    const w = m.orientation >= 5 ? m.height : m.width, h = m.orientation >= 5 ? m.width : m.height;
    const small = Math.max(w, h) < 2400 ? " SMALL" : "";
    const img = await sharp(f).rotate().resize(W, H, { fit: "contain", background: "#222" }).toBuffer();
    const label = Buffer.from(`<svg width="${W}" height="28"><rect width="${W}" height="28" fill="black" opacity="0.7"/><text x="8" y="20" font-size="18" font-family="sans-serif" fill="${small ? "#f66" : "white"}">${id} ${w}x${h}${small}</text></svg>`);
    tiles.push({ input: img, left: (n % C) * W, top: Math.floor(n / C) * H }, { input: label, left: (n % C) * W, top: Math.floor(n / C) * H });
  }
  const rows = Math.ceil(ids.length / C);
  await sharp({ create: { width: W * C, height: H * rows, channels: 3, background: "#111" } }).composite(tiles).jpeg({ quality: 80 }).toFile(out);
  console.log("sheet", out);
})();' "$OUT" "$TMP" "$@"
