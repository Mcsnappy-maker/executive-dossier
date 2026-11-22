import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  assetPrefix: "./",
  typedRoutes: true,
  images: { unoptimized: true }
};

export default nextConfig;
