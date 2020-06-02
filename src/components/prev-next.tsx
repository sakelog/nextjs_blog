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
    <nav className="container">
      <div className="row">
        <div className="col-1">
          {prev && (
            <div className="pagination-pn">
              <span>前</span>
            </div>
          )}
        </div>
        <div className="col-4">
          {prev && (
            <Link to={prev.fields.slug} rel="prev">
              {prev.frontmatter.title}
            </Link>
          )}
        </div>
        <div className="col-4">
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title}
            </Link>
          )}
        </div>
        <div className="col-1">
          {next && (
            <div className="pagination-pn">
              <span>次</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default PrevNext