import * as React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }: any) => {
  return (
    <div className="l-wrapper">
      <Header />
      <main className="l-main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
