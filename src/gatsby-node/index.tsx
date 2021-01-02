import { GatsbyNode } from 'gatsby';
import { getCategoryPath, getTagPath } from '../lib/getPath';

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

const PostsetQuery = `query {
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

declare namespace Page {
  type pathQuery = {
    data: {
      nodes: [
        {
          slug: string;
          title: string;
        }
      ];
    };
  };
}

const PagesetQuery = `query {
  data: allContentfulPage {
    nodes {
      slug
      title
    }
  }
}`;
declare namespace CatTag {
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

const CategorysetQuery = `query{
  data: allContentfulPost {
    group(field: category___slug) {
      fieldValue
      totalCount
    }
  }
}
`;

const TagsetQuery = `query{
  data: allContentfulPost {
    group(field: tags___slug) {
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
  const { data: postListQuery } = await graphql<Post.pathQuery>(PostsetQuery);
  const posts = postListQuery.data.edges;

  const postsPerPage = 5;
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/' : '/' + (i + 1),
      component: require.resolve(`../templates/postList.tsx`),
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
      component: require.resolve(`../templates/post.tsx`),
      context: {
        slug: slug,
        post: curPost,
        prev: post.previous,
        next: post.next,
      },
    });
  });
  // post---------------------------------------------------------------------end
  // page---------------------------------------------------------------------start
  const { data: pageQuery } = await graphql<Page.pathQuery>(PagesetQuery);
  const pages = pageQuery.data.nodes;

  pages.map((page) => {
    const curPage = page;
    const slug = curPage.slug;

    createPage({
      path: slug,
      component: require.resolve(`../templates/page.tsx`),
      context: {
        slug: slug,
        page: curPage,
      },
    });
  });
  // page---------------------------------------------------------------------end
  // category-----------------------------------------------------------------start
  const { data: categoryGroupQuery } = await graphql<CatTag.pathQuery>(
    CategorysetQuery
  );
  createCatTagPages(categoryGroupQuery, CATEGORY, createPage);
  // category----------------------------------------------------------------end
  // tag--------------------------------------------------------------------start
  const { data: tagGroupQuery } = await graphql<CatTag.pathQuery>(TagsetQuery);
  createCatTagPages(tagGroupQuery, TAGS, createPage);
  // tag-------------------------------------------------------------------end
};

// category & tag Page-----------------------------------------------------start
type CatTagFuncType = 'category' | 'tags';
const CATEGORY = 'category';
const TAGS = 'tags';

function createCatTagPages(
  targetQuery: CatTag.pathQuery,
  type: CatTagFuncType,
  actions
) {
  const items = targetQuery.data.group;
  const itemPerPage = 10;

  items.map((item) => {
    const numPages = Math.ceil(item.totalCount / itemPerPage);
    const pathBase = item.fieldValue
      ? type === CATEGORY
        ? getCategoryPath(item.fieldValue)
        : type === TAGS && getTagPath(item.fieldValue)
      : '';

    Array.from({ length: numPages }).forEach((_, i) => {
      actions({
        path: i === 0 ? pathBase : pathBase + (i + 1),
        component: require.resolve(`../templates/CatTagPages.tsx`),
        context: {
          limit: itemPerPage,
          skip: i * itemPerPage,
          numPages: numPages,
          currentPage: i + 1,
          slug: item.fieldValue,
          pathBase: pathBase,
          type: type,
        },
      });
    });
  });
}
// category & tag Page-----------------------------------------------------end
