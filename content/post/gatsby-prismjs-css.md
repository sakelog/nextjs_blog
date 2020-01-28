---
title: "【Gatsby】シンタックスハイライトのためのいい感じのCSS設定"
date: "2020-01-18 18:24:30"
description: "技術ブログなら必須？コードシンタックスハイライト機能。GatsbyJSでのCSS設定で苦労したので、CSS設定等をシェアします。"
category: "技術"
tags: ["GatsbyJS","Prism.js","CSS","SCSS","Markdown"]
---

技術ブログなら必須？コードシンタックスハイライト機能。

GatsbyJSでのCSS設定で苦労したので、CSS設定等をシェアします。

## プラグインのインストール

Gatsbyでコードシンタックスハイライトを設定するには、[PrismJS](https://prismjs.com/)を使います。

「[gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/)」というプラグインを使うと、Markdownの中のコード表記をいい感じにシンタックスハイライトしてくれます。

```shell
npm install --save gatsby-transformer-remark gatsby-remark-prismjs prismjs
```

場合に応じて、ソースのタイトルも表示したいので、「[gatsby-remark-code-titles](https://www.gatsbyjs.org/packages/gatsby-remark-code-titles/)」も合わせてインストールしておきます。

```shell
npm install gatsby-remark-code-titles --save-dev
```

## gatsby-config.jsの設定

インストールが完了したら、**gatsby-config.js**を修正しましょう。

Markdownの変換に関わるプラグインなので、**gatsby-transformer-remark**のプラグインとして設定してあげます。

**gatsby-remark-code-titles**は他のコードブロック系のプラグインの前に設定する…となっているので、gatsby-transformer-remarkの先頭に設定してあげると安心です。

こんな感じです。

```js:title=gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        'gatsby-remark-code-titles',
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: true,
            noInlineHighlight: false,
          },
        },
      ],
    },
  },
]
```

gatsby-remark-prismjsのオプションについてざっくり説明すると下記のとおりです。

|オプション名|説明|
|---|---|
|classPrefix|`<pre>`タグのclassにつけるprefix。基本は`laungage-`で良い|
|inlineCodeMarker|設定するとインラインコードにも言語に応じたハイライトをかけられる|
|aliases|設定すると、指定した言語を省略形で表記できる。`{ sh: "bash" }`など|
|showLineNumbers|`true`にすると、コードの行数が表示できる|
|noInlineHighlight|`true`にすると、インラインコードはハイライトしない|

細かい説明をすると長くなってしまうので、詳細は記事の最後におまけとしてまとめます。

## CSS設定

CSSの設定方法について、順番に見ていきます。

私の場合、**myprism.scss**というscssファイルを作成して、メインのscssファイルで読込をしているので、以降はその前提で。

### テーマのCSSを読み込む

```scss{numberLines: 1}
@import '../../node_modules/prismjs/themes/prism-tomorrow.css';
```

まず始めに、PrismJSのテーマを読み込みます。

[PrismJS](https://prismjs.com/)の公式ページで各テーマの表示を確認できるので、事前に確認して気に入ったものを選ぶと良いでしょう。

私は**TOMORROW NIGHT**というテーマにしました。

### 行数表示のCSSを読み込む

```scss{numberLines: 2}
@import '../../node_modules/prismjs/plugins/line-numbers/prism-line-numbers.css';
```

行数を表示させたい場合は、行数表示用のCSSを読み込みます。

単純に読み込むだけだと表示が崩れてしまうので、次に説明するCSSを設定して表示を修正しましょう。

### 強調表示の設定＋表示崩れの修正

```scss{numberLines: 3}
.gatsby-highlight {
    background-color: #2d2d2d;
    margin: 0.5em 0;
    padding: 1em;
    overflow: auto;
  }
  .gatsby-highlight pre[class*="language-"] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left;
    min-width: 100%;
  }
.gatsby-highlight-code-line {
    background-color: #545454;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #c1e4e9;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.8em;
  }
```

強調表示のレイアウトを指定します。ついでにレイアウト崩れ修正用の指定をしてあげます。

|クラス|説明|
|---|---|
|`gatsby-higlight`|コードブロックの外枠部分です。|
|`.gatsby-highlight pre[class*="language-"]`|コード表示エリアです。|
|`.gatsby-highlight-code-line`|強調表示行です。|
|`.gatsby-highlight pre[class*="language-"].line-numbers`|行数表示の設定です。表示エリアの確保をしています。|

### タイトル表示用のCSS設定

```scss{numberLines: 30}
  .gatsby-code-title {
    background: #666666;
    color: #ffffff;
    margin-bottom: -0.65em;
    padding: 0.7rem 1.05rem;
    font-size: 0.8em;
    line-height: 0.2;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-weight: 600;
    border-radius: 8px 8px 0 0;
    display: table;
  }
```

## 実際にMarkdownで書いてみよう

実際にMarkdownで表記してみるとこんな感じになります。

- 記述

```markdown{1}
    ```js{3}:title=sample.js
      const hogehoge = () => {
        return(
          <div>hogehoge</div>
        )
      }
    ```
```

- 出力

```js{3}:title=sample.js
  const hogehoge = () => {
    return(
      <div>hogehoge</div>
    )
  }
```

ポイント

- 一番最初に言語を指定
- `{}`で強調表示したい行を指定
- `:title=`で表示したいタイトルを指定

強調表示とタイトルの指定はなくても大丈夫です。

行数表示の開始行を変更することもできます。

- 記述

```markdown
    ```java{numberLines: 3}{5}
      const hogehoge2 = () => {
        return(
          <div>
            <p>hogehoge</p>
            <p>hogehoge2</p>
          </div>
        )
      }
    ```
```

- 出力

```java{numberLines: 3}{5}
  const hogehoge2 = () => {
    return(
      <div>
        <p>hogehoge</p>
        <p>hogehoge2</p>
      </div>
    )
  }
```

ポイント

- `{numberLines:}`で開始行を指定

ここまでできればGatsbyJSで作ったブログにソースコードを乗せる準備は完了です。お疲れさまでした！

以下はおまけです。

## おまけ：gatsby-remark-prismjsのオプションについて

ここから先はgatsby-remark-prismjsのオプションについて補足説明します。

### classPrefix

`<pre>`タグのclassにつけるprefixです。

PrismJSでは、「**laungage-言語名**」のクラスについてシンタックスハイライトをかけるため、基本的には`laungage-`で良いです。

### inlineCodeMarker

設定するとインラインコードにも言語に応じたシンタックスハイライトをかけられます。

```js:title=gatsby-config.js
inlineCodeMarker: "±",
```

と設定した場合、Markdownの中で下記のように記載します。

```text
`css±.some-class { background-color: red }`
```

上記の例は`.some-class { background-color: red }`をcssとして解釈します。
