import { Grid } from '@material-ui/core';

import config from '@component/config';
import ProfileIcon from './_profileIcon';
import SocialIcon from '@component/socialIcon';

import { bioStyles as useStyles } from '@styles/component/post__bio.style';

const Bio: React.FC = () => {
  const styles = useStyles();
  return (
    <section className={styles.root}>
      <h2 className="u-heading--flexLeft">執筆者</h2>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <div className={styles.profileIcon}>
            <ProfileIcon />
          </div>
        </Grid>
        <Grid item xs={12} sm={9}>
          <div className={styles.author}>{config.author}</div>
          <div className={styles.socialIcon}>
            <SocialIcon />
          </div>
        </Grid>
      </Grid>
      <div>
        <p>現役システムエンジニア。 普段はホスト系のお仕事してます。</p>
        <p>
          ブログでは主にWeb関係の技術について、勉強したことや実際にコーディングしてみた内容を発信していきます。
        </p>
      </div>
    </section>
  );
};

export default Bio;
