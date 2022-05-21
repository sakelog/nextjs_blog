import React from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

// components
import { config } from '@/config';

type NextPageWithLayout = NextPage & {
  LP?: (page: React.ReactElement) => React.ReactNode;
};

const OgPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { title } = router.query;

  return title ? (
    <div
      style={{
        width: 1200,
        height: 630,
        background: '#ffffff',
      }}
      className="uk-padding-large uk-flex uk-flex-column"
    >
      <div
        className="uk-background-primary uk-flex-1 uk-padding-large
       uk-flex uk-flex-middle uk-flex-center"
        style={{ borderRadius: '10px' }}
      >
        <div
          className="uk-padding-small"
          style={{ background: '#ffffff' }}
        >
          <p
            className="uk-position-z-index"
            style={{ fontSize: '6rem' }}
          >
            {title}
          </p>
        </div>
      </div>
      <div className="uk-flex uk-flex-between uk-flex-middle">
        <div className="uk-logo uk-text-primary">
          {config.title}
        </div>
        <div className="uk-text-large">{config.url}</div>
      </div>
    </div>
  ) : (
    <div
      style={{
        width: 1200,
        height: 630,
        background: '#ffffff',
      }}
      className="uk-padding-large uk-flex uk-flex-column"
    >
      <div
        className="uk-background-primary uk-flex-1
      uk-padding-large uk-flex uk-flex-col uk-flex-center uk-flex-middle"
        style={{
          gap: '0.4rem',
          borderRadius: '10px',
        }}
      >
        <p
          className="uk-logo"
          style={{ fontSize: '6rem', color: '#ffffff' }}
        >
          {config.title}
        </p>
        <p
          className="uk-text-large"
          style={{ color: '#ffffff' }}
        >
          {config.url}
        </p>
      </div>
    </div>
  );
};

export default OgPage;

OgPage.LP = function LP(page: React.ReactElement) {
  return page;
};
