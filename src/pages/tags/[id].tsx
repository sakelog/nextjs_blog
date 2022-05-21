import {
  GetStaticProps,
  GetStaticPaths,
  NextPage,
} from 'next';

// libs
import {
  getAllTags,
  getTagByID,
  getPostsByTagID,
} from '@/libs/microcms/getContent';
import { MicroCMSListResponse } from 'microcms-js-sdk';

// components
import Link from 'next/link';
import CustomHead from '@/components/CustomHead';
import PostIndexList from '@/components/PostIndexList';

type PageProps = {
  postIndex: {
    posts: MicroCMSListResponse<Content.Post>;
  };
  title: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allTags = await getAllTags({});

  return {
    paths: allTags.contents.map((tag) => {
      return { params: { id: tag.id } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  PageProps,
  { id: string }
> = async (context) => {
  const targetID = context.params.id;

  const targetTag = await getTagByID({ targetID });
  const targetPosts = await getPostsByTagID({
    targetID,
  });

  return {
    props: {
      postIndex: { posts: targetPosts },
      title: targetTag.title,
    },
  };
};

const TagsIndexListPage: NextPage<PageProps> = ({
  postIndex,
  title,
}) => {
  const pageTitle = `タグ: ${title}`;
  const pageDescription = `${pageTitle}についての一覧ページ`;
  return (
    <>
      <CustomHead
        pageTitle={pageTitle}
        description={pageDescription}
      />
      <ul className="uk-breadcrumb">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/tags">タグ一覧</Link>
        </li>
        <li>
          <span>{pageTitle}</span>
        </li>
      </ul>
      <h1>{pageTitle}</h1>
      <section id="postIndex">
        <PostIndexList postIndex={postIndex} />
      </section>
    </>
  );
};

export default TagsIndexListPage;

// // lib
// import { tagsControler } from '@lib/contentful/exportContent';
// import { toKebabCase } from '@lib/util/toKebabCase';
// import { getTagsPath } from '@lib/util/getPath';

// // components
// import IndexLayout from 'layout/IndexLayout';
// import CustomHead from '@components/CustomHead';
// import IndexList from '@components/IndexList';
// import Pagination from '@components/Pagination';
// import BackToTop from '@components/Pagination/BackToTop';

// type PageProps = {
//   name: string;
//   posts: Contentful.Post[] | null | undefined;
//   totalCount: number;
//   currentPage: number;
//   lastPage: number;
//   pathBase: string;
// };

// const TagsDirectory: NextPage<PageProps> = (props) => {
//   const pageTitle = 'タグ：' + props.name;
//   const description =
//     pageTitle +
//     'についての一覧ページ' +
//     (props.currentPage > 1
//       ? ':' + props.currentPage + 'ページ目'
//       : '');
//   return (
//     <IndexLayout
//       head={
//         <CustomHead
//           pageTitle={
//             pageTitle +
//             (props.currentPage > 1
//               ? '(' + props.currentPage + ')'
//               : '')
//           }
//           description={description}
//         />
//       }
//       pagination={
//         <>
//           <Pagination
//             currentPage={props.currentPage}
//             lastPage={props.lastPage}
//             pathBase={props.pathBase}
//           />
//           <nav className="flex items-center space-x-4">
//             <BackToTop slug="tags" title="タグ一覧" />
//             <BackToTop />
//           </nav>
//         </>
//       }
//     >
//       <h1 className="font-bold text-2xl">{pageTitle}</h1>
//       <p className="my-2 text-sm">
//         投稿：{props.totalCount}件
//       </p>
//       {props.posts && <IndexList posts={props.posts} />}
//     </IndexLayout>
//   );
// };

// export default TagsDirectory;

// const POST_PER_LISTPAGE = 10;

// export const getStaticPaths: GetStaticPaths = async () => {
//   const allTags = await tagsControler.getAllTags();

//   const allSlugs = [];

//   if (allTags) {
//     for (let index = 0; index < allTags.length; index++) {
//       const targetPosts =
//         await tagsControler.getPostsByTags(
//           allTags[index].sys.id
//         );
//       if (targetPosts) {
//         if (targetPosts.length > 0) {
//           allSlugs.push([
//             toKebabCase(allTags[index].fields.slug),
//           ]);
//         }
//       }
//       const lastPage = targetPosts
//         ? Math.ceil(targetPosts.length / POST_PER_LISTPAGE)
//         : 0;
//       const numList =
//         lastPage > 1
//           ? [...Array(lastPage - 1)].map((_, i) => i + 2)
//           : [];
//       numList.map((number) => {
//         allSlugs.push([
//           toKebabCase(allTags[index].fields.slug),
//           number,
//         ]);
//       });
//     }
//   }

//   const paths = allSlugs.map((slug) => {
//     return { params: { slug: slug } };
//   });

//   return { paths, fallback: false };
// };

// export const getStaticProps: GetStaticProps<
//   PageProps
// > = async (context) => {
//   const slug = context.params ? context.params.slug : '';
//   const baseSlug = slug ? slug[0] : '';

//   const targetTags = await tagsControler.getTagsBySlug(
//     baseSlug
//   );
//   const targetPosts = targetTags?.sys.id
//     ? await tagsControler.getPostsByTags(targetTags?.sys.id)
//     : null;
//   const lastPage = targetPosts
//     ? Math.ceil(targetPosts.length / POST_PER_LISTPAGE)
//     : 0;
//   const pathBase = getTagsPath(baseSlug);
//   const currentPage = slug
//     ? slug.length > 1
//       ? Number(slug[slug.length - 1])
//       : 1
//     : 0;

//   return {
//     props: {
//       name: targetTags?.fields.name || '',
//       posts: targetPosts,
//       lastPage,
//       totalCount: targetPosts ? targetPosts.length : 0,
//       currentPage,
//       pathBase,
//     },
//   };
// };
