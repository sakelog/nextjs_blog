import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

// lib
import { tagsControler } from '@lib/contentful/exportContent';
import { getTagsPath } from '@lib/util/getPath';

// components
import CustomHead from '@components/CustomHead';
import BackToTop from '@components/Pagination/BackToTop';

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
        <ul className="flex flex-wrap gap-2">
          {sortedTagsInfo.map((info) => (
            <li key={info.name}>
              <Link href={info.path}>
                <a className="c-badge c-badge--gray flex gap-2 items-center">
                  <span>{info.name}</span>
                  <div className="c-circle c-circle__text">
                    {info.totalCount}
                  </div>
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
  return tagsControler
    .getAllTags()
    .then(async (allTags) => {
      const tagsInfo: {
        name: string;
        path: string;
        totalCount: number;
      }[] = [];
      if (allTags) {
        for (
          let index = 0;
          index < allTags.length;
          index++
        ) {
          const targetTag = allTags[index];
          const name = targetTag?.fields.name || '';
          const path = getTagsPath(targetTag?.fields.slug);
          await tagsControler
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
