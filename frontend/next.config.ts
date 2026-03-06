import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow Next.js image optimization to fetch from localhost in local dev
    dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
    remotePatterns: [
      // Local backend dev server
      { protocol: "http", hostname: "localhost", port: "8001", pathname: "/media/**" },
      // Production backend — update hostname when deploying
      { protocol: "https", hostname: "*.onrender.com", pathname: "/media/**" },
      { protocol: "https", hostname: "*.railway.app", pathname: "/media/**" },
    ],
  },
};

export default nextConfig;
