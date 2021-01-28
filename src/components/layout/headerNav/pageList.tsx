import Link from 'next/link';

import { getRootPath } from '../../../lib/getPath';

const PageList: React.FC = () => {
  return (
    <ul>
      <li key="tags">
        <Link href={getRootPath('tags')}>タグ一覧</Link>
      </li>
      <li key="about_this_site">
        <Link href={getRootPath('about_this_site')}>このサイトについて</Link>
      </li>
      <li key="privacy">
        <Link href={getRootPath('privacy')}>プライバシーポリシー</Link>
      </li>
      <li key="contact">
        <Link href={getRootPath('contact')}>お問い合わせ</Link>
      </li>
    </ul>
  );
};

export default PageList;
