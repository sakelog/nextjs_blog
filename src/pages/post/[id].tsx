import { useRouter } from 'next/router';
import { useEffect } from 'react';

import type {
  GetStaticProps,
  GetStaticPaths,
  NextPage,
} from 'next';

// libs
import {
  getAllPosts,
  getPostByID,
  getPrevPost,
  getNextPost,
} from '@/libs/microcms/getContent';
import { convertHTML } from '@/libs/convertHTML';
import { renderTOC } from '@/libs/renderTOC';
import { createOGImage } from '@/libs/util/createOGImage';

// components
import CustomHead from '@/components/CustomHead';
import Article from '@/components/page/post/[id]/Article';
import Side from '@/components/page/post/[id]/Side';

type PageProps = {
  currentPost: Content.Post;
  prevPost: Content.Post | null;
  nextPost: Content.Post | null;
  tocItems: Array<Content.TOCItem>;
  ogImagePath: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPosts({});

  return {
    paths: allPosts.contents.map((post) => {
      return { params: { id: post.id } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  PageProps,
  { id: string }
> = async (context) => {
  const targetID = context.params?.id;

  const currentPost = await getPostByID({
    targetID: targetID,
  });

  const richEditorHTMLArray = [];

  const body = currentPost.body.map((item) => {
    if (item.fieldId === 'richEditor') {
      const content = convertHTML(item.content);
      richEditorHTMLArray.push(content);
      return { fieldId: item.fieldId, content };
    }
    return item;
  });

  const richEditorHTML = richEditorHTMLArray.join('');

  const nextPost = await getNextPost({ id: targetID });
  const prevPost = await getPrevPost({ id: targetID });

  const tocItems = renderTOC(richEditorHTML);

  const ogImagePath = await createOGImage(
    currentPost.title,
    targetID
  );

  return {
    props: {
      currentPost: { ...currentPost, body },
      prevPost,
      nextPost,
      tocItems,
      ogImagePath,
    },
  };
};

const PostPage: NextPage<PageProps> = ({
  currentPost,
  prevPost,
  nextPost,
  tocItems,
  ogImagePath,
}) => {
  const { asPath } = useRouter();
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push(
        {}
      );
    } catch (err) {
      console.log(err);
    }
  }, [asPath]);

  const { title, description } = currentPost;

  return (
    <>
      <CustomHead
        pageTitle={title}
        description={description}
        ogImagePath={ogImagePath}
      />
      <div key={asPath} data-uk-grid>
        <div className="uk-width-3-4@m">
          <Article
            currentPost={currentPost}
            prevPost={prevPost}
            nextPost={nextPost}
          />
        </div>
        <div className="uk-width-1-4@m">
          <Side tocItems={tocItems} />
        </div>
      </div>
    </>
  );
};

export default PostPage;
