import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

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

  const now = new Date()
  const nowYear = now.getFullYear()
  const copytext =
    nowYear === startYear
      ? startYear + SiteTitle
      : startYear + '-' + nowYear + SiteTitle

  return (
    <footer className="l-footer">
      <p>&copy;{copytext}</p>
    </footer>
  )
}

export default Footer
