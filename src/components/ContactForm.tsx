import Link from 'next/link';
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineChat,
} from 'react-icons/hi';

import { getPagePath } from '@lib/util/getPath';
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

type FormItemPropsType = {
  name: string;
  nameJS: string;
  icon: React.ReactNode;
  type: 'text' | 'email' | 'textarea';
  placeholder?: string;
};

const FormItem = (props: FormItemPropsType) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
      <label
        htmlFor={props.name}
        className="flex items-center space-x-2"
      >
        {props.icon}
        {props.nameJS}
      </label>
      {props.type == 'textarea' ? (
        <textarea
          name={props.name}
          rows={5}
          placeholder={props.placeholder}
          className="col-span-2"
        />
      ) : (
        <input
          type={props.type}
          name={props.name}
          placeholder={props.placeholder}
          className="col-span-2"
        />
      )}
    </div>
  );
};

const ContactForm = () => {
  const endPoint =
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  return (
    <form action={endPoint} method="POST">
      <div className="space-y-4">
        <FormItem
          name="name"
          nameJS="お名前"
          icon={<HiOutlineUser />}
          type="text"
          placeholder="サンプル花子"
        />
        <FormItem
          name="email"
          nameJS="メールアドレス"
          icon={<HiOutlineMail />}
          type="email"
          placeholder="sample@email.com"
        />
        <FormItem
          name="message"
          nameJS="本文"
          icon={<HiOutlineChat />}
          type="textarea"
        />
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
