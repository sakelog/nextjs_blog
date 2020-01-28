---
title: "Gatsbyブログカスタマイズ。カテゴリー記事一覧をページ遷移させよう"
date: "2020-01-13 09:42:24"
update: "2020-01-28 11:57:15"
description: "Gatsbyで作ったブログのカスタマイズ方法のご紹介です。今回はカテゴリー記事一覧ページをページ遷移させる方法のご紹介です。コードコピペで実装可能です。"
category: "技術"
tags: ["GatsbyJS"]
---

[[danger | 2020/1/28追記]]
| ソースコードのバグを修正しました。

結論から言うと、Gatsby のカテゴリー記事一覧ページにページ遷移を実装するには、 `totalCount` を使うと良いです。

## 前提条件

公式にタグに紐づく投稿一覧ページの作り方解説が載っています。

参考：[Creating Tags Pages for Blog Posts](https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/)

この情報を元に、まずは基本的なカテゴリー記事一覧ページを作成していきます。

## gatsby-node.jsの設定

gatsby-node.jsを設定して、それぞれのカテゴリーに紐づく記事一覧ページを作成します。

ポイントは、totalCountを取得することと、totalCountを元にページのパスを分割すること。

下記はgatsby-node.jsをカテゴリー記事一覧ページ作成に関わる部分のみ抜き出したものです。

```js:title=gatsby-node.js
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const _ = require("lodash")

// Template
const categoryTemplate = path.resolve(`./src/templates/category.jsx`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const parent = getNode(node.parent)
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
        categoryGroup: allMarkdownRemark(
          limit: 2000
          ) {
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

    // Create Category Pages
    const categorys = result.data.categoryGroup.group
    const categoryPerPage = 6

    categorys.forEach(category => {
      var categorynumPages = Math.ceil(category.totalCount / categoryPerPage)
      var categoryPathBase = `/category/${_.kebabCase(category.fieldValue)}/`
      Array.from({ length: categorynumPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? categoryPathBase : categoryPathBase + (i + 1),
          component: categoryTemplate,
          context: {
            limit: categoryPerPage,
            skip: i * categoryPerPage,
            category: category.fieldValue,
            numPages: categorynumPages,
            currentPage: i + 1,
            pathBase: categoryPathBase
          },
        })
      })
    })

  })
}
```

順を追って見ていきましょう。

### 各カテゴリーのtotalCount（総記事数）を取得する

```js{13}:title=gatsby-node.js
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        categoryGroup: allMarkdownRemark(
          limit: 2000
          ) {
          group(field: frontmatter___category) {
            fieldValue
            totalCount
          }
        }
      }
    `
```

frontmatterのcategoryに紐づく記事の総数をtotalCountで取得します。

### 記事数に応じてパスを分割

記事数に応じて、作成されるページのパスを分割してあげます。

```js{3,6,10}:title=gatsby-node.js
    // Create Category Pages
    const categorys = result.data.categoryGroup.group
    const categoryPerPage = 6

    categorys.forEach(category => {
      var categorynumPages = Math.ceil(category.totalCount / categoryPerPage)
      var categoryPathBase = `/category/${_.kebabCase(category.fieldValue)}/`
      Array.from({ length: categorynumPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? categoryPathBase : categoryPathBase + (i + 1),
          component: categoryTemplate,
          context: {
            limit: categoryPerPage,
            skip: i * categoryPerPage,
            category: category.fieldValue,
            numPages: categorynumPages,
            currentPage: i + 1,
            pathBase: categoryPathBase
          },
        })
      })
    })
```

今回は1ページ6記事表示するように設定します。

## カテゴリ記事一覧ページで記事を読み取る

あとは、カテゴリ記事一覧ページで記事を読み取ります。

src/templates/category.jsxを作成。

```jsx:title=category.jsx
import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Pagination from "../components/pagination"
import BackToTopPage from "../components/back-to-top-page"

const Category = ({ pageContext, data }) => {
  const { category, currentPage, numPages, pathBase } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const categoryHeader = `カテゴリー：${category}`
  return (
    <Layout>
      {SEO
        (categoryHeader,
        `「${category}」についての一覧ページです`)
      }
      <h1 className="text-center">
        <span>{categoryHeader}</span>
      </h1>
      <p>投稿：{totalCount}件</p>
      {edges.map(({ node }) => {
        const { slug } = node.fields
        const title = node.frontmatter.title || node.fields.slug
        const description = node.frontmatter.description || node.excerpt
        return (
          <div key={slug} className="border-bottom pt-3 px-2">
            <small>{node.frontmatter.date}</small>
            <Link to={slug}>
              <h2>{title}</h2>
            </Link>
            <p>{description}</p>
          </div>
        )
      })}
      <Pagination numPages={numPages} currentPage={currentPage} pathBase={pathBase} />
      <BackToTopPage />
    </Layout>
  )
}
Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
    pathBase: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Category
export const pageQuery = graphql`
  query($category: String!, $limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            description
          }
        }
      }
    }
  }
`
```

ペジネーションは別でコンポーネントを作成しているので、取得したページ情報を渡してあげます。

```jsx:title=pagination.jsx
import React from "react"
import { Link } from "gatsby"

const Pagination = ({ numPages, currentPage, pathBase }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? pathBase : pathBase + (currentPage - 1).toString()
  const nextPage = pathBase + (currentPage + 1).toString()

  const prevText = "前へ"
  const nextText = "次へ"
  return (
    <nav className="my-2">
      {numPages !== 1 && (
        <ul className="pagination justify-content-center">
          {!isFirst ? (
            <li className="page-item">
              <Link to={prevPage} className="page-link" rel="prev">
                {prevText}
              </Link>
            </li>
          ) : (
            <li className="page-item disabled">
            <span className="page-link">
              {prevText}
            </span>
          </li>
          )}

          {Array.from({ length: numPages }, (_, i) =>
            i + 1 === currentPage ? (
              <li
                key={`pagination-number${i + 1}`}
                className="page-item active"
              >
                <span className="page-link">{i + 1}</span>
              </li>
            ) : (
              <li key={`pagination-number${i + 1}`} className="page-item">
                <Link to={pathBase + (i === 0 ? "" : i + 1)} className="page-link">
                  {i + 1}
                </Link>
              </li>
            )
          )}

          {!isLast ? (
            <li className="page-link">
              <Link to={nextPage} rel="next" className="page-item">
                {nextText}
              </Link>
            </li>
          ) : (
            <li className="page-item disabled">
            <span className="page-link">
              {nextText}
            </span>
          </li>
          )}
        </ul>
      )}
    </nav>
  )
}

export default Pagination
```

## まとめ

意外とGatsbyでのカテゴリー記事一覧のページ遷移について説明しているサイトがなかったので、今回記事にまとめました。

ポイントは**totalCount でカテゴリーに紐づく投稿数を取得**です。是非活用してみてください。
