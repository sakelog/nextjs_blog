import * as React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'

//Components
import HeaderCatList from './header-cat-list'

import { FiPlus, FiMinus } from 'react-icons/fi'

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query Compheader {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  const SiteTitle = data.site.siteMetadata.title

  const [isChecked, setIsChecked] = React.useState(false)

  return (
    <header className="l-header">
      <nav
        className="l-header__nav"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="l-header__nav__title">
          <Link to="/" className="l-header__nav__title__inner">
            <span>{SiteTitle}</span>
          </Link>

          <label
            className="l-header__nav__title__menubutton"
            onClick={() => setIsChecked(!isChecked)}
          >
            <span>
              {isChecked ? (
                <FiMinus className="l-header__nav__title__menubutton__icon--cheked" />
              ) : (
                <FiPlus />
              )}
            </span>
          </label>
        </div>

        <div className="l-header__nav__drawer">
          <input
            id="l-header-nav__checkbox"
            type="checkbox"
            className="u-display--none is-checked"
            checked={isChecked}
            readOnly
          />

          <div className="l-header__nav__drawer__content">
            <HeaderCatList />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
