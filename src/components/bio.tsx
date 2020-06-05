import * as React from 'react'

import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

// Icons
import { GoMarkGithub } from 'react-icons/go'
import { AiOutlineTwitter } from 'react-icons/ai'

const Bio = () => {
  const data = useStaticQuery(
    graphql`
      query Compbio {
        profileImg: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <div className="grid-center sl-bio-wrapper">
      <div className="grid col-8_sm-10_xs-12 sl-bio">
        <div className="col-4_sm-12">
          <div className="grid-center sl-align-center">
            <div className="col-12_sm-8">
              <Link to="/about_this_site/">
                <Img fluid={data.profileImg.childImageSharp.fluid} />
              </Link>
            </div>
            <div className="col-12">
              <p className="sl-bio-title">sake</p>
            </div>
          </div>
        </div>

        <div className="col-8_sm-12">
          <p>
            現役システムエンジニア。
            <br />
            普段はホスト系のお仕事してます。
            <br />
            ブログでは主にWeb関係の技術について、勉強したことや実際にコーディングしてみた内容を発信していきます。
          </p>
          <Link to="/about_this_site/" className="sl-btn sl-btn-primary">
            プロフィール
          </Link>
          <ul className="sl-inline-list">
            <li>
              <a
                href="https://github.com/sakelog"
                target="_blank"
                rel="noopener noreferrer"
                role="presentation"
                aria-label="Github"
                className="sl-icon"
              >
                <GoMarkGithub />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/sake_engineer"
                target="_blank"
                rel="noopener noreferrer"
                role="presentation"
                aria-label="Twitter"
                className="sl-icon"
              >
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Bio
