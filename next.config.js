const withPWA = require('next-pwa');

const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  pwa: {
    dest: 'public',
  },
};

module.exports = withPWA(nextConfig);
