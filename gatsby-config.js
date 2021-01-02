/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config();
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
    // develop
    `gatsby-plugin-typescript`,
    //PWA
    `gatsby-plugin-offline`,
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
        host: process.env.CFL_HOST,
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
  ],
};
