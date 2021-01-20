import React from 'react';
import config from '../components/config';
import loadable from '@loadable/component';

import Layout from '../components/layout/layout';
import CustomHead from '../components/customHead';
const BackToTopPage = loadable(
  () => import('../components/pagination/backToTopPage')
);

const pageTitle = 'お問い合わせ';
const description = config.title + 'についてのお問い合わせページ';

const ContactSuccess = () => {
  return (
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
  );
};

export default ContactSuccess;
