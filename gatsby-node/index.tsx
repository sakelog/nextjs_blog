const path = require('path')
import { GatsbyNode } from 'gatsby'
const _ = require('lodash')

// Type
import {
  ContentfulPostConnection,
  ContentfulPost,
  ContentfulPageConnection,
  ContentfulPage,
  ContentfulCategoryConnection,
} from '../types/graphql-types'

type Result = {
  cflPosts: ContentfulPostConnection
  cflPages: ContentfulPageConnection
  cflTagsPost: ContentfulPostConnection
  cflCategoryGroup: ContentfulPostConnection
}

export type postContext = {
  curPost: ContentfulPost
  prev: ContentfulPost
  next: ContentfulPost
}

export type pageContext = {
  page: ContentfulPage
}

export type categoryContext = {
  limit: number
  skip: number
  numPages: number
  currentPage: number
  slug: string
  pathBase: string
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
        date
        update
        category {
          name
          slug
        }
        tags {
          name
          slug
        }
        description
        body {
          childMarkdownRemark {
            htmlAst
            tableOfContents(absolute: false)
          }
        }
      }
      previous {
        title
        slug
      }
      next {
        title
        slug
      }
    }
  }
  cflPages: allContentfulPage(limit: 2000) {
    edges {
      node {
        slug
        title
        body {
          childMarkdownRemark {
            htmlAst
          }
        }
        description
      }
    }
  }
  cflTagsPost: allContentfulPost(limit: 2000) {
    group(field: tags___name) {
      totalCount
      fieldValue
    }
  }
  cflCategoryGroup: allContentfulPost(limit: 2000) {
    group(field: category___slug) {
      fieldValue
      totalCount
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

  cflPosts.forEach((post) => {
    createPage<postContext>({
      path: post.node.slug,
      component: blogPostTemplate,
      context: {
        curPost: post.node,
        prev: post.next,
        next: post.previous,
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
    createPage<pageContext>({
      path: page.node.slug,
      component: pageTemplate,
      context: {
        page: page.node,
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
  const cflCategorys = result.data.cflCategoryGroup.group
  const CategoryPerPage = 10

  cflCategorys.forEach((category) => {
    var categoryNumPages = Math.ceil(category.totalCount / CategoryPerPage)
    var categoryPathBase = '/category/' + _.kebabCase(category.fieldValue) + '/'

    Array.from({ length: categoryNumPages }).forEach((_, i) => {
      createPage<categoryContext>({
        path: i === 0 ? categoryPathBase : categoryPathBase + (i + 1),
        component: categoryTemplate,
        context: {
          limit: CategoryPerPage,
          skip: i * CategoryPerPage,
          numPages: categoryNumPages,
          currentPage: i + 1,
          slug: category.fieldValue,
          pathBase: categoryPathBase,
        },
      })
    })
  })
}
