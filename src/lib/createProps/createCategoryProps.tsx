import { getCategoryPath } from '../getPath';
import { getCategorySlugs, getPostListNumPages } from '../getSlugs';
import { getPostByCategory } from '../contentful/exportContent/category';

const CATEGORY = 'category';

const CreateCategoryProps = async (
  props: createProps.category.props
): Promise<Template.catTagList.props> => {
  const { allcategory, slug, per_page } = props;
  const allCategorySlugs = getCategorySlugs(allcategory);
  let id: string = null;
  let name: string = null;
  allCategorySlugs.some((catSlug) => {
    catSlug.slug === slug[0];
    if (catSlug.slug === slug[0]) {
      id = catSlug.id;
      name = catSlug.name;
    }
  });

  const allPosts = await getPostByCategory({ id: id });
  const lastPage = getPostListNumPages({
    posts: allPosts,
    per_page: per_page,
  });
  const currentPage = slug.length > 1 ? Number(slug[slug.length - 1]) : 1;
  const skip =
    slug.length > 1 ? (Number(slug[slug.length - 1]) - 1) * per_page : 0;
  const limit = skip + per_page;
  const targetPosts = allPosts.slice(skip, limit);

  const pathBase = getCategoryPath(slug[0]).slice(0, -1);

  return {
    type: CATEGORY,
    name,
    posts: targetPosts,
    totalCount: allPosts.length,
    lastPage,
    currentPage,
    pathBase,
  };
};

export default CreateCategoryProps;
