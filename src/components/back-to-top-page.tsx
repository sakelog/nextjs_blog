import * as React from "react";

import { Link } from "gatsby"

const BackToTopPage = () => {
  return(
    <div className="sl-display-flex sl-flex-justify-center">
      <Link to="/" className="sl-btn sl-btn-line">
        記事一覧
      </Link>
    </div>
  )
}

export default BackToTopPage