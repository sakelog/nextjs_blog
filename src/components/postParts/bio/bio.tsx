import config from '@components/config';
import ProfileIcon from './_profileIcon';
import SocialIcon from '@components/socialIcon';

import style from '@styles/bio.module.scss';

const Bio = () => {
  return (
    <section className="">
      <h2 className="u-heading--flexLeft">執筆者</h2>
      <div className="grid grd-cols-1 sm:grid-cols-4 gap-2">
        <div>
          <ProfileIcon />
        </div>
        <div className="col-span-3">
          <div className="font-semibold text-lg">
            {config.author}
          </div>
          <div className={style.socialIcon}>
            <SocialIcon />
          </div>
        </div>
      </div>
      <div className="text-sm">
        <p>
          現役システムエンジニア。
          普段はホスト系のお仕事してます。
        </p>
        <p>
          ブログでは主にWeb関係の技術について、勉強したことや実際にコーディングしてみた内容を発信していきます。
        </p>
      </div>
    </section>
  );
};

export default Bio;
