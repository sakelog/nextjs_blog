import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default ({ children }) => (
  <div className="d-flex flex-column min-vh-100">
    <Header />
    <div className="container py-4">
      {children}
    </div>
    <Footer />
  </div>
)
