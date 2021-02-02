declare namespace render {
  declare namespace toc {
    declare type offsetTop = number;
    declare type iditem = { value: string; id: string; depth: number };
    declare type itemTopOffsets = ({
      id: string;
      offsetTop: offsetTop;
    } | null)[];
    declare type activeItemIds = string[] | null;

    declare type getElementTopOffsetsById = (ids: iditem[]) => itemTopOffsets;
    declare type getToc = (rawmarkdownBody: string) => iditem[];
  }
}
