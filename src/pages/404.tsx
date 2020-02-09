import * as React from "react"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackToTopPage from "../components/back-to-top-page"

const notFoundPage = () => {
    return(
        <Layout>
            {SEO(null,null,false)}
            <div>
                <h1 className="text-center">404 Not Found.</h1>
            </div>
            <p>お探しのページは見つかりませんでした。</p>
            <hr />
            <BackToTopPage />
        </Layout>
    )
}

export default notFoundPage