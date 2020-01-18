import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const notFoundPage = () => {
    return(
        <Layout>
            <SEO title={null} description={null} />
            <div>
                <h1 className="text-center">404 Not Found.</h1>
            </div>
            <p>お探しのページは見つかりませんでした。</p>
            <hr />
            <Link to="/">トップに戻る</Link>
        </Layout>
    )
}

export default notFoundPage