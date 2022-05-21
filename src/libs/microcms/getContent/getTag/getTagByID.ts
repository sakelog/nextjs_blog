import { client } from '@/libs/microcms/client';
import type { MicroCMSObjectContent } from 'microcms-js-sdk';

/**
 * idをkeyにタグを取得する
 */

export const getTagByID = async ({
  targetID,
}: {
  targetID: string;
}) => {
  const targetTag: Content.Tag = await client.get({
    endpoint: 'tag',
    contentId: targetID,
  });

  return targetTag;
};
