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

const TagsPage: NextPage<PageProps> = ({ tagsInfo }) => {
  const PAGE_TITLE = 'タグ一覧';
  const DESCRIPTION = '全タグの一覧ページです';
  const sortedTagsInfo = tagsInfo.sort(function (a, b) {
    return b.totalCount - a.totalCount;
  });

  return (
    <section className="bg-white p-4">
      <CustomHead
        pageTitle={PAGE_TITLE}
        description={DESCRIPTION}
      />
      <div className="p-4">
        <h1 className="c-heading--flexCenter text-2xl font-bold">
          {PAGE_TITLE}
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {sortedTagsInfo.map((info) => (
            <li
              key={info.name}
              className="flex items-center gap-2"
            >
              <div className="p-tags__count bg-accent text-white">
                {info.totalCount}
              </div>
              <Link href={info.path}>{info.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <BackToTop />
    </section>
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
