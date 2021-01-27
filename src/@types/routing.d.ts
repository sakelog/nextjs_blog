declare namespace routing {
  declare namespace getPostListNumPages {
    declare type props = {
      posts: contentful.post[];
      per_page: number;
    };
  }
}
