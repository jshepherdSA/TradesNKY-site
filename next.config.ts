import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow quality 100 (used by the skillUP logo) in addition to the default 75.
    qualities: [75, 100],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
