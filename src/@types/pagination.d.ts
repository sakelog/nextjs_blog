declare namespace pagination {
  declare namespace pagination {
    declare type props = {
      currentPage: number;
      lastPage: number;
      pathBase: string;
    };
  }
  declare namespace prevNext {
    declare type props = {
      prevPost?: { title: string; slug: string } | null;
      nextPost?: { title: string; slug: string } | null;
    };
  }
}
