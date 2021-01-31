const { createSecureHeaders } = require('next-secure-headers');
const { withPlugins, optional } = require('next-compose-plugins');

const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  async headers() {
    return [{ source: '/(.*)', headers: createSecureHeaders() }];
  },
  pwa: {
    dest: 'public',
  },
};

module.exports = withPlugins(
  [[optional(() => require('next-pwa')), {}], [createSecureHeaders]],
  nextConfig
);
