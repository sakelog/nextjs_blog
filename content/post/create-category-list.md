---
title: "メニューにカテゴリー一覧を追加"
date: "2020-01-13 01:43:18"
description: "ヘッダーのメニュー部分にカテゴリー一覧を自動で設定するようにしました。Gatsbyでの設定方法を記載します。"
category: "技術"
tags : ["Gatsby"]
---

ブログをやっていると、記事カテゴリーの一覧ほしくなりますよね。
後々ジャンルが変わることも考えられるので、できれば自動で取得したい。
今回、自動でカテゴリー一覧を取得するように設定したので、実装方法を記載していきます。

## 前提条件：各カテゴリーページの設定

各カテゴリーのページ作成を、gatsby-node.jsで設定してあげます。

```jsx:title=gatsby-node.js
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
          }
        }
        categoryGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

……中略……

    // Create Category Pages
    const categorys = result.data.categoryGroup.group
    categorys.forEach(category =>{
      createPage({
        path: `/category/${_.kebabCase(category.fieldValue)}/`,
        component: categoryTemplate,
        context: {
          category: category.fieldValue,
        }
      })
    })
  })
}
```

## カテゴリー一覧の作成

src/componentsに「header-cat-list.js」を作成します。

```jsx:title=header-cat-list.js
import React from "react"
import { useStaticQuery,graphql,Link } from "gatsby"

// Utilities
import kebabCase from "lodash/kebabCase"

export default () => {
    const data = useStaticQuery(
        graphql`
        query {
            allMarkdownRemark(limit: 2000) {
                group(field: frontmatter___category) {
                    fieldValue
                }
            }
        }
        `
    )
    const categorys = data.allMarkdownRemark.group
    return(
        <ul className="navbar-nav">{
            categorys.map( (category) =>
                <li key={category.fieldValue} className="nav-item">
                    <Link to={`/category/${kebabCase(category.fieldValue)}/`} className="nav-link">
                        {category.fieldValue}
                    </Link>
                </li>
            )
        }</ul>
    )
}
```

※ClassNameはBootstrapの絡みです。

後は、これを読み込みたいところでimportして組み込む。

## ハマったこと

ちょっとハマったのは、graphqlの情報の取得方法。

公式のチュートリアルに、[タグ一覧ページの作り方](https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/)というのがあって、これを応用すればいいじゃん！と思ったのですが……。

単純にタグ→カテゴリーに置き換えるだけだと、**Cannot read property 'allMarkdownRemark' of undefined**の表示が出てしまう。

なんじゃらほい？ってことで調べると、こういう書き方はpageでしか使えないぜってことらしい。

参考：[TypeError: Cannot read property 'allMarkdownRemark' of undefined #13233](https://github.com/gatsbyjs/gatsby/issues/13233)

というわけで、staticQueryを使うことで解決。
