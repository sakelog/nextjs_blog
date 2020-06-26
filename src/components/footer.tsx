import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

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
    <footer className="l-footer">
      <div>
        <ul>
          <li>
            <Link to="/tags/" className="nav-link">
              タグ一覧
            </Link>
          </li>
          <li>
            <Link to="/about_this_site/" className="nav-link">
              このサイトについて
            </Link>
          </li>
          <li>
            <Link to="/privacy/" className="nav-link">
              プライバシーポリシー
            </Link>
          </li>
          <li>
            <Link to="/contact/" className="nav-link">
              お問い合わせ
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <SocialIcon />
      </div>
      <div>
        <p>&copy;{copytext}</p>
      </div>
    </footer>
  )
}

export default Footer
