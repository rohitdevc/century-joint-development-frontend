import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/',
  turbopack: {
    root: __dirname,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '2971',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '2972',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'cjd.centuryrealestate.in',
        port: '',
        pathname: '/**'
      },
    ]
  },
};

export default nextConfig;