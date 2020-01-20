import * as React from "react"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form"
import BackToTopPage from "../components/back-to-top-page"

const pageTitle = "お問い合わせ"

export default () => (
  <Layout>
    {SEO
      (pageTitle,
      "sake logについてのお問い合わせはこちらから")
    }
    <h1>{pageTitle}</h1>
    <ContactForm />
    <BackToTopPage />
  </Layout>
)
