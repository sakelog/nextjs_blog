import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// Utilities
import kebabCase from "lodash/kebabCase"

const HeaderCatList = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(limit: 100) {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }
    `
  )
  const categorys = data.allMarkdownRemark.group
 return(
  <div>
    {categorys.map(category => (
        <Link
          key={category.fieldValue}
          to={`/category/${kebabCase(category.fieldValue)}/`}
          className="btn btn-outline-light mx-1"
        >
          {category.fieldValue}
        </Link>
    ))}
  </div>
 )
}

export default HeaderCatList
