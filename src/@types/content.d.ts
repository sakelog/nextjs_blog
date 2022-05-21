declare namespace Content {
  declare type Tag = {
    id: string;
    title: string;
  };
  declare type PostBody = Array<
    | {
        fieldId: 'html' | 'richEditor';
        content: string;
      }
    | {
        fieldId: 'image';
        content: {
          url: string;
          width: string;
          height: string;
        };
      }
  >;
  declare type Post = {
    id: string;
    title: string;
    description?: string;
    body: PostBody;
    createDate: string;
    updateDate?: string;
    tags: Array<Tag>;
  };

  declare type TOCItem = {
    text: string;
    id: string;
    name: string;
  };

  declare type Page = {
    title: string;
    slug: string;
    description: string;
    content: string;
  };
}
