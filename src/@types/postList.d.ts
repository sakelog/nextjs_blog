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