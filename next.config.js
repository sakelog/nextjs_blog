const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
