import Image from 'next/image';

import config from '@components/config';
import SocialIcon from '@components/SocialIcon';

const Bio = () => {
  return (
    <section className="p-2 bg-gray-100 flex flex-col md:flex-row md:space-x-2">
      <div
        className="flex-none text-center"
        style={{ minWidth: 100 }}
      >
        <Image
          src="/img/profile.png"
          alt="プロフィール画像"
          width={100}
          height={100}
          layout="intrinsic"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
      <div className="flex-auto">
        <section className="space-x-2 my-2">
          <span className="font-bold">{config.author}</span>
          <span className="text-xs">
            現役システムエンジニア
          </span>
        </section>
        <section className="leading-relaxed text-sm my-2 mx-1">
          <p>
            現役システムエンジニア。普段はホスト系のお仕事してます。
          </p>
          <p>
            ブログでは主にWeb関係の技術について、勉強したことや実際にコーディングしてみた内容を発信していきます。
          </p>
        </section>
        <section>
          <SocialIcon />
        </section>
      </div>
    </section>
  );
};

export default Bio;
