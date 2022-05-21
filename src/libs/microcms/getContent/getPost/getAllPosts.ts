import { client } from '@/libs/microcms/client';
import { MicroCMSListResponse } from 'microcms-js-sdk';

/**
 * 全記事の取得
 */

export const getAllPosts = async ({
  limit,
}: {
  limit?: number;
}) => {
  const allPosts: MicroCMSListResponse<Content.Post> =
    await client.get({
      endpoint: 'post',
      // 作成日で降順
      queries: {
        limit,
        orders: '-createDate',
      },
    });

  return allPosts;
};

getAllPosts.defaultProps = {
  limit: 100,
};
