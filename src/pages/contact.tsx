import Link from 'next/link';
import { NextPage } from 'next';
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PageInit from '@lib/pageInit';
//import state from '@state/ducks/index';

import { getRootPath } from '@lib/getPath';

import config from '@component/config';

import Layout from '@layout/layout';
import CustomHead from '@component/customHead';
import BackToTop from '@component/pagination/backToTop';

import styles from '@styles/component/_c-contact.module.scss';
import wrapperStyles from '@styles/layout/_l-pageWrapper.module.scss';

const endPoint = process.env.FORMSPREE_ENDPOINT;

const Contact: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    PageInit(dispatch);
  }, []);
  const PAGE_TITLE = 'お問い合わせ';
  const description = config.title + 'についてのお問い合わせページ';

  const privacyTag = (
    <div className={styles.privacy}>
      <p>
        送信いただいた内容はプライバシーポリシーに沿って対応します。
        <br />
        <Link href={getRootPath('privacy')}>プライバシーポリシー</Link>
        に同意の上、送信をお願いします。
      </p>
    </div>
  );

  return (
    <Layout>
      <CustomHead pageTitle={PAGE_TITLE} description={description} />
      <section className={wrapperStyles.root}>
        <h1>{PAGE_TITLE}</h1>
        <form action={endPoint} method="POST" className={styles.root}>
          <div className={styles.formItems}>
            <div>
              <label>
                <span className={styles.icon}>
                  <FiUser />
                </span>
                お名前
              </label>
              <input type="text" name="name" placeholder="サンプル　花子" />
            </div>
            <div>
              <label>
                <span className={styles.icon}>
                  <FiMail />
                </span>
                メールアドレス
              </label>
              <input type="email" name="email" placeholder="sample@email.com" />
            </div>
            <div>
              <label>
                <span className={styles.icon}>
                  <FiMessageSquare />
                </span>
                本文
              </label>
              <textarea name="message" rows={5} />
            </div>
          </div>
          {privacyTag}
          <button className={styles.button}>送信</button>
        </form>
      </section>
      <BackToTop />
    </Layout>
  );
};

export default Contact;
