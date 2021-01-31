const { createSecureHeaders } = require('next-secure-headers');
const withOffline = require('next-offline');

module.exports = withOffline({
  images: {
    domains: ['images.ctfassets.net'],
  },
  async headers() {
    return [{ source: '/(.*)', headers: createSecureHeaders() }];
  },
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT
      ? 'service-worker.js'
      : 'public/service-worker.js',
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
});
