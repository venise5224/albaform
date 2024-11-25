import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["www.youtube.com"], // 허용할 도메인 추가
  },
};

export default nextConfig;
