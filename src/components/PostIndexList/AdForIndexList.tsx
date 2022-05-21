import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AdForIndexList = () => {
  const { asPath } = useRouter();
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push(
        {}
      );
    } catch (err) {
      console.log(err);
    }
  }, [asPath]);
  return (
    <div
      key={`ad-for-indexList-${asPath}`}
      className="uk-margin uk-text-center"
    >
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          margin: 'auto',
          fontSize: '100%',
        }}
        data-adtest={
          process.env.NODE_ENV === 'production'
            ? 'off'
            : 'on'
        }
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-5013956882447566"
        data-ad-slot="8005269879"
      />
    </div>
  );
};

export default AdForIndexList;
