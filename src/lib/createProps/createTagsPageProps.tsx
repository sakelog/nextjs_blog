import { getAllTags, getPostByTag } from '@lib/contentful/exportContent/tag';
import { getTagPath } from '@lib/getPath';

type tagsInfo = {
  name: string;
  path: string;
  totalCount: number;
}[];

const createTagsPageProps = async (): Promise<tagsInfo> => {
  const allTags = await getAllTags();

  let tagsInfo: tagsInfo = [];

  if (allTags) {
    for (let index = 0; index < allTags.length; index++) {
      const targetPosts = await getPostByTag({ id: allTags[index].sys.id });
      const totalCount = targetPosts ? targetPosts.length : 0;
      const name = allTags[index].fields.name;
      const path = getTagPath(allTags[index].fields.slug);
      tagsInfo.push({ name: name, path: path, totalCount: totalCount });
    }
  }

  tagsInfo = tagsInfo.filter((elm) => elm.totalCount > 0);

  return tagsInfo;
};

export default createTagsPageProps;
