import Link from 'next/link';
import { FiTag } from 'react-icons/fi';

import { getRootPath, getCategoryPath, getTagPath } from '../lib/getPath';

import config from '../components/config';

import CustomHead from '../components/customHead';
import PostDate from '../components/postDate';
import Pagination from '../components/pagination/pagination';

import styles from '../styles/Object/Project/_p-postList.module.scss';
import categoryStyles from '../styles/Object/Component/_c-category.module.scss';
import tagStyles from '../styles/Object/Component/_c-tagList.module.scss';

const Temp_PostList = (props: Template.postList.props) => {
  const postListTag = props.posts.map((post: contentful.post) => {
    const category = post.fields.category.fields;
    const tagList = post.fields.tags.map((tag) => {
      return (
        <li key={tag.fields.slug}>
          <h4>
            <Link href={getTagPath(tag.fields.slug)}>
              <a>
                <span className={tagStyles.tagListItem}>
                  <span className={tagStyles.tagIcon}>
                    <FiTag />
                  </span>
                  {tag.fields.name}
                </span>
              </a>
            </Link>
          </h4>
        </li>
      );
    });
    return (
      <li key={post.fields.slug} className={styles.post}>
        <Link href={getRootPath(post.fields.slug)}>
          <div>
            <h2 className={styles.title}>{post.fields.title}</h2>
            <div className={styles.subItem}>
              <h3 className={categoryStyles.category}>
                <Link href={getCategoryPath(category.slug)}>
                  {category.name}
                </Link>
              </h3>
              <PostDate
                postdate={post.fields.date}
                update={post.fields.update}
              />
              <ul className={tagStyles.tagList}>{tagList}</ul>
            </div>
          </div>
        </Link>
      </li>
    );
  });

  const pageTitle =
    props.currentPage > 1 && '記事一覧：' + props.currentPage + 'ページ目';
  const description =
    props.currentPage > 1 && config.title + 'の記事一覧ページです';

  return (
    <section>
      <CustomHead pageTitle={pageTitle} description={description} />
      <ul className={styles.postList}>{postListTag}</ul>
      <Pagination
        currentPage={props.currentPage}
        lastPage={props.lastPage}
        pathBase={props.pathBase}
      />
    </section>
  );
};

export default Temp_PostList;
