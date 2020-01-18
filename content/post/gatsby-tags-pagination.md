---
title: "Gatsby・タグ投稿一覧にページ遷移をつける"
date: "2020-01-13 09:42:24"
description: "Gatsbyのタグ投稿一覧にページ遷移を実装したので、その方法を解説します。"
category: "技術"
tags: ["Gatsby"]
---

結論から言うと、Gatsby のタグ投稿一覧ページにページ遷移を実装するには、 `totalCount` を使うと良いです。

## 前提条件

公式にタグに紐づく投稿一覧ページの作り方解説が載っています。

参考：[Creating Tags Pages for Blog Posts](https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/)

この情報を元に、基本的なタグ投稿一覧ページを作成済み、という前提でお話します。

## gatsby-node.js で totalCount の取得

gatsby-node.js の graphql 記述部分をいじって、各タグの totalCount を取得します。

```jsx{21}:title=gatsby-node.js
  const result = await graphql(`
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
    }
    `
```

## gatsby-node.js でページ作成時に複数ページ作成する

```jsx{6-7,9,11,14-15,17-18}:title=gatsby-node.js
// Create Tags pages
const tags = result.data.tagsGroup.group
const tagTemplate = path.resolve(`./src/templates/tags.jsx`)

tags.forEach(tag => {
  const tagPerPage = 6
  const tagnumPages = Math.ceil(tag.totalCount / tagPerPage)
  const tagPathBase = `/tags/${_.kebabCase(tag.fieldValue)}/`
  Array.from({ length: tagnumPages }).forEach((_, i) => {
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
```

## タグ投稿一覧ページでページ情報を読み取る

あとは、タグ情報一覧ページでページ情報を読み取ってあげます。

src/templates/tags.js を修正。

```jsx{9,37,45-46}:title=tags.js
import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Head from "../components/head"
import Pagination from "../components/pagination"

import { Link, graphql } from "gatsby"
const Tags = ({ pageContext, data }) => {
  const { tag, currentPage, numPages } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `タグ：${tag}`

  return (
    <Layout>
      <Head
        title={tagHeader}
        description={`「${tag}」についての一覧ページです`}
      />
      <h1 className="text-center">
        <span>{tagHeader}</span>
      </h1>
      <p>投稿：{totalCount}件</p>
      {edges.map(({ node }) => {
        const { slug } = node.fields
        const title = node.frontmatter.title || node.fields.slug
        const description = node.frontmatter.description || node.excerpt
        return (
          <div key={slug} className="border-bottom pt-3 px-2">
            <small>投稿日：{node.frontmatter.date}</small>
            <Link to={slug}>
              <h2>{title}</h2>
            </Link>
            <p>{description}</p>
          </div>
        )
      })}
      <Pagination numPages={numPages} currentPage={currentPage} />
      <Link to="/tags">タグ一覧</Link>
    </Layout>
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
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
export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
            date
            description
          }
        }
      }
    }
  }
`
```

ペジネーションは別でコンポーネントを作成しているので、取得したページ情報を渡してあげます。

## まとめ

意外とタグ一覧ページのページ遷移について説明しているサイトがなかったので、今回記事にまとめました。

ポイントは**totalCount でタグに紐づく投稿数を取得**ですので、是非活用してみてください。
