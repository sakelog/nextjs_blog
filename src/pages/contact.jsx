import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import ContactForm from "../components/contact-form"

const pageTitle = "お問い合わせ"

export default () => (
  <Layout>
    <SEO
      title={pageTitle}
      description="sake logについてのお問い合わせはこちらから"
    />
    <h1>{pageTitle}</h1>
    <ContactForm />
  </Layout>
)
