import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// Component
import SocialIcon from './social-icon'

const Footer = () => {
  const data = useStaticQuery(
    graphql`
      query Compfooter {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const SiteTitle = data.site.siteMetadata.title
  const startDate = new Date(2020, 0, 12)
  const startYear = startDate.getFullYear()
  var now = new Date()
  var nowYear = now.getFullYear()
  var copytext =
    nowYear === startYear
      ? startYear + SiteTitle
      : startYear + '-' + nowYear + SiteTitle
  return (
    <footer>
      <div className="sl-align-center">
        <p>&copy;{copytext}</p>
      </div>
      <div className="sl-align-center">
        <SocialIcon />
      </div>
    </footer>
  )
}

export default Footer
