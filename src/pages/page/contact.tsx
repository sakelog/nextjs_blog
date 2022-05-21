import type { NextPage } from 'next';

import { config } from 'config';

// components
import Link from 'next/link';
import CustomHead from '@/components/CustomHead';
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineChat,
} from 'react-icons/hi';

const ContactPage: NextPage = () => {
  const PAGE_TITLE = 'お問い合わせ';
  const description =
    config.title + 'についてのお問い合わせページ';

  return (
    <>
      <CustomHead
        pageTitle={PAGE_TITLE}
        description={description}
      />
      <ul className="uk-breadcrumb">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <span>{PAGE_TITLE}</span>
        </li>
      </ul>
      <h1>お問い合わせ</h1>
      <div className="uk-container uk-container-xsmall">
        <form
          method="post"
          action={config.formspreeEndPoint}
          className="uk-form-stacked"
        >
          <div className="uk-margin">
            <label className="uk-form-label">
              <HiOutlineUser
                size={20}
                className="uk-margin-small-right uk-text-muted"
              />
              お名前
            </label>
            <div className="uk-form-control">
              <input
                type="text"
                name="name"
                placeholder="サンプル花子"
                className="uk-input"
              />
            </div>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label">
              <HiOutlineMail
                size={20}
                className="uk-margin-small-right uk-text-muted"
              />
              メールアドレス
            </label>
            <div className="uk-form-control">
              <input
                type="email"
                name="email"
                placeholder="sample@email.com"
                className="uk-input"
              />
            </div>
          </div>
          <div className="uk-margin">
            <label className="uk-form-label">
              <HiOutlineChat
                size={20}
                className="uk-margin-small-right uk-text-muted"
              />
              本文
            </label>
            <div className="uk-form-control">
              <textarea
                name="message"
                rows={5}
                className="uk-textarea"
              />
            </div>
          </div>
          <div className="uk-section-muted uk-padding-small uk-margin">
            <p>
              送信いただいた内容はプライバシーポリシーに沿って対応します。
            </p>
            <p>
              <Link href="/page/privacy">
                プライバシーポリシー
              </Link>
              に同意の上、送信をお願いします。
            </p>
          </div>
          <button
            type="submit"
            className="uk-button uk-button-primary"
          >
            送信
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
