import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.GITHUB_PAGES ? '/kmong-225550-b2b-mall-demo' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
