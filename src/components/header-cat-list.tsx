import * as React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"

// Utilities
import { kebabCase } from "lodash"

const HeaderCatList = () => {
  const data = useStaticQuery(
    graphql`
      query CompheaderCatList{
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
  <div className="grid-4">
    {categorys.map((category: { fieldValue: string },index:number) => (
        <div className="col">
          <Link
            key={index}
            to={`/category/${kebabCase(category.fieldValue)}/`}
            className=""
          >
            {category.fieldValue}
          </Link>
        </div>
    ))}
  </div>
  )
}

export default HeaderCatList