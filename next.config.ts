import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/izakaya-lp",
  assetPrefix: "/izakaya-lp/",
};

export default nextConfig;
