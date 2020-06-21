export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = Node & {
  __typename?: 'ContentfulAsset';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars['String']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  __typename?: 'ContentfulAssetConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  __typename?: 'ContentfulAssetEdge';
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export enum ContentfulAssetFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ContentfulId = 'contentful_id',
  FileUrl = 'file___url',
  FileDetailsSize = 'file___details___size',
  FileDetailsImageWidth = 'file___details___image___width',
  FileDetailsImageHeight = 'file___details___image___height',
  FileFileName = 'file___fileName',
  FileContentType = 'file___contentType',
  Title = 'title',
  Description = 'description',
  NodeLocale = 'node_locale',
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  ResizeBase64 = 'resize___base64',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeSrc = 'resize___src',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio'
}

export type ContentfulAssetFile = {
  __typename?: 'ContentfulAssetFile';
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  __typename?: 'ContentfulAssetFileDetails';
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  __typename?: 'ContentfulAssetFileDetailsImage';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  __typename?: 'ContentfulAssetGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCategory = Node & {
  __typename?: 'ContentfulCategory';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulCategorySys>;
  node_locale?: Maybe<Scalars['String']>;
  post?: Maybe<Array<Maybe<ContentfulPost>>>;
};


export type ContentfulCategoryCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulCategoryUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulCategoryConnection = {
  __typename?: 'ContentfulCategoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCategoryEdge>;
  nodes: Array<ContentfulCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCategoryGroupConnection>;
};


export type ContentfulCategoryConnectionDistinctArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCategoryFieldsEnum;
};

export type ContentfulCategoryEdge = {
  __typename?: 'ContentfulCategoryEdge';
  next?: Maybe<ContentfulCategory>;
  node: ContentfulCategory;
  previous?: Maybe<ContentfulCategory>;
};

export enum ContentfulCategoryFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Slug = 'slug',
  SpaceId = 'spaceId',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysContentfulId = 'sys___contentType___sys___contentful_id',
  NodeLocale = 'node_locale',
  Post = 'post',
  PostId = 'post___id',
  PostParentId = 'post___parent___id',
  PostParentParentId = 'post___parent___parent___id',
  PostParentParentChildren = 'post___parent___parent___children',
  PostParentChildren = 'post___parent___children',
  PostParentChildrenId = 'post___parent___children___id',
  PostParentChildrenChildren = 'post___parent___children___children',
  PostParentInternalContent = 'post___parent___internal___content',
  PostParentInternalContentDigest = 'post___parent___internal___contentDigest',
  PostParentInternalDescription = 'post___parent___internal___description',
  PostParentInternalFieldOwners = 'post___parent___internal___fieldOwners',
  PostParentInternalIgnoreType = 'post___parent___internal___ignoreType',
  PostParentInternalMediaType = 'post___parent___internal___mediaType',
  PostParentInternalOwner = 'post___parent___internal___owner',
  PostParentInternalType = 'post___parent___internal___type',
  PostChildren = 'post___children',
  PostChildrenId = 'post___children___id',
  PostChildrenParentId = 'post___children___parent___id',
  PostChildrenParentChildren = 'post___children___parent___children',
  PostChildrenChildren = 'post___children___children',
  PostChildrenChildrenId = 'post___children___children___id',
  PostChildrenChildrenChildren = 'post___children___children___children',
  PostChildrenInternalContent = 'post___children___internal___content',
  PostChildrenInternalContentDigest = 'post___children___internal___contentDigest',
  PostChildrenInternalDescription = 'post___children___internal___description',
  PostChildrenInternalFieldOwners = 'post___children___internal___fieldOwners',
  PostChildrenInternalIgnoreType = 'post___children___internal___ignoreType',
  PostChildrenInternalMediaType = 'post___children___internal___mediaType',
  PostChildrenInternalOwner = 'post___children___internal___owner',
  PostChildrenInternalType = 'post___children___internal___type',
  PostInternalContent = 'post___internal___content',
  PostInternalContentDigest = 'post___internal___contentDigest',
  PostInternalDescription = 'post___internal___description',
  PostInternalFieldOwners = 'post___internal___fieldOwners',
  PostInternalIgnoreType = 'post___internal___ignoreType',
  PostInternalMediaType = 'post___internal___mediaType',
  PostInternalOwner = 'post___internal___owner',
  PostInternalType = 'post___internal___type',
  PostTitle = 'post___title',
  PostSlug = 'post___slug',
  PostDate = 'post___date',
  PostDescription = 'post___description',
  PostCategoryId = 'post___category___id',
  PostCategoryParentId = 'post___category___parent___id',
  PostCategoryParentChildren = 'post___category___parent___children',
  PostCategoryChildren = 'post___category___children',
  PostCategoryChildrenId = 'post___category___children___id',
  PostCategoryChildrenChildren = 'post___category___children___children',
  PostCategoryInternalContent = 'post___category___internal___content',
  PostCategoryInternalContentDigest = 'post___category___internal___contentDigest',
  PostCategoryInternalDescription = 'post___category___internal___description',
  PostCategoryInternalFieldOwners = 'post___category___internal___fieldOwners',
  PostCategoryInternalIgnoreType = 'post___category___internal___ignoreType',
  PostCategoryInternalMediaType = 'post___category___internal___mediaType',
  PostCategoryInternalOwner = 'post___category___internal___owner',
  PostCategoryInternalType = 'post___category___internal___type',
  PostCategoryName = 'post___category___name',
  PostCategorySlug = 'post___category___slug',
  PostCategorySpaceId = 'post___category___spaceId',
  PostCategoryContentfulId = 'post___category___contentful_id',
  PostCategoryCreatedAt = 'post___category___createdAt',
  PostCategoryUpdatedAt = 'post___category___updatedAt',
  PostCategorySysRevision = 'post___category___sys___revision',
  PostCategoryNodeLocale = 'post___category___node_locale',
  PostCategoryPost = 'post___category___post',
  PostCategoryPostId = 'post___category___post___id',
  PostCategoryPostChildren = 'post___category___post___children',
  PostCategoryPostTitle = 'post___category___post___title',
  PostCategoryPostSlug = 'post___category___post___slug',
  PostCategoryPostDate = 'post___category___post___date',
  PostCategoryPostDescription = 'post___category___post___description',
  PostCategoryPostTags = 'post___category___post___tags',
  PostCategoryPostSpaceId = 'post___category___post___spaceId',
  PostCategoryPostContentfulId = 'post___category___post___contentful_id',
  PostCategoryPostCreatedAt = 'post___category___post___createdAt',
  PostCategoryPostUpdatedAt = 'post___category___post___updatedAt',
  PostCategoryPostNodeLocale = 'post___category___post___node_locale',
  PostCategoryPostUpdate = 'post___category___post___update',
  PostTags = 'post___tags',
  PostTagsId = 'post___tags___id',
  PostTagsParentId = 'post___tags___parent___id',
  PostTagsParentChildren = 'post___tags___parent___children',
  PostTagsChildren = 'post___tags___children',
  PostTagsChildrenId = 'post___tags___children___id',
  PostTagsChildrenChildren = 'post___tags___children___children',
  PostTagsInternalContent = 'post___tags___internal___content',
  PostTagsInternalContentDigest = 'post___tags___internal___contentDigest',
  PostTagsInternalDescription = 'post___tags___internal___description',
  PostTagsInternalFieldOwners = 'post___tags___internal___fieldOwners',
  PostTagsInternalIgnoreType = 'post___tags___internal___ignoreType',
  PostTagsInternalMediaType = 'post___tags___internal___mediaType',
  PostTagsInternalOwner = 'post___tags___internal___owner',
  PostTagsInternalType = 'post___tags___internal___type',
  PostTagsName = 'post___tags___name',
  PostTagsSlug = 'post___tags___slug',
  PostTagsPost = 'post___tags___post',
  PostTagsPostId = 'post___tags___post___id',
  PostTagsPostChildren = 'post___tags___post___children',
  PostTagsPostTitle = 'post___tags___post___title',
  PostTagsPostSlug = 'post___tags___post___slug',
  PostTagsPostDate = 'post___tags___post___date',
  PostTagsPostDescription = 'post___tags___post___description',
  PostTagsPostTags = 'post___tags___post___tags',
  PostTagsPostSpaceId = 'post___tags___post___spaceId',
  PostTagsPostContentfulId = 'post___tags___post___contentful_id',
  PostTagsPostCreatedAt = 'post___tags___post___createdAt',
  PostTagsPostUpdatedAt = 'post___tags___post___updatedAt',
  PostTagsPostNodeLocale = 'post___tags___post___node_locale',
  PostTagsPostUpdate = 'post___tags___post___update',
  PostTagsSpaceId = 'post___tags___spaceId',
  PostTagsContentfulId = 'post___tags___contentful_id',
  PostTagsCreatedAt = 'post___tags___createdAt',
  PostTagsUpdatedAt = 'post___tags___updatedAt',
  PostTagsSysRevision = 'post___tags___sys___revision',
  PostTagsNodeLocale = 'post___tags___node_locale',
  PostBodyId = 'post___body___id',
  PostBodyParentId = 'post___body___parent___id',
  PostBodyParentChildren = 'post___body___parent___children',
  PostBodyChildren = 'post___body___children',
  PostBodyChildrenId = 'post___body___children___id',
  PostBodyChildrenChildren = 'post___body___children___children',
  PostBodyInternalContent = 'post___body___internal___content',
  PostBodyInternalContentDigest = 'post___body___internal___contentDigest',
  PostBodyInternalDescription = 'post___body___internal___description',
  PostBodyInternalFieldOwners = 'post___body___internal___fieldOwners',
  PostBodyInternalIgnoreType = 'post___body___internal___ignoreType',
  PostBodyInternalMediaType = 'post___body___internal___mediaType',
  PostBodyInternalOwner = 'post___body___internal___owner',
  PostBodyInternalType = 'post___body___internal___type',
  PostBodyBody = 'post___body___body',
  PostBodyChildMarkdownRemarkId = 'post___body___childMarkdownRemark___id',
  PostBodyChildMarkdownRemarkExcerpt = 'post___body___childMarkdownRemark___excerpt',
  PostBodyChildMarkdownRemarkRawMarkdownBody = 'post___body___childMarkdownRemark___rawMarkdownBody',
  PostBodyChildMarkdownRemarkFileAbsolutePath = 'post___body___childMarkdownRemark___fileAbsolutePath',
  PostBodyChildMarkdownRemarkHtml = 'post___body___childMarkdownRemark___html',
  PostBodyChildMarkdownRemarkHtmlAst = 'post___body___childMarkdownRemark___htmlAst',
  PostBodyChildMarkdownRemarkExcerptAst = 'post___body___childMarkdownRemark___excerptAst',
  PostBodyChildMarkdownRemarkHeadings = 'post___body___childMarkdownRemark___headings',
  PostBodyChildMarkdownRemarkTimeToRead = 'post___body___childMarkdownRemark___timeToRead',
  PostBodyChildMarkdownRemarkTableOfContents = 'post___body___childMarkdownRemark___tableOfContents',
  PostBodyChildMarkdownRemarkChildren = 'post___body___childMarkdownRemark___children',
  PostSpaceId = 'post___spaceId',
  PostContentfulId = 'post___contentful_id',
  PostCreatedAt = 'post___createdAt',
  PostUpdatedAt = 'post___updatedAt',
  PostSysRevision = 'post___sys___revision',
  PostNodeLocale = 'post___node_locale',
  PostUpdate = 'post___update',
  PostChildContentfulPostBodyTextNodeId = 'post___childContentfulPostBodyTextNode___id',
  PostChildContentfulPostBodyTextNodeParentId = 'post___childContentfulPostBodyTextNode___parent___id',
  PostChildContentfulPostBodyTextNodeParentChildren = 'post___childContentfulPostBodyTextNode___parent___children',
  PostChildContentfulPostBodyTextNodeChildren = 'post___childContentfulPostBodyTextNode___children',
  PostChildContentfulPostBodyTextNodeChildrenId = 'post___childContentfulPostBodyTextNode___children___id',
  PostChildContentfulPostBodyTextNodeChildrenChildren = 'post___childContentfulPostBodyTextNode___children___children',
  PostChildContentfulPostBodyTextNodeInternalContent = 'post___childContentfulPostBodyTextNode___internal___content',
  PostChildContentfulPostBodyTextNodeInternalContentDigest = 'post___childContentfulPostBodyTextNode___internal___contentDigest',
  PostChildContentfulPostBodyTextNodeInternalDescription = 'post___childContentfulPostBodyTextNode___internal___description',
  PostChildContentfulPostBodyTextNodeInternalFieldOwners = 'post___childContentfulPostBodyTextNode___internal___fieldOwners',
  PostChildContentfulPostBodyTextNodeInternalIgnoreType = 'post___childContentfulPostBodyTextNode___internal___ignoreType',
  PostChildContentfulPostBodyTextNodeInternalMediaType = 'post___childContentfulPostBodyTextNode___internal___mediaType',
  PostChildContentfulPostBodyTextNodeInternalOwner = 'post___childContentfulPostBodyTextNode___internal___owner',
  PostChildContentfulPostBodyTextNodeInternalType = 'post___childContentfulPostBodyTextNode___internal___type',
  PostChildContentfulPostBodyTextNodeBody = 'post___childContentfulPostBodyTextNode___body',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkId = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___id',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkExcerpt = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___excerpt',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkRawMarkdownBody = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___rawMarkdownBody',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkFileAbsolutePath = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___fileAbsolutePath',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkHtml = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___html',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkHtmlAst = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___htmlAst',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkExcerptAst = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___excerptAst',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkHeadings = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___headings',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkTimeToRead = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___timeToRead',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkTableOfContents = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___tableOfContents',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkChildren = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___children'
}

export type ContentfulCategoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCategorySysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  post?: Maybe<ContentfulPostFilterListInput>;
};

export type ContentfulCategoryGroupConnection = {
  __typename?: 'ContentfulCategoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCategoryEdge>;
  nodes: Array<ContentfulCategory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCategorySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCategoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCategorySys = {
  __typename?: 'ContentfulCategorySys';
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulCategorySysContentType>;
};

export type ContentfulCategorySysContentType = {
  __typename?: 'ContentfulCategorySysContentType';
  sys?: Maybe<ContentfulCategorySysContentTypeSys>;
};

export type ContentfulCategorySysContentTypeFilterInput = {
  sys?: Maybe<ContentfulCategorySysContentTypeSysFilterInput>;
};

export type ContentfulCategorySysContentTypeSys = {
  __typename?: 'ContentfulCategorySysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulCategorySysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCategorySysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulCategorySysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  __typename?: 'ContentfulContentType';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeConnection = {
  __typename?: 'ContentfulContentTypeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  __typename?: 'ContentfulContentTypeEdge';
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  DisplayField = 'displayField',
  Description = 'description'
}

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeGroupConnection = {
  __typename?: 'ContentfulContentTypeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  __typename?: 'ContentfulFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  __typename?: 'ContentfulFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulGlobalMenu = Node & {
  __typename?: 'ContentfulGlobalMenu';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  icon?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulGlobalMenuSys>;
  node_locale?: Maybe<Scalars['String']>;
  ref?: Maybe<ContentfulPage>;
};


export type ContentfulGlobalMenuCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulGlobalMenuUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulGlobalMenuConnection = {
  __typename?: 'ContentfulGlobalMenuConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulGlobalMenuEdge>;
  nodes: Array<ContentfulGlobalMenu>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulGlobalMenuGroupConnection>;
};


export type ContentfulGlobalMenuConnectionDistinctArgs = {
  field: ContentfulGlobalMenuFieldsEnum;
};


export type ContentfulGlobalMenuConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulGlobalMenuFieldsEnum;
};

export type ContentfulGlobalMenuEdge = {
  __typename?: 'ContentfulGlobalMenuEdge';
  next?: Maybe<ContentfulGlobalMenu>;
  node: ContentfulGlobalMenu;
  previous?: Maybe<ContentfulGlobalMenu>;
};

export enum ContentfulGlobalMenuFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Icon = 'icon',
  Title = 'title',
  Slug = 'slug',
  Order = 'order',
  SpaceId = 'spaceId',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysContentfulId = 'sys___contentType___sys___contentful_id',
  NodeLocale = 'node_locale',
  RefId = 'ref___id',
  RefParentId = 'ref___parent___id',
  RefParentParentId = 'ref___parent___parent___id',
  RefParentParentChildren = 'ref___parent___parent___children',
  RefParentChildren = 'ref___parent___children',
  RefParentChildrenId = 'ref___parent___children___id',
  RefParentChildrenChildren = 'ref___parent___children___children',
  RefParentInternalContent = 'ref___parent___internal___content',
  RefParentInternalContentDigest = 'ref___parent___internal___contentDigest',
  RefParentInternalDescription = 'ref___parent___internal___description',
  RefParentInternalFieldOwners = 'ref___parent___internal___fieldOwners',
  RefParentInternalIgnoreType = 'ref___parent___internal___ignoreType',
  RefParentInternalMediaType = 'ref___parent___internal___mediaType',
  RefParentInternalOwner = 'ref___parent___internal___owner',
  RefParentInternalType = 'ref___parent___internal___type',
  RefChildren = 'ref___children',
  RefChildrenId = 'ref___children___id',
  RefChildrenParentId = 'ref___children___parent___id',
  RefChildrenParentChildren = 'ref___children___parent___children',
  RefChildrenChildren = 'ref___children___children',
  RefChildrenChildrenId = 'ref___children___children___id',
  RefChildrenChildrenChildren = 'ref___children___children___children',
  RefChildrenInternalContent = 'ref___children___internal___content',
  RefChildrenInternalContentDigest = 'ref___children___internal___contentDigest',
  RefChildrenInternalDescription = 'ref___children___internal___description',
  RefChildrenInternalFieldOwners = 'ref___children___internal___fieldOwners',
  RefChildrenInternalIgnoreType = 'ref___children___internal___ignoreType',
  RefChildrenInternalMediaType = 'ref___children___internal___mediaType',
  RefChildrenInternalOwner = 'ref___children___internal___owner',
  RefChildrenInternalType = 'ref___children___internal___type',
  RefInternalContent = 'ref___internal___content',
  RefInternalContentDigest = 'ref___internal___contentDigest',
  RefInternalDescription = 'ref___internal___description',
  RefInternalFieldOwners = 'ref___internal___fieldOwners',
  RefInternalIgnoreType = 'ref___internal___ignoreType',
  RefInternalMediaType = 'ref___internal___mediaType',
  RefInternalOwner = 'ref___internal___owner',
  RefInternalType = 'ref___internal___type',
  RefTitle = 'ref___title',
  RefSlug = 'ref___slug',
  RefDescription = 'ref___description',
  RefBodyId = 'ref___body___id',
  RefBodyParentId = 'ref___body___parent___id',
  RefBodyParentChildren = 'ref___body___parent___children',
  RefBodyChildren = 'ref___body___children',
  RefBodyChildrenId = 'ref___body___children___id',
  RefBodyChildrenChildren = 'ref___body___children___children',
  RefBodyInternalContent = 'ref___body___internal___content',
  RefBodyInternalContentDigest = 'ref___body___internal___contentDigest',
  RefBodyInternalDescription = 'ref___body___internal___description',
  RefBodyInternalFieldOwners = 'ref___body___internal___fieldOwners',
  RefBodyInternalIgnoreType = 'ref___body___internal___ignoreType',
  RefBodyInternalMediaType = 'ref___body___internal___mediaType',
  RefBodyInternalOwner = 'ref___body___internal___owner',
  RefBodyInternalType = 'ref___body___internal___type',
  RefBodyBody = 'ref___body___body',
  RefBodyChildMarkdownRemarkId = 'ref___body___childMarkdownRemark___id',
  RefBodyChildMarkdownRemarkExcerpt = 'ref___body___childMarkdownRemark___excerpt',
  RefBodyChildMarkdownRemarkRawMarkdownBody = 'ref___body___childMarkdownRemark___rawMarkdownBody',
  RefBodyChildMarkdownRemarkFileAbsolutePath = 'ref___body___childMarkdownRemark___fileAbsolutePath',
  RefBodyChildMarkdownRemarkHtml = 'ref___body___childMarkdownRemark___html',
  RefBodyChildMarkdownRemarkHtmlAst = 'ref___body___childMarkdownRemark___htmlAst',
  RefBodyChildMarkdownRemarkExcerptAst = 'ref___body___childMarkdownRemark___excerptAst',
  RefBodyChildMarkdownRemarkHeadings = 'ref___body___childMarkdownRemark___headings',
  RefBodyChildMarkdownRemarkTimeToRead = 'ref___body___childMarkdownRemark___timeToRead',
  RefBodyChildMarkdownRemarkTableOfContents = 'ref___body___childMarkdownRemark___tableOfContents',
  RefBodyChildMarkdownRemarkChildren = 'ref___body___childMarkdownRemark___children',
  RefSpaceId = 'ref___spaceId',
  RefContentfulId = 'ref___contentful_id',
  RefCreatedAt = 'ref___createdAt',
  RefUpdatedAt = 'ref___updatedAt',
  RefSysRevision = 'ref___sys___revision',
  RefNodeLocale = 'ref___node_locale',
  RefDate = 'ref___date',
  RefGlobalmenu = 'ref___globalmenu',
  RefGlobalmenuId = 'ref___globalmenu___id',
  RefGlobalmenuParentId = 'ref___globalmenu___parent___id',
  RefGlobalmenuParentChildren = 'ref___globalmenu___parent___children',
  RefGlobalmenuChildren = 'ref___globalmenu___children',
  RefGlobalmenuChildrenId = 'ref___globalmenu___children___id',
  RefGlobalmenuChildrenChildren = 'ref___globalmenu___children___children',
  RefGlobalmenuInternalContent = 'ref___globalmenu___internal___content',
  RefGlobalmenuInternalContentDigest = 'ref___globalmenu___internal___contentDigest',
  RefGlobalmenuInternalDescription = 'ref___globalmenu___internal___description',
  RefGlobalmenuInternalFieldOwners = 'ref___globalmenu___internal___fieldOwners',
  RefGlobalmenuInternalIgnoreType = 'ref___globalmenu___internal___ignoreType',
  RefGlobalmenuInternalMediaType = 'ref___globalmenu___internal___mediaType',
  RefGlobalmenuInternalOwner = 'ref___globalmenu___internal___owner',
  RefGlobalmenuInternalType = 'ref___globalmenu___internal___type',
  RefGlobalmenuIcon = 'ref___globalmenu___icon',
  RefGlobalmenuTitle = 'ref___globalmenu___title',
  RefGlobalmenuSlug = 'ref___globalmenu___slug',
  RefGlobalmenuOrder = 'ref___globalmenu___order',
  RefGlobalmenuSpaceId = 'ref___globalmenu___spaceId',
  RefGlobalmenuContentfulId = 'ref___globalmenu___contentful_id',
  RefGlobalmenuCreatedAt = 'ref___globalmenu___createdAt',
  RefGlobalmenuUpdatedAt = 'ref___globalmenu___updatedAt',
  RefGlobalmenuSysRevision = 'ref___globalmenu___sys___revision',
  RefGlobalmenuNodeLocale = 'ref___globalmenu___node_locale',
  RefGlobalmenuRefId = 'ref___globalmenu___ref___id',
  RefGlobalmenuRefChildren = 'ref___globalmenu___ref___children',
  RefGlobalmenuRefTitle = 'ref___globalmenu___ref___title',
  RefGlobalmenuRefSlug = 'ref___globalmenu___ref___slug',
  RefGlobalmenuRefDescription = 'ref___globalmenu___ref___description',
  RefGlobalmenuRefSpaceId = 'ref___globalmenu___ref___spaceId',
  RefGlobalmenuRefContentfulId = 'ref___globalmenu___ref___contentful_id',
  RefGlobalmenuRefCreatedAt = 'ref___globalmenu___ref___createdAt',
  RefGlobalmenuRefUpdatedAt = 'ref___globalmenu___ref___updatedAt',
  RefGlobalmenuRefNodeLocale = 'ref___globalmenu___ref___node_locale',
  RefGlobalmenuRefDate = 'ref___globalmenu___ref___date',
  RefGlobalmenuRefGlobalmenu = 'ref___globalmenu___ref___globalmenu',
  RefChildContentfulPageBodyTextNodeId = 'ref___childContentfulPageBodyTextNode___id',
  RefChildContentfulPageBodyTextNodeParentId = 'ref___childContentfulPageBodyTextNode___parent___id',
  RefChildContentfulPageBodyTextNodeParentChildren = 'ref___childContentfulPageBodyTextNode___parent___children',
  RefChildContentfulPageBodyTextNodeChildren = 'ref___childContentfulPageBodyTextNode___children',
  RefChildContentfulPageBodyTextNodeChildrenId = 'ref___childContentfulPageBodyTextNode___children___id',
  RefChildContentfulPageBodyTextNodeChildrenChildren = 'ref___childContentfulPageBodyTextNode___children___children',
  RefChildContentfulPageBodyTextNodeInternalContent = 'ref___childContentfulPageBodyTextNode___internal___content',
  RefChildContentfulPageBodyTextNodeInternalContentDigest = 'ref___childContentfulPageBodyTextNode___internal___contentDigest',
  RefChildContentfulPageBodyTextNodeInternalDescription = 'ref___childContentfulPageBodyTextNode___internal___description',
  RefChildContentfulPageBodyTextNodeInternalFieldOwners = 'ref___childContentfulPageBodyTextNode___internal___fieldOwners',
  RefChildContentfulPageBodyTextNodeInternalIgnoreType = 'ref___childContentfulPageBodyTextNode___internal___ignoreType',
  RefChildContentfulPageBodyTextNodeInternalMediaType = 'ref___childContentfulPageBodyTextNode___internal___mediaType',
  RefChildContentfulPageBodyTextNodeInternalOwner = 'ref___childContentfulPageBodyTextNode___internal___owner',
  RefChildContentfulPageBodyTextNodeInternalType = 'ref___childContentfulPageBodyTextNode___internal___type',
  RefChildContentfulPageBodyTextNodeBody = 'ref___childContentfulPageBodyTextNode___body',
  RefChildContentfulPageBodyTextNodeChildMarkdownRemarkId = 'ref___childContentfulPageBodyTextNode___childMarkdownRemark___id',
  RefChildContentfulPageBodyTextNodeChildMarkdownRemarkExcerpt = 'ref___childContentfulPageBodyTextNode___childMarkdownRemark___excerpt',
  RefChildContentfulPageBodyTextNodeChildMarkdownRemarkRawMarkdownBody = 'ref___childContentfulPageBodyTextNode___childMarkdownRemark___rawMarkdownBody',
  RefChildContentfulPageBodyTextNodeChildMarkdownRemarkFileAbsolutePath = 'ref___childContentfulPageBodyTextNode___childMarkdownRemark___fileAbsolutePath',
  RefChildContentfulPageBodyTextNodeChildMarkdownRemarkHtml = 'ref___childContentfulPageBodyTextNode___childMarkdownRemark___html',
  RefChildContentfulPageBodyTextNodeChildMarkdownRemarkHtmlAst = 'ref___childContentfulPageBodyTextNode___childMarkdownRemark___htmlAst',
  RefChildContentfulPageBodyTextNodeChildMarkdownRemarkExcerptAst = 'ref___childContentfulPageBodyTextNode___childMarkdownRemark___excerptAst',
  RefChildContentfulPageBodyTextNodeChildMarkdownRemarkHeadings = 'ref___childContentfulPageBodyTextNode___childMarkdownRemark___headings',
  RefChildContentfulPageBodyTextNodeChildMarkdownRemarkTimeToRead = 'ref___childContentfulPageBodyTextNode___childMarkdownRemark___timeToRead',
  RefChildContentfulPageBodyTextNodeChildMarkdownRemarkTableOfContents = 'ref___childContentfulPageBodyTextNode___childMarkdownRemark___tableOfContents',
  RefChildContentfulPageBodyTextNodeChildMarkdownRemarkChildren = 'ref___childContentfulPageBodyTextNode___childMarkdownRemark___children'
}

export type ContentfulGlobalMenuFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulGlobalMenuSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  ref?: Maybe<ContentfulPageFilterInput>;
};

export type ContentfulGlobalMenuFilterListInput = {
  elemMatch?: Maybe<ContentfulGlobalMenuFilterInput>;
};

export type ContentfulGlobalMenuGroupConnection = {
  __typename?: 'ContentfulGlobalMenuGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulGlobalMenuEdge>;
  nodes: Array<ContentfulGlobalMenu>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulGlobalMenuSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulGlobalMenuFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulGlobalMenuSys = {
  __typename?: 'ContentfulGlobalMenuSys';
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulGlobalMenuSysContentType>;
};

export type ContentfulGlobalMenuSysContentType = {
  __typename?: 'ContentfulGlobalMenuSysContentType';
  sys?: Maybe<ContentfulGlobalMenuSysContentTypeSys>;
};

export type ContentfulGlobalMenuSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulGlobalMenuSysContentTypeSysFilterInput>;
};

export type ContentfulGlobalMenuSysContentTypeSys = {
  __typename?: 'ContentfulGlobalMenuSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulGlobalMenuSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulGlobalMenuSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulGlobalMenuSysContentTypeFilterInput>;
};

export enum ContentfulImageCropFocus {
  Top = 'TOP',
  TopLeft = 'TOP_LEFT',
  TopRight = 'TOP_RIGHT',
  Bottom = 'BOTTOM',
  BottomRight = 'BOTTOM_RIGHT',
  BottomLeft = 'BOTTOM_LEFT',
  Right = 'RIGHT',
  Left = 'LEFT',
  Face = 'FACE',
  Faces = 'FACES',
  Center = 'CENTER'
}

export enum ContentfulImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type ContentfulPage = Node & {
  __typename?: 'ContentfulPage';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  body?: Maybe<ContentfulPageBodyTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPageSys>;
  node_locale?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  globalmenu?: Maybe<Array<Maybe<ContentfulGlobalMenu>>>;
  childContentfulPageBodyTextNode?: Maybe<ContentfulPageBodyTextNode>;
};


export type ContentfulPageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPageDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPageBodyTextNode = Node & {
  __typename?: 'contentfulPageBodyTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  body?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulPageBodyTextNodeConnection = {
  __typename?: 'contentfulPageBodyTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageBodyTextNodeEdge>;
  nodes: Array<ContentfulPageBodyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPageBodyTextNodeGroupConnection>;
};


export type ContentfulPageBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulPageBodyTextNodeFieldsEnum;
};


export type ContentfulPageBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPageBodyTextNodeFieldsEnum;
};

export type ContentfulPageBodyTextNodeEdge = {
  __typename?: 'contentfulPageBodyTextNodeEdge';
  next?: Maybe<ContentfulPageBodyTextNode>;
  node: ContentfulPageBodyTextNode;
  previous?: Maybe<ContentfulPageBodyTextNode>;
};

export enum ContentfulPageBodyTextNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Body = 'body',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterUpdate = 'childMarkdownRemark___frontmatter___update',
  ChildMarkdownRemarkFrontmatterDescription = 'childMarkdownRemark___frontmatter___description',
  ChildMarkdownRemarkFrontmatterCategory = 'childMarkdownRemark___frontmatter___category',
  ChildMarkdownRemarkFrontmatterTags = 'childMarkdownRemark___frontmatter___tags',
  ChildMarkdownRemarkFrontmatterSlug = 'childMarkdownRemark___frontmatter___slug',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFieldsCollection = 'childMarkdownRemark___fields___collection',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type'
}

export type ContentfulPageBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulPageBodyTextNodeGroupConnection = {
  __typename?: 'contentfulPageBodyTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageBodyTextNodeEdge>;
  nodes: Array<ContentfulPageBodyTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPageBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageBodyTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPageConnection = {
  __typename?: 'ContentfulPageConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPageGroupConnection>;
};


export type ContentfulPageConnectionDistinctArgs = {
  field: ContentfulPageFieldsEnum;
};


export type ContentfulPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPageFieldsEnum;
};

export type ContentfulPageEdge = {
  __typename?: 'ContentfulPageEdge';
  next?: Maybe<ContentfulPage>;
  node: ContentfulPage;
  previous?: Maybe<ContentfulPage>;
};

export enum ContentfulPageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Title = 'title',
  Slug = 'slug',
  Description = 'description',
  BodyId = 'body___id',
  BodyParentId = 'body___parent___id',
  BodyParentParentId = 'body___parent___parent___id',
  BodyParentParentChildren = 'body___parent___parent___children',
  BodyParentChildren = 'body___parent___children',
  BodyParentChildrenId = 'body___parent___children___id',
  BodyParentChildrenChildren = 'body___parent___children___children',
  BodyParentInternalContent = 'body___parent___internal___content',
  BodyParentInternalContentDigest = 'body___parent___internal___contentDigest',
  BodyParentInternalDescription = 'body___parent___internal___description',
  BodyParentInternalFieldOwners = 'body___parent___internal___fieldOwners',
  BodyParentInternalIgnoreType = 'body___parent___internal___ignoreType',
  BodyParentInternalMediaType = 'body___parent___internal___mediaType',
  BodyParentInternalOwner = 'body___parent___internal___owner',
  BodyParentInternalType = 'body___parent___internal___type',
  BodyChildren = 'body___children',
  BodyChildrenId = 'body___children___id',
  BodyChildrenParentId = 'body___children___parent___id',
  BodyChildrenParentChildren = 'body___children___parent___children',
  BodyChildrenChildren = 'body___children___children',
  BodyChildrenChildrenId = 'body___children___children___id',
  BodyChildrenChildrenChildren = 'body___children___children___children',
  BodyChildrenInternalContent = 'body___children___internal___content',
  BodyChildrenInternalContentDigest = 'body___children___internal___contentDigest',
  BodyChildrenInternalDescription = 'body___children___internal___description',
  BodyChildrenInternalFieldOwners = 'body___children___internal___fieldOwners',
  BodyChildrenInternalIgnoreType = 'body___children___internal___ignoreType',
  BodyChildrenInternalMediaType = 'body___children___internal___mediaType',
  BodyChildrenInternalOwner = 'body___children___internal___owner',
  BodyChildrenInternalType = 'body___children___internal___type',
  BodyInternalContent = 'body___internal___content',
  BodyInternalContentDigest = 'body___internal___contentDigest',
  BodyInternalDescription = 'body___internal___description',
  BodyInternalFieldOwners = 'body___internal___fieldOwners',
  BodyInternalIgnoreType = 'body___internal___ignoreType',
  BodyInternalMediaType = 'body___internal___mediaType',
  BodyInternalOwner = 'body___internal___owner',
  BodyInternalType = 'body___internal___type',
  BodyBody = 'body___body',
  BodyChildMarkdownRemarkId = 'body___childMarkdownRemark___id',
  BodyChildMarkdownRemarkFrontmatterTitle = 'body___childMarkdownRemark___frontmatter___title',
  BodyChildMarkdownRemarkFrontmatterDate = 'body___childMarkdownRemark___frontmatter___date',
  BodyChildMarkdownRemarkFrontmatterUpdate = 'body___childMarkdownRemark___frontmatter___update',
  BodyChildMarkdownRemarkFrontmatterDescription = 'body___childMarkdownRemark___frontmatter___description',
  BodyChildMarkdownRemarkFrontmatterCategory = 'body___childMarkdownRemark___frontmatter___category',
  BodyChildMarkdownRemarkFrontmatterTags = 'body___childMarkdownRemark___frontmatter___tags',
  BodyChildMarkdownRemarkFrontmatterSlug = 'body___childMarkdownRemark___frontmatter___slug',
  BodyChildMarkdownRemarkExcerpt = 'body___childMarkdownRemark___excerpt',
  BodyChildMarkdownRemarkRawMarkdownBody = 'body___childMarkdownRemark___rawMarkdownBody',
  BodyChildMarkdownRemarkFieldsCollection = 'body___childMarkdownRemark___fields___collection',
  BodyChildMarkdownRemarkFieldsSlug = 'body___childMarkdownRemark___fields___slug',
  BodyChildMarkdownRemarkFileAbsolutePath = 'body___childMarkdownRemark___fileAbsolutePath',
  BodyChildMarkdownRemarkHtml = 'body___childMarkdownRemark___html',
  BodyChildMarkdownRemarkHtmlAst = 'body___childMarkdownRemark___htmlAst',
  BodyChildMarkdownRemarkExcerptAst = 'body___childMarkdownRemark___excerptAst',
  BodyChildMarkdownRemarkHeadings = 'body___childMarkdownRemark___headings',
  BodyChildMarkdownRemarkHeadingsId = 'body___childMarkdownRemark___headings___id',
  BodyChildMarkdownRemarkHeadingsValue = 'body___childMarkdownRemark___headings___value',
  BodyChildMarkdownRemarkHeadingsDepth = 'body___childMarkdownRemark___headings___depth',
  BodyChildMarkdownRemarkTimeToRead = 'body___childMarkdownRemark___timeToRead',
  BodyChildMarkdownRemarkTableOfContents = 'body___childMarkdownRemark___tableOfContents',
  BodyChildMarkdownRemarkWordCountParagraphs = 'body___childMarkdownRemark___wordCount___paragraphs',
  BodyChildMarkdownRemarkWordCountSentences = 'body___childMarkdownRemark___wordCount___sentences',
  BodyChildMarkdownRemarkWordCountWords = 'body___childMarkdownRemark___wordCount___words',
  BodyChildMarkdownRemarkParentId = 'body___childMarkdownRemark___parent___id',
  BodyChildMarkdownRemarkParentChildren = 'body___childMarkdownRemark___parent___children',
  BodyChildMarkdownRemarkChildren = 'body___childMarkdownRemark___children',
  BodyChildMarkdownRemarkChildrenId = 'body___childMarkdownRemark___children___id',
  BodyChildMarkdownRemarkChildrenChildren = 'body___childMarkdownRemark___children___children',
  BodyChildMarkdownRemarkInternalContent = 'body___childMarkdownRemark___internal___content',
  BodyChildMarkdownRemarkInternalContentDigest = 'body___childMarkdownRemark___internal___contentDigest',
  BodyChildMarkdownRemarkInternalDescription = 'body___childMarkdownRemark___internal___description',
  BodyChildMarkdownRemarkInternalFieldOwners = 'body___childMarkdownRemark___internal___fieldOwners',
  BodyChildMarkdownRemarkInternalIgnoreType = 'body___childMarkdownRemark___internal___ignoreType',
  BodyChildMarkdownRemarkInternalMediaType = 'body___childMarkdownRemark___internal___mediaType',
  BodyChildMarkdownRemarkInternalOwner = 'body___childMarkdownRemark___internal___owner',
  BodyChildMarkdownRemarkInternalType = 'body___childMarkdownRemark___internal___type',
  SpaceId = 'spaceId',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysContentfulId = 'sys___contentType___sys___contentful_id',
  NodeLocale = 'node_locale',
  Date = 'date',
  Globalmenu = 'globalmenu',
  GlobalmenuId = 'globalmenu___id',
  GlobalmenuParentId = 'globalmenu___parent___id',
  GlobalmenuParentParentId = 'globalmenu___parent___parent___id',
  GlobalmenuParentParentChildren = 'globalmenu___parent___parent___children',
  GlobalmenuParentChildren = 'globalmenu___parent___children',
  GlobalmenuParentChildrenId = 'globalmenu___parent___children___id',
  GlobalmenuParentChildrenChildren = 'globalmenu___parent___children___children',
  GlobalmenuParentInternalContent = 'globalmenu___parent___internal___content',
  GlobalmenuParentInternalContentDigest = 'globalmenu___parent___internal___contentDigest',
  GlobalmenuParentInternalDescription = 'globalmenu___parent___internal___description',
  GlobalmenuParentInternalFieldOwners = 'globalmenu___parent___internal___fieldOwners',
  GlobalmenuParentInternalIgnoreType = 'globalmenu___parent___internal___ignoreType',
  GlobalmenuParentInternalMediaType = 'globalmenu___parent___internal___mediaType',
  GlobalmenuParentInternalOwner = 'globalmenu___parent___internal___owner',
  GlobalmenuParentInternalType = 'globalmenu___parent___internal___type',
  GlobalmenuChildren = 'globalmenu___children',
  GlobalmenuChildrenId = 'globalmenu___children___id',
  GlobalmenuChildrenParentId = 'globalmenu___children___parent___id',
  GlobalmenuChildrenParentChildren = 'globalmenu___children___parent___children',
  GlobalmenuChildrenChildren = 'globalmenu___children___children',
  GlobalmenuChildrenChildrenId = 'globalmenu___children___children___id',
  GlobalmenuChildrenChildrenChildren = 'globalmenu___children___children___children',
  GlobalmenuChildrenInternalContent = 'globalmenu___children___internal___content',
  GlobalmenuChildrenInternalContentDigest = 'globalmenu___children___internal___contentDigest',
  GlobalmenuChildrenInternalDescription = 'globalmenu___children___internal___description',
  GlobalmenuChildrenInternalFieldOwners = 'globalmenu___children___internal___fieldOwners',
  GlobalmenuChildrenInternalIgnoreType = 'globalmenu___children___internal___ignoreType',
  GlobalmenuChildrenInternalMediaType = 'globalmenu___children___internal___mediaType',
  GlobalmenuChildrenInternalOwner = 'globalmenu___children___internal___owner',
  GlobalmenuChildrenInternalType = 'globalmenu___children___internal___type',
  GlobalmenuInternalContent = 'globalmenu___internal___content',
  GlobalmenuInternalContentDigest = 'globalmenu___internal___contentDigest',
  GlobalmenuInternalDescription = 'globalmenu___internal___description',
  GlobalmenuInternalFieldOwners = 'globalmenu___internal___fieldOwners',
  GlobalmenuInternalIgnoreType = 'globalmenu___internal___ignoreType',
  GlobalmenuInternalMediaType = 'globalmenu___internal___mediaType',
  GlobalmenuInternalOwner = 'globalmenu___internal___owner',
  GlobalmenuInternalType = 'globalmenu___internal___type',
  GlobalmenuIcon = 'globalmenu___icon',
  GlobalmenuTitle = 'globalmenu___title',
  GlobalmenuSlug = 'globalmenu___slug',
  GlobalmenuOrder = 'globalmenu___order',
  GlobalmenuSpaceId = 'globalmenu___spaceId',
  GlobalmenuContentfulId = 'globalmenu___contentful_id',
  GlobalmenuCreatedAt = 'globalmenu___createdAt',
  GlobalmenuUpdatedAt = 'globalmenu___updatedAt',
  GlobalmenuSysRevision = 'globalmenu___sys___revision',
  GlobalmenuNodeLocale = 'globalmenu___node_locale',
  GlobalmenuRefId = 'globalmenu___ref___id',
  GlobalmenuRefParentId = 'globalmenu___ref___parent___id',
  GlobalmenuRefParentChildren = 'globalmenu___ref___parent___children',
  GlobalmenuRefChildren = 'globalmenu___ref___children',
  GlobalmenuRefChildrenId = 'globalmenu___ref___children___id',
  GlobalmenuRefChildrenChildren = 'globalmenu___ref___children___children',
  GlobalmenuRefInternalContent = 'globalmenu___ref___internal___content',
  GlobalmenuRefInternalContentDigest = 'globalmenu___ref___internal___contentDigest',
  GlobalmenuRefInternalDescription = 'globalmenu___ref___internal___description',
  GlobalmenuRefInternalFieldOwners = 'globalmenu___ref___internal___fieldOwners',
  GlobalmenuRefInternalIgnoreType = 'globalmenu___ref___internal___ignoreType',
  GlobalmenuRefInternalMediaType = 'globalmenu___ref___internal___mediaType',
  GlobalmenuRefInternalOwner = 'globalmenu___ref___internal___owner',
  GlobalmenuRefInternalType = 'globalmenu___ref___internal___type',
  GlobalmenuRefTitle = 'globalmenu___ref___title',
  GlobalmenuRefSlug = 'globalmenu___ref___slug',
  GlobalmenuRefDescription = 'globalmenu___ref___description',
  GlobalmenuRefBodyId = 'globalmenu___ref___body___id',
  GlobalmenuRefBodyChildren = 'globalmenu___ref___body___children',
  GlobalmenuRefBodyBody = 'globalmenu___ref___body___body',
  GlobalmenuRefSpaceId = 'globalmenu___ref___spaceId',
  GlobalmenuRefContentfulId = 'globalmenu___ref___contentful_id',
  GlobalmenuRefCreatedAt = 'globalmenu___ref___createdAt',
  GlobalmenuRefUpdatedAt = 'globalmenu___ref___updatedAt',
  GlobalmenuRefSysRevision = 'globalmenu___ref___sys___revision',
  GlobalmenuRefNodeLocale = 'globalmenu___ref___node_locale',
  GlobalmenuRefDate = 'globalmenu___ref___date',
  GlobalmenuRefGlobalmenu = 'globalmenu___ref___globalmenu',
  GlobalmenuRefGlobalmenuId = 'globalmenu___ref___globalmenu___id',
  GlobalmenuRefGlobalmenuChildren = 'globalmenu___ref___globalmenu___children',
  GlobalmenuRefGlobalmenuIcon = 'globalmenu___ref___globalmenu___icon',
  GlobalmenuRefGlobalmenuTitle = 'globalmenu___ref___globalmenu___title',
  GlobalmenuRefGlobalmenuSlug = 'globalmenu___ref___globalmenu___slug',
  GlobalmenuRefGlobalmenuOrder = 'globalmenu___ref___globalmenu___order',
  GlobalmenuRefGlobalmenuSpaceId = 'globalmenu___ref___globalmenu___spaceId',
  GlobalmenuRefGlobalmenuContentfulId = 'globalmenu___ref___globalmenu___contentful_id',
  GlobalmenuRefGlobalmenuCreatedAt = 'globalmenu___ref___globalmenu___createdAt',
  GlobalmenuRefGlobalmenuUpdatedAt = 'globalmenu___ref___globalmenu___updatedAt',
  GlobalmenuRefGlobalmenuNodeLocale = 'globalmenu___ref___globalmenu___node_locale',
  GlobalmenuRefChildContentfulPageBodyTextNodeId = 'globalmenu___ref___childContentfulPageBodyTextNode___id',
  GlobalmenuRefChildContentfulPageBodyTextNodeChildren = 'globalmenu___ref___childContentfulPageBodyTextNode___children',
  GlobalmenuRefChildContentfulPageBodyTextNodeBody = 'globalmenu___ref___childContentfulPageBodyTextNode___body',
  ChildContentfulPageBodyTextNodeId = 'childContentfulPageBodyTextNode___id',
  ChildContentfulPageBodyTextNodeParentId = 'childContentfulPageBodyTextNode___parent___id',
  ChildContentfulPageBodyTextNodeParentParentId = 'childContentfulPageBodyTextNode___parent___parent___id',
  ChildContentfulPageBodyTextNodeParentParentChildren = 'childContentfulPageBodyTextNode___parent___parent___children',
  ChildContentfulPageBodyTextNodeParentChildren = 'childContentfulPageBodyTextNode___parent___children',
  ChildContentfulPageBodyTextNodeParentChildrenId = 'childContentfulPageBodyTextNode___parent___children___id',
  ChildContentfulPageBodyTextNodeParentChildrenChildren = 'childContentfulPageBodyTextNode___parent___children___children',
  ChildContentfulPageBodyTextNodeParentInternalContent = 'childContentfulPageBodyTextNode___parent___internal___content',
  ChildContentfulPageBodyTextNodeParentInternalContentDigest = 'childContentfulPageBodyTextNode___parent___internal___contentDigest',
  ChildContentfulPageBodyTextNodeParentInternalDescription = 'childContentfulPageBodyTextNode___parent___internal___description',
  ChildContentfulPageBodyTextNodeParentInternalFieldOwners = 'childContentfulPageBodyTextNode___parent___internal___fieldOwners',
  ChildContentfulPageBodyTextNodeParentInternalIgnoreType = 'childContentfulPageBodyTextNode___parent___internal___ignoreType',
  ChildContentfulPageBodyTextNodeParentInternalMediaType = 'childContentfulPageBodyTextNode___parent___internal___mediaType',
  ChildContentfulPageBodyTextNodeParentInternalOwner = 'childContentfulPageBodyTextNode___parent___internal___owner',
  ChildContentfulPageBodyTextNodeParentInternalType = 'childContentfulPageBodyTextNode___parent___internal___type',
  ChildContentfulPageBodyTextNodeChildren = 'childContentfulPageBodyTextNode___children',
  ChildContentfulPageBodyTextNodeChildrenId = 'childContentfulPageBodyTextNode___children___id',
  ChildContentfulPageBodyTextNodeChildrenParentId = 'childContentfulPageBodyTextNode___children___parent___id',
  ChildContentfulPageBodyTextNodeChildrenParentChildren = 'childContentfulPageBodyTextNode___children___parent___children',
  ChildContentfulPageBodyTextNodeChildrenChildren = 'childContentfulPageBodyTextNode___children___children',
  ChildContentfulPageBodyTextNodeChildrenChildrenId = 'childContentfulPageBodyTextNode___children___children___id',
  ChildContentfulPageBodyTextNodeChildrenChildrenChildren = 'childContentfulPageBodyTextNode___children___children___children',
  ChildContentfulPageBodyTextNodeChildrenInternalContent = 'childContentfulPageBodyTextNode___children___internal___content',
  ChildContentfulPageBodyTextNodeChildrenInternalContentDigest = 'childContentfulPageBodyTextNode___children___internal___contentDigest',
  ChildContentfulPageBodyTextNodeChildrenInternalDescription = 'childContentfulPageBodyTextNode___children___internal___description',
  ChildContentfulPageBodyTextNodeChildrenInternalFieldOwners = 'childContentfulPageBodyTextNode___children___internal___fieldOwners',
  ChildContentfulPageBodyTextNodeChildrenInternalIgnoreType = 'childContentfulPageBodyTextNode___children___internal___ignoreType',
  ChildContentfulPageBodyTextNodeChildrenInternalMediaType = 'childContentfulPageBodyTextNode___children___internal___mediaType',
  ChildContentfulPageBodyTextNodeChildrenInternalOwner = 'childContentfulPageBodyTextNode___children___internal___owner',
  ChildContentfulPageBodyTextNodeChildrenInternalType = 'childContentfulPageBodyTextNode___children___internal___type',
  ChildContentfulPageBodyTextNodeInternalContent = 'childContentfulPageBodyTextNode___internal___content',
  ChildContentfulPageBodyTextNodeInternalContentDigest = 'childContentfulPageBodyTextNode___internal___contentDigest',
  ChildContentfulPageBodyTextNodeInternalDescription = 'childContentfulPageBodyTextNode___internal___description',
  ChildContentfulPageBodyTextNodeInternalFieldOwners = 'childContentfulPageBodyTextNode___internal___fieldOwners',
  ChildContentfulPageBodyTextNodeInternalIgnoreType = 'childContentfulPageBodyTextNode___internal___ignoreType',
  ChildContentfulPageBodyTextNodeInternalMediaType = 'childContentfulPageBodyTextNode___internal___mediaType',
  ChildContentfulPageBodyTextNodeInternalOwner = 'childContentfulPageBodyTextNode___internal___owner',
  ChildContentfulPageBodyTextNodeInternalType = 'childContentfulPageBodyTextNode___internal___type',
  ChildContentfulPageBodyTextNodeBody = 'childContentfulPageBodyTextNode___body',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkId = 'childContentfulPageBodyTextNode___childMarkdownRemark___id',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkFrontmatterTitle = 'childContentfulPageBodyTextNode___childMarkdownRemark___frontmatter___title',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkFrontmatterDate = 'childContentfulPageBodyTextNode___childMarkdownRemark___frontmatter___date',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkFrontmatterUpdate = 'childContentfulPageBodyTextNode___childMarkdownRemark___frontmatter___update',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkFrontmatterDescription = 'childContentfulPageBodyTextNode___childMarkdownRemark___frontmatter___description',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkFrontmatterCategory = 'childContentfulPageBodyTextNode___childMarkdownRemark___frontmatter___category',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkFrontmatterTags = 'childContentfulPageBodyTextNode___childMarkdownRemark___frontmatter___tags',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkFrontmatterSlug = 'childContentfulPageBodyTextNode___childMarkdownRemark___frontmatter___slug',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkExcerpt = 'childContentfulPageBodyTextNode___childMarkdownRemark___excerpt',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkRawMarkdownBody = 'childContentfulPageBodyTextNode___childMarkdownRemark___rawMarkdownBody',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkFieldsCollection = 'childContentfulPageBodyTextNode___childMarkdownRemark___fields___collection',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkFieldsSlug = 'childContentfulPageBodyTextNode___childMarkdownRemark___fields___slug',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkFileAbsolutePath = 'childContentfulPageBodyTextNode___childMarkdownRemark___fileAbsolutePath',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkHtml = 'childContentfulPageBodyTextNode___childMarkdownRemark___html',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkHtmlAst = 'childContentfulPageBodyTextNode___childMarkdownRemark___htmlAst',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkExcerptAst = 'childContentfulPageBodyTextNode___childMarkdownRemark___excerptAst',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkHeadings = 'childContentfulPageBodyTextNode___childMarkdownRemark___headings',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkHeadingsId = 'childContentfulPageBodyTextNode___childMarkdownRemark___headings___id',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkHeadingsValue = 'childContentfulPageBodyTextNode___childMarkdownRemark___headings___value',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkHeadingsDepth = 'childContentfulPageBodyTextNode___childMarkdownRemark___headings___depth',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkTimeToRead = 'childContentfulPageBodyTextNode___childMarkdownRemark___timeToRead',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkTableOfContents = 'childContentfulPageBodyTextNode___childMarkdownRemark___tableOfContents',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkWordCountParagraphs = 'childContentfulPageBodyTextNode___childMarkdownRemark___wordCount___paragraphs',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkWordCountSentences = 'childContentfulPageBodyTextNode___childMarkdownRemark___wordCount___sentences',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkWordCountWords = 'childContentfulPageBodyTextNode___childMarkdownRemark___wordCount___words',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkParentId = 'childContentfulPageBodyTextNode___childMarkdownRemark___parent___id',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkParentChildren = 'childContentfulPageBodyTextNode___childMarkdownRemark___parent___children',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkChildren = 'childContentfulPageBodyTextNode___childMarkdownRemark___children',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkChildrenId = 'childContentfulPageBodyTextNode___childMarkdownRemark___children___id',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkChildrenChildren = 'childContentfulPageBodyTextNode___childMarkdownRemark___children___children',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkInternalContent = 'childContentfulPageBodyTextNode___childMarkdownRemark___internal___content',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkInternalContentDigest = 'childContentfulPageBodyTextNode___childMarkdownRemark___internal___contentDigest',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkInternalDescription = 'childContentfulPageBodyTextNode___childMarkdownRemark___internal___description',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkInternalFieldOwners = 'childContentfulPageBodyTextNode___childMarkdownRemark___internal___fieldOwners',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkInternalIgnoreType = 'childContentfulPageBodyTextNode___childMarkdownRemark___internal___ignoreType',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkInternalMediaType = 'childContentfulPageBodyTextNode___childMarkdownRemark___internal___mediaType',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkInternalOwner = 'childContentfulPageBodyTextNode___childMarkdownRemark___internal___owner',
  ChildContentfulPageBodyTextNodeChildMarkdownRemarkInternalType = 'childContentfulPageBodyTextNode___childMarkdownRemark___internal___type'
}

export type ContentfulPageFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<ContentfulPageBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  globalmenu?: Maybe<ContentfulGlobalMenuFilterListInput>;
  childContentfulPageBodyTextNode?: Maybe<ContentfulPageBodyTextNodeFilterInput>;
};

export type ContentfulPageGroupConnection = {
  __typename?: 'ContentfulPageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPageSys = {
  __typename?: 'ContentfulPageSys';
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPageSysContentType>;
};

export type ContentfulPageSysContentType = {
  __typename?: 'ContentfulPageSysContentType';
  sys?: Maybe<ContentfulPageSysContentTypeSys>;
};

export type ContentfulPageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPageSysContentTypeSysFilterInput>;
};

export type ContentfulPageSysContentTypeSys = {
  __typename?: 'ContentfulPageSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPageSysContentTypeFilterInput>;
};

export type ContentfulPost = Node & {
  __typename?: 'ContentfulPost';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  category?: Maybe<ContentfulCategory>;
  tags?: Maybe<Array<Maybe<ContentfulTags>>>;
  body?: Maybe<ContentfulPostBodyTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPostSys>;
  node_locale?: Maybe<Scalars['String']>;
  update?: Maybe<Scalars['Date']>;
  childContentfulPostBodyTextNode?: Maybe<ContentfulPostBodyTextNode>;
};


export type ContentfulPostDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPostCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPostUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPostUpdateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPostBodyTextNode = Node & {
  __typename?: 'contentfulPostBodyTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  body?: Maybe<Scalars['String']>;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type ContentfulPostBodyTextNodeConnection = {
  __typename?: 'contentfulPostBodyTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostBodyTextNodeEdge>;
  nodes: Array<ContentfulPostBodyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPostBodyTextNodeGroupConnection>;
};


export type ContentfulPostBodyTextNodeConnectionDistinctArgs = {
  field: ContentfulPostBodyTextNodeFieldsEnum;
};


export type ContentfulPostBodyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPostBodyTextNodeFieldsEnum;
};

export type ContentfulPostBodyTextNodeEdge = {
  __typename?: 'contentfulPostBodyTextNodeEdge';
  next?: Maybe<ContentfulPostBodyTextNode>;
  node: ContentfulPostBodyTextNode;
  previous?: Maybe<ContentfulPostBodyTextNode>;
};

export enum ContentfulPostBodyTextNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Body = 'body',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterUpdate = 'childMarkdownRemark___frontmatter___update',
  ChildMarkdownRemarkFrontmatterDescription = 'childMarkdownRemark___frontmatter___description',
  ChildMarkdownRemarkFrontmatterCategory = 'childMarkdownRemark___frontmatter___category',
  ChildMarkdownRemarkFrontmatterTags = 'childMarkdownRemark___frontmatter___tags',
  ChildMarkdownRemarkFrontmatterSlug = 'childMarkdownRemark___frontmatter___slug',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFieldsCollection = 'childMarkdownRemark___fields___collection',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type'
}

export type ContentfulPostBodyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type ContentfulPostBodyTextNodeGroupConnection = {
  __typename?: 'contentfulPostBodyTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostBodyTextNodeEdge>;
  nodes: Array<ContentfulPostBodyTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPostBodyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPostBodyTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPostConnection = {
  __typename?: 'ContentfulPostConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostEdge>;
  nodes: Array<ContentfulPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPostGroupConnection>;
};


export type ContentfulPostConnectionDistinctArgs = {
  field: ContentfulPostFieldsEnum;
};


export type ContentfulPostConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPostFieldsEnum;
};

export type ContentfulPostEdge = {
  __typename?: 'ContentfulPostEdge';
  next?: Maybe<ContentfulPost>;
  node: ContentfulPost;
  previous?: Maybe<ContentfulPost>;
};

export enum ContentfulPostFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Title = 'title',
  Slug = 'slug',
  Date = 'date',
  Description = 'description',
  CategoryId = 'category___id',
  CategoryParentId = 'category___parent___id',
  CategoryParentParentId = 'category___parent___parent___id',
  CategoryParentParentChildren = 'category___parent___parent___children',
  CategoryParentChildren = 'category___parent___children',
  CategoryParentChildrenId = 'category___parent___children___id',
  CategoryParentChildrenChildren = 'category___parent___children___children',
  CategoryParentInternalContent = 'category___parent___internal___content',
  CategoryParentInternalContentDigest = 'category___parent___internal___contentDigest',
  CategoryParentInternalDescription = 'category___parent___internal___description',
  CategoryParentInternalFieldOwners = 'category___parent___internal___fieldOwners',
  CategoryParentInternalIgnoreType = 'category___parent___internal___ignoreType',
  CategoryParentInternalMediaType = 'category___parent___internal___mediaType',
  CategoryParentInternalOwner = 'category___parent___internal___owner',
  CategoryParentInternalType = 'category___parent___internal___type',
  CategoryChildren = 'category___children',
  CategoryChildrenId = 'category___children___id',
  CategoryChildrenParentId = 'category___children___parent___id',
  CategoryChildrenParentChildren = 'category___children___parent___children',
  CategoryChildrenChildren = 'category___children___children',
  CategoryChildrenChildrenId = 'category___children___children___id',
  CategoryChildrenChildrenChildren = 'category___children___children___children',
  CategoryChildrenInternalContent = 'category___children___internal___content',
  CategoryChildrenInternalContentDigest = 'category___children___internal___contentDigest',
  CategoryChildrenInternalDescription = 'category___children___internal___description',
  CategoryChildrenInternalFieldOwners = 'category___children___internal___fieldOwners',
  CategoryChildrenInternalIgnoreType = 'category___children___internal___ignoreType',
  CategoryChildrenInternalMediaType = 'category___children___internal___mediaType',
  CategoryChildrenInternalOwner = 'category___children___internal___owner',
  CategoryChildrenInternalType = 'category___children___internal___type',
  CategoryInternalContent = 'category___internal___content',
  CategoryInternalContentDigest = 'category___internal___contentDigest',
  CategoryInternalDescription = 'category___internal___description',
  CategoryInternalFieldOwners = 'category___internal___fieldOwners',
  CategoryInternalIgnoreType = 'category___internal___ignoreType',
  CategoryInternalMediaType = 'category___internal___mediaType',
  CategoryInternalOwner = 'category___internal___owner',
  CategoryInternalType = 'category___internal___type',
  CategoryName = 'category___name',
  CategorySlug = 'category___slug',
  CategorySpaceId = 'category___spaceId',
  CategoryContentfulId = 'category___contentful_id',
  CategoryCreatedAt = 'category___createdAt',
  CategoryUpdatedAt = 'category___updatedAt',
  CategorySysRevision = 'category___sys___revision',
  CategoryNodeLocale = 'category___node_locale',
  CategoryPost = 'category___post',
  CategoryPostId = 'category___post___id',
  CategoryPostParentId = 'category___post___parent___id',
  CategoryPostParentChildren = 'category___post___parent___children',
  CategoryPostChildren = 'category___post___children',
  CategoryPostChildrenId = 'category___post___children___id',
  CategoryPostChildrenChildren = 'category___post___children___children',
  CategoryPostInternalContent = 'category___post___internal___content',
  CategoryPostInternalContentDigest = 'category___post___internal___contentDigest',
  CategoryPostInternalDescription = 'category___post___internal___description',
  CategoryPostInternalFieldOwners = 'category___post___internal___fieldOwners',
  CategoryPostInternalIgnoreType = 'category___post___internal___ignoreType',
  CategoryPostInternalMediaType = 'category___post___internal___mediaType',
  CategoryPostInternalOwner = 'category___post___internal___owner',
  CategoryPostInternalType = 'category___post___internal___type',
  CategoryPostTitle = 'category___post___title',
  CategoryPostSlug = 'category___post___slug',
  CategoryPostDate = 'category___post___date',
  CategoryPostDescription = 'category___post___description',
  CategoryPostCategoryId = 'category___post___category___id',
  CategoryPostCategoryChildren = 'category___post___category___children',
  CategoryPostCategoryName = 'category___post___category___name',
  CategoryPostCategorySlug = 'category___post___category___slug',
  CategoryPostCategorySpaceId = 'category___post___category___spaceId',
  CategoryPostCategoryContentfulId = 'category___post___category___contentful_id',
  CategoryPostCategoryCreatedAt = 'category___post___category___createdAt',
  CategoryPostCategoryUpdatedAt = 'category___post___category___updatedAt',
  CategoryPostCategoryNodeLocale = 'category___post___category___node_locale',
  CategoryPostCategoryPost = 'category___post___category___post',
  CategoryPostTags = 'category___post___tags',
  CategoryPostTagsId = 'category___post___tags___id',
  CategoryPostTagsChildren = 'category___post___tags___children',
  CategoryPostTagsName = 'category___post___tags___name',
  CategoryPostTagsSlug = 'category___post___tags___slug',
  CategoryPostTagsPost = 'category___post___tags___post',
  CategoryPostTagsSpaceId = 'category___post___tags___spaceId',
  CategoryPostTagsContentfulId = 'category___post___tags___contentful_id',
  CategoryPostTagsCreatedAt = 'category___post___tags___createdAt',
  CategoryPostTagsUpdatedAt = 'category___post___tags___updatedAt',
  CategoryPostTagsNodeLocale = 'category___post___tags___node_locale',
  CategoryPostBodyId = 'category___post___body___id',
  CategoryPostBodyChildren = 'category___post___body___children',
  CategoryPostBodyBody = 'category___post___body___body',
  CategoryPostSpaceId = 'category___post___spaceId',
  CategoryPostContentfulId = 'category___post___contentful_id',
  CategoryPostCreatedAt = 'category___post___createdAt',
  CategoryPostUpdatedAt = 'category___post___updatedAt',
  CategoryPostSysRevision = 'category___post___sys___revision',
  CategoryPostNodeLocale = 'category___post___node_locale',
  CategoryPostUpdate = 'category___post___update',
  CategoryPostChildContentfulPostBodyTextNodeId = 'category___post___childContentfulPostBodyTextNode___id',
  CategoryPostChildContentfulPostBodyTextNodeChildren = 'category___post___childContentfulPostBodyTextNode___children',
  CategoryPostChildContentfulPostBodyTextNodeBody = 'category___post___childContentfulPostBodyTextNode___body',
  Tags = 'tags',
  TagsId = 'tags___id',
  TagsParentId = 'tags___parent___id',
  TagsParentParentId = 'tags___parent___parent___id',
  TagsParentParentChildren = 'tags___parent___parent___children',
  TagsParentChildren = 'tags___parent___children',
  TagsParentChildrenId = 'tags___parent___children___id',
  TagsParentChildrenChildren = 'tags___parent___children___children',
  TagsParentInternalContent = 'tags___parent___internal___content',
  TagsParentInternalContentDigest = 'tags___parent___internal___contentDigest',
  TagsParentInternalDescription = 'tags___parent___internal___description',
  TagsParentInternalFieldOwners = 'tags___parent___internal___fieldOwners',
  TagsParentInternalIgnoreType = 'tags___parent___internal___ignoreType',
  TagsParentInternalMediaType = 'tags___parent___internal___mediaType',
  TagsParentInternalOwner = 'tags___parent___internal___owner',
  TagsParentInternalType = 'tags___parent___internal___type',
  TagsChildren = 'tags___children',
  TagsChildrenId = 'tags___children___id',
  TagsChildrenParentId = 'tags___children___parent___id',
  TagsChildrenParentChildren = 'tags___children___parent___children',
  TagsChildrenChildren = 'tags___children___children',
  TagsChildrenChildrenId = 'tags___children___children___id',
  TagsChildrenChildrenChildren = 'tags___children___children___children',
  TagsChildrenInternalContent = 'tags___children___internal___content',
  TagsChildrenInternalContentDigest = 'tags___children___internal___contentDigest',
  TagsChildrenInternalDescription = 'tags___children___internal___description',
  TagsChildrenInternalFieldOwners = 'tags___children___internal___fieldOwners',
  TagsChildrenInternalIgnoreType = 'tags___children___internal___ignoreType',
  TagsChildrenInternalMediaType = 'tags___children___internal___mediaType',
  TagsChildrenInternalOwner = 'tags___children___internal___owner',
  TagsChildrenInternalType = 'tags___children___internal___type',
  TagsInternalContent = 'tags___internal___content',
  TagsInternalContentDigest = 'tags___internal___contentDigest',
  TagsInternalDescription = 'tags___internal___description',
  TagsInternalFieldOwners = 'tags___internal___fieldOwners',
  TagsInternalIgnoreType = 'tags___internal___ignoreType',
  TagsInternalMediaType = 'tags___internal___mediaType',
  TagsInternalOwner = 'tags___internal___owner',
  TagsInternalType = 'tags___internal___type',
  TagsName = 'tags___name',
  TagsSlug = 'tags___slug',
  TagsPost = 'tags___post',
  TagsPostId = 'tags___post___id',
  TagsPostParentId = 'tags___post___parent___id',
  TagsPostParentChildren = 'tags___post___parent___children',
  TagsPostChildren = 'tags___post___children',
  TagsPostChildrenId = 'tags___post___children___id',
  TagsPostChildrenChildren = 'tags___post___children___children',
  TagsPostInternalContent = 'tags___post___internal___content',
  TagsPostInternalContentDigest = 'tags___post___internal___contentDigest',
  TagsPostInternalDescription = 'tags___post___internal___description',
  TagsPostInternalFieldOwners = 'tags___post___internal___fieldOwners',
  TagsPostInternalIgnoreType = 'tags___post___internal___ignoreType',
  TagsPostInternalMediaType = 'tags___post___internal___mediaType',
  TagsPostInternalOwner = 'tags___post___internal___owner',
  TagsPostInternalType = 'tags___post___internal___type',
  TagsPostTitle = 'tags___post___title',
  TagsPostSlug = 'tags___post___slug',
  TagsPostDate = 'tags___post___date',
  TagsPostDescription = 'tags___post___description',
  TagsPostCategoryId = 'tags___post___category___id',
  TagsPostCategoryChildren = 'tags___post___category___children',
  TagsPostCategoryName = 'tags___post___category___name',
  TagsPostCategorySlug = 'tags___post___category___slug',
  TagsPostCategorySpaceId = 'tags___post___category___spaceId',
  TagsPostCategoryContentfulId = 'tags___post___category___contentful_id',
  TagsPostCategoryCreatedAt = 'tags___post___category___createdAt',
  TagsPostCategoryUpdatedAt = 'tags___post___category___updatedAt',
  TagsPostCategoryNodeLocale = 'tags___post___category___node_locale',
  TagsPostCategoryPost = 'tags___post___category___post',
  TagsPostTags = 'tags___post___tags',
  TagsPostTagsId = 'tags___post___tags___id',
  TagsPostTagsChildren = 'tags___post___tags___children',
  TagsPostTagsName = 'tags___post___tags___name',
  TagsPostTagsSlug = 'tags___post___tags___slug',
  TagsPostTagsPost = 'tags___post___tags___post',
  TagsPostTagsSpaceId = 'tags___post___tags___spaceId',
  TagsPostTagsContentfulId = 'tags___post___tags___contentful_id',
  TagsPostTagsCreatedAt = 'tags___post___tags___createdAt',
  TagsPostTagsUpdatedAt = 'tags___post___tags___updatedAt',
  TagsPostTagsNodeLocale = 'tags___post___tags___node_locale',
  TagsPostBodyId = 'tags___post___body___id',
  TagsPostBodyChildren = 'tags___post___body___children',
  TagsPostBodyBody = 'tags___post___body___body',
  TagsPostSpaceId = 'tags___post___spaceId',
  TagsPostContentfulId = 'tags___post___contentful_id',
  TagsPostCreatedAt = 'tags___post___createdAt',
  TagsPostUpdatedAt = 'tags___post___updatedAt',
  TagsPostSysRevision = 'tags___post___sys___revision',
  TagsPostNodeLocale = 'tags___post___node_locale',
  TagsPostUpdate = 'tags___post___update',
  TagsPostChildContentfulPostBodyTextNodeId = 'tags___post___childContentfulPostBodyTextNode___id',
  TagsPostChildContentfulPostBodyTextNodeChildren = 'tags___post___childContentfulPostBodyTextNode___children',
  TagsPostChildContentfulPostBodyTextNodeBody = 'tags___post___childContentfulPostBodyTextNode___body',
  TagsSpaceId = 'tags___spaceId',
  TagsContentfulId = 'tags___contentful_id',
  TagsCreatedAt = 'tags___createdAt',
  TagsUpdatedAt = 'tags___updatedAt',
  TagsSysRevision = 'tags___sys___revision',
  TagsNodeLocale = 'tags___node_locale',
  BodyId = 'body___id',
  BodyParentId = 'body___parent___id',
  BodyParentParentId = 'body___parent___parent___id',
  BodyParentParentChildren = 'body___parent___parent___children',
  BodyParentChildren = 'body___parent___children',
  BodyParentChildrenId = 'body___parent___children___id',
  BodyParentChildrenChildren = 'body___parent___children___children',
  BodyParentInternalContent = 'body___parent___internal___content',
  BodyParentInternalContentDigest = 'body___parent___internal___contentDigest',
  BodyParentInternalDescription = 'body___parent___internal___description',
  BodyParentInternalFieldOwners = 'body___parent___internal___fieldOwners',
  BodyParentInternalIgnoreType = 'body___parent___internal___ignoreType',
  BodyParentInternalMediaType = 'body___parent___internal___mediaType',
  BodyParentInternalOwner = 'body___parent___internal___owner',
  BodyParentInternalType = 'body___parent___internal___type',
  BodyChildren = 'body___children',
  BodyChildrenId = 'body___children___id',
  BodyChildrenParentId = 'body___children___parent___id',
  BodyChildrenParentChildren = 'body___children___parent___children',
  BodyChildrenChildren = 'body___children___children',
  BodyChildrenChildrenId = 'body___children___children___id',
  BodyChildrenChildrenChildren = 'body___children___children___children',
  BodyChildrenInternalContent = 'body___children___internal___content',
  BodyChildrenInternalContentDigest = 'body___children___internal___contentDigest',
  BodyChildrenInternalDescription = 'body___children___internal___description',
  BodyChildrenInternalFieldOwners = 'body___children___internal___fieldOwners',
  BodyChildrenInternalIgnoreType = 'body___children___internal___ignoreType',
  BodyChildrenInternalMediaType = 'body___children___internal___mediaType',
  BodyChildrenInternalOwner = 'body___children___internal___owner',
  BodyChildrenInternalType = 'body___children___internal___type',
  BodyInternalContent = 'body___internal___content',
  BodyInternalContentDigest = 'body___internal___contentDigest',
  BodyInternalDescription = 'body___internal___description',
  BodyInternalFieldOwners = 'body___internal___fieldOwners',
  BodyInternalIgnoreType = 'body___internal___ignoreType',
  BodyInternalMediaType = 'body___internal___mediaType',
  BodyInternalOwner = 'body___internal___owner',
  BodyInternalType = 'body___internal___type',
  BodyBody = 'body___body',
  BodyChildMarkdownRemarkId = 'body___childMarkdownRemark___id',
  BodyChildMarkdownRemarkFrontmatterTitle = 'body___childMarkdownRemark___frontmatter___title',
  BodyChildMarkdownRemarkFrontmatterDate = 'body___childMarkdownRemark___frontmatter___date',
  BodyChildMarkdownRemarkFrontmatterUpdate = 'body___childMarkdownRemark___frontmatter___update',
  BodyChildMarkdownRemarkFrontmatterDescription = 'body___childMarkdownRemark___frontmatter___description',
  BodyChildMarkdownRemarkFrontmatterCategory = 'body___childMarkdownRemark___frontmatter___category',
  BodyChildMarkdownRemarkFrontmatterTags = 'body___childMarkdownRemark___frontmatter___tags',
  BodyChildMarkdownRemarkFrontmatterSlug = 'body___childMarkdownRemark___frontmatter___slug',
  BodyChildMarkdownRemarkExcerpt = 'body___childMarkdownRemark___excerpt',
  BodyChildMarkdownRemarkRawMarkdownBody = 'body___childMarkdownRemark___rawMarkdownBody',
  BodyChildMarkdownRemarkFieldsCollection = 'body___childMarkdownRemark___fields___collection',
  BodyChildMarkdownRemarkFieldsSlug = 'body___childMarkdownRemark___fields___slug',
  BodyChildMarkdownRemarkFileAbsolutePath = 'body___childMarkdownRemark___fileAbsolutePath',
  BodyChildMarkdownRemarkHtml = 'body___childMarkdownRemark___html',
  BodyChildMarkdownRemarkHtmlAst = 'body___childMarkdownRemark___htmlAst',
  BodyChildMarkdownRemarkExcerptAst = 'body___childMarkdownRemark___excerptAst',
  BodyChildMarkdownRemarkHeadings = 'body___childMarkdownRemark___headings',
  BodyChildMarkdownRemarkHeadingsId = 'body___childMarkdownRemark___headings___id',
  BodyChildMarkdownRemarkHeadingsValue = 'body___childMarkdownRemark___headings___value',
  BodyChildMarkdownRemarkHeadingsDepth = 'body___childMarkdownRemark___headings___depth',
  BodyChildMarkdownRemarkTimeToRead = 'body___childMarkdownRemark___timeToRead',
  BodyChildMarkdownRemarkTableOfContents = 'body___childMarkdownRemark___tableOfContents',
  BodyChildMarkdownRemarkWordCountParagraphs = 'body___childMarkdownRemark___wordCount___paragraphs',
  BodyChildMarkdownRemarkWordCountSentences = 'body___childMarkdownRemark___wordCount___sentences',
  BodyChildMarkdownRemarkWordCountWords = 'body___childMarkdownRemark___wordCount___words',
  BodyChildMarkdownRemarkParentId = 'body___childMarkdownRemark___parent___id',
  BodyChildMarkdownRemarkParentChildren = 'body___childMarkdownRemark___parent___children',
  BodyChildMarkdownRemarkChildren = 'body___childMarkdownRemark___children',
  BodyChildMarkdownRemarkChildrenId = 'body___childMarkdownRemark___children___id',
  BodyChildMarkdownRemarkChildrenChildren = 'body___childMarkdownRemark___children___children',
  BodyChildMarkdownRemarkInternalContent = 'body___childMarkdownRemark___internal___content',
  BodyChildMarkdownRemarkInternalContentDigest = 'body___childMarkdownRemark___internal___contentDigest',
  BodyChildMarkdownRemarkInternalDescription = 'body___childMarkdownRemark___internal___description',
  BodyChildMarkdownRemarkInternalFieldOwners = 'body___childMarkdownRemark___internal___fieldOwners',
  BodyChildMarkdownRemarkInternalIgnoreType = 'body___childMarkdownRemark___internal___ignoreType',
  BodyChildMarkdownRemarkInternalMediaType = 'body___childMarkdownRemark___internal___mediaType',
  BodyChildMarkdownRemarkInternalOwner = 'body___childMarkdownRemark___internal___owner',
  BodyChildMarkdownRemarkInternalType = 'body___childMarkdownRemark___internal___type',
  SpaceId = 'spaceId',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysContentfulId = 'sys___contentType___sys___contentful_id',
  NodeLocale = 'node_locale',
  Update = 'update',
  ChildContentfulPostBodyTextNodeId = 'childContentfulPostBodyTextNode___id',
  ChildContentfulPostBodyTextNodeParentId = 'childContentfulPostBodyTextNode___parent___id',
  ChildContentfulPostBodyTextNodeParentParentId = 'childContentfulPostBodyTextNode___parent___parent___id',
  ChildContentfulPostBodyTextNodeParentParentChildren = 'childContentfulPostBodyTextNode___parent___parent___children',
  ChildContentfulPostBodyTextNodeParentChildren = 'childContentfulPostBodyTextNode___parent___children',
  ChildContentfulPostBodyTextNodeParentChildrenId = 'childContentfulPostBodyTextNode___parent___children___id',
  ChildContentfulPostBodyTextNodeParentChildrenChildren = 'childContentfulPostBodyTextNode___parent___children___children',
  ChildContentfulPostBodyTextNodeParentInternalContent = 'childContentfulPostBodyTextNode___parent___internal___content',
  ChildContentfulPostBodyTextNodeParentInternalContentDigest = 'childContentfulPostBodyTextNode___parent___internal___contentDigest',
  ChildContentfulPostBodyTextNodeParentInternalDescription = 'childContentfulPostBodyTextNode___parent___internal___description',
  ChildContentfulPostBodyTextNodeParentInternalFieldOwners = 'childContentfulPostBodyTextNode___parent___internal___fieldOwners',
  ChildContentfulPostBodyTextNodeParentInternalIgnoreType = 'childContentfulPostBodyTextNode___parent___internal___ignoreType',
  ChildContentfulPostBodyTextNodeParentInternalMediaType = 'childContentfulPostBodyTextNode___parent___internal___mediaType',
  ChildContentfulPostBodyTextNodeParentInternalOwner = 'childContentfulPostBodyTextNode___parent___internal___owner',
  ChildContentfulPostBodyTextNodeParentInternalType = 'childContentfulPostBodyTextNode___parent___internal___type',
  ChildContentfulPostBodyTextNodeChildren = 'childContentfulPostBodyTextNode___children',
  ChildContentfulPostBodyTextNodeChildrenId = 'childContentfulPostBodyTextNode___children___id',
  ChildContentfulPostBodyTextNodeChildrenParentId = 'childContentfulPostBodyTextNode___children___parent___id',
  ChildContentfulPostBodyTextNodeChildrenParentChildren = 'childContentfulPostBodyTextNode___children___parent___children',
  ChildContentfulPostBodyTextNodeChildrenChildren = 'childContentfulPostBodyTextNode___children___children',
  ChildContentfulPostBodyTextNodeChildrenChildrenId = 'childContentfulPostBodyTextNode___children___children___id',
  ChildContentfulPostBodyTextNodeChildrenChildrenChildren = 'childContentfulPostBodyTextNode___children___children___children',
  ChildContentfulPostBodyTextNodeChildrenInternalContent = 'childContentfulPostBodyTextNode___children___internal___content',
  ChildContentfulPostBodyTextNodeChildrenInternalContentDigest = 'childContentfulPostBodyTextNode___children___internal___contentDigest',
  ChildContentfulPostBodyTextNodeChildrenInternalDescription = 'childContentfulPostBodyTextNode___children___internal___description',
  ChildContentfulPostBodyTextNodeChildrenInternalFieldOwners = 'childContentfulPostBodyTextNode___children___internal___fieldOwners',
  ChildContentfulPostBodyTextNodeChildrenInternalIgnoreType = 'childContentfulPostBodyTextNode___children___internal___ignoreType',
  ChildContentfulPostBodyTextNodeChildrenInternalMediaType = 'childContentfulPostBodyTextNode___children___internal___mediaType',
  ChildContentfulPostBodyTextNodeChildrenInternalOwner = 'childContentfulPostBodyTextNode___children___internal___owner',
  ChildContentfulPostBodyTextNodeChildrenInternalType = 'childContentfulPostBodyTextNode___children___internal___type',
  ChildContentfulPostBodyTextNodeInternalContent = 'childContentfulPostBodyTextNode___internal___content',
  ChildContentfulPostBodyTextNodeInternalContentDigest = 'childContentfulPostBodyTextNode___internal___contentDigest',
  ChildContentfulPostBodyTextNodeInternalDescription = 'childContentfulPostBodyTextNode___internal___description',
  ChildContentfulPostBodyTextNodeInternalFieldOwners = 'childContentfulPostBodyTextNode___internal___fieldOwners',
  ChildContentfulPostBodyTextNodeInternalIgnoreType = 'childContentfulPostBodyTextNode___internal___ignoreType',
  ChildContentfulPostBodyTextNodeInternalMediaType = 'childContentfulPostBodyTextNode___internal___mediaType',
  ChildContentfulPostBodyTextNodeInternalOwner = 'childContentfulPostBodyTextNode___internal___owner',
  ChildContentfulPostBodyTextNodeInternalType = 'childContentfulPostBodyTextNode___internal___type',
  ChildContentfulPostBodyTextNodeBody = 'childContentfulPostBodyTextNode___body',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkId = 'childContentfulPostBodyTextNode___childMarkdownRemark___id',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkFrontmatterTitle = 'childContentfulPostBodyTextNode___childMarkdownRemark___frontmatter___title',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkFrontmatterDate = 'childContentfulPostBodyTextNode___childMarkdownRemark___frontmatter___date',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkFrontmatterUpdate = 'childContentfulPostBodyTextNode___childMarkdownRemark___frontmatter___update',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkFrontmatterDescription = 'childContentfulPostBodyTextNode___childMarkdownRemark___frontmatter___description',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkFrontmatterCategory = 'childContentfulPostBodyTextNode___childMarkdownRemark___frontmatter___category',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkFrontmatterTags = 'childContentfulPostBodyTextNode___childMarkdownRemark___frontmatter___tags',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkFrontmatterSlug = 'childContentfulPostBodyTextNode___childMarkdownRemark___frontmatter___slug',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkExcerpt = 'childContentfulPostBodyTextNode___childMarkdownRemark___excerpt',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkRawMarkdownBody = 'childContentfulPostBodyTextNode___childMarkdownRemark___rawMarkdownBody',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkFieldsCollection = 'childContentfulPostBodyTextNode___childMarkdownRemark___fields___collection',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkFieldsSlug = 'childContentfulPostBodyTextNode___childMarkdownRemark___fields___slug',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkFileAbsolutePath = 'childContentfulPostBodyTextNode___childMarkdownRemark___fileAbsolutePath',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkHtml = 'childContentfulPostBodyTextNode___childMarkdownRemark___html',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkHtmlAst = 'childContentfulPostBodyTextNode___childMarkdownRemark___htmlAst',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkExcerptAst = 'childContentfulPostBodyTextNode___childMarkdownRemark___excerptAst',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkHeadings = 'childContentfulPostBodyTextNode___childMarkdownRemark___headings',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkHeadingsId = 'childContentfulPostBodyTextNode___childMarkdownRemark___headings___id',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkHeadingsValue = 'childContentfulPostBodyTextNode___childMarkdownRemark___headings___value',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkHeadingsDepth = 'childContentfulPostBodyTextNode___childMarkdownRemark___headings___depth',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkTimeToRead = 'childContentfulPostBodyTextNode___childMarkdownRemark___timeToRead',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkTableOfContents = 'childContentfulPostBodyTextNode___childMarkdownRemark___tableOfContents',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkWordCountParagraphs = 'childContentfulPostBodyTextNode___childMarkdownRemark___wordCount___paragraphs',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkWordCountSentences = 'childContentfulPostBodyTextNode___childMarkdownRemark___wordCount___sentences',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkWordCountWords = 'childContentfulPostBodyTextNode___childMarkdownRemark___wordCount___words',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkParentId = 'childContentfulPostBodyTextNode___childMarkdownRemark___parent___id',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkParentChildren = 'childContentfulPostBodyTextNode___childMarkdownRemark___parent___children',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkChildren = 'childContentfulPostBodyTextNode___childMarkdownRemark___children',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkChildrenId = 'childContentfulPostBodyTextNode___childMarkdownRemark___children___id',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkChildrenChildren = 'childContentfulPostBodyTextNode___childMarkdownRemark___children___children',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkInternalContent = 'childContentfulPostBodyTextNode___childMarkdownRemark___internal___content',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkInternalContentDigest = 'childContentfulPostBodyTextNode___childMarkdownRemark___internal___contentDigest',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkInternalDescription = 'childContentfulPostBodyTextNode___childMarkdownRemark___internal___description',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkInternalFieldOwners = 'childContentfulPostBodyTextNode___childMarkdownRemark___internal___fieldOwners',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkInternalIgnoreType = 'childContentfulPostBodyTextNode___childMarkdownRemark___internal___ignoreType',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkInternalMediaType = 'childContentfulPostBodyTextNode___childMarkdownRemark___internal___mediaType',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkInternalOwner = 'childContentfulPostBodyTextNode___childMarkdownRemark___internal___owner',
  ChildContentfulPostBodyTextNodeChildMarkdownRemarkInternalType = 'childContentfulPostBodyTextNode___childMarkdownRemark___internal___type'
}

export type ContentfulPostFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  category?: Maybe<ContentfulCategoryFilterInput>;
  tags?: Maybe<ContentfulTagsFilterListInput>;
  body?: Maybe<ContentfulPostBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  update?: Maybe<DateQueryOperatorInput>;
  childContentfulPostBodyTextNode?: Maybe<ContentfulPostBodyTextNodeFilterInput>;
};

export type ContentfulPostFilterListInput = {
  elemMatch?: Maybe<ContentfulPostFilterInput>;
};

export type ContentfulPostGroupConnection = {
  __typename?: 'ContentfulPostGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPostEdge>;
  nodes: Array<ContentfulPost>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPostSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPostFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPostSys = {
  __typename?: 'ContentfulPostSys';
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPostSysContentType>;
};

export type ContentfulPostSysContentType = {
  __typename?: 'ContentfulPostSysContentType';
  sys?: Maybe<ContentfulPostSysContentTypeSys>;
};

export type ContentfulPostSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPostSysContentTypeSysFilterInput>;
};

export type ContentfulPostSysContentTypeSys = {
  __typename?: 'ContentfulPostSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulPostSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPostSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPostSysContentTypeFilterInput>;
};

export type ContentfulResize = {
  __typename?: 'ContentfulResize';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  __typename?: 'ContentfulResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSizes = {
  __typename?: 'ContentfulSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulTags = Node & {
  __typename?: 'ContentfulTags';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  post?: Maybe<Array<Maybe<ContentfulPost>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulTagsSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulTagsCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulTagsUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulTagsConnection = {
  __typename?: 'ContentfulTagsConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTagsEdge>;
  nodes: Array<ContentfulTags>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulTagsGroupConnection>;
};


export type ContentfulTagsConnectionDistinctArgs = {
  field: ContentfulTagsFieldsEnum;
};


export type ContentfulTagsConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulTagsFieldsEnum;
};

export type ContentfulTagsEdge = {
  __typename?: 'ContentfulTagsEdge';
  next?: Maybe<ContentfulTags>;
  node: ContentfulTags;
  previous?: Maybe<ContentfulTags>;
};

export enum ContentfulTagsFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  Slug = 'slug',
  Post = 'post',
  PostId = 'post___id',
  PostParentId = 'post___parent___id',
  PostParentParentId = 'post___parent___parent___id',
  PostParentParentChildren = 'post___parent___parent___children',
  PostParentChildren = 'post___parent___children',
  PostParentChildrenId = 'post___parent___children___id',
  PostParentChildrenChildren = 'post___parent___children___children',
  PostParentInternalContent = 'post___parent___internal___content',
  PostParentInternalContentDigest = 'post___parent___internal___contentDigest',
  PostParentInternalDescription = 'post___parent___internal___description',
  PostParentInternalFieldOwners = 'post___parent___internal___fieldOwners',
  PostParentInternalIgnoreType = 'post___parent___internal___ignoreType',
  PostParentInternalMediaType = 'post___parent___internal___mediaType',
  PostParentInternalOwner = 'post___parent___internal___owner',
  PostParentInternalType = 'post___parent___internal___type',
  PostChildren = 'post___children',
  PostChildrenId = 'post___children___id',
  PostChildrenParentId = 'post___children___parent___id',
  PostChildrenParentChildren = 'post___children___parent___children',
  PostChildrenChildren = 'post___children___children',
  PostChildrenChildrenId = 'post___children___children___id',
  PostChildrenChildrenChildren = 'post___children___children___children',
  PostChildrenInternalContent = 'post___children___internal___content',
  PostChildrenInternalContentDigest = 'post___children___internal___contentDigest',
  PostChildrenInternalDescription = 'post___children___internal___description',
  PostChildrenInternalFieldOwners = 'post___children___internal___fieldOwners',
  PostChildrenInternalIgnoreType = 'post___children___internal___ignoreType',
  PostChildrenInternalMediaType = 'post___children___internal___mediaType',
  PostChildrenInternalOwner = 'post___children___internal___owner',
  PostChildrenInternalType = 'post___children___internal___type',
  PostInternalContent = 'post___internal___content',
  PostInternalContentDigest = 'post___internal___contentDigest',
  PostInternalDescription = 'post___internal___description',
  PostInternalFieldOwners = 'post___internal___fieldOwners',
  PostInternalIgnoreType = 'post___internal___ignoreType',
  PostInternalMediaType = 'post___internal___mediaType',
  PostInternalOwner = 'post___internal___owner',
  PostInternalType = 'post___internal___type',
  PostTitle = 'post___title',
  PostSlug = 'post___slug',
  PostDate = 'post___date',
  PostDescription = 'post___description',
  PostCategoryId = 'post___category___id',
  PostCategoryParentId = 'post___category___parent___id',
  PostCategoryParentChildren = 'post___category___parent___children',
  PostCategoryChildren = 'post___category___children',
  PostCategoryChildrenId = 'post___category___children___id',
  PostCategoryChildrenChildren = 'post___category___children___children',
  PostCategoryInternalContent = 'post___category___internal___content',
  PostCategoryInternalContentDigest = 'post___category___internal___contentDigest',
  PostCategoryInternalDescription = 'post___category___internal___description',
  PostCategoryInternalFieldOwners = 'post___category___internal___fieldOwners',
  PostCategoryInternalIgnoreType = 'post___category___internal___ignoreType',
  PostCategoryInternalMediaType = 'post___category___internal___mediaType',
  PostCategoryInternalOwner = 'post___category___internal___owner',
  PostCategoryInternalType = 'post___category___internal___type',
  PostCategoryName = 'post___category___name',
  PostCategorySlug = 'post___category___slug',
  PostCategorySpaceId = 'post___category___spaceId',
  PostCategoryContentfulId = 'post___category___contentful_id',
  PostCategoryCreatedAt = 'post___category___createdAt',
  PostCategoryUpdatedAt = 'post___category___updatedAt',
  PostCategorySysRevision = 'post___category___sys___revision',
  PostCategoryNodeLocale = 'post___category___node_locale',
  PostCategoryPost = 'post___category___post',
  PostCategoryPostId = 'post___category___post___id',
  PostCategoryPostChildren = 'post___category___post___children',
  PostCategoryPostTitle = 'post___category___post___title',
  PostCategoryPostSlug = 'post___category___post___slug',
  PostCategoryPostDate = 'post___category___post___date',
  PostCategoryPostDescription = 'post___category___post___description',
  PostCategoryPostTags = 'post___category___post___tags',
  PostCategoryPostSpaceId = 'post___category___post___spaceId',
  PostCategoryPostContentfulId = 'post___category___post___contentful_id',
  PostCategoryPostCreatedAt = 'post___category___post___createdAt',
  PostCategoryPostUpdatedAt = 'post___category___post___updatedAt',
  PostCategoryPostNodeLocale = 'post___category___post___node_locale',
  PostCategoryPostUpdate = 'post___category___post___update',
  PostTags = 'post___tags',
  PostTagsId = 'post___tags___id',
  PostTagsParentId = 'post___tags___parent___id',
  PostTagsParentChildren = 'post___tags___parent___children',
  PostTagsChildren = 'post___tags___children',
  PostTagsChildrenId = 'post___tags___children___id',
  PostTagsChildrenChildren = 'post___tags___children___children',
  PostTagsInternalContent = 'post___tags___internal___content',
  PostTagsInternalContentDigest = 'post___tags___internal___contentDigest',
  PostTagsInternalDescription = 'post___tags___internal___description',
  PostTagsInternalFieldOwners = 'post___tags___internal___fieldOwners',
  PostTagsInternalIgnoreType = 'post___tags___internal___ignoreType',
  PostTagsInternalMediaType = 'post___tags___internal___mediaType',
  PostTagsInternalOwner = 'post___tags___internal___owner',
  PostTagsInternalType = 'post___tags___internal___type',
  PostTagsName = 'post___tags___name',
  PostTagsSlug = 'post___tags___slug',
  PostTagsPost = 'post___tags___post',
  PostTagsPostId = 'post___tags___post___id',
  PostTagsPostChildren = 'post___tags___post___children',
  PostTagsPostTitle = 'post___tags___post___title',
  PostTagsPostSlug = 'post___tags___post___slug',
  PostTagsPostDate = 'post___tags___post___date',
  PostTagsPostDescription = 'post___tags___post___description',
  PostTagsPostTags = 'post___tags___post___tags',
  PostTagsPostSpaceId = 'post___tags___post___spaceId',
  PostTagsPostContentfulId = 'post___tags___post___contentful_id',
  PostTagsPostCreatedAt = 'post___tags___post___createdAt',
  PostTagsPostUpdatedAt = 'post___tags___post___updatedAt',
  PostTagsPostNodeLocale = 'post___tags___post___node_locale',
  PostTagsPostUpdate = 'post___tags___post___update',
  PostTagsSpaceId = 'post___tags___spaceId',
  PostTagsContentfulId = 'post___tags___contentful_id',
  PostTagsCreatedAt = 'post___tags___createdAt',
  PostTagsUpdatedAt = 'post___tags___updatedAt',
  PostTagsSysRevision = 'post___tags___sys___revision',
  PostTagsNodeLocale = 'post___tags___node_locale',
  PostBodyId = 'post___body___id',
  PostBodyParentId = 'post___body___parent___id',
  PostBodyParentChildren = 'post___body___parent___children',
  PostBodyChildren = 'post___body___children',
  PostBodyChildrenId = 'post___body___children___id',
  PostBodyChildrenChildren = 'post___body___children___children',
  PostBodyInternalContent = 'post___body___internal___content',
  PostBodyInternalContentDigest = 'post___body___internal___contentDigest',
  PostBodyInternalDescription = 'post___body___internal___description',
  PostBodyInternalFieldOwners = 'post___body___internal___fieldOwners',
  PostBodyInternalIgnoreType = 'post___body___internal___ignoreType',
  PostBodyInternalMediaType = 'post___body___internal___mediaType',
  PostBodyInternalOwner = 'post___body___internal___owner',
  PostBodyInternalType = 'post___body___internal___type',
  PostBodyBody = 'post___body___body',
  PostBodyChildMarkdownRemarkId = 'post___body___childMarkdownRemark___id',
  PostBodyChildMarkdownRemarkExcerpt = 'post___body___childMarkdownRemark___excerpt',
  PostBodyChildMarkdownRemarkRawMarkdownBody = 'post___body___childMarkdownRemark___rawMarkdownBody',
  PostBodyChildMarkdownRemarkFileAbsolutePath = 'post___body___childMarkdownRemark___fileAbsolutePath',
  PostBodyChildMarkdownRemarkHtml = 'post___body___childMarkdownRemark___html',
  PostBodyChildMarkdownRemarkHtmlAst = 'post___body___childMarkdownRemark___htmlAst',
  PostBodyChildMarkdownRemarkExcerptAst = 'post___body___childMarkdownRemark___excerptAst',
  PostBodyChildMarkdownRemarkHeadings = 'post___body___childMarkdownRemark___headings',
  PostBodyChildMarkdownRemarkTimeToRead = 'post___body___childMarkdownRemark___timeToRead',
  PostBodyChildMarkdownRemarkTableOfContents = 'post___body___childMarkdownRemark___tableOfContents',
  PostBodyChildMarkdownRemarkChildren = 'post___body___childMarkdownRemark___children',
  PostSpaceId = 'post___spaceId',
  PostContentfulId = 'post___contentful_id',
  PostCreatedAt = 'post___createdAt',
  PostUpdatedAt = 'post___updatedAt',
  PostSysRevision = 'post___sys___revision',
  PostNodeLocale = 'post___node_locale',
  PostUpdate = 'post___update',
  PostChildContentfulPostBodyTextNodeId = 'post___childContentfulPostBodyTextNode___id',
  PostChildContentfulPostBodyTextNodeParentId = 'post___childContentfulPostBodyTextNode___parent___id',
  PostChildContentfulPostBodyTextNodeParentChildren = 'post___childContentfulPostBodyTextNode___parent___children',
  PostChildContentfulPostBodyTextNodeChildren = 'post___childContentfulPostBodyTextNode___children',
  PostChildContentfulPostBodyTextNodeChildrenId = 'post___childContentfulPostBodyTextNode___children___id',
  PostChildContentfulPostBodyTextNodeChildrenChildren = 'post___childContentfulPostBodyTextNode___children___children',
  PostChildContentfulPostBodyTextNodeInternalContent = 'post___childContentfulPostBodyTextNode___internal___content',
  PostChildContentfulPostBodyTextNodeInternalContentDigest = 'post___childContentfulPostBodyTextNode___internal___contentDigest',
  PostChildContentfulPostBodyTextNodeInternalDescription = 'post___childContentfulPostBodyTextNode___internal___description',
  PostChildContentfulPostBodyTextNodeInternalFieldOwners = 'post___childContentfulPostBodyTextNode___internal___fieldOwners',
  PostChildContentfulPostBodyTextNodeInternalIgnoreType = 'post___childContentfulPostBodyTextNode___internal___ignoreType',
  PostChildContentfulPostBodyTextNodeInternalMediaType = 'post___childContentfulPostBodyTextNode___internal___mediaType',
  PostChildContentfulPostBodyTextNodeInternalOwner = 'post___childContentfulPostBodyTextNode___internal___owner',
  PostChildContentfulPostBodyTextNodeInternalType = 'post___childContentfulPostBodyTextNode___internal___type',
  PostChildContentfulPostBodyTextNodeBody = 'post___childContentfulPostBodyTextNode___body',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkId = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___id',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkExcerpt = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___excerpt',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkRawMarkdownBody = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___rawMarkdownBody',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkFileAbsolutePath = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___fileAbsolutePath',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkHtml = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___html',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkHtmlAst = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___htmlAst',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkExcerptAst = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___excerptAst',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkHeadings = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___headings',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkTimeToRead = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___timeToRead',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkTableOfContents = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___tableOfContents',
  PostChildContentfulPostBodyTextNodeChildMarkdownRemarkChildren = 'post___childContentfulPostBodyTextNode___childMarkdownRemark___children',
  SpaceId = 'spaceId',
  ContentfulId = 'contentful_id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SysContentTypeSysContentfulId = 'sys___contentType___sys___contentful_id',
  NodeLocale = 'node_locale'
}

export type ContentfulTagsFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  post?: Maybe<ContentfulPostFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulTagsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulTagsFilterListInput = {
  elemMatch?: Maybe<ContentfulTagsFilterInput>;
};

export type ContentfulTagsGroupConnection = {
  __typename?: 'ContentfulTagsGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulTagsEdge>;
  nodes: Array<ContentfulTags>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulTagsSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulTagsFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulTagsSys = {
  __typename?: 'ContentfulTagsSys';
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulTagsSysContentType>;
};

export type ContentfulTagsSysContentType = {
  __typename?: 'ContentfulTagsSysContentType';
  sys?: Maybe<ContentfulTagsSysContentTypeSys>;
};

export type ContentfulTagsSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulTagsSysContentTypeSysFilterInput>;
};

export type ContentfulTagsSysContentTypeSys = {
  __typename?: 'ContentfulTagsSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulTagsSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulTagsSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulTagsSysContentTypeFilterInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
  ChildMarkdownRemarkFrontmatterUpdate = 'childMarkdownRemark___frontmatter___update',
  ChildMarkdownRemarkFrontmatterDescription = 'childMarkdownRemark___frontmatter___description',
  ChildMarkdownRemarkFrontmatterCategory = 'childMarkdownRemark___frontmatter___category',
  ChildMarkdownRemarkFrontmatterTags = 'childMarkdownRemark___frontmatter___tags',
  ChildMarkdownRemarkFrontmatterSlug = 'childMarkdownRemark___frontmatter___slug',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFieldsCollection = 'childMarkdownRemark___fields___collection',
  ChildMarkdownRemarkFieldsSlug = 'childMarkdownRemark___fields___slug',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum ImageResizingBehavior {
  NoChange = 'NO_CHANGE',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  Pad = 'PAD',
  /** Crop a part of the original image to match the specified size. */
  Crop = 'CROP',
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  Fill = 'FILL',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  Thumb = 'THUMB',
  /** Scale the image regardless of the original aspect ratio. */
  Scale = 'SCALE'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN'
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fields?: Maybe<MarkdownRemarkFields>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
  __typename?: 'MarkdownRemarkFields';
  collection?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterDate = 'frontmatter___date',
  FrontmatterUpdate = 'frontmatter___update',
  FrontmatterDescription = 'frontmatter___description',
  FrontmatterCategory = 'frontmatter___category',
  FrontmatterTags = 'frontmatter___tags',
  FrontmatterSlug = 'frontmatter___slug',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FieldsCollection = 'fields___collection',
  FieldsSlug = 'fields___slug',
  FileAbsolutePath = 'fileAbsolutePath',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsId = 'headings___id',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MarkdownRemarkFieldsFilterInput = {
  collection?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter';
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  update?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Scalars['String']>;
};


export type MarkdownRemarkFrontmatterDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  update?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  category?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  contentfulPostBodyTextNode?: Maybe<ContentfulPostBodyTextNode>;
  allContentfulPostBodyTextNode: ContentfulPostBodyTextNodeConnection;
  contentfulPageBodyTextNode?: Maybe<ContentfulPageBodyTextNode>;
  allContentfulPageBodyTextNode: ContentfulPageBodyTextNodeConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulTags?: Maybe<ContentfulTags>;
  allContentfulTags: ContentfulTagsConnection;
  contentfulPost?: Maybe<ContentfulPost>;
  allContentfulPost: ContentfulPostConnection;
  contentfulGlobalMenu?: Maybe<ContentfulGlobalMenu>;
  allContentfulGlobalMenu: ContentfulGlobalMenuConnection;
  contentfulPage?: Maybe<ContentfulPage>;
  allContentfulPage: ContentfulPageConnection;
  contentfulCategory?: Maybe<ContentfulCategory>;
  allContentfulCategory: ContentfulCategoryConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPostBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulPostBodyTextNodeArgs = {
  filter?: Maybe<ContentfulPostBodyTextNodeFilterInput>;
  sort?: Maybe<ContentfulPostBodyTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPageBodyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  body?: Maybe<StringQueryOperatorInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllContentfulPageBodyTextNodeArgs = {
  filter?: Maybe<ContentfulPageBodyTextNodeFilterInput>;
  sort?: Maybe<ContentfulPageBodyTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulTagsArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  post?: Maybe<ContentfulPostFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulTagsSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulTagsArgs = {
  filter?: Maybe<ContentfulTagsFilterInput>;
  sort?: Maybe<ContentfulTagsSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPostArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  category?: Maybe<ContentfulCategoryFilterInput>;
  tags?: Maybe<ContentfulTagsFilterListInput>;
  body?: Maybe<ContentfulPostBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPostSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  update?: Maybe<DateQueryOperatorInput>;
  childContentfulPostBodyTextNode?: Maybe<ContentfulPostBodyTextNodeFilterInput>;
};


export type QueryAllContentfulPostArgs = {
  filter?: Maybe<ContentfulPostFilterInput>;
  sort?: Maybe<ContentfulPostSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulGlobalMenuArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  order?: Maybe<IntQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulGlobalMenuSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  ref?: Maybe<ContentfulPageFilterInput>;
};


export type QueryAllContentfulGlobalMenuArgs = {
  filter?: Maybe<ContentfulGlobalMenuFilterInput>;
  sort?: Maybe<ContentfulGlobalMenuSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPageArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<ContentfulPageBodyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  globalmenu?: Maybe<ContentfulGlobalMenuFilterListInput>;
  childContentfulPageBodyTextNode?: Maybe<ContentfulPageBodyTextNodeFilterInput>;
};


export type QueryAllContentfulPageArgs = {
  filter?: Maybe<ContentfulPageFilterInput>;
  sort?: Maybe<ContentfulPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulCategoryArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCategorySysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  post?: Maybe<ContentfulPostFilterListInput>;
};


export type QueryAllContentfulCategoryArgs = {
  filter?: Maybe<ContentfulCategoryFilterInput>;
  sort?: Maybe<ContentfulCategorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Date']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type SitePortArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataAuthor = 'siteMetadata___author',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<DateQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  slug?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  prev?: Maybe<SitePageContextPrev>;
  next?: Maybe<SitePageContextNext>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  numPages?: Maybe<Scalars['Int']>;
  currentPage?: Maybe<Scalars['Int']>;
  tag?: Maybe<Scalars['String']>;
  pathBase?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  category?: Maybe<StringQueryOperatorInput>;
  prev?: Maybe<SitePageContextPrevFilterInput>;
  next?: Maybe<SitePageContextNextFilterInput>;
  limit?: Maybe<IntQueryOperatorInput>;
  skip?: Maybe<IntQueryOperatorInput>;
  numPages?: Maybe<IntQueryOperatorInput>;
  currentPage?: Maybe<IntQueryOperatorInput>;
  tag?: Maybe<StringQueryOperatorInput>;
  pathBase?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNext = {
  __typename?: 'SitePageContextNext';
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  category?: Maybe<SitePageContextNextCategory>;
};

export type SitePageContextNextCategory = {
  __typename?: 'SitePageContextNextCategory';
  name?: Maybe<Scalars['String']>;
};

export type SitePageContextNextCategoryFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextNextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  category?: Maybe<SitePageContextNextCategoryFilterInput>;
};

export type SitePageContextPrev = {
  __typename?: 'SitePageContextPrev';
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  category?: Maybe<SitePageContextPrevCategory>;
};

export type SitePageContextPrevCategory = {
  __typename?: 'SitePageContextPrevCategory';
  name?: Maybe<Scalars['String']>;
};

export type SitePageContextPrevCategoryFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
};

export type SitePageContextPrevFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  category?: Maybe<SitePageContextPrevCategoryFilterInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextSlug = 'context___slug',
  ContextCategory = 'context___category',
  ContextPrevSlug = 'context___prev___slug',
  ContextPrevTitle = 'context___prev___title',
  ContextPrevCategoryName = 'context___prev___category___name',
  ContextNextSlug = 'context___next___slug',
  ContextNextTitle = 'context___next___title',
  ContextNextCategoryName = 'context___next___category___name',
  ContextLimit = 'context___limit',
  ContextSkip = 'context___skip',
  ContextNumPages = 'context___numPages',
  ContextCurrentPage = 'context___currentPage',
  ContextTag = 'context___tag',
  ContextPathBase = 'context___pathBase',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
  PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
  PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
  PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
  PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
  PluginCreatorPluginOptionsPluginsNodeApIs = 'pluginCreator___pluginOptions___plugins___nodeAPIs',
  PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  PluginCreatorPluginOptionsPluginsSsrApIs = 'pluginCreator___pluginOptions___plugins___ssrAPIs',
  PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  PluginCreatorPluginOptionsTrackingId = 'pluginCreator___pluginOptions___trackingId',
  PluginCreatorPluginOptionsPublisherId = 'pluginCreator___pluginOptions___publisherId',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcons = 'pluginCreator___pluginOptions___icons',
  PluginCreatorPluginOptionsIconsSrc = 'pluginCreator___pluginOptions___icons___src',
  PluginCreatorPluginOptionsIconsSizes = 'pluginCreator___pluginOptions___icons___sizes',
  PluginCreatorPluginOptionsIconsType = 'pluginCreator___pluginOptions___icons___type',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsSpaceId = 'pluginCreator___pluginOptions___spaceId',
  PluginCreatorPluginOptionsAccessToken = 'pluginCreator___pluginOptions___accessToken',
  PluginCreatorPluginOptionsHost = 'pluginCreator___pluginOptions___host',
  PluginCreatorPluginOptionsClassPrefix = 'pluginCreator___pluginOptions___classPrefix',
  PluginCreatorPluginOptionsShowLineNumbers = 'pluginCreator___pluginOptions___showLineNumbers',
  PluginCreatorPluginOptionsNoInlineHighlight = 'pluginCreator___pluginOptions___noInlineHighlight',
  PluginCreatorPluginOptionsMaxWidth = 'pluginCreator___pluginOptions___maxWidth',
  PluginCreatorPluginOptionsWithWebp = 'pluginCreator___pluginOptions___withWebp',
  PluginCreatorPluginOptionsLoading = 'pluginCreator___pluginOptions___loading',
  PluginCreatorPluginOptionsWrapperStyle = 'pluginCreator___pluginOptions___wrapperStyle',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___backgroundColor',
  PluginCreatorPluginOptionsLinkImagesToOriginal = 'pluginCreator___pluginOptions___linkImagesToOriginal',
  PluginCreatorPluginOptionsShowCaptions = 'pluginCreator___pluginOptions___showCaptions',
  PluginCreatorPluginOptionsPathPrefix = 'pluginCreator___pluginOptions___pathPrefix',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPlugins = 'pluginOptions___plugins',
  PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
  PluginOptionsPluginsId = 'pluginOptions___plugins___id',
  PluginOptionsPluginsName = 'pluginOptions___plugins___name',
  PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
  PluginOptionsPluginsPluginOptionsClassPrefix = 'pluginOptions___plugins___pluginOptions___classPrefix',
  PluginOptionsPluginsPluginOptionsShowLineNumbers = 'pluginOptions___plugins___pluginOptions___showLineNumbers',
  PluginOptionsPluginsPluginOptionsNoInlineHighlight = 'pluginOptions___plugins___pluginOptions___noInlineHighlight',
  PluginOptionsPluginsPluginOptionsMaxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
  PluginOptionsPluginsPluginOptionsWithWebp = 'pluginOptions___plugins___pluginOptions___withWebp',
  PluginOptionsPluginsPluginOptionsLoading = 'pluginOptions___plugins___pluginOptions___loading',
  PluginOptionsPluginsPluginOptionsWrapperStyle = 'pluginOptions___plugins___pluginOptions___wrapperStyle',
  PluginOptionsPluginsPluginOptionsBackgroundColor = 'pluginOptions___plugins___pluginOptions___backgroundColor',
  PluginOptionsPluginsPluginOptionsLinkImagesToOriginal = 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal',
  PluginOptionsPluginsPluginOptionsShowCaptions = 'pluginOptions___plugins___pluginOptions___showCaptions',
  PluginOptionsPluginsPluginOptionsPathPrefix = 'pluginOptions___plugins___pluginOptions___pathPrefix',
  PluginOptionsPluginsNodeApIs = 'pluginOptions___plugins___nodeAPIs',
  PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
  PluginOptionsPluginsSsrApIs = 'pluginOptions___plugins___ssrAPIs',
  PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  PluginOptionsTrackingId = 'pluginOptions___trackingId',
  PluginOptionsPublisherId = 'pluginOptions___publisherId',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcons = 'pluginOptions___icons',
  PluginOptionsIconsSrc = 'pluginOptions___icons___src',
  PluginOptionsIconsSizes = 'pluginOptions___icons___sizes',
  PluginOptionsIconsType = 'pluginOptions___icons___type',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsSpaceId = 'pluginOptions___spaceId',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsHost = 'pluginOptions___host',
  PluginOptionsClassPrefix = 'pluginOptions___classPrefix',
  PluginOptionsShowLineNumbers = 'pluginOptions___showLineNumbers',
  PluginOptionsNoInlineHighlight = 'pluginOptions___noInlineHighlight',
  PluginOptionsBlocksNoteClasses = 'pluginOptions___blocks___note___classes',
  PluginOptionsBlocksNoteTitle = 'pluginOptions___blocks___note___title',
  PluginOptionsBlocksDangerClasses = 'pluginOptions___blocks___danger___classes',
  PluginOptionsBlocksDangerTitle = 'pluginOptions___blocks___danger___title',
  PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
  PluginOptionsWithWebp = 'pluginOptions___withWebp',
  PluginOptionsLoading = 'pluginOptions___loading',
  PluginOptionsWrapperStyle = 'pluginOptions___wrapperStyle',
  PluginOptionsBackgroundColor = 'pluginOptions___backgroundColor',
  PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  PluginOptionsShowCaptions = 'pluginOptions___showCaptions',
  PluginOptionsPathPrefix = 'pluginOptions___pathPrefix',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  trackingId?: Maybe<Scalars['String']>;
  publisherId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icons?: Maybe<Array<Maybe<SitePluginPluginOptionsIcons>>>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  path?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  classPrefix?: Maybe<Scalars['String']>;
  showLineNumbers?: Maybe<Scalars['Boolean']>;
  noInlineHighlight?: Maybe<Scalars['Boolean']>;
  blocks?: Maybe<SitePluginPluginOptionsBlocks>;
  maxWidth?: Maybe<Scalars['Int']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  wrapperStyle?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsBlocks = {
  __typename?: 'SitePluginPluginOptionsBlocks';
  note?: Maybe<SitePluginPluginOptionsBlocksNote>;
  danger?: Maybe<SitePluginPluginOptionsBlocksDanger>;
};

export type SitePluginPluginOptionsBlocksDanger = {
  __typename?: 'SitePluginPluginOptionsBlocksDanger';
  classes?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsBlocksDangerFilterInput = {
  classes?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsBlocksFilterInput = {
  note?: Maybe<SitePluginPluginOptionsBlocksNoteFilterInput>;
  danger?: Maybe<SitePluginPluginOptionsBlocksDangerFilterInput>;
};

export type SitePluginPluginOptionsBlocksNote = {
  __typename?: 'SitePluginPluginOptionsBlocksNote';
  classes?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsBlocksNoteFilterInput = {
  classes?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  trackingId?: Maybe<StringQueryOperatorInput>;
  publisherId?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icons?: Maybe<SitePluginPluginOptionsIconsFilterListInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  classPrefix?: Maybe<StringQueryOperatorInput>;
  showLineNumbers?: Maybe<BooleanQueryOperatorInput>;
  noInlineHighlight?: Maybe<BooleanQueryOperatorInput>;
  blocks?: Maybe<SitePluginPluginOptionsBlocksFilterInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  wrapperStyle?: Maybe<StringQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsIcons = {
  __typename?: 'SitePluginPluginOptionsIcons';
  src?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsIconsFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsIconsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsIconsFilterInput>;
};

export type SitePluginPluginOptionsPlugins = {
  __typename?: 'SitePluginPluginOptionsPlugins';
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  __typename?: 'SitePluginPluginOptionsPluginsPluginOptions';
  classPrefix?: Maybe<Scalars['String']>;
  showLineNumbers?: Maybe<Scalars['Boolean']>;
  noInlineHighlight?: Maybe<Scalars['Boolean']>;
  blocks?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsBlocks>;
  maxWidth?: Maybe<Scalars['Int']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  wrapperStyle?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsBlocks = {
  __typename?: 'SitePluginPluginOptionsPluginsPluginOptionsBlocks';
  note?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsBlocksNote>;
  danger?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsBlocksDanger>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsBlocksDanger = {
  __typename?: 'SitePluginPluginOptionsPluginsPluginOptionsBlocksDanger';
  classes?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsBlocksDangerFilterInput = {
  classes?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsBlocksFilterInput = {
  note?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsBlocksNoteFilterInput>;
  danger?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsBlocksDangerFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsBlocksNote = {
  __typename?: 'SitePluginPluginOptionsPluginsPluginOptionsBlocksNote';
  classes?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsBlocksNoteFilterInput = {
  classes?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  classPrefix?: Maybe<StringQueryOperatorInput>;
  showLineNumbers?: Maybe<BooleanQueryOperatorInput>;
  noInlineHighlight?: Maybe<BooleanQueryOperatorInput>;
  blocks?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsBlocksFilterInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  wrapperStyle?: Maybe<StringQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type PagesTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type PagesTagsQuery = (
  { __typename?: 'Query' }
  & { cflTagsPost: (
    { __typename?: 'ContentfulPostConnection' }
    & { group: Array<(
      { __typename?: 'ContentfulPostGroupConnection' }
      & Pick<ContentfulPostGroupConnection, 'fieldValue' | 'totalCount'>
    )> }
  ) }
);

export type TempblogListQueryVariables = Exact<{
  skip: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type TempblogListQuery = (
  { __typename?: 'Query' }
  & { site?: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata?: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title'>
    )> }
  )>, allMarkdownRemark: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'excerpt'>
        & { fields?: Maybe<(
          { __typename?: 'MarkdownRemarkFields' }
          & Pick<MarkdownRemarkFields, 'slug'>
        )>, frontmatter?: Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<MarkdownRemarkFrontmatter, 'title' | 'date' | 'update' | 'description' | 'category' | 'tags'>
        )> }
      ) }
    )> }
  ), cflCategory: (
    { __typename?: 'ContentfulCategoryConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulCategoryEdge' }
      & { node: (
        { __typename?: 'ContentfulCategory' }
        & Pick<ContentfulCategory, 'name' | 'slug'>
      ) }
    )> }
  ) }
);

export type TempblogList2QueryVariables = Exact<{
  skip: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type TempblogList2Query = (
  { __typename?: 'Query' }
  & { site?: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata?: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title'>
    )> }
  )>, cfPosts: (
    { __typename?: 'ContentfulPostConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulPostEdge' }
      & { node: (
        { __typename?: 'ContentfulPost' }
        & Pick<ContentfulPost, 'slug' | 'title' | 'date' | 'update' | 'description'>
        & { category?: Maybe<(
          { __typename?: 'ContentfulCategory' }
          & Pick<ContentfulCategory, 'name' | 'slug'>
        )>, tags?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulTags' }
          & Pick<ContentfulTags, 'name' | 'slug'>
        )>>> }
      ) }
    )> }
  ), cflCategory: (
    { __typename?: 'ContentfulCategoryConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulCategoryEdge' }
      & { node: (
        { __typename?: 'ContentfulCategory' }
        & Pick<ContentfulCategory, 'name' | 'slug'>
      ) }
    )> }
  ) }
);

export type TempBlogPostQueryVariables = Exact<{
  slug: Scalars['String'];
  category: Scalars['String'];
}>;


export type TempBlogPostQuery = (
  { __typename?: 'Query' }
  & { markdownRemark?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & Pick<MarkdownRemark, 'htmlAst' | 'tableOfContents'>
    & { frontmatter?: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatter' }
      & Pick<MarkdownRemarkFrontmatter, 'title' | 'date' | 'update' | 'tags' | 'description'>
    )> }
  )>, cflCategory?: Maybe<(
    { __typename?: 'ContentfulCategory' }
    & Pick<ContentfulCategory, 'name' | 'slug'>
  )> }
);

export type TempBlogPost2QueryVariables = Exact<{
  slug: Scalars['String'];
  category: Scalars['String'];
}>;


export type TempBlogPost2Query = (
  { __typename?: 'Query' }
  & { cflPost?: Maybe<(
    { __typename?: 'ContentfulPost' }
    & Pick<ContentfulPost, 'title' | 'date' | 'update' | 'description'>
    & { category?: Maybe<(
      { __typename?: 'ContentfulCategory' }
      & Pick<ContentfulCategory, 'name' | 'slug'>
    )>, tags?: Maybe<Array<Maybe<(
      { __typename?: 'ContentfulTags' }
      & Pick<ContentfulTags, 'name' | 'slug'>
    )>>>, body?: Maybe<(
      { __typename?: 'contentfulPostBodyTextNode' }
      & { childMarkdownRemark?: Maybe<(
        { __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'htmlAst' | 'tableOfContents'>
      )> }
    )> }
  )>, cflCategory?: Maybe<(
    { __typename?: 'ContentfulCategory' }
    & Pick<ContentfulCategory, 'name' | 'slug'>
  )> }
);

export type TempCategoryQueryVariables = Exact<{
  category: Scalars['String'];
  limit: Scalars['Int'];
  skip: Scalars['Int'];
}>;


export type TempCategoryQuery = (
  { __typename?: 'Query' }
  & { allMarkdownRemark: (
    { __typename?: 'MarkdownRemarkConnection' }
    & Pick<MarkdownRemarkConnection, 'totalCount'>
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'excerpt'>
        & { fields?: Maybe<(
          { __typename?: 'MarkdownRemarkFields' }
          & Pick<MarkdownRemarkFields, 'slug'>
        )>, frontmatter?: Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<MarkdownRemarkFrontmatter, 'title' | 'date' | 'update' | 'tags' | 'description'>
        )> }
      ) }
    )> }
  ) }
);

export type TempCategory2QueryVariables = Exact<{
  category: Scalars['String'];
  limit: Scalars['Int'];
  skip: Scalars['Int'];
}>;


export type TempCategory2Query = (
  { __typename?: 'Query' }
  & { cflPosts: (
    { __typename?: 'ContentfulPostConnection' }
    & Pick<ContentfulPostConnection, 'totalCount'>
    & { edges: Array<(
      { __typename?: 'ContentfulPostEdge' }
      & { node: (
        { __typename?: 'ContentfulPost' }
        & Pick<ContentfulPost, 'slug' | 'title' | 'date' | 'update' | 'description'>
        & { tags?: Maybe<Array<Maybe<(
          { __typename?: 'ContentfulTags' }
          & Pick<ContentfulTags, 'name' | 'slug'>
        )>>> }
      ) }
    )> }
  ), allMarkdownRemark: (
    { __typename?: 'MarkdownRemarkConnection' }
    & Pick<MarkdownRemarkConnection, 'totalCount'>
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'excerpt'>
        & { fields?: Maybe<(
          { __typename?: 'MarkdownRemarkFields' }
          & Pick<MarkdownRemarkFields, 'slug'>
        )>, frontmatter?: Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<MarkdownRemarkFrontmatter, 'title' | 'date' | 'update' | 'tags' | 'description'>
        )> }
      ) }
    )> }
  ) }
);

export type TempPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type TempPageQuery = (
  { __typename?: 'Query' }
  & { markdownRemark?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & Pick<MarkdownRemark, 'htmlAst' | 'excerpt'>
    & { frontmatter?: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatter' }
      & Pick<MarkdownRemarkFrontmatter, 'title' | 'description'>
    )> }
  )>, cflPage?: Maybe<(
    { __typename?: 'ContentfulPage' }
    & Pick<ContentfulPage, 'title' | 'description'>
    & { body?: Maybe<(
      { __typename?: 'contentfulPageBodyTextNode' }
      & { childMarkdownRemark?: Maybe<(
        { __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'htmlAst'>
      )> }
    )> }
  )> }
);

export type TempTagsQueryVariables = Exact<{
  tag?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
}>;


export type TempTagsQuery = (
  { __typename?: 'Query' }
  & { allMarkdownRemark: (
    { __typename?: 'MarkdownRemarkConnection' }
    & Pick<MarkdownRemarkConnection, 'totalCount'>
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'excerpt'>
        & { fields?: Maybe<(
          { __typename?: 'MarkdownRemarkFields' }
          & Pick<MarkdownRemarkFields, 'slug'>
        )>, frontmatter?: Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<MarkdownRemarkFrontmatter, 'title' | 'date' | 'update' | 'category' | 'description'>
        )> }
      ) }
    )> }
  ), cflCategory: (
    { __typename?: 'ContentfulCategoryConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulCategoryEdge' }
      & { node: (
        { __typename?: 'ContentfulCategory' }
        & Pick<ContentfulCategory, 'name' | 'slug'>
      ) }
    )> }
  ) }
);

export type TempTags2QueryVariables = Exact<{
  tag?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
}>;


export type TempTags2Query = (
  { __typename?: 'Query' }
  & { cflPosts: (
    { __typename?: 'ContentfulPostConnection' }
    & Pick<ContentfulPostConnection, 'totalCount'>
    & { edges: Array<(
      { __typename?: 'ContentfulPostEdge' }
      & { node: (
        { __typename?: 'ContentfulPost' }
        & Pick<ContentfulPost, 'slug' | 'title' | 'date' | 'update' | 'description'>
        & { category?: Maybe<(
          { __typename?: 'ContentfulCategory' }
          & Pick<ContentfulCategory, 'name' | 'slug'>
        )> }
      ) }
    )> }
  ), cflCategory: (
    { __typename?: 'ContentfulCategoryConnection' }
    & { edges: Array<(
      { __typename?: 'ContentfulCategoryEdge' }
      & { node: (
        { __typename?: 'ContentfulCategory' }
        & Pick<ContentfulCategory, 'name' | 'slug'>
      ) }
    )> }
  ) }
);
