import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/mcp/:path*',
        destination: 'http://localhost:4000/:path*',
      },
    ];
  },
  /* config options here */
};

export default nextConfig;
