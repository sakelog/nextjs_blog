import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

const Bio = () => {
    const data = useStaticQuery(
        graphql`
        query {
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
    return(
        <div className="bio p-2 m-4">
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
                <div className="bio-img">
                    <Img
                        fluid={data.profileImg.childImageSharp.fluid}
                    />
                </div>
                <div>
                    <p className="h3">sake</p>
                    <p>システムエンジニア。普段はホスト系のお仕事してます。</p>
                    <Link to="/about_this_site/" className="btn btn-primary">
                        プロフィール
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Bio

