/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: true,  // Tambahkan ini untuk mendukung gambar dalam export statis
  },
  experimental: {
    serverActions: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/portofolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portofolio/' : ''
};

module.exports = nextConfig;
