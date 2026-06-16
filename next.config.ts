import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: "./",
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;
