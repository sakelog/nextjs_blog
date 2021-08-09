import Link from 'next/link';

const PageList = () => {
  const PATH_TAG = '/tags';
  const NAME_TAG = 'タグ一覧';
  const PATH_ABOUT = '/about_this_site';
  const NAME_ABOUT = 'このサイトについて';
  const PATH_PRIVACY = '/privacy';
  const NAME_PRIVACY = 'プライバシーポリシー';
  const PATH_CONTACT = '/contact';
  const NAME_CONTACT = 'お問い合わせ';

  return (
    <>
      <ul className="sm:flex sm:space-x-2">
        <li>
          <Link href={PATH_TAG}>
            <a className="hover:bg-gray-600 p-2">
              {NAME_TAG}
            </a>
          </Link>
        </li>
        <li>
          <Link href={PATH_ABOUT}>
            <a className="hover:bg-gray-600 p-2">
              {NAME_ABOUT}
            </a>
          </Link>
        </li>
        <li>
          <Link href={PATH_PRIVACY}>
            <a className="hover:bg-gray-600 p-2">
              {NAME_PRIVACY}
            </a>
          </Link>
        </li>
        <li>
          <Link href={PATH_CONTACT}>
            <a className="hover:bg-gray-600 p-2">
              {NAME_CONTACT}
            </a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default PageList;
