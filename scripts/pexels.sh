#!/bin/bash
# Download a free Pexels photo for the Journal, resized for the web, and log its source.
# Usage: scripts/pexels.sh <pexels-photo-id> <file-name> [min-width]
#   -> public/images/journal/<file-name>.jpg (2400px wide, any orientation),
#      plus a 600px preview in $TMPDIR to check it by eye.
# Refuses sources under min-width on the long side (default 2400px) so heroes stay sharp on large screens.
set -e
cd "$(dirname "$0")/.."
TMP="${TMPDIR:-/tmp}"
MIN="${3:-2400}"
curl -sSfL --max-time 90 -o "$TMP/raw-$2.jpg" "https://images.pexels.com/photos/$1/pexels-photo-$1.jpeg?auto=compress&cs=tinysrgb&w=3000"
node -e '
const sharp = require("sharp");
const [i, o, p, min] = process.argv.slice(1);
(async () => {
  const m = await sharp(i).rotate().metadata();
  const w = m.orientation >= 5 ? m.height : m.width, h = m.orientation >= 5 ? m.width : m.height;
  const long = Math.max(w, h);
  if (long < Number(min)) { console.error(`too small: ${w}x${h} (need ${min}px on the long side)`); process.exit(2); }
  await sharp(i).rotate().resize({ width: 2400, withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true }).toFile(o);
  await sharp(o).resize({ width: 600 }).toFile(p);
  console.log("saved", o, `${w}x${h}`, "preview", p);
})();' "$TMP/raw-$2.jpg" "public/images/journal/$2.jpg" "$TMP/prev-$2.jpg" "$MIN"
grep -q "^| $2.jpg |" public/images/journal/SOURCES.md 2>/dev/null && sed -i "/^| $2.jpg |/d" public/images/journal/SOURCES.md
echo "| $2.jpg | https://www.pexels.com/photo/$1/ |" >> public/images/journal/SOURCES.md
