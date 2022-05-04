import Image from 'next/image';

import config from '@components/config';
import SocialIcon from '@components/SocialIcon';

const Bio = () => {
  return (
    <section className="my-4 bg-gray-100 p-4 max-w-screen-sm mx-auto">
      <div className="grid gap-2 grid-cols-1 md:grid-cols-4 items-center">
        <div className="text-center p-2">
          <Image
            src="/img/profile.png"
            alt="プロフィール画像"
            width={100}
            height={100}
            layout="intrinsic"
            className="rounded-full"
          />
        </div>
        <div className="col-span-3">
          <section className="space-x-2 my-2">
            <span className="font-bold text-xl">
              {config.author}
            </span>
            <span className="text-sm">
              現役システムエンジニア
            </span>
          </section>
          <section className="leading-relaxed text-sm p-2">
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
      </div>
    </section>
  );
};

export default Bio;
