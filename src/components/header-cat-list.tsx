import * as React from 'react'

import { useStaticQuery, graphql, Link } from 'gatsby'

// Utilities
const _ = require('lodash')

const HeaderCatList = () => {
  const data = useStaticQuery(
    graphql`
      query CompheaderCatList {
        cflCategoryPostGroup: allContentfulPost(limit: 2000) {
          group(field: category___name) {
            fieldValue
          }
        }
        cflCategory: allContentfulCategory(limit: 100) {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    `
  )
  //const categorys = data.allMarkdownRemark.group
  const categorys = data.cflCategory.edges
  const categoryPostGroup = data.cflCategoryPostGroup.group
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
  const categoryLinks = hasPostCategorys.map((hasPostCategory, index) => {
    const categoryPath = `/category/${_.kebabCase(hasPostCategory.slug)}/`
    return (
      <li>
        <Link to={categoryPath} key={index}>
          {hasPostCategory.name}
        </Link>
      </li>
    )
  })
  return <ul className="l-header__nav__drawer--list">{categoryLinks}</ul>
}

export default HeaderCatList
