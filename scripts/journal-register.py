# Register every guide in src/content/guides: drop any inline copy from journal-daily.ts and import the file instead.
# Usage: python3 scripts/journal-register.py
import os, re

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
p = "src/lib/journal-daily.ts"
s = open(p).read()
files = sorted(f[:-3] for f in os.listdir("src/content/guides") if f.endswith(".ts"))


def ident(slug):
    return "g_" + re.sub(r"[^a-zA-Z0-9]", "_", slug)


for slug in files:
    m = re.search(r'\n  \{\n    slug: "%s",.*?\n  \},\n' % re.escape(slug), s, re.S)
    if m:
        s = s[: m.start()] + "\n" + s[m.end():]
s = re.sub(r"\nimport g_[^\n]*", "", s)
imports = "".join(f'\nimport {ident(f)} from "@/content/guides/{f}";' for f in files)
s = s.replace('import type { Post } from "@/lib/journal";', 'import type { Post } from "@/lib/journal";' + imports, 1)
s = re.sub(r"export const dailyPosts: Post\[\] = \[(\n  (?:g_\w+, )*g_\w+,)?", "export const dailyPosts: Post[] = [\n  " + ", ".join(ident(f) for f in files) + ",", s, 1)
s = re.sub(r"\n{3,}", "\n\n", s)
open(p, "w").write(s)
print(len(files), "guides imported")
