import { NextPage } from 'next';
import loadable from '@loadable/component';
import {
  Paper,
  Container,
  CircularProgress,
} from '@material-ui/core';

import config from '@components/config';

const Layout = loadable(() => import('@layout/layout'), {
  fallback: <CircularProgress color="secondary" />,
});
import CustomHead from '@components/customHead';
const ContactForm = loadable(
  () => import('@components/contactForm'),
  {
    fallback: <CircularProgress color="secondary" />,
  }
);
const BackToTop = loadable(
  () => import('@components/pagination/backToTop'),
  {
    fallback: <CircularProgress color="secondary" />,
  }
);

import { pageWrapperStyles } from '@styles/layout/pageWrapper.style';

const Contact: NextPage = () => {
  const wrapperStyles = pageWrapperStyles();
  const PAGE_TITLE = 'お問い合わせ';
  const description =
    config.title + 'についてのお問い合わせページ';

  return (
    <Layout>
      <CustomHead
        pageTitle={PAGE_TITLE}
        description={description}
      />
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
