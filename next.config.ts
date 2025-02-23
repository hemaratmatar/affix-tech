import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['fastly.picsum.photos','images.unsplash.com','api.dicebear.com'], 
  },
  distDir: 'build',
};

export default nextConfig;
