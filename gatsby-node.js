const path = require("path")
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
  {
    postsRemark: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            category
          }
        }
      }
    }
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
    categoryGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
      }
    }
  }
  `)
  if (result.errors) {
    throw result.errors
  }
  //Blog Post
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  const posts = result.data.postsRemark.edges

  posts.forEach((post,index) => {
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
  //Tag Page
  const tags = result.data.tagsGroup.group
  const tagTemplate = path.resolve(`./src/templates/tags.js`)
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
  //Category Page
  const categorys = result.data.categoryGroup.group
  const categoryTemplate = path.resolve(`./src/templates/category.js`)
  categorys.forEach(category =>{
    createPage({
      path: `/category/${_.kebabCase(category.fieldValue)}/`,
      component: categoryTemplate,
      context: {
        category: category.fieldValue,
      }
    })
  })
  //Blog Post List
  const postsPerPage = 6
  //const postsPerPage = 1
  const numPages = Math.ceil(posts.length / postsPerPage)
  const postListTemplate = path.resolve(`./src/templates/blog-list.js`)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: postListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}