import * as React from 'react'
import { Link } from 'gatsby'

interface PrevNextType {
  prev?: {
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
    }
  }
  next?: {
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
    }
  }
}

const PrevNext = ({ prev, next }: PrevNextType) => {
  return (
    <nav>
      <div className="sl-prevnext">
        <div className="sl-prevnext-item sl-prev">
          {prev && (
            <div className="sl-prevnext-icon">
              <span>前</span>
            </div>
          )}
          {prev && (
            <Link to={prev.fields.slug} rel="prev">
              {prev.frontmatter.title}
            </Link>
          )}
        </div>
        <div className="sl-prevnext-item sl-next">
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title}
            </Link>
          )}
          {next && (
            <div className="sl-prevnext-icon">
              <span>次</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default PrevNext
