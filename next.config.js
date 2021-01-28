const path = require('path');
const withPWA = require('next-pwa');

module.exports = withPWA({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
  pwa: {
    dest: 'public',
  },
});
