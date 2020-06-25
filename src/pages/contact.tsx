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
      "sake logについてのお問い合わせはこちらから",
      false)
    }
    <h1 className="u-align--center">{pageTitle}</h1>
    <ContactForm />
    <BackToTopPage />
  </Layout>
)
