const withBundleAnalyzer =
  process.env.ANALYZE === 'true'
    ? require('@next/bundle-analyzer')({ enabled: true })
    : (config) => config;

const nextConfig = {
  images: {
    loader: 'custom',
    domains: ['images.ctfassets.net'],
  },
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(nextConfig);
