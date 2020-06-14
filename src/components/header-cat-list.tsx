import * as React from 'react'

import { useStaticQuery, graphql, Link } from 'gatsby'

// Utilities
import { kebabCase } from 'lodash'

const HeaderCatList = () => {
  const data = useStaticQuery(
    graphql`
      query CompheaderCatList {
        allMarkdownRemark(limit: 100) {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }
    `
  )
  const categorys = data.allMarkdownRemark.group
  return (
    <div className="sl-nav-cat">
      {categorys.map((category: { fieldValue: string }, index: number) => (
        <Link to={`/category/${kebabCase(category.fieldValue)}/`} key={index}>
          {category.fieldValue}
        </Link>
      ))}
    </div>
  )
}

export default HeaderCatList
