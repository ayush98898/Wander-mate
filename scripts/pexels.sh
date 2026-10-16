#!/bin/bash
# Download a free Pexels photo for the Journal, resized for the web, and log its source.
# Usage: scripts/pexels.sh <pexels-photo-id> <file-name>
#   -> public/images/journal/<file-name>.jpg, plus a 600px preview in $TMPDIR to check it by eye.
set -e
cd "$(dirname "$0")/.."
TMP="${TMPDIR:-/tmp}"
curl -sSfL --max-time 60 -o "$TMP/raw-$2.jpg" "https://images.pexels.com/photos/$1/pexels-photo-$1.jpeg?auto=compress&cs=tinysrgb&w=2000"
node -e '
const sharp = require("sharp");
const [i, o, p] = process.argv.slice(1);
sharp(i).rotate().resize({ width: 1800, withoutEnlargement: true }).jpeg({ quality: 78, mozjpeg: true }).toFile(o)
  .then(() => sharp(o).resize({ width: 600 }).toFile(p))
  .then(() => console.log("saved", o, "preview", p));' "$TMP/raw-$2.jpg" "public/images/journal/$2.jpg" "$TMP/prev-$2.jpg"
echo "| $2.jpg | https://www.pexels.com/photo/$1/ |" >> public/images/journal/SOURCES.md
