import { config } from '@/config';
import profilePic from './profile.png';

// components
import Image from 'next/image';
import SocialIcon from './SocialIcon';

const Bio = () => {
  return (
    <section className="uk-background-muted uk-padding-small uk-margin">
      <div className="uk-text-center">
        <Image
          loader={({ src, width }) =>
            `${src}?w=${width}&fm=webP`
          }
          src={profilePic}
          alt="プロフィール画像"
          width={100}
          height={100}
          layout="intrinsic"
          className="uk-border-circle"
        />
      </div>
      <div>
        <section className="uk-text-center">
          <span className="uk-text-large uk-text-bold">
            {config.author}
          </span>
          <span className="uk-text-small uk-margin-small-left">
            現役システムエンジニア
          </span>
        </section>
        <section className="uk-text-small uk-padding-small">
          <p>
            現役システムエンジニア。普段はホスト系のお仕事してます。
          </p>
          <p>
            ブログでは主にWeb関係の技術について、勉強したことや実際にコーディングしてみた内容を発信していきます。
          </p>
        </section>
        <div className="uk-flex uk-flex-center">
          <SocialIcon />
        </div>
      </div>
    </section>
  );
};

export default Bio;
