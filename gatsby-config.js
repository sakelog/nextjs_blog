/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config()
module.exports = {
  siteMetadata: {
    title: `sake log`,
    author: `sake`,
    siteUrl: `https://sake-log.website/`,
  },
  plugins: [
    // meta
    `gatsby-plugin-react-helmet`,
    // for Google
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-N9SLS2F',
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-5013956882447566`,
      },
    },
    // develop
    `gatsby-plugin-lodash`,
    `gatsby-plugin-typescript`,
    //PWA
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'sake log',
        short_name: 'sake log',
        start_url: '/?source=homescreen',
        background_color: '#333',
        theme_color: '#54917f',
        display: 'minimal-ui',
        icons: [
          {
            src: 'icons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'icons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'icons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'icons/icon-152x152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
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
    //contentful
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CFL_SPACE_ID,
        accessToken: process.env.CFL_DELIVERY_API,
        host: `preview.contentful.com`,
      },
    },
    // markdown
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // Embedded
          {
            resolve: 'gatsby-remark-embed-youtube',
          },
          // Table of Content
          `gatsby-remark-autolink-headers`,
          // Syntax Highlight
          `gatsby-remark-code-titles`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
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
                  classes: 'c-note',
                  title: 'optional',
                },
                danger: {
                  classes: 'c-note--danger',
                  title: 'optional',
                },
              },
            },
          },
          // link
          `gatsby-remark-external-links`,
          `gatsby-plugin-catch-links`,
        ],
      },
    },
    // Embedded
    `gatsby-plugin-twitter`,
    // Font
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Architects Daughter`,
            variants: [`400`],
          },
          {
            family: `Fredericka the Great`,
            variants: [`400`],
            subsets: [`latin`],
          },
        ],
      },
    },
  ],
}
