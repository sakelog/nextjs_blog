import { client } from './client';

// PostList
export const getAllPosts = async (): Promise<contentful.post[] | null> => {
  const res: contentful.postCollection = await client.getEntries({
    content_type: 'post',
    order: '-fields.date',
  });
  const posts = typeof res.items === 'undefined' ? null : res.items;
  return posts;
};
