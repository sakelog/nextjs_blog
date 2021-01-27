declare namespace Template {
  declare namespace postList {
    declare type props = {
      posts: post[];
      currentPage: number;
      lastPage: number;
      pathBase: string;
    };
  }
  declare namespace post {
    declare type props = {
      currentPost: contentful.post;
      prevPost?: contentful.post;
      nextPost?: contentful.post;
    };
  }

  declare namespace page {
    declare type props = {
      page: contentful.page;
    };
  }

  declare namespace catTagList {
    declare type props = {
      name: string;
      posts: contentful.post[];
      type: 'tags' | 'category';
      totalCount: number;
      currentPage: number;
      lastPage: number;
      pathBase: string;
    };
  }
}
