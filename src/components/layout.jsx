import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({children}) => {
  return(
    <div className="d-flex flex-column min-vh-100">
    <Header />
    <div className="container py-4">{children}</div>
    <Footer />
  </div>
  )
}

export default Layout
