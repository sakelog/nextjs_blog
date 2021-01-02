import * as React from 'react';

import { Link } from 'gatsby';

const BackToTopPage = () => {
  return (
    <div className="u-display--flex u--flex--justifyCenter">
      <Link to="/" className="c-button--line--dark">
        記事一覧
      </Link>
    </div>
  );
};

export default BackToTopPage;
