const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

// Template
const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
const blogPostListTemplate = path.resolve(`./src/templates/blog-list.jsx`)
const tagTemplate = path.resolve(`./src/templates/tags.jsx`)
const categoryTemplate = path.resolve(`./src/templates/category.jsx`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
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
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
        categoryGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `
  ).then(result => {
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
          prev,
          next,
        },
      })
    })

    // Create blog post list pages
    const postsPerPage = 6;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/` : `/${i + 1}`,
        component: blogPostListTemplate,
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        },
      })
    })
  
    // Create Tags pages
    const tags = result.data.tagsGroup.group

    tags.forEach(tag => {
      const tagPerPage = 6;
      const tagnumPages = Math.ceil(tag.totalCount / tagPerPage);
      const tagPathBase = `/tags/${_.kebabCase(tag.fieldValue)}/`
      Array.from({length: tagnumPages}).forEach((_,i) => {
        createPage({
          path: i === 0 ? tagPathBase : `${tagPathBase}/${i + 1}`,
          component: tagTemplate,
          context: {
            limit: tagPerPage,
            skip: i * tagPerPage,
            tag: tag.fieldValue,
            numPages: tagnumPages,
            currentPage: i + 1,
          },
        })
      })
    })

    // Create Category Pages
    const categorys = result.data.categoryGroup.group

    categorys.forEach(category => {
      const categoryPerPage = 6;
      const categorynumPages = Math.ceil(category.totalCount / categoryPerPage);
      const categoryPathBase = `/category/${_.kebabCase(category.fieldValue)}/`
      Array.from({length: categorynumPages}).forEach((_,i) => {
        createPage({
          path: i === 0 ? categoryPathBase : `${categoryPathBase}/${i + 1}`,
          component: categoryTemplate,
          context: {
            limit: categoryPerPage,
            skip: i * categoryPerPage,
            category: category.fieldValue,
            numPages: categorynumPages,
            currentPage: i + 1,
          },
        })
      })
    })
  })
}