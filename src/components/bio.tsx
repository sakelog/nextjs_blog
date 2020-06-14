import * as React from 'react'

import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

// Component
import SocialIcon from './social-icon'

const Bio = () => {
  const data = useStaticQuery(
    graphql`
      query Compbio {
        profileImg: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <div className="sl-bio">
      <div className="sl-bio-image-sec">
        <div className="sl-bio-image">
          <Link to="/about_this_site/">
            <Img fluid={data.profileImg.childImageSharp.fluid} />
          </Link>
        </div>
        <p className="sl-bio-title">sake</p>
      </div>

      <div className="sl-bio-description-sec">
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
        <SocialIcon />
      </div>
    </div>
  )
}

export default Bio
