import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { HiOutlineTag } from 'react-icons/hi';

import CustomHead from '@components/customHead';
import Layout from '@layout/layout';
import BackToTop from '@components/pagination/backToTop';

import CreateTagsPageProps from '@lib/createProps/createTagsPageProps';

type propsType = {
  tagsInfo: {
    name: string;
    path: string;
    totalCount: number;
  }[];
};

const TagsPage: NextPage<propsType> = (props) => {
  const PAGE_TITLE = 'タグ一覧ページ';
  const DESCRIPTION = '全タグの一覧ページです';

  const sortedList = props.tagsInfo.sort(function (a, b) {
    return b.totalCount - a.totalCount;
  });

  const tagsList = sortedList.map((tag) => {
    return (
      <li key={tag.name} className="mx-2 my-2">
        <div className="relative">
          <Link href={tag.path}>
            <a
              className="flex items-center p-2 
                           border border-gray-400 rounded hover:bg-gray-200"
            >
              <HiOutlineTag />
              {tag.name}
            </a>
          </Link>
          <span
            className="bg-gray-600 text-white text-sm rounded-full h-6 w-6
                        flex items-center justify-center absolute -top-2 -left-2"
          >
            {tag.totalCount}
          </span>
        </div>
      </li>
    );
  });
  return (
    <Layout>
      <CustomHead
        pageTitle={PAGE_TITLE}
        description={DESCRIPTION}
      />
      <div className="bg-white p-4">
        <h1>{PAGE_TITLE}</h1>
        <ul className="flex flex-wrap">{tagsList}</ul>
      </div>
      <BackToTop />
    </Layout>
  );
};

export default TagsPage;

export const getStaticProps: GetStaticProps = async () => {
  const tagsInfo = await CreateTagsPageProps();
  return {
    props: {
      tagsInfo,
    },
  };
};
