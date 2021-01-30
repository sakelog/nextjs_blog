import config from '@component/config';

import styles from '@styles/layout/_l-footer.module.scss';

const Footer: React.FC = () => {
  const siteTitle = config.title;
  const startDate = new Date(config.createAt);
  const startYear = startDate.getFullYear();

  const now = new Date();
  const nowYear = now.getFullYear();

  const copyText =
    nowYear > startYear
      ? startYear + '-' + nowYear + siteTitle
      : startYear + siteTitle;
  return (
    <footer className={styles.root}>
      <small>
        <p>&copy;{copyText}</p>
      </small>
    </footer>
  );
};

export default Footer;
