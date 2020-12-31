import { GatsbyNode } from 'gatsby';

declare namespace PostList {
  type pathQuery = {
    data: {
      nodes: [
        {
          slug;
        }
      ];
    };
  };
}

const postQuery = `query {
    data: allContentfulPost {
      nodes {
        slug
      }
    }
  }`;

export const createPages: GatsbyNode['createPages'] = async ({
  actions: { createPage },
  graphql,
}) => {
  // postList-----------------------------------------------------------------start
  const { data: postListQuery } = await graphql<PostList.pathQuery>(postQuery);
  const posts = postListQuery.data.nodes;

  const postsPerPage = 5;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/' : '/' + (i + 1),
      component: require.resolve(`../src/templates/postList.tsx`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages: numPages,
        currentPage: i + 1,
      },
    });
  });
  // postList-----------------------------------------------------------------end
};
