import Image from 'next/image';
import profilePic from './profile.png';

// components
import config from '@components/config';
import SocialIcon from '@components/SocialIcon';

const Bio = () => {
  return (
    <section className="bg-gray-100 p-2">
      <div className="text-center">
        <Image
          loader={({ src, width }) =>
            `${src}?w=${width}&fm=webP`
          }
          src={profilePic}
          alt="プロフィール画像"
          width={100}
          height={100}
          layout="intrinsic"
          className="rounded-full"
        />
      </div>
      <div>
        <section className="space-x-2 text-center">
          <span className="text-2xl font-bold">
            {config.author}
          </span>
          <span className="text-sm">
            現役システムエンジニア
          </span>
        </section>
        <section className="text-sm leading-relaxed p-2">
          <p>
            現役システムエンジニア。普段はホスト系のお仕事してます。
          </p>
          <p>
            ブログでは主にWeb関係の技術について、勉強したことや実際にコーディングしてみた内容を発信していきます。
          </p>
        </section>
        <section className="flex justify-center">
          <SocialIcon />
        </section>
      </div>
    </section>
  );
};

export default Bio;
