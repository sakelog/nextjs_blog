const withPWA = require('next-pwa');

const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  pwa: {
    dest: 'public',
    maximumFileSizeToCacheInBytes: 3000000,
  },
  productionBrowserSourceMaps: true,
};

module.exports = withPWA(nextConfig);
