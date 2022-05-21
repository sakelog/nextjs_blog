const AdForIndexList = () => {
  return (
    <div key="ad-for-indexList" className="uk-margin">
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          margin: 'auto',
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
