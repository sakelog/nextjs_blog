declare namespace contentful {
  declare interface postCollection extends EntryCollection {
    sys?: Sys;
    total?: number;
    skip?: number;
    limit?: number;
    items?: post[];
  }
  declare interface post extends Entry {
    sys: Sys;
    fields: {
      title: string;
      slug: string;
      date: string;
      update?: string;
      category: category;
      tags: tags[];
      description: string;
      body: string;
    };
  }

  declare interface pageCollection extends EntryCollection {
    sys?: Sys;
    total?: number;
    skip?: number;
    limit?: number;
    items?: page[];
  }
  declare interface page extends Entry {
    sys: Sys;
    fields: {
      title: string;
      slug: string;
      description: string;
      date: string;
      update?: string;
      body: string;
    };
  }

  declare interface categoryCollection extends EntryCollection {
    sys?: Sys;
    total?: number;
    skip?: number;
    limit?: number;
    items?: category[];
  }
  declare interface category extends Entry {
    sys: Sys;
    fields: {
      name: string;
      slug: string;
    };
  }
  declare interface tagsCollection extends EntryCollection {
    sys?: Sys;
    total?: number;
    skip?: number;
    limit?: number;
    items?: tags[];
  }
  declare interface tags extends Entry {
    sys: Sys;
    fields: {
      name: string;
      slug: string;
    };
  }
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
