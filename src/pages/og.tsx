import React from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';

// components
import siteMeta from 'components/config';

type NextPageWithLayout = NextPage & {
  LP?: (page: React.ReactElement) => React.ReactNode;
};

const OgPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { title } = router.query;

  return title ? (
    <div
      style={{ width: 1200, height: 630 }}
      className="bg-white p-8 flex flex-col"
    >
      <div className="bg-theme rounded-md flex-1 p-8 flex items-center justify-center">
        <div className="bg-white w-full py-2">
          <div className="border-b-4 border-t-4 border-accent p-2">
            <p className="text-6xl z-50">{title}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="font-logo text-theme-dark">
          {siteMeta.title}
        </div>
        <div className="text-2xl">{siteMeta.url}</div>
      </div>
    </div>
  ) : (
    <div
      style={{ width: 1200, height: 630 }}
      className="bg-white p-8 flex flex-col"
    >
      <div className="bg-theme rounded-md flex-1 p-8 flex flex-col gap-2 items-center justify-center">
        <p className="text-6xl font-logo">
          {siteMeta.title}
        </p>
        <p className="text-2xl">{siteMeta.url}</p>
      </div>
    </div>
  );
};

export default OgPage;

OgPage.LP = function LP(page: React.ReactElement) {
  return page;
};
