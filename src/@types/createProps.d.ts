declare namespace createProps {
  declare namespace postList {
    declare type props = {
      allpost: contentful.post[];
      per_page: number;
      slug: string | string[];
    };
  }
  declare namespace post {
    declare type props = {
      allpost: contentful.post[];
      slug: string | string[];
    };
  }
  declare namespace page {
    declare type props = {
      allpage: contentful.page[];
      slug: string | string[];
    };
  }
  declare namespace category {
    declare type props = {
      allcategory: contentful.category[];
      slug: string | string[];
      per_page: number;
    };
  }

  declare namespace tags {
    declare type props = {
      alltags: contentful.tags[];
      slug: string | string[];
      per_page: number;
    };
  }
}
