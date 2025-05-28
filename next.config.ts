import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/i,
      use: ["style-loader", "css-loader", "postcss-loader"],
    })
    return config;
  }
};

export default nextConfig;
