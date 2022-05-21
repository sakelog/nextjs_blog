/**
 * @type { import('next').NextConfig}
 */

const withPWA = require('next-pwa');

const withBundleAnalyzer =
  process.env.ANALYZE === 'true'
    ? require('@next/bundle-analyzer')({ enabled: true })
    : (config) => config;

const nextConfig = withPWA({
  pwa: {
    dest: 'public',
  },
  images: {
    loader: 'custom',
  },
  reactStrictMode: true,
});

module.exports = withBundleAnalyzer(nextConfig);
