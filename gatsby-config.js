/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: `sake log`,
    author: `sake`,
    siteUrl: `https://sake-log.website/`,
  },
  plugins: [
    // meta
    `gatsby-plugin-react-helmet`,
    // Style
    `gatsby-plugin-sass`,
    // for Google
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-156013841-1",
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-5013956882447566`
      },
    },
    // develop
    `gatsby-plugin-lodash`,
    `gatsby-plugin-typescript`,
    //PWA
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "sake log",
        short_name: "sake log",
        start_url: "/?source=homescreen",
        background_color: "#333",
        theme_color: "#54917f",
        display: "minimal-ui",
        icons: [
          {
            src: "icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "icons/icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    // image
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/img/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // createPage
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/content/post/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `page`,
        path: `${__dirname}/content/page/`,
      },
    },
    // markdown
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // Table of Content
          `gatsby-remark-autolink-headers`,
          // Syntax Highlight
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
          // style
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                note: { 
                  classes: 'note',
                  title: 'optional',
                },
                danger: { 
                  classes: 'note danger',
                  title: 'optional',
               },
              },
            },
          },
          // responsive
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
          `gatsby-remark-responsive-iframe`,
          // path
          `gatsby-remark-copy-images`,
          // link
          `gatsby-remark-external-links`,
          `gatsby-plugin-catch-links`,
        ],
      },
    },
  ],
}
