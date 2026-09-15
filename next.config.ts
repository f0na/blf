import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
    async rewrites() {
    return [
      {
        source: '/api/:path*', // 本地匹配以 /api 开头的请求
        destination: 'https://axum.fufu.moe/:path*', // 转发到 Vercel 后端
      },
    ];
  },
};

export default nextConfig;
