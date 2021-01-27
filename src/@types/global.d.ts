declare namespace sitemap {
  declare type url = {
    url: string;
    fetchDate: string | Date;
    priority: string;
  };
  declare type urlset = url[];
}
