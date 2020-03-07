import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Icons
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineTwitter } from "react-icons/ai"


const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query Compfooter{
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
  <footer className="p-2 mt-auto">
    <div className="copyright">
      &copy;2020 {SiteTitle}
    </div>
  </footer>
  )
}

export default Footer
