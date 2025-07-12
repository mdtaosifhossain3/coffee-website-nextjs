import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "storage.googleapis.com",
      "via.placeholder.com",
      "fakestoreapi.com",
    ],
  },
};

export default nextConfig;
