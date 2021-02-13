import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PageInit from '@lib/pageInit';

import { getAllPosts } from '@lib/contentful/exportContent/postList';
import { getURLSet } from '@lib/contentful/exportContent/urlSet';
import CreatePostListProps from '@lib/createProps/createPostListProps';
import { getConcatPath, getRootPath } from '@lib/getPath';
import { setSiteMap } from '@lib/setSitemap';

import config from '@component/config';

const Loading = (
  <div>
    Loading...
    <CircularProgress />
  </div>
);
// Template
const Temp_PostList = dynamic(() => import('@template/temp_postList'), {
  loading: () => Loading,
});
import Layout from '@layout/layout';

const POST_PER_LISTPAGE = 6;

const TopPage: NextPage<{ posts: Template.postList.props }> = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    PageInit(dispatch);
  }, []);
  const TemplateTag = (
    <Temp_PostList
      posts={props.posts.posts}
      currentPage={props.posts.currentPage}
      lastPage={props.posts.lastPage}
      pathBase={props.posts.pathBase}
    />
  );
  return <Layout>{TemplateTag}</Layout>;
};

export default TopPage;

export const getStaticProps: GetStaticProps = async () => {
  const allpost = await getAllPosts();
  // postList
  const postListProps = allpost
    ? await CreatePostListProps({
        allpost,
        per_page: POST_PER_LISTPAGE,
        slug: '/',
      })
    : null;

  // sitemap
  if (process.env.NODE_ENV === 'production') {
    const fetchDate = new Date();
    const manualURLSet: sitemap.urlset = [
      {
        url: getConcatPath(config.url, getRootPath('contact')),
        fetchDate,
        priority: '0.4',
      },
    ];
    setSiteMap(fetchDate, manualURLSet.concat(await getURLSet()));
  }

  return {
    props: {
      posts: postListProps,
    },
  };
};
