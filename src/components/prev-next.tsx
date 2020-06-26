import * as React from 'react'
import { Link } from 'gatsby'

import { ContentfulPost } from '../../types/graphql-types'

interface PrevNextType {
  prev?: ContentfulPost
  next?: ContentfulPost
}

const PrevNext = ({ prev, next }: PrevNextType) => {
  return (
    <nav>
      <div className="c-prevnext">
        <div className="c-prevnext__item--prev">
          {prev && (
            <div className="c-prevnext__icon">
              <span>前</span>
            </div>
          )}
          {prev && (
            <Link to={`/${prev.slug}/`} rel="prev">
              {prev.title}
            </Link>
          )}
        </div>
        <div className="c-prevnext__item--next u-align--right">
          {next && (
            <Link to={`/${next.slug}/`} rel="next">
              {next.title}
            </Link>
          )}
          {next && (
            <div className="c-prevnext__icon">
              <span>次</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default PrevNext
