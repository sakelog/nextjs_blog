declare namespace getSlugs {
  declare type catTagslugs = { slug: string; id: string; name: string }[];
  declare type postSlugs = { slug: string; realSlug: string }[];
  declare type pageSlugs = postSlugs;

  declare namespace getPostListNumPages {
    declare type props = {
      posts: contentful.post[] | null;
      per_page: number;
    };
  }
  declare namespace getTagSlugs {}
}
