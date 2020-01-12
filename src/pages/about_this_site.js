import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => (
  <Layout>
    <h1 className="uk-article-title">このサイトについて</h1>
    <h2>{data.site.siteMetadata.title}</h2>
    <p>
      当サイト「{data.site.siteMetadata.title}
      」は管理人sakeの技術メモ置き場です。
    </p>
    <p>
      特定の技術に特化しているわけではありませんが、最近の関心事はWordPressと静的HTMLジェネレータです。
    </p>
    <p>このサイトは下記のような技術で作られています。</p>
    <ul>
      <li>静的HTMLジェネレータ：gatsby</li>
      <li>CSSフレームワーク：Bootstrap</li>
    </ul>

    <h2>管理人{data.site.siteMetadata.author}について</h2>
    <p>システムエンジニア歴5年。</p>
    <p>基本情報をCOBOL選択で合格したぐらいにはホスト系。</p>
    <p>
      中学生の頃からWEB制作にハマっており、中学時代の趣味は
      <a
        href="http://www.htmllint.net/html-lint/htmllint.html"
        target="blank"
      >
        Another HTML Lint
      </a>
      で100点を出すこと。
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
