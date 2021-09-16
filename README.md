# nextjs_blog

※2021/9/16 ReadMe記載内容修正中

## 概要

ブログ[sake log](https://sake-log.website/)のソースコードです。

Next.js で Contentful の記事を API 取得してブログサイトに変換しています。

### 使用技術

- 言語：TypeScript, Sass
- ライブラリ：React.js
- フレームワーク：Next.js

### 参考

- Typescript <https://www.typescriptlang.org/ja/>
- Sass <https://sass-lang.com/>
- React.js <https://ja.reactjs.org/>
- Next.js <https://nextjs.org/docs/getting-started>

## 取り込み済みの機能

### ページネーション

一覧ページにページネーションを実装。

最初のページ・最後のページへのリンク、前後のページへのリンク、現在のページの表示

### 次の記事、前の記事へのリンク

記事詳細ページでは次の記事、前の記事へのリンクをつけています。

### Markdown

- 画像

  - Markdown 中の Contentful の画像を Next/Image で読込
  - クリックすると拡大した画像をモーダル表示

- CustomBlock に対応

  ```markdown
  [[note]]
  | 注釈 1
  | 注釈 2
  ```

  ↓

  ```react
  /* スタイル付けにmodule.cssを使用 */

  <div className={styles.note}>
      <p>注釈1</p>
      <p>注釈2</p>
  </div>
  ```

  タイトルにも対応しています。

  タイトルを指定する場合は`[[]]`内を` |`で区切ります。|の前後には半角スペース 1 文字ずつ必要です。

  ```markdown
  [[note | title]]
  | タイトル付き注釈
  ```

  ↓

  ```react
  <div className={styles.note}>
      <p className={styles.title}>title</p>
      <p>タイトル付き注釈</p>
  </div>
  ```

- `code`の Syntax ハイライト

  - 行数の表示

  - title 指定に対応

    ````markdown
    ​`言語の指定:title=hogehoge ​`
    ````

  - 特定行の強調表示

    ````markdown
    ​`tsx{2} if (hogehoge) { return fugafuga } ​`
    ````

  - インラインコードにも対応(言語指定がなければインラインコードとみなす)

- リンク

  - 外部リンクに自動で`rel="noopener noreferrer"`と`target="_blank"`を付与
  - 外部リンクの後ろにアイコンを付ける
  - 内部リンクを`next/link`に変換

### Preview 表示

Contentful の下書きの Preview 表示に対応

Contentful の Settings->Content Preview で URL を指定します。

`http://localhost:3000/api/preview?secret=CONTENTFUL_PREVIEW_SECRET&slug={entry.fields.slug}`

**CONTENTFUL_PREVIEW_SECRET**は env.local に設定した文字列と合わせてください。

参考：<https://github.com/vercel/next.js/tree/canary/examples/cms-contentful>

### Share Button

記事をシェアするボタンを入れています。

SNS のシェアボタンは[react-share](https://github.com/nygardk/react-share)で実装。

URL コピーボタンは[react-copy-to-clipboard](https://github.com/nkbt/react-copy-to-clipboard)と[Material UI](https://material-ui.com/)で実装

### 記事のスクロール位置に連動した TOC

参考: <https://github.com/Takumon/react-markdown-sync-toc>

## インストール手順

### 必要なもの

- node.js(v12.x.+)
- yarn(1.22.5+)

## 手順

1. リポジトリをクローンする

2. yarn install コマンドを実行

   ```shell
   yarn install
   ```

## 使用する際の注意点

### .env.local ファイルの作成

`.env.local`ファイルを使用して環境変数を読み込んでいます。

.env.local ファイルに指定している環境変数は下記のとおりです。

- CONTENTFUL_SPACE_ID=Contentful のスペース ID
- CONTENTFUL_ACCESS_TOKEN=Contentful の Delivery Access Token
- CONTENTFUL_PREVIEW_ACCESS_TOKEN=Contentful の Preview Access Token
- CONTENTFUL_PREVIEW_SECRET=任意の文字列 Contentful の PreviewURL の設定内容と合わせます
- FORMSPREE_ENDPOINT=FORMSPREE の ENDPOINT(https://～)
- GTM_ID=Google Tag Manager の ID

#### 参考

- [Authentication | Contentful](https://www.contentful.com/developers/docs/references/authentication/)
- [Formspree](https://formspree.io/)
- [タグマネージャーの設定とインストール](https://support.google.com/tagmanager/answer/6103696?hl=ja)

### config の設定

`src > components > config.tsx`に設定用のファイルを作成して、設定を読み込んでいます。

```tsx
export default {
  title: 'サイトのタイトル：meta情報に設定',
  author: 'プロフィールに表示する名前',
  description: 'サイトの説明:meta情報に設定',
  url: 'サイトのURL(最後の/を含む)',
  createAt: 'サイト作成日(YYYY-MM-DD形式で設定)',
  social: {
    twitter: 'Twitterアカウント名',
    github: 'githubアカウント名',
  },
  mediaQuery: {
    xs: 575,
    sm: 767,
    md: 991,
    lg: 1199,
  },
  themeColor: 'サイトのテーマカラー',
};
```

作成するサイトの情報に合わせて修正してください。

## 作者について

- 作成者:sake
- E-mail:sakelog.website@gmail.com
- Twitter:[@sake_engineer](https://twitter.com/sake_engineer)
- Web サイト:<https://sakeengineer.com/>
