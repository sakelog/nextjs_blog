import { getPageSlugs } from '../getSlugs';
import { getPageBySlug } from '../contentful/exportContent/page';

const CreatePageProps = async (
  props: createProps.page.props
): Promise<contentful.page | boolean> => {
  const pageSlugs = getPageSlugs(props.allpage);
  let pageRealSlug: string;
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
