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

  declare namespace MyLib {
    declare namespace getAllPosts {}
    declare namespace getTargetPosts {
      declare type props = {
        skip: number;
        limit: number;
      };
    }
    declare namespace getPostBySlug {
      declare type props = {
        slug: string | string[];
        preview?: boolean;
      };
    }
    declare namespace getPostIndex {
      declare type props = {
        slug: string | string[];
        posts: contentful.post[];
      };
    }
    declare namespace getPreviewPostBySlug {
      declare type props = {
        slug: string | string[];
      };
    }
    declare namespace getPageBySlug {
      declare type props = {
        slug: string | string[];
      };
    }

    declare namespace getPostByTag {
      declare type props = {
        id: string;
      };
    }

    declare namespace getPostByCategory {
      declare type props = {
        id: string;
      };
    }
  }
}
