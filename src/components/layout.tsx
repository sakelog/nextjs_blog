import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({children}:any) => {
  return(
    <div className="d-flex flex-column wrapper">
    <Header />
    <div className="container">{children}</div>
    <Footer />
  </div>
  )
}

export default Layout
