declare namespace PostList {
  declare type props = {
    pageContext: {
      limit: number;
      skip: number;
      numPages: number;
      currentPage: number;
    }
    data: {
      posts: {
        nodes: [
          {
            slug: string;
            title: string;
            date: string;
            update: string;
            description: string;
            category: {
              slug: string;
              name: string;
            }
            tags: [
              {
                slug: string;
                name: string;
              }
            ]
          }
        ]
      }
    }
  }

  declare type func = (props:props) => JSX.Element
}

declare namespace Post {
  declare type props = {
    pageContext: {
      slug:string;
      post: {
        slug: string;
        title: string;
      }
      previous: {
        slug: string;
        title: string;
      }
      next: {
        slug: string;
        title: string;
      }
    }
    data: {
      post: {
        title: string;
        category: {
          name: string;
          slug: string;
        }
        body: {
          childMarkdownRemark: {
            htmlAst: [];
            tableOfContents: any;
          }
        }
      }
    }
  }

  declare type func = (props:props) => JSX.Element
}

declare namespace Category {
  declare type props = {
    pageContext: {
      limit: number;
      skip: number;
      numPages: number;
      currentPage: number;
      slug: string;
      pathBase: string;
    }
    data: {
      category: {
        slug: string;
        name: string;
      }
      posts: {
        totalCount: number;
        nodes: [
          {
            slug:string;
            title: string;
            description: string;
            date: string;
            update: sting;
            tags: [
              {
                name: string;
                slug: string;
              }
            ]
          }
        ]
      }
    }
  }

  declare type func = (props:props) => JSX.Element;
}