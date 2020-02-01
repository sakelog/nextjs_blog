import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Icons
import { GoMarkGithub } from "react-icons/go";


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
  <footer className="bg-light text-dark p-2 mt-auto d-flex flex-column flex-md-row">
    <div className="w-100 text-center">
      &copy;2020 {SiteTitle}
    </div>
    <div className="flex-shrink-1 text-center px-4 footer-icon">
      <a href="https://github.com/sakelog" target="_blank" rel="noopener noreferrer" role="presentation" aria-label="Github">
        <GoMarkGithub />
      </a>
    </div>
  </footer>
  )
}

export default Footer
