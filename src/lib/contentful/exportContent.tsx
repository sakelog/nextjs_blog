const contentful = require('contentful');
import {
  CheckContentfulSetup,
  CheckContentfulSetupPreview,
} from './checkSetup';

import {
  getRootPath,
  getCategoryPath,
  getTagPath,
  getConcatPath,
} from '../getPath';
import config from '../../components/config';

const client =
  CheckContentfulSetup &&
  contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

const previewClient =
  CheckContentfulSetupPreview &&
  contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    host: 'preview.contentful.com',
  });

// PostList
export const getAllPosts = async (): Promise<contentful.post[]> => {
  const res = await client.getEntries({
    content_type: 'post',
    order: '-fields.date',
  });
  const posts = res.items;
  return posts;
};

// Post
export const getPostBySlug = async (
  props: contentful.MyLib.getPostBySlug.props
): Promise<contentful.post> => {
  const res = !props.preview
    ? await client.getEntries({
        content_type: 'post',
        'fields.slug': props.slug,
      })
    : await previewClient.getEntries({
        content_type: 'post',
        'fields.slug': props.slug,
      });
  return res.items[0];
};

export const getPrevPost = async (
  props: contentful.MyLib.getPostIndex.props
): Promise<contentful.post> => {
  const currentIndex = await getPostIndex({
    slug: props.slug,
    posts: props.posts,
  });
  const prevPost =
    currentIndex < props.posts.length - 1
      ? await getPostBySlug({ slug: props.posts[currentIndex + 1].fields.slug })
      : null;
  return prevPost;
};

export const getNextPost = async (
  props: contentful.MyLib.getPostIndex.props
): Promise<contentful.post> => {
  const currentIndex = await getPostIndex({
    slug: props.slug,
    posts: props.posts,
  });
  const nextPost =
    currentIndex > 0
      ? await getPostBySlug({ slug: props.posts[currentIndex - 1].fields.slug })
      : null;
  return nextPost;
};

export const getPostIndex = (
  props: contentful.MyLib.getPostIndex.props
): number => {
  let result: number;
  props.posts.some((post, index) => {
    result = index;
    if (post.fields.slug === props.slug) {
      return true;
    }
  });
  return result;
};

// --preview
export const getPreviewPostBySlug = async (slug) => {
  const res = await getPostBySlug({ slug: slug, preview: true });
  return res;
};

// Page
export const getAllPages = async (): Promise<contentful.page[]> => {
  const res = await client.getEntries({
    content_type: 'page',
  });
  const pages = res.items;
  return pages;
};

export const getPageBySlug = async (
  props: contentful.MyLib.getPageBySlug.props
): Promise<contentful.page> => {
  const res = await client.getEntries({
    content_type: 'page',
    'fields.slug': props.slug,
  });
  return res.items[0];
};

// Tag
export const getAllTags = async (): Promise<contentful.tags> => {
  const res = await client.getEntries({
    content_type: 'tags',
    order: '-sys.createdAt',
  });
  const tags = res.items;
  return tags;
};

export const getPostByTag = async (
  props: contentful.MyLib.getPostByTag.props
): Promise<contentful.post[]> => {
  const res = await client.getEntries({
    content_type: 'post',
    order: '-fields.date',
    'fields.tags.sys.id': props.id,
  });
  return res.items;
};

// Category
export const getAllCategory = async (): Promise<contentful.category[]> => {
  const res = await client.getEntries({
    content_type: 'category',
  });
  const categories = res.items;
  return categories;
};

export const getPostByCategory = async (
  props: contentful.MyLib.getPostByCategory.props
): Promise<contentful.post[]> => {
  const res = await client.getEntries({
    content_type: 'post',
    order: '-fields.date',
    'fields.category.sys.id': props.id,
  });
  return res.items;
};

// Path取得
export const getURLSet = async (): Promise<sitemap.urlset> => {
  const allPosts = await getAllPosts();
  const allPages = await getAllPages();
  const allCategory = await getAllCategory();
  const allTags = await getAllTags();

  const postURLSet: sitemap.urlset = allPosts.map((post) => {
    const url = getConcatPath(config.url, getRootPath(post.fields.slug));
    const fetchDate = post.fields.update
      ? post.fields.update
      : post.fields.date;
    const priority = '1.0';
    return { url, fetchDate, priority };
  });
  const pageURLSet: sitemap.urlset = allPages.map((page) => {
    const url = getConcatPath(config.url, getRootPath(page.fields.slug));
    const fetchDate = page.fields.update
      ? page.fields.update
      : page.fields.date;
    const priority = '0.6';
    return { url, fetchDate, priority };
  });
  let categoryURLSet: sitemap.urlset = [];
  for (let index = 0; index < allCategory.length; index++) {
    const url = getConcatPath(
      config.url,
      getCategoryPath(allCategory[index].fields.slug)
    );
    const posts = await getPostByCategory({ id: allCategory[index].sys.id });
    if (posts.length === 0) {
      continue;
    }
    const fetchDate = posts[0].fields.date;
    const priority = '0.8';
    categoryURLSet.push({ url, fetchDate, priority });
  }
  let tagsURLSet: sitemap.urlset = [];
  for (let index = 0; index < allTags.length; index++) {
    const url = getConcatPath(
      config.url,
      getTagPath(allTags[index].fields.slug)
    );
    const posts = await getPostByTag({ id: allTags[index].sys.id });
    if (posts.length === 0) {
      continue;
    }
    const fetchDate = posts[0].fields.date;
    const priority = '0.8';
    categoryURLSet.push({ url, fetchDate, priority });
  }
  const allTagsURLSet: sitemap.urlset = [
    {
      url: getConcatPath(config.url, getRootPath('tags')),
      fetchDate: allTags[0].sys.createdAt,
      priority: '0.4',
    },
  ];
  return postURLSet
    .concat(pageURLSet)
    .concat(categoryURLSet)
    .concat(tagsURLSet)
    .concat(allTagsURLSet);
};
