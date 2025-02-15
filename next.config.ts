import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['fastly.picsum.photos'], 
  },
  distDir: 'build',
};

export default nextConfig;
