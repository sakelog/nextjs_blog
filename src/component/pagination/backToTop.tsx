import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';

import styles from '@styles/component/_c-pagination--backToTop.module.scss';

const BackToTop: React.FC = () => {
  return (
    <Link href="/">
      <a className={styles.root}>
        <MdArrowBack />
        <div>トップに戻る</div>
      </a>
    </Link>
  );
};

export default BackToTop;
