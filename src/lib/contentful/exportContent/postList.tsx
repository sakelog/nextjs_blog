import { client } from './client';

// PostList
export const getAllPosts = async (): Promise<contentful.post[]> => {
  const res: contentful.postCollection = await client.getEntries({
    content_type: 'post',
    order: '-fields.date',
  });
  const posts = res.items;
  return posts;
};
