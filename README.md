# sake log

## 概要

ブログ[sake log](https://sake-log.website/)のソースコードです。

Contentful × Gatsby × Netlifyで構成しています。

### 使用技術

* TypeScript
* Sass(scss)
* React.js
* GatsbyJS

## インストール手順

### 必要なもの

* node.js(v14.14.0)
* yarn(1.22.5+)

## 手順

1. リポジトリをクローンする

2. yarn installコマンドを実行

   ```shell
   yarn install
   ```

## 使用する際の注意点

### .envファイルの作成

**.envファイル**を使用して環境変数を読み込んでいます。

.envファイルに指定している環境変数は下記のとおりです。

* CFL_SPACE_ID => ContentfulのスペースID
* CFL_DELIVERY_API => ContentfulのDelivery API
* CFL_HOST => preview.contentful.com(開発環境) | cdn.contentful.com(本番環境)

参考：[Authentication | Contentful](https://www.contentful.com/developers/docs/references/authentication/)

### configの設定

`src > components > config.tsx`に設定用のファイルを作成して、設定を読み込んでいます。

```tsx
export default {
  title: 'sakelog',
  author: 'sake',
  description:
    'WEB系の技術を中心にした技術メモ置き場です。GatsbyJS・git・TypeScript',
  url: 'https://sake-log.website/',
  createAt: '2020-1-12',
  GTM_ID: 'GTM-N9SLS2F',
  social: {
    twitter: 'sake_engineer',
    github: 'sakelog',
  },
};
```

使用する方の情報に合わせて修正してください。

## 作者について

* 作成者:sake
* E-mail:sakelog.website@gmail.com
* Twitter:[@sake_engineer](https://twitter.com/sake_engineer)
* Webサイト:<https://sakeengineer.com/>
