import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Helmet
      htmlAttributes={{
        lang: "ja",
      }}
      title={
        (props.title ? props.title + " | " : "") + data.site.siteMetadata.title
      }
      meta={[
        {
          name: "description",
          content:
            props.description ||
            "WEB系の技術を中心にした技術メモ置き場です。WordPress・Gatsby・UIkitなどなど。",
        },
      ]}
    />
  )
}
