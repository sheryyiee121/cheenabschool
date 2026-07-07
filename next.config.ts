import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/programs",
        destination: "/academics",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
