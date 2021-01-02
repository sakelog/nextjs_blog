import React from 'react';
import config from '../components/config';

import Layout from '../components/layout/layout';
import CustomHead from '../components/customHead';
import ContactForm from '../components/contactForm';
import BackToTopPage from '../components/pagination/backToTopPage';

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
