import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

// libs
import { getFormatDate } from '@/libs/util/getFormatDate';
import { MicroCMSListResponse } from 'microcms-js-sdk';

// components
import Link from 'next/link';
import AdForIndexList from './AdForIndexList';

type PropTypes = {
  postIndex: {
    posts: MicroCMSListResponse<Content.Post>;
  };
};

const PostIndexList = ({ postIndex }: PropTypes) => {
  const { asPath } = useRouter();
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push(
        {}
      );
    } catch (err) {
      console.log(err);
    }
  }, [asPath]);

  return (
    <React.Fragment key={asPath}>
      <div
        className="uk-child-width-1-2@m uk-grid-match"
        data-uk-grid
      >
        {postIndex.posts.contents.map((post) => (
          <div key={`post-id-${post.id}`}>
            <div className="uk-card uk-card-default">
              <div className="uk-card-header">
                <div
                  className="uk-flex"
                  style={{ gap: '0.4rem' }}
                >
                  <time
                    dateTime={post.createDate}
                    itemProp="datepublished"
                  >
                    投稿:{getFormatDate(post.createDate)}
                  </time>
                  {post.updateDate && (
                    <time
                      dateTime={post.updateDate}
                      itemProp="datemodified"
                    >
                      更新:{getFormatDate(post.updateDate)}
                    </time>
                  )}
                </div>
                <h2 className="uk-card-title">
                  <Link href={`/post/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
              </div>
              <div className="uk-card-body">
                <p>{post.description}</p>
              </div>
              <div className="uk-card-footer">
                <div
                  className="uk-flex"
                  style={{ gap: '1rem' }}
                >
                  {post.tags.map((tag) => (
                    <span
                      key={`post-tag-id-${tag.id}`}
                      className="uk-badge uk-padding-small"
                    >
                      <Link href={`/tags/${tag.id}`}>
                        <a style={{ color: '#ffffff' }}>
                          {tag.title}
                        </a>
                      </Link>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <AdForIndexList />
    </React.Fragment>
  );
};

export default PostIndexList;
