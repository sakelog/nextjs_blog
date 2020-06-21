const path = require('path')
import { GatsbyNode } from 'gatsby'
const _ = require('lodash')

// Type
import {
  ContentfulPostConnection,
  ContentfulPost,
  ContentfulPageConnection,
  ContentfulCategoryConnection,
} from '../types/graphql-types'

type Result = {
  cflPosts: ContentfulPostConnection
  cflPages: ContentfulPageConnection
  cflTagsPost: ContentfulPostConnection
  cflCategoryGroup: ContentfulCategoryConnection
  cflCategoryPost: ContentfulPostConnection
}

// Template
const blogPostTemplate = path.resolve('./src/templates/blog-post.tsx')
const blogPostListTemplate = path.resolve('./src/templates/blog-list.tsx')
const pageTemplate = path.resolve('./src/templates/page.tsx')
const tagTemplate = path.resolve('./src/templates/tags.tsx')
const categoryTemplate = path.resolve('./src/templates/category.tsx')

const query = `
{
  cflPosts: allContentfulPost(
    limit: 2000
    sort: { fields: date, order: DESC }
    ) {
    edges {
      node {
        slug
        title
        category {
          name
        }
      }
    }
  }
  cflPages: allContentfulPage(limit: 2000) {
    edges {
      node {
        slug
        title
      }
    }
  }
  cflTagsPost: allContentfulPost(limit: 2000) {
    group(field: tags___name) {
      totalCount
      fieldValue
    }
  }
  cflCategoryGroup: allContentfulCategory(limit: 2000) {
    edges {
      node {
        name
        slug
      }
    }
  }
  cflCategoryPost: allContentfulPost(limit: 2000) {
    group(field: category___name) {
      totalCount
      fieldValue
    }
  }
}
`

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage },
}) => {
  const result = await graphql<Result>(query)
  if (result.errors || !result.data) {
    throw result.errors
  }
  // Contentful Post
  const cflPosts = result.data.cflPosts.edges

  cflPosts.forEach((post, index) => {
    const prev = index === cflPosts.length - 1 ? null : cflPosts[index + 1].node
    const next = index === 0 ? null : cflPosts[index - 1].node

    createPage({
      path: post.node.slug,
      component: blogPostTemplate,
      context: {
        slug: post.node.slug,
        category: post.node.category.name,
        prev,
        next,
      },
    })
  })

  // Contentful Post List
  const cflPostsPerPage = 5
  const cflNumPages = Math.ceil(cflPosts.length / cflPostsPerPage)

  Array.from({ length: cflNumPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: blogPostListTemplate,
      context: {
        limit: cflPostsPerPage,
        skip: i * cflPostsPerPage,
        numPages: cflNumPages,
        currentPage: i + 1,
      },
    })
  })

  // Contentful Pages
  const cflpages = result.data.cflPages.edges

  cflpages.forEach((page) => {
    createPage({
      path: page.node.slug,
      component: pageTemplate,
      context: {
        slug: page.node.slug,
      },
    })
  })

  // Contentful TagsPage
  const cflTags = result.data.cflTagsPost.group
  const cflTagPerPage = 10

  cflTags.forEach((tag) => {
    var cflTagnumPages = Math.ceil(tag.totalCount / cflTagPerPage)
    var cflTagPathBase = `/tags/${_.kebabCase(tag.fieldValue)}/`
    Array.from({ length: cflTagnumPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? cflTagPathBase : cflTagPathBase + (i + 1),
        component: tagTemplate,
        context: {
          limit: cflTagPerPage,
          skip: i * cflTagPerPage,
          tag: tag.fieldValue,
          numPages: cflTagnumPages,
          currentPage: i + 1,
          pathBase: cflTagPathBase,
        },
      })
    })
  })

  // Contentful CategoryPage
  const cflCategorys = result.data.cflCategoryGroup.edges
  const cflCategoryPostGroup = result.data.cflCategoryPost.group
  const cflCategoryPerPage = 10

  cflCategorys.forEach((category) => {
    cflCategoryPostGroup.forEach((categoryPosts) => {
      var categorynumPages =
        category.node.name === categoryPosts.fieldValue
          ? Math.ceil(categoryPosts.totalCount / cflCategoryPerPage)
          : null
      var categoryPathBase =
        category.node.name === categoryPosts.fieldValue
          ? `/category/${_.kebabCase(category.node.slug)}/`
          : null

      Array.from({ length: categorynumPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? categoryPathBase : categoryPathBase + (i + 1),
          component: categoryTemplate,
          context: {
            limit: cflCategoryPerPage,
            skip: i * cflCategoryPerPage,
            category: category.node.name,
            numPages: categorynumPages,
            currentPage: i + 1,
            pathBase: categoryPathBase,
          },
        })
      })
    })
  })
}
