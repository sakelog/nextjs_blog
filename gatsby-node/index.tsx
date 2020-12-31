import { GatsbyNode } from 'gatsby';

declare namespace Post {
  type pathQuery = {
    data: {
      edges: [
        {
          node: {
            slug: string;
            title: string;
          };
          previous: {
            slug: string;
            title: string;
          };
          next: {
            slug: string;
            title: string;
          };
        }
      ];
    };
  };
}

const postQuery = `query {
  data: allContentfulPost(
    sort: { fields: date, order: DESC } 
  ) {
    edges {
      node {
        slug
        title
      }
      previous {
        slug
        title
      }
      next {
        slug
        title
      }
    }
  }
}`;

export const createPages: GatsbyNode['createPages'] = async ({
  actions: { createPage },
  graphql,
}) => {
  // postList-----------------------------------------------------------------start
  const { data: postListQuery } = await graphql<Post.pathQuery>(postQuery);
  const posts = postListQuery.data.edges;

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
  // post---------------------------------------------------------------------start
  posts.map((post) => {
    const curPost = post.node;
    const slug = curPost.slug;

    createPage({
      path: slug,
      component: require.resolve(`../src/templates/post.tsx`),
      context: {
        slug: slug,
        post: curPost,
        prev: post.previous,
        next: post.next,
      },
    });
  });
  /*
  // Contentful Post
  posts.map((post) => {
    const curPost = post.node;
    const slug = curPost.slug;
    createPage({
      path: slug,
      component: require.resolve(`../src/templates/post.tsx`),
      context: {
        slug: 'test',
      },
    });
  });
  */
  // post---------------------------------------------------------------------end
};
