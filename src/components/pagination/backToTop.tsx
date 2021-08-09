//import { Button } from '@material-ui/core';
import Link from 'next/link';

const BackToTop = () => {
  return (
    <Link href="/">
      <a
        className="bg-gray-800 text-gray-50 p-4 inline-block my-4 rounded font-semibold
                  hover:bg-gray-200 hover:text-gray-800"
      >
        トップへ戻る
      </a>
    </Link>
  );
};

export default BackToTop;
