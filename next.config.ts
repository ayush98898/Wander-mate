import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep v1 URLs working after the v2 information architecture.
  redirects() {
    return [
      { source: "/packages", destination: "/journeys", permanent: true },
      { source: "/banaras-unfiltered", destination: "/journeys/banaras-unfiltered", permanent: true },
      { source: "/enquire", destination: "/plan", permanent: true },
    ];
  },
};

export default nextConfig;
