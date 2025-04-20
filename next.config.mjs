import path from 'path';

// 获取当前模块路径
const __dirname = path.dirname(new URL(import.meta.url).pathname);

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack(config) {
    // 添加路径别名配置
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
}

export default nextConfig;
