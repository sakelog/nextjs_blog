import * as React from "react"

import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

// Icons
import { GoMarkGithub } from "react-icons/go";
import { AiOutlineTwitter } from "react-icons/ai"

const Bio = () => {
    const data = useStaticQuery(
        graphql`
        query Compbio{
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
        <div className="grid-center sl-bio-wrapper">
            <div className="grid col-8_sm-10 sl-bio">
                <div className="col-4_sm-12">
                    <div className="sl-align-center">
                        <Img
                            fluid={data.profileImg.childImageSharp.fluid}
                        />
                        <p className="sl-bio-title">sake</p>
                        <Link to="/about_this_site/" className="sl-btn sl-btn-primary">
                            プロフィール
                        </Link>
                    </div>
                </div>
                <div className="grid-4-middle_sm-2 col-8_sm-12">
                    <div className="col-12">
                        <p>システムエンジニア。普段はホスト系のお仕事してます。</p>
                    </div>
                    <div className="grid-3 col-12">
                        <div className="col">
                            <a href="https://github.com/sakelog" target="_blank" rel="noopener noreferrer" role="presentation" aria-label="Github" className="sl-icon">
                            <GoMarkGithub />
                            </a>
                        </div>
                        <div className="col">
                            <a href="https://twitter.com/sake_engineer" target="_blank" rel="noopener noreferrer" role="presentation" aria-label="Twitter" className="sl-icon">
                            <AiOutlineTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bio