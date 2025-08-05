import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: {}, // No experimental options needed
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com', 'picsum.photos'],
  },
  // Add any other configurations your project needs
};

export default nextConfig;
