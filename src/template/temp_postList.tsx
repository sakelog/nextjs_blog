import Link from 'next/link';

import config from '@components/config';

import CustomHead from '@components/customHead';
import Pagination from '@components/pagination/pagination';
import TagList from '@components/tagList';
import CategoryTag from '@components/categoryTag';
import PostDate from '@components/postDate';

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

  const postListTag = props.posts.map(
    (post: contentful.post) => {
      const tagList = (
        <TagList tags={post.fields.tags} heading="h4" />
      );
      return (
        <div
          key={post.fields.slug}
          className="bg-white p-2 rounded shadow"
        >
          <Link href={'/' + post.fields.slug}>
            <a>
              <div>
                <h2 className="text-xl font-semibold my-2">
                  {post.fields.title}
                </h2>
                <ul className="p-2">
                  <li>
                    <CategoryTag
                      category={post.fields.category}
                      heading="h3"
                    />
                  </li>
                  <PostDate
                    postdate={post.fields.date}
                    update={post.fields.update}
                  />
                  <li>{tagList}</li>
                </ul>
              </div>
            </a>
          </Link>
        </div>
      );
    }
  );
  return (
    <>
      <CustomHead
        pageTitle={pageTitle}
        description={description}
      />
      <section className="p-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {postListTag}
        </div>
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
