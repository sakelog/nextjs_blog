import { useState } from 'react';
import Link from 'next/link';
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

import { getRootPath } from '../lib/getPath';

import config from '../components/config';

import Layout from '../components/layout/layout';
import CustomHead from '../components/customHead';
import BackToTop from '../components/pagination/backToTop';

import styles from '../styles/Object/Component/_c-contact.module.scss';
import wrapperStyles from '../styles/Layout/_l-pageWrapper.module.scss';

const endPoint =
  process.env.NODE_ENV === 'production' ? process.env.FORMSPREE_ENDPOINT : null;

const Contact = () => {
  const [state, setState] = useState<string>('');

  function submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setState('SUCCESS');
      } else {
        setState('ERROR');
      }
    };
    xhr.send(data);
  }

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
        <form
          onSubmit={submitForm}
          action={endPoint}
          method="POST"
          className={styles.root}
        >
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
          {state === 'SUCCESS' ? (
            <p>送信成功</p>
          ) : (
            <button className={styles.button}>送信</button>
          )}
          {state === 'ERROR' && <p>送信エラー</p>}
        </form>
      </section>
      <BackToTop />
    </Layout>
  );
};

export default Contact;
