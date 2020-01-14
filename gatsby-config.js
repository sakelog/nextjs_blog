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
    `gatsby-plugin-sass`,
    `gatsby-plugin-less`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/content/post/`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
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
          {
            resolve:`gatsby-remark-images`,
            options: {
              maxWidth: 400,
            },
          },
          `gatsby-remark-responsive-iframe`,
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-156013841-1",
      },
    },
  ],
}
