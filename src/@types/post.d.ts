declare namespace Post {
  declare type props = {
    pageContext: {
      slug:string;
      post: {
        slug: string;
        title: string;
      }
      previous: prevPost
      next: nextPost
    }
    data: {
      post: {
        title: string;
        date: string;
        update: string;
        description: string;
        category: category;
        tags: [
          {
            name: string;
            slug: string;
          }
        ]
        body: {
          childMarkdownRemark: {
            html: string;
            tableOfContents: any;
          }
        }
      }
    }
  }

  declare type prevPost = {
    slug: string;
    title: string;
  }
  declare type nextPost = {
    slug: string;
    title: string;
  }
  declare type category = {
    slug: string;
    name: string;
  }

  declare type func = (props:props) => JSX.Element
}