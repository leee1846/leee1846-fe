/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['localhost', 'contents.sixshop.com'],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
