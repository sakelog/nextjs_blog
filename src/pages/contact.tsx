import React, { lazy, Suspense } from 'react';
import config from '../components/config';

import Layout from '../components/layout/layout';
import CustomHead from '../components/customHead';
const ContactForm = lazy(() => import('../components/contactForm'));
const BackToTopPage = lazy(
  () => import('../components/pagination/backToTopPage')
);

const pageTitle = 'お問い合わせ';
const description = config.title + 'についてのお問い合わせページ';

const Contact = () => {
  return (
    <Suspense
      fallback={
        <Layout>
          {CustomHead(pageTitle, description, false)}
          <h1 className="u-align--center">{pageTitle}</h1>
        </Layout>
      }
    >
      <Layout>
        {CustomHead(pageTitle, description, false)}
        <section>
          <h1 className="u-align--center">{pageTitle}</h1>
          <ContactForm />
        </section>
        <BackToTopPage />
      </Layout>
    </Suspense>
  );
};

export default Contact;
