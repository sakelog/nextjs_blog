import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title , description }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `
  )
  const metaTitle = (title ? title + " | " : "") + data.site.siteMetadata.title 
  const metaDescription = description ||  "WEB系の技術を中心にした技術メモ置き場です。WordPress・Gatsby・Bootstrapなどなど。"
  const ogpImage = data.site.siteMetadata.siteUrl + "/ogp.png"
  return (
    <Helmet
      htmlAttributes={{
        lang: "ja",
      }}
      title={metaTitle}
      meta={[
        {
          name: "description",
          content: metaDescription
        },
        {
          property: "og:title",
          content: metaTitle,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: ogpImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
      defer={false}
    />
  )  
}

SEO.prototype = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default SEO