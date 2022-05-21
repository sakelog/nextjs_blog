import { GetStaticProps, NextPage } from 'next';

// libs
import {
  getAllTags,
  getPostsByTagID,
} from '@/libs/microcms/getContent';

// components
import Link from 'next/link';
import CustomHead from '@/components/CustomHead';

type TagsInfo = Array<
  Content.Tag & {
    totalCount: number;
  }
>;
type PageProps = {
  tagsInfo: TagsInfo;
};

export const getStaticProps: GetStaticProps<
  PageProps
> = async () => {
  const allTags = await getAllTags({});

  const tagsInfo: TagsInfo = [];

  await Promise.all(
    allTags.contents.map(async (tag) => {
      const targetPosts = await getPostsByTagID({
        targetID: tag.id,
      });
      const totalCount = targetPosts.totalCount;

      tagsInfo.push({
        id: tag.id,
        title: tag.title,
        totalCount,
      });
    })
  );

  const sortedTagsInfo = tagsInfo.sort(function (a, b) {
    return b.totalCount - a.totalCount;
  });

  return { props: { tagsInfo: sortedTagsInfo } };
};

const TagsPage: NextPage<PageProps> = ({ tagsInfo }) => {
  const PAGE_TITLE = 'タグ一覧';
  const DESCRIPTION = '全タグの一覧ページです';

  return (
    <>
      <CustomHead
        pageTitle={PAGE_TITLE}
        description={DESCRIPTION}
      />
      <ul className="uk-breadcrumb">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <span>{PAGE_TITLE}</span>
        </li>
      </ul>
      <h1>{PAGE_TITLE}</h1>
      <div className="uk-grid" data-uk-grid>
        {tagsInfo.map((tag) => (
          <div
            key={`tag-list-item-${tag.id}`}
            className="uk-flex uk-flex-middle"
            style={{ gap: '0.4rem' }}
          >
            <Link href={`/tags/${tag.id}`}>
              {tag.title}
            </Link>
            <span className="uk-badge">
              {tag.totalCount}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default TagsPage;
