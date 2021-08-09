import Link from 'next/link';

import CustomHead from '@components/customHead';

import TagList from '@components/tagList';
import CategoryTag from '@components/categoryTag';
import PostDate from '@components/postDate';

import Pagination from '@components/pagination/pagination';
import BackToTop from '@components/pagination/backToTop';

import { getRootPath } from '@lib/getPath';

const TAGS = 'tags';
const CATEGORY = 'category';

const TempCatTag = (props: Template.catTagList.props) => {
  const pageTitle =
    (props.type === TAGS ? 'タグ：' : 'カテゴリー：') +
    props.name;
  const description =
    pageTitle +
    'についての一覧ページ' +
    (props.currentPage > 1
      ? ':' + props.currentPage + 'ページ目'
      : '');
  const postListTag = props.posts
    ? props.posts.map((post: contentful.post) => {
        const categoryTag = props.type === TAGS && (
          <li>
            <CategoryTag
              category={post.fields.category}
              heading="h3"
            />
          </li>
        );

        const tagList = (
          <TagList tags={post.fields.tags} heading="h4" />
        );
        const tagsTag = props.type === CATEGORY && (
          <li>{tagList}</li>
        );
        return (
          <div
            key={post.fields.slug}
            className="bg-white p-2 rounded shadow"
          >
            <Link href={getRootPath(post.fields.slug)}>
              <a>
                <div>
                  <h2 className="text-xl font-semibold my-2">
                    {post.fields.title}
                  </h2>
                  <ul className="p-2">
                    {categoryTag}
                    <PostDate
                      postdate={post.fields.date}
                      update={post.fields.update}
                    />
                    {tagsTag}
                  </ul>
                </div>
              </a>
            </Link>
          </div>
        );
      })
    : null;

  return (
    <>
      <CustomHead
        pageTitle={
          pageTitle +
          (props.currentPage > 1
            ? '(' + props.currentPage + ')'
            : '')
        }
        description={description}
      />
      <section>
        <h1>{pageTitle}</h1>
        <p>投稿：{props.totalCount}件</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {postListTag}
        </div>
        <Pagination
          currentPage={props.currentPage}
          lastPage={props.lastPage}
          pathBase={props.pathBase}
        />
        <BackToTop />
      </section>
    </>
  );
};

export default TempCatTag;
