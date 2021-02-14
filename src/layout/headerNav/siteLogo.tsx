import Link from 'next/link';
import config from '@component/config';
import { Hidden } from '@material-ui/core';

import { headerStyles as useStyles } from '@styles/project/header.styles';

const SiteLogo: React.FC = () => {
  const styles = useStyles();
  const firstChar = config.title.slice(0, 1);
  const remain = config.title.slice(1);
  return (
    <Link href="/">
      <span className={styles.title}>
        {firstChar}
        <Hidden xsDown>{remain}</Hidden>
      </span>
    </Link>
  );
};

export default SiteLogo;
