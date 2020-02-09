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
    <div>
    {categorys.map((category: { fieldValue: string },index:number) => (
      <li key={index}>
        <Link
          to={`/category/${kebabCase(category.fieldValue)}/`}
          className="button-category"
        >
          {category.fieldValue}
        </Link>
      </li>
    ))}
    </div>
  )
}

export default HeaderCatList;
/*
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
  <div>
    {categorys.map((category: { fieldValue: string },index:number) => (
        <Link
          key={index}
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
*/