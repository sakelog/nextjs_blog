import * as React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }: any) => {
  return (
    <div className="sl-wrapper">
      <Header />
      <main className="sl-container">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
