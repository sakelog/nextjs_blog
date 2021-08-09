import { useRouter } from 'next/router';
import loadable from '@loadable/component';
const RenderTOC = loadable(
  () => import('@lib/renderTOC'),
  {}
);

import CustomHead from '@components/customHead';
import ArticleBody from '@components/postParts/articleBody';
import ShareButton from '@components/postParts/share';
import Bio from '@components/postParts/bio/bio';
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
      <article>
        <CustomHead
          pageTitle={pageTitle}
          description={props.currentPost.fields.description}
          imgFLG={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-3">
            <div className="bg-white p-4">
              <h1>{props.currentPost.fields.title}</h1>
              <ArticleBody body={body} />
            </div>
          </div>
          <div className="hidden md:block">
            <aside className="h-auto max-h-full w-full overflow-hidden sticky top-28">
              <RenderTOC markdown={body} />
            </aside>
          </div>
        </div>
        <div className="bg-white my-2 p-4">
          <div className="bg-gray-200 p-2 rounded">
            <ul className="space-y-2">
              <PostDate
                postdate={props.currentPost.fields.date}
                update={props.currentPost.fields.update}
              />
              {postCategory}
              {postTag}
            </ul>
          </div>
          <ShareButton url={currentURL} title={pageTitle} />
          <Bio />
        </div>
        <PrevNext
          prevPost={props.prevPost}
          nextPost={props.nextPost}
        />
        <BackToTop />
      </article>
    </>
  );
};

export default TempPost;
