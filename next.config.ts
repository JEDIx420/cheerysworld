import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/cheery-caricature",
        destination: "/cheery-fic",
      },
    ];
  },
};

export default nextConfig;
