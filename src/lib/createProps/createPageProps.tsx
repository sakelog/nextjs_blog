import { getPageSlugs } from '@lib/getSlugs';
import { getPageBySlug } from '@lib/contentful/exportContent/page';

const CreatePageProps = async (
  props: createProps.page.props
): Promise<contentful.page | null | boolean> => {
  const pageSlugs = getPageSlugs(props.allpage);
  let pageRealSlug = '';
  const isPage = pageSlugs.some((pageSlug) => {
    pageSlug.slug === props.slug;
    if (pageSlug.slug === props.slug) {
      return (pageRealSlug = pageSlug.realSlug);
    }
  });
  const targetPage = isPage
    ? await getPageBySlug({ slug: pageRealSlug })
    : null;

  return isPage ? targetPage : false;
};

export default CreatePageProps;
