import * as React from 'react'

import { useStaticQuery, graphql, Link } from 'gatsby'

// Utilities
const _ = require('lodash')

const HeaderCatList = () => {
  const data = useStaticQuery(
    graphql`
      query CompheaderCatList {
        cflCategory: allContentfulCategory(limit: 100) {
          edges {
            node {
              name
              slug
            }
          }
        }
        categoryPostGroup: allMarkdownRemark(limit: 100) {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }
    `
  )
  //const categorys = data.allMarkdownRemark.group
  const categorys = data.cflCategory.edges
  const categoryPostGroup = data.categoryPostGroup.group
  var hasPostCategorys: { name: string; slug: string }[] = []
  var i = 0

  categorys.map((category: { node: { name: string; slug: string } }) => {
    const categoryName = category.node.name
    const categorySlug = category.node.slug
    categoryPostGroup.forEach((categoryPosts: { fieldValue: string }) => {
      if (categoryPosts.fieldValue === categoryName) {
        hasPostCategorys[i] = {
          name: categoryName,
          slug: categorySlug,
        }
        i++
      }
    })
  })
  const categoryLinks = hasPostCategorys.map((hasPostCategory) => {
    const categoryPath = `/category/${_.kebabCase(hasPostCategory.slug)}/`
    return <Link to={categoryPath}>{hasPostCategory.name}</Link>
  })
  return <div className="sl-nav-cat">{categoryLinks}</div>
}

export default HeaderCatList
