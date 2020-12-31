import { GatsbyNode } from 'gatsby';
import { getCategoryPath } from '../src/lib/getCategoryPath';

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

declare namespace Category {
  type pathQuery = {
    data: {
      group: [
        {
          fieldValue: string;
          totalCount: number;
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

const categoryQuery = `query{
  data: allContentfulPost {
    group(field: category___slug) {
      fieldValue
      totalCount
    }
  }
}
`;

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
  // post---------------------------------------------------------------------end
  // category-----------------------------------------------------------------start
  const { data: categoryGroupQuery } = await graphql<Category.pathQuery>(
    categoryQuery
  );
  console.log(categoryGroupQuery.data.group);
  const categorys = categoryGroupQuery.data.group;
  const categoryPerPage = 10;

  categorys.map((category) => {
    const categoryNumPages = Math.ceil(category.totalCount / categoryPerPage);
    const categoryPathBase = category.fieldValue
      ? getCategoryPath(category.fieldValue)
      : '';

    Array.from({ length: categoryNumPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? categoryPathBase : categoryPathBase + (i + 1),
        component: require.resolve(`../src/templates/categoryPages.tsx`),
        context: {
          limit: categoryPerPage,
          skip: i * categoryPerPage,
          numPages: categoryNumPages,
          currentPage: i + 1,
          slug: category.fieldValue,
          pathBase: categoryPathBase,
        },
      });
    });
  });
  // category----------------------------------------------------------------end
};
