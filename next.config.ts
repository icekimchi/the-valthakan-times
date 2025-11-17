import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
      {
        protocol: "https",
        hostname: "media.beehiiv.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "beehiiv-images-production.s3.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.beehiiv.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
