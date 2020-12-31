declare namespace PostList {
  export type pathQuery = {
    postListQuery: {
      nodes: [{ slug: string }];
    };
  };
}

/*declare namespace PostList {
  declare type pathQuery =  {
    postListQuery? : {
      nodes: [{

    }]
  }}

  declare type props = {
    pageContext: {
      currentPage: number;
      numPages: number;
    },
    data : {
      site: {
        siteMetadata: {
          title: string;
        }
      }
      Posts: {
        edges: [{
          node: {
            slug:string;
            title:string;
            date:string;
            update:string;
            description:string;
            category: {
              name:string;
              slug:string;
            }
            tags: [{
              name:string;
              slug:string;
            }]
          }
        }]
      }
      Category: {
        edges: [{
          node: {
            name:string;
            slug:string;
          }
        }]
      }
    }
  }
  declare type func = (props:props) => JSX.Element
}
*/
