import * as React from "react";

import { Link } from "gatsby"

const BackToTopPage = () => {
  return(
    <div className="d-flex justify-content-center">
      <Link to="/" className="btn btn-outline-dark btn-lg my-3">
        記事一覧
      </Link>
    </div>
  )
}

export default BackToTopPage