import Link from 'next/link';
import config from '@component/config';

import { headerStyles as useStyles } from '@styles/project/header.styles';

const SiteLogo: React.FC = () => {
  const styles = useStyles();
  return (
    <Link href="/">
      <span className={styles.title}>{config.title}</span>
    </Link>
  );
};

export default SiteLogo;
