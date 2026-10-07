import type { NextConfig } from "next";

// STATIC_EXPORT=1 builds a plain static site in out/ (for static hosts such as a
// Wix instant site). Redirects need a server, so they're only on in normal builds.
const isExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = isExport
  ? {
      output: "export",
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {
      // Keep v1 URLs working after the v2 information architecture.
      redirects() {
        return [
          { source: "/packages", destination: "/journeys", permanent: true },
          { source: "/banaras-unfiltered", destination: "/packages/banaras-unfiltered", permanent: true },
          { source: "/journeys/banaras-unfiltered", destination: "/packages/banaras-unfiltered", permanent: true },
          { source: "/enquire", destination: "/plan", permanent: true },
        ];
      },
    };

export default nextConfig;
