import * as React from "react"
import { Link } from "gatsby"

interface PrevNextType {
  prev?:{
    fields:{
      slug:string,
    },
    frontmatter:{
      title:string,
    },
  },
  next?:{
    fields:{
      slug:string,
    },
    frontmatter:{
      title:string,
    },
  }
}

const PrevNext = ({ prev, next }:PrevNextType) => {
  return (
    <nav>
      <div className="grid-2-middle_sm-1">
        <div className="col-6_sm-12 grid">
          <div className="col-1">
            {prev && (
              <div className="sl-prevnext">
                <span>前</span>
              </div>
            )}
          </div>
          <div className="col-11 sl-align-left">
            {prev && (
              <Link to={prev.fields.slug} rel="prev">
                {prev.frontmatter.title}
              </Link>
            )}
          </div>
        </div>
        <div className="col-6_sm-12 grid-right">
          <div className="col-11 sl-align-right">
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title}
              </Link>
            )}
          </div>
          <div className="col-1">
            {next && (
              <div className="sl-prevnext">
                <span>次</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default PrevNext