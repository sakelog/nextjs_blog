import React from "react"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackToTopPage from "../components/back-to-top-page"

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
    </div>
    <BackToTopPage />
  </Layout>
)
