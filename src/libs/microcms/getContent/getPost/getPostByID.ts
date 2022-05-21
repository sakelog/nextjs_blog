import { client } from '@/libs/microcms/client';
import type { MicroCMSObjectContent } from 'microcms-js-sdk';

/**
 * idをkeyに記事を取得する
 */

export const getPostByID = async ({
  targetID,
}: {
  targetID: string;
}) => {
  const targetPost: Content.Post = await client.get({
    endpoint: 'post',
    contentId: targetID,
  });

  return targetPost;
};
