import type { NextPage } from 'next';

import config from '@components/config';

import Layout from '@layout/Layout';
import CustomHead from '@components/CustomHead';
import ContactForm from '@components/ContactForm';
import BackToTop from '@components/pagination/BackToTop';

const Contact: NextPage = () => {
  const PAGE_TITLE = 'お問い合わせ';
  const description =
    config.title + 'についてのお問い合わせページ';

  return (
    <Layout>
      <CustomHead
        pageTitle={PAGE_TITLE}
        description={description}
      />
      <div className="p-4">
        <h1>{PAGE_TITLE}</h1>
        <div className="max-w-screen-sm mx-auto">
          <ContactForm />
        </div>
      </div>
      <BackToTop />
    </Layout>
  );
};

export default Contact;
