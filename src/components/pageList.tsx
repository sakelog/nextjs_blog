import Link from 'next/link';
import {
  getPagePath,
  getTagsPath,
} from '@lib/util/getPath';

type ListItemPropsType = {
  path: string;
  text: string;
};

const ListItem = (props: ListItemPropsType) => {
  return (
    <Link href={props.path}>
      <a className="text-white">{props.text}</a>
    </Link>
  );
};

const PageList = () => {
  const TAG = { name: 'タグ一覧', path: getTagsPath('') };
  const ABOUT = {
    name: 'このサイトについて',
    path: getPagePath('about-this-site'),
  };
  const PRIVACY = {
    name: 'プライバシーポリシー',
    path: getPagePath('privacy'),
  };
  const CONTACT = {
    name: 'お問い合わせ',
    path: getPagePath('contact'),
  };

  return (
    <ul className="space-y-2">
      <li>
        <ListItem path={TAG.path} text={TAG.name} />
      </li>
      <li>
        <ListItem path={ABOUT.path} text={ABOUT.name} />
      </li>
      <li>
        <ListItem path={PRIVACY.path} text={PRIVACY.name} />
      </li>
      <li>
        <ListItem path={CONTACT.path} text={CONTACT.name} />
      </li>
    </ul>
  );
};

export default PageList;
