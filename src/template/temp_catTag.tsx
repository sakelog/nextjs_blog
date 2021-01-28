import Link from 'next/link';
import { FiTag } from 'react-icons/fi';

import { getRootPath, getCategoryPath, getTagPath } from '../lib/getPath';

import CustomHead from '../components/customHead';
import PostDate from '../components/postDate';

import Pagination from '../components/pagination/pagination';
import BackToTop from '../components/pagination/backToTop';

import styles from '../styles/Object/Project/_p-postList.module.scss';
import categoryStyles from '../styles/Object/Component/_c-category.module.scss';
import tagStyles from '../styles/Object/Component/_c-tagList.module.scss';

const TAGS = 'tags';
const CATEGORY = 'category';

const Temp_CatTag = (props: Template.catTagList.props) => {
  const pageTitle =
    (props.type === TAGS ? 'タグ：' : 'カテゴリー：') + props.name;
  const description =
    pageTitle +
    'についての一覧ページ' +
    (props.currentPage > 1 ? ':' + props.currentPage + 'ページ目' : '');
  const postListTag = props.posts.map((post: contentful.post) => {
    const category = post.fields.category.fields;
    const categoryTag = props.type === TAGS && (
      <h3 className={categoryStyles.category}>
        <Link href={getCategoryPath(category.slug)}>{category.name}</Link>
      </h3>
    );

    const tagList = post.fields.tags.map((tag) => {
      return (
        <li key={tag.fields.slug}>
          <h4>
            <Link href={getTagPath(tag.fields.slug)}>
              <span className={tagStyles.tagListItem}>
                <span className={tagStyles.tagIcon}>
                  <FiTag />
                </span>
                {tag.fields.name}
              </span>
            </Link>
          </h4>
        </li>
      );
    });
    const tagsTag = props.type === CATEGORY && (
      <ul className={tagStyles.tagList}>{tagList}</ul>
    );
    return (
      <li key={post.fields.slug} className={styles.post}>
        <Link href={getRootPath(post.fields.slug)}>
          <div>
            <h2 className={styles.title}>{post.fields.title}</h2>
            <div className={styles.subItem}>
              {categoryTag}
              <PostDate
                postdate={post.fields.date}
                update={post.fields.update}
              />
              {tagsTag}
            </div>
          </div>
        </Link>
      </li>
    );
  });
  return (
    <section>
      <CustomHead
        pageTitle={
          pageTitle +
          (props.currentPage > 1 ? '(' + props.currentPage + ')' : '')
        }
        description={description}
      />
      <h1>{pageTitle}</h1>
      <p>投稿：{props.totalCount}件</p>
      <ul className={styles.postList}>{postListTag}</ul>
      <Pagination
        currentPage={props.currentPage}
        lastPage={props.lastPage}
        pathBase={props.pathBase}
      />
      <BackToTop />
    </section>
  );
};

export default Temp_CatTag;
