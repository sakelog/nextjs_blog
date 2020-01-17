import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

//Components
import HeaderCatList from "./header-cat-list"

const Header = () => {
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
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <Link to="/" className="navbar-brand">
        {SiteTitle}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#nav-menu"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="nav-menu">
        <HeaderCatList />
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/tags/" className="nav-link">
              #タグ一覧
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about_this_site/" className="nav-link">
              このサイトについて
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/privacy/" className="nav-link">
              プライバシーポリシー
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/" className="nav-link">
              お問い合わせ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header