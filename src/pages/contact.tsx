import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Paper, Container, CircularProgress } from '@material-ui/core';

import config from '@component/config';

const Layout = dynamic(() => import('@layout/layout'), {
  loading: () => <CircularProgress color="secondary" />,
});
import CustomHead from '@component/customHead';
const ContactForm = dynamic(() => import('@component/contactForm'), {
  loading: () => <CircularProgress color="secondary" />,
});
const BackToTop = dynamic(() => import('@component/pagination/backToTop'), {
  loading: () => <CircularProgress color="secondary" />,
});

import { pageWrapperStyles } from '@styles/layout/pageWrapper.style';

const Contact: NextPage = () => {
  const wrapperStyles = pageWrapperStyles();
  const PAGE_TITLE = 'お問い合わせ';
  const description = config.title + 'についてのお問い合わせページ';

  return (
    <Layout>
      <CustomHead pageTitle={PAGE_TITLE} description={description} />
      <Paper elevation={0} className={wrapperStyles.root}>
        <h1>{PAGE_TITLE}</h1>
        <Container maxWidth="sm">
          <ContactForm />
        </Container>
      </Paper>
      <BackToTop />
    </Layout>
  );
};

export default Contact;
