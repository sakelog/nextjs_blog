import { getTagSlugs, getPostListNumPages } from '../getSlugs';
import { getPostByTag } from '../contentful/exportContent/tag';
import { getTagPath } from '../getPath';

const TAGS = 'tags';

const CreateTagsProps = async (
  props: createProps.tags.props
): Promise<Template.catTagList.props> => {
  const { alltags, slug, per_page } = props;
  const allTagSlugs = getTagSlugs(alltags);
  let id: string = null;
  let name: string = null;
  allTagSlugs.some((tagSlug) => {
    tagSlug.slug === slug[0];
    if (tagSlug.slug === slug[0]) {
      id = tagSlug.id;
      name = tagSlug.name;
    }
  });

  const allPosts = await getPostByTag({ id: id });
  const lastPage = getPostListNumPages({
    posts: allPosts,
    per_page: per_page,
  });
  const currentPage = slug.length > 1 ? Number(slug[slug.length - 1]) : 1;
  const skip =
    slug.length > 1 ? (Number(slug[slug.length - 1]) - 1) * per_page : 0;
  const limit = skip + per_page;
  const targetPosts = allPosts.slice(skip, limit);

  const pathBase = getTagPath(slug[0]).slice(0, -1);

  return {
    type: TAGS,
    name,
    posts: targetPosts,
    totalCount: allPosts.length,
    currentPage,
    lastPage,
    pathBase,
  };
};

export default CreateTagsProps;
