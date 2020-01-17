import React from "react"
import { useStaticQuery, graphql } from "gatsby"


const Footer = () => {
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
  const SiteTitle = data.site.siteMetadata.title
  return(
  <footer className="bg-dark text-light text-center p-2 mt-auto">
    &copy;2020 {SiteTitle}
  </footer>
  )
}

export default Footer
