import Link from 'next/link';
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineChat,
} from 'react-icons/hi';

import { getPagePath } from '@lib/util/getPath';

const ContactForm = () => {
  const endPoint =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const privacyTag = (
    <div className="my-2 text-sm">
      <p>
        送信いただいた内容はプライバシーポリシーに沿って対応します。
        <br />
        <Link href={getPagePath('privacy')}>
          プライバシーポリシー
        </Link>
        に同意の上、送信をお願いします。
      </p>
    </div>
  );

  return (
    <form action={endPoint} method="POST">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
          <label
            htmlFor="name"
            className="flex items-center space-x-2"
          >
            <HiOutlineUser />
            お名前
          </label>
          <input
            type="text"
            name="name"
            placeholder="サンプル 花子"
            className="col-span-2"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
          <label
            htmlFor="email"
            className="flex items-center space-x-2"
          >
            <HiOutlineMail />
            メールアドレス
          </label>
          <input
            type="email"
            name="email"
            placeholder="sample@email.com"
            className="col-span-2"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
          <label
            htmlFor="message"
            className="flex items-center space-x-2"
          >
            <HiOutlineChat />
            本文
          </label>
          <textarea
            name="message"
            rows={5}
            className="col-span-2"
          />
        </div>
      </div>
      {privacyTag}
      <button
        color="secondary"
        type="submit"
        className="bg-theme text-white p-2 rounded font-semibold"
      >
        送信
      </button>
    </form>
  );
};

export default ContactForm;
