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
    <section className="bg-white p-4">
      <CustomHead
        pageTitle={PAGE_TITLE}
        description={description}
      />
      <h1 className="c-heading--flexCenter text-2xl font-bold">
        お問い合わせ
      </h1>
      <div className="p-4">
        <div className="max-w-screen-sm mx-auto">
          <ContactForm />
        </div>
      </div>
      <BackToTop />
    </section>
  );
};

export default Contact;
