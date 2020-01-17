import React from "react"
import { Link } from "gatsby"

const PrevNext = ({ prev, next }) => {
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
