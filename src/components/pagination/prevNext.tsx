import * as React from 'react';
import { Link } from 'gatsby';

import { getRootPath } from '../../lib/getPath';

type propType = {
  prev: Post.prevPost;
  next: Post.nextPost;
};

const PrevNext = ({ prev, next }: propType) => {
  return (
    <nav>
      <div className="c-prevnext">
        <div className="c-prevnext__item--prev">
          {prev && (
            <div className="c-prevnext__icon">
              <span>前</span>
            </div>
          )}
          {prev && (
            <Link to={getRootPath(prev.slug)} rel="prev">
              {prev.title}
            </Link>
          )}
        </div>
        <div className="c-prevnext__item--next u-align--right">
          {next && (
            <Link to={getRootPath(next.slug)} rel="next">
              {next.title}
            </Link>
          )}
          {next && (
            <div className="c-prevnext__icon">
              <span>次</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default PrevNext;
