import React, { lazy, Suspense } from 'react';

import { graphql, useStaticQuery, Link } from 'gatsby';
import Img from 'gatsby-image';

// Component
const SocialIcon = lazy(() => import('../social_Icon'));

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
  );
  return (
    <div className="p-bio">
      <div className="p-bio__section--image">
        <div style={{ width: '100%' }}>
          <Link to="/about_this_site/">
            <Img
              fluid={data.profileImg.childImageSharp.fluid}
              className="p-bio__image"
            />
          </Link>
        </div>
        <p className="p-bio__authorName">sake</p>
      </div>

      <div className="p-bio__section--description">
        <p>
          現役システムエンジニア。
          <br />
          普段はホスト系のお仕事してます。
          <br />
          ブログでは主にWeb関係の技術について、勉強したことや実際にコーディングしてみた内容を発信していきます。
        </p>
        <Link to="/about_this_site/" className="c-button--primary">
          プロフィール
        </Link>
        <Suspense fallback={<div>ソーシャルアイコン</div>}>
          <SocialIcon />
        </Suspense>
      </div>
    </div>
  );
};

export default Bio;
