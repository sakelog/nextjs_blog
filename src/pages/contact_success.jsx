import React from "react"
import { Link } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"

const pageTitle = "お問い合わせ"

export default () => (
  <Layout>
    <SEO
      title={pageTitle}
      description="sake logについてのお問い合わせはこちらから"
    />
    <h1>{pageTitle}</h1>
    <div className="alert alert-success" role="alert">
      <h2 className="alert-heading">送信成功</h2>
      <p>お問い合わせ内容は送信されました。確認後、返信させていただきます。</p>
      <hr />
      <p className="mb-0"><Link to="/">サイトトップに戻る</Link></p>
    </div>
  </Layout>
)
