import * as React from "react"

import { Link, graphql, useStaticQuery} from "gatsby";

import { FaGithubAlt } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineTwitter } from "react-icons/ai"

// Utilities
import { kebabCase } from "lodash"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query Compheader{
        site {
          siteMetadata {
            title
          }
        }
        allMarkdownRemark(limit: 100) {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }
    `
  )

  const SiteTitle = data.site.siteMetadata.title
  const categorys = data.allMarkdownRemark.group

  return(
    <div className="header">
      <div className="headerTop px-3 py-4 d-flex flex-column flex-md-row">
        <div>
          <span className="site-title">
            <Link to="/">{SiteTitle}</Link>
          </span>
        </div>
        <div className="sns-icons mt-2 mt-md-0">
          <div className="item-wrapper">
            <div>
              <a href="https://github.com/sakelog" target="_blank" rel="noopener noreferrer" role="presentation" aria-label="Github">
                <FaGithubAlt />
              </a>
            </div>
          </div>
          <div className="item-wrapper ml-2">
            <div>
              <a href="https://twitter.com/sake_engineer" target="_blank" rel="noopener noreferrer" role="presentation" aria-label="Twitter">
                <AiOutlineTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="headerNav px-1 pt-3">
        <div>
          <ul>
          {categorys.map((category: { fieldValue: string },index:number) => (
            <li key={index}>
              <Link
                to={`/category/${kebabCase(category.fieldValue)}/`}
                className="button-category border-none pt-0"
              >
                {category.fieldValue}
              </Link>
            </li>
          ))}
              <li>
                <Link to="/tags/">
                  タグ一覧
                </Link>
              </li>
              <li>
                <Link to="/about_this_site/">
                  このサイトについて
                </Link>
              </li>
              <li>
                <Link to="/privacy/">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link to="/contact/">
                  お問い合わせ
                </Link>
              </li>
          </ul>
        </div>
      </nav>

    </div>
  )
}

export default Header;
/*
import * as React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"

//Components
import HeaderCatList from "./header-cat-list"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query Compheader{
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
            <Link to="/tags/">
              #タグ一覧
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about_this_site/">
              このサイトについて
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/privacy/">
              プライバシーポリシー
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/">
              お問い合わせ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
*/