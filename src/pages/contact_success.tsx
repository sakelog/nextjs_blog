import * as React from 'react';

// Components
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import BackToTopPage from '../components/pagination/backToTopPage';

const pageTitle = 'お問い合わせ';

export default () => (
  <Layout>
    {SEO(pageTitle, 'sake logについてのお問い合わせはこちらから', false)}
    <div className="" role="alert">
      <h2 className="">送信成功</h2>
      <p>お問い合わせ内容は送信されました。確認後、返信させていただきます。</p>
    </div>
    <BackToTopPage />
  </Layout>
);
