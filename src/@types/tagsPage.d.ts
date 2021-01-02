declare namespace tagsPage {
  declare type props = {
    pageContext: any;
    data: {
      tagGroup: {
        group: [
          tagGroup
        ]
      }
      tag: {
        nodes: [
          {
            slug: string;
            name: string;
          }
        ]
      }
    }
  }

  declare type tagGroup = {
    fieldValue: string;
    totalCount: number;
  }

  declare interface sortedTagGroup extends tagGroup  {
    slug?: string;
  }

  declare type func = (props:props) => JSX.Element
}