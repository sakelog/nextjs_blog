export const CheckContentfulSetup = (): boolean => {
  const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
  const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
    console.log(
      [
        'envファイルに下記情報の設定が必要',
        'CONTENTFUL_SPACE_ID:ContentfulのSpaceID',
        'CONTENTFUL_ACCESS_TOKEN:ContentfulのDelivery Access Token',
      ].join('\n')
    );
    return false;
  } else {
    return true;
  }
};

export const CheckContentfulSetupPreview = (): boolean => {
  const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
  const CONTENTFUL_PREVIEW_ACCESS_TOKEN =
    process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
    console.log(
      [
        'envファイルに下記情報の設定が必要',
        'CONTENTFUL_SPACE_ID:ContentfulのSpaceID',
        'CONTENTFUL_PREVIEW_ACCESS_TOKEN:ContentfulのPreview Access Token',
      ].join('\n')
    );
    return false;
  } else {
    return true;
  }
};
