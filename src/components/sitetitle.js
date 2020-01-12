import React from "react"
import { useStaticQuery, graphql } from "gatsby"
export default () => {
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
    return(
        <span>{data.site.siteMetadata.title}</span>
    )
}