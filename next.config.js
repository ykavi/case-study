/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.dsmcdn.com'], //eklenen cdn domaini kullanılabilir
  },
};

module.exports = nextConfig;
