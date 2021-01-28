declare namespace render {
  declare namespace toc {
    declare type offsetTop = number;
    declare type id = { value; id; depth };
    declare type itemTopOffsets = { id: id; offsetTop: offsetTop }[];
    declare type activeItemIds = id[] | [];

    declare type getElementTopOffsetsById = (ids: id[]) => itemTopOffsets;
    declare type getToc = (rawmarkdownBody: string) => id[];
  }
}
