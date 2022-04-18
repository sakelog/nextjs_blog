import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { HiOutlineTag } from 'react-icons/hi';

import CustomHead from '@components/CustomHead';
import BackToTop from '@components/pagination/BackToTop';

import { tagsControler } from '@lib/contentful/exportContent';
import { getTagsPath } from '@lib/util/getPath';

type PageProps = {
  tagsInfo: {
    name: string;
    path: string;
    totalCount: number;
  }[];
};

const TagsPage: NextPage<PageProps> = (props) => {
  const PAGE_TITLE = 'タグ一覧ページ';
  const DESCRIPTION = '全タグの一覧ページです';
  const sortedTagsInfo = props.tagsInfo.sort(function (
    a,
    b
  ) {
    return b.totalCount - a.totalCount;
  });

  return (
    <>
      <CustomHead
        pageTitle={PAGE_TITLE}
        description={DESCRIPTION}
      />
      <div className="p-4">
        <h1>{PAGE_TITLE}</h1>
        <ul className="flex flex-wrap">
          {sortedTagsInfo.map((info) => (
            <li key={info.name} className="m-2">
              <Link href={info.path}>
                <a
                  className="space-x-2 bg-gray-200 text-gray-800 hover:bg-gray-600 hover:text-white
                             hover:no-underline py-1 px-2 rounded-full text-sm flex items-center"
                >
                  <HiOutlineTag />
                  <span>{info.name}</span>
                  <span className="text-xs bg-black text-white py-0.5 px-1 rounded-full">
                    {info.totalCount}
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <BackToTop />
    </>
  );
};

export default TagsPage;

export const getStaticProps: GetStaticProps<
  PageProps
> = async () => {
  return tagsControler.getAllTags().then((allTags) => {
    const tagsInfo: {
      name: string;
      path: string;
      totalCount: number;
    }[] = [];
    if (allTags) {
      for (let index = 0; index < allTags.length; index++) {
        const targetTag = allTags[index];
        const name = targetTag?.fields.name || '';
        const path = getTagsPath(targetTag?.fields.slug);
        tagsControler
          .getPostsByTags(targetTag?.sys.id)
          .then((targetPosts) => {
            const totalCount = targetPosts
              ? targetPosts.length
              : 0;
            if (totalCount > 0) {
              tagsInfo.push({ name, path, totalCount });
            }
          });
      }
    }
    return {
      props: {
        tagsInfo,
      },
    };
  });
};
