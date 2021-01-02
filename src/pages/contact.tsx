import * as React from 'react';

// Components
import Layout from '../components/layout/layout';
import SEO from '../components/customHead';
import ContactForm from '../components/contactForm';
import BackToTopPage from '../components/pagination/backToTopPage';

const pageTitle = 'お問い合わせ';

export default () => (
  <Layout>
    {SEO(pageTitle, 'sake logについてのお問い合わせはこちらから', false)}
    <h1 className="u-align--center">{pageTitle}</h1>
    <ContactForm />
    <BackToTopPage />
  </Layout>
);
