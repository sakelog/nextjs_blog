const withPWA = require('next-pwa');
const { createSecureHeaders } = require('next-secure-headers');

module.exports = withPWA({
  images: {
    domains: ['images.ctfassets.net'],
  },
  pwa: {
    dest: 'public',
  },
  async headers() {
    return [{ source: '/(.*)', headers: createSecureHeaders() }];
  },
});
