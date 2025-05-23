import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This will ignore ESLint errors during the build
  },
};

export default nextConfig;
