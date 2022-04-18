declare namespace Pagination {
  declare namespace Pagination {
    declare type Props = {
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
