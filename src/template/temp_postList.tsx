import config from '@components/config';

import CustomHead from '@components/customHead';
import IndexList from '@components/indexList';
import Pagination from '@components/pagination/pagination';

const TempPostList = (props: Template.postList.props) => {
  const pageTitle = props.currentPage
    ? props.currentPage > 1
      ? '記事一覧：' + props.currentPage + 'ページ目'
      : null
    : '';
  const description = props.currentPage
    ? props.currentPage > 1
      ? config.title + 'の記事一覧ページです'
      : config.description
    : '';

  return (
    <>
      <CustomHead
        pageTitle={pageTitle}
        description={description}
      />
      <section className="p-2">
        <IndexList posts={props.posts} />
        <Pagination
          currentPage={props.currentPage}
          lastPage={props.lastPage}
          pathBase={props.pathBase}
        />
      </section>
    </>
  );
};

export default TempPostList;
