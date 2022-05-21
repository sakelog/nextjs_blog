// components
import Link from 'next/link';
import AdForPostArticle from './AdForPostArticle';
import ArticleMeta from './ArticleMeta';
import ArticleBody from './ArticleBody';
import PrevNextLink from './PrevNextLink';

type PropTypes = {
  currentPost: Content.Post;
  prevPost: Content.Post | null;
  nextPost: Content.Post | null;
};

const Article = ({
  currentPost,
  prevPost,
  nextPost,
}: PropTypes) => {
  const { title, body, createDate, updateDate, tags } =
    currentPost;
  return (
    <article className="uk-article">
      <ul className="uk-breadcrumb">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <span>{title}</span>
        </li>
      </ul>
      <ArticleMeta
        createDate={createDate}
        updateDate={updateDate}
        tags={tags}
      />
      <h1 className="uk-article-title">
        {currentPost.title}
      </h1>
      <AdForPostArticle />
      <ArticleBody body={body} title={title} />
      <PrevNextLink
        prevPost={prevPost}
        nextPost={nextPost}
      />
    </article>
  );
};

export default Article;
