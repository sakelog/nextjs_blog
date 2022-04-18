declare namespace Contentful {
  // Post
  declare interface PostFields {
    title: string;
    slug: string;
    date: string;
    update?: string;
    category: Category;
    tags: Tags[];
    description: string;
    body: string;
  }
  export type Post = Entry<PostFields>;
  export type PostCollection = EntryCollection<PostFields>;

  declare interface PostFieldsOutput extends PostFields {
    update: string | null;
  }
  export type PostOutput = Entry<PostFieldsOutput>;
  export type PostCollectionOutput =
    EntryCollection<PostFieldsOutput>;

  // Page
  declare interface PageFields {
    title: string;
    slug: string;
    description: string;
    date: string;
    update?: string;
    body: string;
  }
  export type PageCollection = EntryCollection<PageFields>;
  export type Page = Entry<PageFields>;

  declare interface PageFieldsOutput extends PageFields {
    update: string | null;
    body: string | null;
  }
  export type PageCollectionOutput =
    EntryCollection<PageFieldsOutput>;
  export type PageOutput = Entry<PageFieldsOutput>;

  // Category
  declare interface CategoryFields {
    name: string;
    slug: string;
  }
  export type Category = Entry<CategoryFields>;

  // Tag
  declare interface TagFields {
    name: string;
    slug: string;
  }
  export type Tags = Entry<TagFields>;
  export type TagsCollection = EntryCollection<TagFields>;
}
