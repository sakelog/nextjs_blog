import * as React from "react"
import { Link, GatsbyNode, GatsbyGraphQLObjectType } from "gatsby"

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
      <div className="row">
        <div className="col-sm mx-3">
          {prev && (
            <div className="d-flex justify-content-start row">
              <div>前：</div>
              <div className="col-10">
                <Link to={prev.fields.slug} rel="prev">
                  {prev.frontmatter.title}
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="col-sm mx-3">
          {next && (
            <div className="d-flex justify-content-end row">
              <div className="col-10 text-right">
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title}
                </Link>
              </div>
              <div>：次</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default PrevNext
