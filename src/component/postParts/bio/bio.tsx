import config from '@component/config';
import ProfileIcon from './_profileIcon';
import SocialIcon from '@component/socialIcon';

import styles from '@styles/component/_c-post__Bio.module.scss';
import headingStyles from '@styles/component/_c-heading.module.scss';

const Bio: React.FC = () => {
  return (
    <section className={styles.root}>
      <h2 className={headingStyles.flexLeft}>執筆者</h2>
      <div className={styles.main}>
        <div className={styles.profileIcon}>
          <ProfileIcon />
        </div>
        <div className={styles.content}>
          <div className={styles.author}>{config.author}</div>
          <div className={styles.socialIcon}>
            <SocialIcon />
          </div>
        </div>
      </div>
      <div className={styles.detail}>
        <p>現役システムエンジニア。 普段はホスト系のお仕事してます。</p>
        <p>
          ブログでは主にWeb関係の技術について、勉強したことや実際にコーディングしてみた内容を発信していきます。
        </p>
      </div>
    </section>
  );
};

export default Bio;
