const AdForPostSide = () => {
  return (
    <div key="ad-for-post-side" className="uk-margin">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
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
