import Link from 'next/link';
import { getRootPath } from '@lib/getPath';
import style from '@styles/pageList.module.scss';

const PageList = () => {
  const PATH_TAG = 'tags';
  const NAME_TAG = 'タグ一覧';
  const PATH_ABOUT = 'about_this_site';
  const NAME_ABOUT = 'このサイトについて';
  const PATH_PRIVACY = 'privacy';
  const NAME_PRIVACY = 'プライバシーポリシー';
  const PATH_CONTACT = 'contact';
  const NAME_CONTACT = 'お問い合わせ';

  return (
    <div className={style.wrapper}>
      <ul className="sm:flex sm:space-x-2">
        <li className="flex-none">
          <Link href={getRootPath(PATH_TAG)}>
            <a className={style.linkItem}>{NAME_TAG}</a>
          </Link>
        </li>
        <li className="flex-none">
          <Link href={getRootPath(PATH_ABOUT)}>
            <a className={style.linkItem}>{NAME_ABOUT}</a>
          </Link>
        </li>
        <li className="flex-none">
          <Link href={getRootPath(PATH_PRIVACY)}>
            <a className={style.linkItem}>{NAME_PRIVACY}</a>
          </Link>
        </li>
        <li className="flex-none">
          <Link href={getRootPath(PATH_CONTACT)}>
            <a className={style.linkItem}>{NAME_CONTACT}</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PageList;
