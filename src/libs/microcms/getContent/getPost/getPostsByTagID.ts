import { client } from '@/libs/microcms/client';
import { MicroCMSListResponse } from 'microcms-js-sdk';

/**
 * 記事をタグIDで絞り込んで取得
 */

export const getPostsByTagID = async ({
  limit,
  targetID,
}: {
  limit?: number;
  targetID: string;
}) => {
  const targetPosts: MicroCMSListResponse<Content.Post> =
    await client.get({
      endpoint: 'post',
      // 作成日で降順
      queries: {
        limit,
        orders: '-createDate',
        filters: `tags[contains]${targetID}`,
      },
    });

  return targetPosts;
};

getPostsByTagID.defaultProps = {
  limit: 100,
};
