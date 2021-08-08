//import { Button } from '@material-ui/core';
import Link from 'next/link';

const BackToTop = () => {
  return (
    <Link href="/">
      <a className="bg-gray-800 rounded my-1 mx-auto">
        トップへ戻る
      </a>
    </Link>
  );
};

export default BackToTop;
