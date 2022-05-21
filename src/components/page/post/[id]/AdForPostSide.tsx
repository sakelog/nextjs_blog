import { useRouter } from 'next/router';
import { useEffect } from 'react';

const AdForPostSide = () => {
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
      key={`ad-for-post-side-${asPath}`}
      className="uk-margin"
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block', fontSize: '100%' }}
        data-adtest={
          process.env.NODE_ENV === 'production'
            ? 'off'
            : 'on'
        }
        data-ad-client="ca-pub-5013956882447566"
        data-ad-slot="4298314372"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdForPostSide;
