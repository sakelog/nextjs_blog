import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import loadable from '@loadable/component';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getAllTags, getPostByTag } from '@lib/contentful/exportContent/tag';
import { getPostListNumPages, getPostListSlugs } from '@lib/getSlugs';
import { toKebabCase } from '@lib/toKebabCase';
import CreateTagsProps from '@lib/createProps/createTagsProps';

const Layout = loadable(() => import('@layout/layout'), {
  fallback: <CircularProgress color="secondary" />,
});
const Temp_CatTag = loadable(() => import('@template/temp_catTag'), {
  fallback: <CircularProgress color="secondary" />,
});

const POST_PER_LISTPAGE = 10;
const TAGS = 'tags';

const TagsDirectory: NextPage<Template.catTagList.props> = (props) => {
  return (
    <Layout>
      <Temp_CatTag
        name={props.name}
        posts={props.posts}
        type={TAGS}
        totalCount={props.totalCount}
        currentPage={props.currentPage}
        lastPage={props.lastPage}
        pathBase={props.pathBase}
      />
    </Layout>
  );
};

export default TagsDirectory;

export const getStaticProps: GetStaticProps = async (context) => {
  const alltags = await getAllTags();
  const slug = context.params ? context.params.slug : '';

  const tagsProps =
    alltags && slug
      ? await CreateTagsProps({
          alltags,
          slug,
          per_page: POST_PER_LISTPAGE,
        })
      : {
          name: '',
          posts: null,
          type: '',
          totalCount: 0,
          currentPage: 0,
          lastPage: 0,
          pathBase: '',
        };

  return {
    props: tagsProps,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = await getAllTags();

  const allSlugs = [];

  if (allTags) {
    for (let index = 0; index < allTags.length; index++) {
      const targetPost = await getPostByTag({ id: allTags[index].sys.id });
      targetPost &&
        targetPost.length > 0 &&
        allSlugs.push([toKebabCase(allTags[index].fields.slug)]);
      const ListNum = getPostListNumPages({
        posts: targetPost,
        per_page: POST_PER_LISTPAGE,
      });
      const ListSlugs = getPostListSlugs(ListNum);
      ListSlugs &&
        ListSlugs.map((slug) => {
          allSlugs.push([toKebabCase(allTags[index].fields.slug), slug]);
        });
    }
  }

  const paths = allSlugs.map((slug) => {
    return { params: { slug: slug } };
  });

  return { paths, fallback: false };
};
