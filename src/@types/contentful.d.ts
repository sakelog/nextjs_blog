declare namespace contentful {
  declare type sys = {
    space: [Object];
    id: string;
    type: 'Entry';
    createdAt: Date;
    updatedAt: Date;
    environment: [Object];
    revision: number;
    contentType: [Object];
    locale: 'ja';
  };
  declare type post = {
    sys: sys;
    fields: {
      title: string;
      slug: string;
      date: string;
      update?: string;
      category: category;
      tags: tags;
      description: string;
      body: string;
    };
  };
  declare type page = {
    sys: sys;
    fields: {
      title: string;
      slug: string;
      description: string;
      date: string;
      update?: string;
      body: string;
    };
  };
  declare type category = {
    sys: sys;
    fields: {
      name: string;
      slug: string;
    };
  };
  declare type tags = [
    {
      sys: sys;
      fields: {
        name: string;
        slug: string;
      };
    }
  ];
  declare type assets = {
    sys: sys;
    fields: {
      title: string;
      file: {
        url: string;
        details: { size: number; image: { width: number; height: number } };
        fileName: string;
        contentType: string;
      };
    };
  };
  declare namespace Template {
    declare namespace page {
      declare type props = {
        page: page;
      };
    }
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
