import type { NextPage } from 'next';

import config from '@components/config';

import CustomHead from '@components/CustomHead';
import ContactForm from '@components/ContactForm';
import BackToTop from '@components/Pagination/BackToTop';

const Contact: NextPage = () => {
  const PAGE_TITLE = 'お問い合わせ';
  const description =
    config.title + 'についてのお問い合わせページ';

  return (
    <>
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
    </>
  );
};

export default Contact;
