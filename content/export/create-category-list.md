---
title: "Gatsbyで作ったブログカスタマイズ！カテゴリー一覧を追加する方法"
date: "2020-01-13 01:43:18"
update: "2020-01-28 11:03:34"
description: "Gatsbyで作ったブログのヘッダーメニュー部分にカテゴリー一覧を自動で追加するようにカスタマイズしました。実際に書いたコードを共有します"
category: "技術"
tags: ["GatsbyJS"]
---

ブログをやっていると、記事カテゴリーの一覧を表示したくなります。

後々ジャンルが変わることも考えられるので、できれば自動で取得したい。

今回、Gatsbyで作ったブログ（このサイト）で自動でカテゴリー一覧を取得するように設定したので、実装方法をお伝えします。

## 前提条件：各カテゴリーページの設定

各カテゴリーのページ作成を、gatsby-node.js で設定してあげます。

```js:title=gatsby-node.js
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

src/components に「header-cat-list.tsx」を作成します。

```tsx:title=header-cat-list.tsx
import * as React from "react"

import { useStaticQuery, graphql, Link } from "gatsby"

// Utilities
import { kebabCase } from "lodash"

const HeaderCatList = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(limit: 100) {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }
    `
  )
  const categorys = data.allMarkdownRemark.group
  return(
  <div>
    {categorys.map((category: { fieldValue: string },index:number) => (
        <Link
          key={index}
          to={`/category/${kebabCase(category.fieldValue)}/`}
          className="btn btn-outline-light mx-1"
        >
          {category.fieldValue}
        </Link>
    ))}
  </div>
  )
}

export default HeaderCatList
```

※ClassName は Bootstrap の絡みです。

後は、作ったコンポーネントを読み込みたいところでimport して組み込む。

今回はヘッダーで読み込みたいので、例えばsrc/componentにheader.tsxを作成してあげて、こんな感じで読み込みます。

```tsx:title=header.tsx
import * as React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"

//Components
import HeaderCatList from "./header-cat-list"

…中略…

<div className="collapse navbar-collapse" id="nav-menu">
  <HeaderCatList />
  …中略…
</div>

…省略…
```

## ハマったこと

ちょっとハマったのは、graphql の情報の取得方法。

公式のチュートリアルに、[タグ一覧ページの作り方](https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/)というのがあって、これを応用すればいいじゃん！と思ったのですが……。

単純にタグ → カテゴリーに置き換えるだけだと、**Cannot read property 'allMarkdownRemark' of undefined**の表示が出てしまう。

なんじゃらほい？ってことで調べると、こういう書き方は page でしか使えないぜってことらしい。

参考：[TypeError: Cannot read property 'allMarkdownRemark' of undefined #13233](https://github.com/gatsbyjs/gatsby/issues/13233)

というわけで、staticQuery を使うことで解決しました。

まだstaticQueryと普通のquery（export const～queryという書き方）の使い分けが理解しきれていないので、今後の課題ですね。

今回はここまで。
