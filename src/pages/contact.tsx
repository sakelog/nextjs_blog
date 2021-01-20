import React from 'react';
import config from '../components/config';
import loadable from '@loadable/component';

import Layout from '../components/layout/layout';
import CustomHead from '../components/customHead';
const ContactForm = loadable(() => import('../components/contactForm'));
const BackToTopPage = loadable(
  () => import('../components/pagination/backToTopPage')
);

const pageTitle = 'お問い合わせ';
const description = config.title + 'についてのお問い合わせページ';

const Contact = () => {
  return (
    <Layout>
      {CustomHead(pageTitle, description, false)}
      <section>
        <h1 className="u-align--center">{pageTitle}</h1>
        <ContactForm />
      </section>
      <BackToTopPage />
    </Layout>
  );
};

export default Contact;
