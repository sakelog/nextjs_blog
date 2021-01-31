const { createSecureHeaders } = require('next-secure-headers');
const { withPlugins, optional } = require('next-compose-plugins');

const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  async headers() {
    return [{ source: '/(.*)', headers: createSecureHeaders() }];
  },
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200,
          },
        },
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/service-worker.js',
        destination: '/_next/static/service-worker.js',
      },
    ];
  },
};

module.exports = withPlugins([
  optional(() => require('next-offline')),
  nextConfig,
]);
