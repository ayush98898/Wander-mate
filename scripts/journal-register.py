# Register every guide in src/content/guides by regenerating src/lib/journal-daily.ts.
# Usage: python3 scripts/journal-register.py
import os
import re

root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
guides_dir = os.path.join(root, "src/content/guides")
out = os.path.join(root, "src/lib/journal-daily.ts")

slugs = sorted(f[:-3] for f in os.listdir(guides_dir) if f.endswith(".ts"))


def ident(slug):
    return "g_" + re.sub(r"[^a-zA-Z0-9]", "_", slug)


header = """/*
 * Daily guides for the Journal. Each guide is its own file in src/content/guides,
 * carries a `published` date and goes live on that day (see journal.ts).
 *
 * This file is generated: add a guide file, then run
 *   python3 scripts/journal-register.py
 * The guides in src/content/guides set the standard for depth and shape.
 */

import type { Post } from "@/lib/journal";
"""

body = header + "".join(f'import {ident(s)} from "@/content/guides/{s}";\n' for s in slugs)
body += "\nexport const dailyPosts: Post[] = [\n" + "".join(f"  {ident(s)},\n" for s in slugs) + "];\n"

with open(out, "w") as f:
    f.write(body)
print(len(slugs), "guides registered")
