declare namespace Category {
  declare type props = {
    pageContext: {
      limit: number;
      skip: number;
      numPages: number;
      currentPage: number;
      slug: string;
      pathBase: string;
      type: string;
    }
    data: {
      category: {
        slug: string;
        name: string;
      }
      tags: {
        slug: string;
        name: string;
      }
      catPosts: {
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
      tagsPosts: {
        totalCount: number;
        nodes: [
          {
            slug:string;
            title: string;
            description: string;
            date: string;
            update: sting;
            category: {
              name: string;
              slug: string;
            }
          }
        ]
      }
    }
  }

  declare type func = (props:props) => JSX.Element;
}