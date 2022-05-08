const AdForIndexList = () =>
  process.env.NODE_ENV === 'production' && (
    <ins
      className="adsbygoogle"
      style={{
        display: 'block',
        textAlign: 'center',
      }}
      data-ad-format="autorelaxed"
      data-ad-client="ca-pub-5013956882447566"
      data-ad-slot="8005269879"
    />
  );

export default AdForIndexList;
