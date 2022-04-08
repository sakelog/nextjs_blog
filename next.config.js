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
  ignoreBuildErrors: true,
};

module.exports = withPWA(nextConfig);
