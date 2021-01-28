const path = require('path');
//const withPWA = require('next-pwa');
const withOffline = require('next-offline');

module.exports = withOffline({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
  /*
  pwa: {
    dest: 'public',
  },
  */
});
