const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require('lodash')

// Template
const blogPostTemplate = path.resolve(`./src/templates/blog-post.tsx`)
const blogPostListTemplate = path.resolve(`./src/templates/blog-list.tsx`)
const pageTemplate = path.resolve(`./src/templates/page.tsx`)
const tagTemplate = path.resolve(`./src/templates/tags.tsx`)
const categoryTemplate = path.resolve(`./src/templates/category.tsx`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent)

    createNodeField({
      node,
      name: 'collection',
      value: parent.sourceInstanceName,
    })
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        postsRemark: allMarkdownRemark(
          filter: { fields: { collection: { eq: "post" } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 2000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                category
              }
            }
          }
        }
        pageRemark: allMarkdownRemark(
          filter: { fields: { collection: { eq: "page" } } }
          limit: 2000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(
          filter: { fields: { collection: { eq: "post" } } }
          limit: 2000
        ) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
        categoryGroup: allMarkdownRemark(
          limit: 2000
          filter: { fields: { collection: { eq: "post" } } }
        ) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
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
        categoryPost: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___category) {
            totalCount
            fieldValue
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.postsRemark.edges

    posts.forEach((post, index) => {
      const prev = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.node.fields.slug,
          category: post.node.frontmatter.category,
          prev,
          next,
        },
      })
    })

    // Create blog post list pages
    const postsPerPage = 5
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `/${i + 1}`,
        component: blogPostListTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })

    // Create pages.
    const pages = result.data.pageRemark.edges

    pages.forEach((page) => {
      createPage({
        path: page.node.fields.slug,
        component: pageTemplate,
        context: {
          slug: page.node.fields.slug,
        },
      })
    })

    // Create Tags pages
    const tags = result.data.tagsGroup.group
    const tagPerPage = 10

    tags.forEach((tag) => {
      var tagnumPages = Math.ceil(tag.totalCount / tagPerPage)
      var tagPathBase = `/tags/${_.kebabCase(tag.fieldValue)}/`
      Array.from({ length: tagnumPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? tagPathBase : tagPathBase + (i + 1),
          component: tagTemplate,
          context: {
            limit: tagPerPage,
            skip: i * tagPerPage,
            tag: tag.fieldValue,
            numPages: tagnumPages,
            currentPage: i + 1,
            pathBase: tagPathBase,
          },
        })
      })
    })
    // Contentful CategoryPage
    const cflCategorys = result.data.cflCategoryGroup.edges
    const CategoryPostGroup = result.data.categoryPost.group
    const cflCategoryPerPage = 10

    cflCategorys.forEach((category) => {
      CategoryPostGroup.forEach((categoryPosts) => {
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
  })
}
