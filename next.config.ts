import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: '0.0.0.0',
      },
      {
        hostname: 'narcosvet.it',
      },
    ],
  },
};

export default nextConfig;
