declare namespace Page {
  declare type props = {
    pageContext : {
      slug: string;
      page: {
        slug: string;
        title: string;
      }
    }
    data : {
      page: {
        title
        date
        update
        description
        body : {
          childMarkdownRemark :{
            html: string;
          }
        }
      }
    }
  }

  declare type func = (props:props) => JSX.Element
}