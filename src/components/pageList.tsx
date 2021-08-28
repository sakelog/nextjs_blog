import Link from 'next/link';
import {
  getPagePath,
  getTagsPath,
} from '@lib/util/getPath';
import style from '@styles/pageList.module.scss';

const PageList = () => {
  const NAME_TAG = 'タグ一覧';
  const PATH_ABOUT = 'about-this-site';
  const NAME_ABOUT = 'このサイトについて';
  const PATH_PRIVACY = 'privacy';
  const NAME_PRIVACY = 'プライバシーポリシー';
  const PATH_CONTACT = 'contact';
  const NAME_CONTACT = 'お問い合わせ';

  return (
    <ul className="space-y-2">
      <li>
        <Link href={getTagsPath('')}>
          <a className={style.linkItem}>{NAME_TAG}</a>
        </Link>
      </li>
      <li>
        <Link href={getPagePath(PATH_ABOUT)}>
          <a className={style.linkItem}>{NAME_ABOUT}</a>
        </Link>
      </li>
      <li>
        <Link href={getPagePath(PATH_PRIVACY)}>
          <a className={style.linkItem}>{NAME_PRIVACY}</a>
        </Link>
      </li>
      <li>
        <Link href={getPagePath(PATH_CONTACT)}>
          <a className={style.linkItem}>{NAME_CONTACT}</a>
        </Link>
      </li>
    </ul>
  );
};

export default PageList;
