const withPWA = require('next-pwa');

const nextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  pwa: {
    dest: 'public',
  },
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/page/contact',
        permanent: true,
      },
      {
        source: '/about-this-site',
        destination: '/page/about-this-site',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/page/privacy',
        permanent: true,
      },
      {
        source: '/bat-run-powershell-command',
        destination: '/post/bat-run-powershell-command',
        permanent: true,
      },
      {
        source: '/yarn-lock-dependency-update',
        destination: '/post/yarn-lock-dependency-update',
        permanent: true,
      },
      {
        source: '/python-ubuntu-install-ver-3-9-1',
        destination:
          '/post/python-ubuntu-install-ver-3-9-1',
        permanent: true,
      },
      {
        source: '/database-specialist-how-to',
        destination: '/post/database-specialist-how-to',
        permanent: true,
      },
      {
        source: '/head-style-sideline-css',
        destination: '/post/head-style-sideline-css',
        permanent: true,
      },
      {
        source: '/gatsbyjs-limit-pagination',
        destination: '/post/gatsbyjs-limit-pagination',
        permanent: true,
      },
      {
        source: '/ipad-study',
        destination: '/post/ipad-study',
        permanent: true,
      },
      {
        source: '/6monthes-look-back-blog-structure',
        destination:
          '/post/6monthes-look-back-blog-structure',
        permanent: true,
      },
      {
        source: '/git-branch-show-delete',
        destination: '/post/git-branch-show-delete',
        permanent: true,
      },
      {
        source: '/gatsbyjs-after-netlifycms',
        destination: '/post/gatsbyjs-after-netlifycms',
        permanent: true,
      },
      {
        source: '/sass-basics-learn',
        destination: '/post/sass-basics-learn',
        permanent: true,
      },
      {
        source: '/gatsbyjs-local-other-device',
        destination: '/post/gatsbyjs-local-other-device',
        permanent: true,
      },
      {
        source: '/study-for-java-silver',
        destination: '/post/study-for-java-silver',
        permanent: true,
      },
      {
        source: '/pngquant-error',
        destination: '/post/pngquant-error',
        permanent: true,
      },
      {
        source: '/new-pc-setting',
        destination: '/post/new-pc-setting',
        permanent: true,
      },
      {
        source: '/intoroduce-graphql-code-gen',
        destination: '/post/intoroduce-graphql-code-gen',
        permanent: true,
      },
      {
        source: '/sorted-taglist-bycount',
        destination: '/post/sorted-taglist-bycount',
        permanent: true,
      },
      {
        source: '/vscode-git',
        destination: '/post/vscode-git',
        permanent: true,
      },
      {
        source: '/create-wordpress-theme',
        destination: '/post/create-wordpress-theme',
        permanent: true,
      },
      {
        source: '/yarn-wordpress',
        destination: '/post/yarn-wordpress',
        permanent: true,
      },
      {
        source: '/vscode-install-extension',
        destination: '/post/vscode-install-extension',
        permanent: true,
      },
      {
        source: '/wordpress-theme-parts',
        destination: '/post/wordpress-theme-parts',
        permanent: true,
      },
      {
        source: '/gatsby-prismjs-css',
        destination: '/post/gatsby-prismjs-css',
        permanent: true,
      },
      {
        source: '/markdown-kihou',
        destination: '/post/markdown-kihou',
        permanent: true,
      },
      {
        source: '/footer-nonspace',
        destination: '/post/footer-nonspace',
        permanent: true,
      },
      {
        source: '/wordpress-vs-ssg',
        destination: '/post/wordpress-vs-ssg',
        permanent: true,
      },
    ];
  },
};

module.exports = withPWA(nextConfig);
