import { client } from '@/libs/microcms/client';
import { MicroCMSListResponse } from 'microcms-js-sdk';

/**
 * 全タグの取得
 */

export const getAllTags = async ({
  limit,
}: {
  limit?: number;
}) => {
  const allTags: MicroCMSListResponse<Content.Tag> =
    await client.get({
      endpoint: 'tag',
    });

  return allTags;
};

getAllTags.defaultProps = {
  limit: 100,
};
