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
  const startDate = new Date(2020,0,12);
  const startYear = startDate.getFullYear();
  var now = new Date();
  var nowYear = now.getFullYear();
  var copytext = nowYear === startYear ? startYear + SiteTitle : startYear + "-" + nowYear + SiteTitle
  return(
  <footer>
    <div className="ft-wrapper">
      <div className="ft-flex-item1">
        &copy;{copytext}
      </div>
      <div className="ft-flex-item2">
        <a href="https://github.com/sakelog" target="_blank" rel="noopener noreferrer" role="presentation" aria-label="Github">
          <GoMarkGithub />
        </a>
        <a href="https://twitter.com/sake_engineer" target="_blank" rel="noopener noreferrer" role="presentation" aria-label="Twitter">
          <AiOutlineTwitter />
        </a>
      </div>
    </div>
  </footer>
  )
}

export default Footer