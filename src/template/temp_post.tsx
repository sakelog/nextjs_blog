import { useRouter } from 'next/router';

import CustomHead from '@components/customHead';
import ArticleBody from '@components/postParts/articleBody';
import Bio from '@components/postParts/bio';
import PostDate from '@components/postDate';
import CategoryTag from '@components/categoryTag';
import TagList from '@components/tagList';
import PrevNext from '@components/pagination/prevNext';
import BackToTop from '@components/pagination/backToTop';

import config from '@components/config';

const TempPost = (props: Template.post.props) => {
  const body = props.currentPost.fields.body;
  const postCategory = (
    <li>
      <CategoryTag
        category={props.currentPost.fields.category}
        heading="h5"
      />
    </li>
  );
  const currentURL =
    (config.url.endsWith('/')
      ? config.url.slice(0, -1)
      : config.url) + useRouter().asPath;
  const pageTitle = props.currentPost.fields.title;
  const postTag = (
    <li>
      <TagList
        tags={props.currentPost.fields.tags}
        heading="h6"
      />
    </li>
  );
  return (
    <>
      <PrevNext
        prevPost={props.prevPost}
        nextPost={props.nextPost}
      />
      <article className="bg-white p-2">
        <CustomHead
          pageTitle={pageTitle}
          description={props.currentPost.fields.description}
          imgFLG={true}
        />
        <section className="p-4">
          <h1>{props.currentPost.fields.title}</h1>
          <ul className="flex flex-col items-center">
            <PostDate
              postdate={props.currentPost.fields.date}
              update={props.currentPost.fields.update}
            />
            {postTag}
          </ul>
          <ArticleBody body={body} />
        </section>
        <Bio />
      </article>
      <PrevNext
        prevPost={props.prevPost}
        nextPost={props.nextPost}
      />
      <BackToTop />
    </>
  );
};

export default TempPost;
