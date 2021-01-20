import React, { lazy, Suspense } from 'react';
import config from '../components/config';

import Layout from '../components/layout/layout';
import CustomHead from '../components/customHead';
const BackToTopPage = lazy(
  () => import('../components/pagination/backToTopPage')
);

const pageTitle = 'お問い合わせ';
const description = config.title + 'についてのお問い合わせページ';

const ContactSuccess = () => {
  return (
    <Suspense
      fallback={
        <Layout>
          {CustomHead(pageTitle, description, false)}
          <h2 className="">送信成功</h2>
        </Layout>
      }
    >
      <Layout>
        {CustomHead(pageTitle, description, false)}
        <section role="alert">
          <h2 className="">送信成功</h2>
          <p>
            お問い合わせ内容は送信されました。確認後、返信させていただきます。
          </p>
        </section>
        <BackToTopPage />
      </Layout>
    </Suspense>
  );
};

export default ContactSuccess;
