import Link from 'next/link';
import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

import { Grid } from '@material-ui/core';
const Container = dynamic(() => import('@material-ui/core/Container'));
const InputLabel = dynamic(() => import('@material-ui/core/InputLabel'));
const Input = dynamic(() => import('@material-ui/core/Input'));
const TextareaAutosize = dynamic(
  () => import('@material-ui/core/TextareaAutosize')
);
const Button = dynamic(() => import('@material-ui/core/Button'));

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PageInit from '@lib/pageInit';

import { getRootPath } from '@lib/getPath';

import config from '@component/config';

import Layout from '@layout/layout';
import CustomHead from '@component/customHead';
const BackToTop = dynamic(() => import('@component/pagination/backToTop'));

import { contactStyles as useStyles } from '@styles/component/contact.style';
import wrapperStyles from '@styles/layout/_l-pageWrapper.module.scss';

const endPoint = process.env.FORMSPREE_ENDPOINT;

const Contact: NextPage = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    PageInit(dispatch);
  }, []);
  const PAGE_TITLE = 'お問い合わせ';
  const description = config.title + 'についてのお問い合わせページ';

  const privacyTag = (
    <Container className={styles.privacy}>
      <p>
        送信いただいた内容はプライバシーポリシーに沿って対応します。
        <br />
        <Link href={getRootPath('privacy')}>プライバシーポリシー</Link>
        に同意の上、送信をお願いします。
      </p>
    </Container>
  );

  return (
    <Layout>
      <CustomHead pageTitle={PAGE_TITLE} description={description} />
      <section className={wrapperStyles.root}>
        <h1>{PAGE_TITLE}</h1>
        <Container maxWidth="sm">
          <form action={endPoint} method="POST" className={styles.root}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={5}>
                <InputLabel
                  htmlFor="name"
                  className={styles.label}
                  required={true}
                >
                  <FiUser className={styles.icon} />
                  お名前
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Input
                  type="text"
                  name="name"
                  placeholder="サンプル 花子"
                  className={styles.input}
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={5}>
                <InputLabel
                  htmlFor="email"
                  className={styles.label}
                  required={true}
                >
                  <FiMail className={styles.icon} />
                  メールアドレス
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Input
                  type="email"
                  name="email"
                  placeholder="sample@email.com"
                  className={styles.input}
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={5}>
                <InputLabel
                  htmlFor="email"
                  className={styles.label}
                  required={true}
                >
                  <FiMessageSquare className={styles.icon} />
                  本文
                </InputLabel>
              </Grid>
              <Grid item xs={12} sm={7}>
                <TextareaAutosize
                  name="message"
                  className={styles.textarea}
                  rows={5}
                />
              </Grid>
            </Grid>
            {privacyTag}
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={styles.button}
            >
              送信
            </Button>
          </form>
        </Container>
      </section>
      <BackToTop />
    </Layout>
  );
};

export default Contact;
