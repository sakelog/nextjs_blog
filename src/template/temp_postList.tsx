import Link from 'next/link';
import { FiTag } from 'react-icons/fi';

import { getRootPath, getCategoryPath, getTagPath } from '@lib/getPath';

import config from '@component/config';

import CustomHead from '@component/customHead';
import PostDate from '@component/postDate';
import Pagination from '@component/pagination/pagination';

import styles from '@styles/project/_p-postList.module.scss';
import categoryStyles from '@styles/component/_c-category.module.scss';
import tagStyles from '@styles/component/_c-tagList.module.scss';

const Temp_PostList: React.FC<Template.postList.props> = (props) => {
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
