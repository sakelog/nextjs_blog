---
title: "GraphQL Code Generatorのススメ！GatsbyJSのTypeScript化"
date: "2020-02-09 00:39:16"
update: ""
description: "GatsbyJSをTypeScript化しよう！と考えたとき、GraphQLで取得したクエリのタイプ情報指定は必須になります。今回はGraphQL Code Generatorを使って、簡単にタイプ情報を指定する方法をご紹介します。"
category: "技術"
tags: ["GatsbyJS","GraphQL"]
---

JavaScriptよりTypeScript使ったほうが良いよ、マジで！！！という声に押され、GatsbyJSで作成したブログのTypeScript化を進めています。

現時点、ソースコードの比率はこんな感じ。

![GatsbyJS TypeScript比率](img/2020-02-09/gatsby_typescript_ratio.png "gatsby_typescript_ratio.png")

中のソース直さなきゃ～とか、gatsby-nodeもTypeScriptで扱えるようにしたい～等はありますが、ほぼTypeScriptになりました。

今回の記事はGatsbyJSでTypeScript化をするときはGraphQL Code Generatorを使うと便利ですよ、というご紹介です。

## なにができるの？GraphQL Code Generator

GraphQL Code Generatorでできることをズバリ一言で言い表すなら**GraphQLで取得した型を自動的に生成してTypeScriptで扱いやすくしてくれます**。

[GraphQL Code Generator](https://graphql-code-generator.com/)

TypeScriptの強みでもあり、めんどくさいな～ポイントでもある使用する型の指定。

GraphQL Code Generatorを使うと、自動で良い感じに生成してくれる。めっちゃ便利。

## 具体的な使い方ご紹介

GatsbyJSでGraphQL Code Generatorを使うための具体的な方法です。

順を追って見ていきましょう。

### 1.GraphQL Code Generatorのインストール

まずはGraphQL Code Generatorのインストールです。

下記コマンドを実行(yarn)。

```powershell
yarn add -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations
```

npmの場合は下記コマンドになります。

```powershell
npm install @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations --save-dev
```

### 2.codegen.ymlファイルの作成

インストールが完了したら、プロジェクトフォルダ直下に「**codegen.yml**」ファイルを作成します。

今回は下記の通り記述します。

```yml
overwrite: true
schema: "http://localhost:8000/___graphql"
documents:
  - "./src/**/*.{ts,tsx}"
generates:
  types/graphql-types.ts:
    plugins:
      - typescript
      - typescript-operations
```

|設定項目|説明|
|---|---|
|scheme|GraphQLのクエリを指定|
|documents|タイプ情報を取得したいクエリ記載ソースを指定。例えば上記の例だと、srcフォルダ内の「.ts」「.tsx」ソースに記載されているGraphQLクエリのソース情報を取得する|
|generates|タイプ情報の出力先|
|plugin|どの言語に合わせたタイプ情報を出力するか|

設定項目の詳細は[公式のドキュメント](https://graphql-code-generator.com/docs/getting-started/)にもまとまっています。

### 3.package.jsonにscriptの記述

ここまで設定すると、graphql-codegenコマンドを実行することで、GraphQLクエリのタイプ情報がcodegen.ymlのgeneratesに指定した出力先に出力されます。

graphql-codegenコマンドを実行するため、package.jsonにscriptを追加します。

※graphql-codegenコマンドは、@graphql-codegen/cliをローカルインストールした場合、手打ちで実行することができません。なのでscriptで実行します。

下記scriptを追加

```json
  "scripts": {
    "gql-codegen": "graphql-codegen --config codegen.yml"
  }
```

### 4.GraphQLクエリのタイプを出力する

では、GraphQLクエリのタイプを出力してみましょう。

`gatsby develop`コマンドを実行して、開発用のサーバーを立ち上げます。

サーバーが立ち上がったら、先ほど追加した`gql-codegen`を実行。

※yarnの場合

```powershell
yarn gql-codegen
```

※npmの場合

```powershell
npm gql-codegen
```

うまく行けば「types/graphql-types.ts」（generatesの指定先）にタイプ情報がずらーっと出力されます。

### 5.ソースからクエリのタイプを読む

無事にタイプ情報が出力されたら、ソースからクエリのタイプを読み込んでみましょう。

こんな感じでGraphQLのクエリを指定している場合、

```tsx
export const pageQuery = graphql`
  query TempPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        description
      }
      excerpt
    }
  }
`
```

**TempPageQuery**という名前でクエリのタイプ情報が出力されています。クエリ名（TempPage）＋Queryです。

```ts:title=graphql-types.ts
export type TempPageQuery = (
  { __typename?: 'Query' }
  & { markdownRemark: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & Pick<MarkdownRemark, 'htmlAst' | 'excerpt'>
    & { frontmatter: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatter' }
      & Pick<MarkdownRemarkFrontmatter, 'title' | 'description'>
    )> }
  )> }
);
```

タイプ情報をimportで読み込みます。

```tsx
import { TempPageQuery } from "../../types/graphql-types"
```

読み込んだタイプ情報をtype指定で紐付けします。こんな感じです。

```tsx
type Props = {
  data:TempPageQuery
}

const Page = ({ data }:Props) => {
  ……中略
}
……以下省略
```

[[note|注意点]]
| ソース上に指定しているクエリの名前が重複しているとエラーになるようです。
|
|GraphQL Code Generatorを使用する場合は、重複しないように指定してあげましょう。

## まとめ

今回は、GatsbyJSでTypeScript化するならGraphQL Code Generatorを合わせて使うのがおすすめだよ～というお話でした。

いかがでしたでしょうか。

個人的には、GraphQL書いて、タイプ情報も自分で指定して…となると二度手間になってしまうので、自動で生成してくれてとても助かります。

GraphQLの記述を変えた場合も`gql-codegen`を実行し直すだけです。

TypeScript化をすすめる中で、なぜTypeScriptが良いと言われているのか、なんとなく理解できてきました。まだしっかりと言語化できるまでに至っていないのですが……。

考えがまとまったらTypeScriptそのものについての記事も執筆したいと思っています。

今回はここまで。
