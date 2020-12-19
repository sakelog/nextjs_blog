import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import { escape } from 'lodash'

function SEO(title: string, description: string, imageFLG: boolean) {
  const data = useStaticQuery(
    graphql`
      query CompSEO {
        site {
          siteMetadata {
            title
            siteUrl
          }
        }
      }
    `
  )
  const metaTitle = (title ? title + ' | ' : '') + data.site.siteMetadata.title
  const metaDescription =
    description ||
    'WEB系の技術を中心にした技術メモ置き場です。GatsbyJS・Git・TypeScript'
  const ogpImage =
    imageFLG === true
      ? 'https://res.cloudinary.com/cl1sakelog/image/upload/l_text:Sawarabi%20Gothic_50_bold:' +
        escape(title) +
        ',co_rgb:fff,w_700,c_fit/v1581204377/sakelog_ogp.png'
      : data.site.siteMetadata.siteUrl + '/ogp.png'
  const TwitterType = imageFLG === true ? 'summary_large_image' : 'summary'
  return (
    <Helmet
      htmlAttributes={{
        lang: 'ja',
      }}
      title={metaTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: metaTitle,
        },
        {
          property: 'og:description',
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
          content: TwitterType,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `viewport`,
          content: `minimum-scale=1, initial-scale=1, width=device-width`,
        },
      ]}
      defer={false}
    />
  )
}

export default SEO
