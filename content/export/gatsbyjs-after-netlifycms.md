---
slug: gatsbyjs-after-netlifycms
title: GatsbyJSで作成したサイトに後からNetlify CMSを導入する方法
date: 2020-06-13 07:32
update: ""
description: GatsbyJSとNetlify
  CMS。ネットでもよく見る組み合わせですが、意外とスターターを使わず後から追加する方法の説明って見当たらないですよね。今回、スターターを使わず後から手動でNetlifyCMSを導入したので、その方法を説明します。
category: 技術
tags:
  - GatsbyJS
  - NetlifyCMS
---
静的ジェネレータでサイトを作って維持していくと、その内、中身のコンテンツの管理が問題になると思います。

コンテンツ管理問題を解決するためにはCMSの導入という手段があります。

GatsbyJSの場合、startarで簡単に導入できる**Netlify CMS**が有名です。

ただ、Web検索しても出てくるのは、startarを使って導入する方法ばかり……。

そうじゃないんだよ！　私が知りたいのはサイトを作った**後からNetlify CMSを導入する方法なんだ！**

ということで、今回は実際に、startarを使わずにGatsbyJSにNetlify CMSを導入したので、その方法を解説していきます。

* 参考サイト：[Add to Your Site | Netlify CMS | Open-Source Content Management System](https://www.netlifycms.org/docs/add-to-your-site/)

[[note]]
| 今回はGitHub連携をしている前提での記事になります。
|
| 公式サイトでは他にもBitbucket・GitLabと連携する方法が記載されています。参考にしてください。

## Netlifyの認証機能を有効にする

実際にNetlify CMSの設定に必要なファイルを作っていく前に、Netlify側で認証機能を有効にしましょう。

[[note]]
|ここでの作業はNetlify Identity widgetを使って認証する場合に必要です。
|
|Githubだけでログインできればいい！　という方は、ここは飛ばして、[config.ymlの作成方法](#configymlの作成方法)の[backendの指定](#backendの指定)のところを参考にしてください。

Netlifyにログインします。

### Git Gatewayを有効にする

NetlifyのSettings ＞ Identity ＞ Git Gatewayで、**Enable Git Gateway**をクリック。

![NetlifyでGit Gatewayの有効化](/img/upload/gatsbyjs_netlifycms_01.png "gatsbyjs_netlifycms_01.png")

### 招待した人しかログイン出来ないようにする

**Registration Settings**のEdit settingsから、**Invite only**を選択しましょう。

![招待した人しか管理画面にログインできないようにする](/img/upload/gatsbyjs_netlifycms_02.png "gatsbyjs_netlifycms_02.png")

**Netlify Identity widget**を埋め込みます。

Netlifyで、認証制にしたいサイトを選択 ＞ Settings ＞ Build & Deploy ＞Snippet Injectionから**Add Snippet**

下記コードを`</head>`の前に挿入します。

```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

![headタグ内にNetlify Identity Widgetのスニペットを追加する](/img/upload/gatsbyjs_netlifycms_03.png "gatsbyjs_netlifycms_03.png")

### CMSにログインするユーザーを招待する

Netlifyで、認証制にしたいサイトを選択 ＞ Identityから**Invite users**

招待したいユーザーのメールアドレスを入力してSend

メールが届くので、**Accept the Invite**をクリック

![届いたメールから招待を受ける](/img/upload/gatsbyjs_netlifycms_04.png "gatsbyjs_netlifycms_04.png")

パスワードを入力してSign Up

![パスワードを入力してSign Up](/img/upload/gatsbyjs_netlifycms_05.png "gatsbyjs_netlifycms_05.png")

ログインできました！

![Netlifyログイン完了](/img/upload/gatsbyjs_netlifycms_06.png "gatsbyjs_netlifycms_06.png")

次は、Netlify CMSの設定に必要なファイルを作っていきましょう。

## /static の下に設定ファイルを作成する

GatsbyJSの場合は、**/static**フォルダの下に、Netlify CMS設定用のファイルを追加します。

```text
/static
 └ admin
 　 ├ index.html
 　 └ config.yml
```

/staticフォルダの下に**admin**フォルダ、その下に**index.html**と**config.yml**を作成します。

| ファイル名      | 説明                    |
| ---------- | --------------------- |
| index.html | 管理ページを表示するのに必要なファイル   |
| config.yml | 管理ページ内の設定をするのに必要なファイル |

## index.htmlの作成方法

index.htmlは公式サイト記載の内容をコピーして作ります。

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager</title>
</head>
<body>
  <!-- Include the script that builds the page and powers Netlify CMS -->
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
</body>
</html>
```

## config.ymlの作成方法

### npmモジュールのインストール

config.ymlを作成する前に、GatsbyJSのリポジトリにNetlify CMSのnpmモジュールをインストールします。

```powershell
npm install netlify-cms --save-dev
```

もしくは

```powershell
yarn add netlify-cms --dev
```

このサイトの場合、config.ymlの中身はこんな感じになっています。

```yaml
backend:
  name: git-gateway
publish_mode: editorial_workflow
media_folder: 'content/post/img/upload'
public_folder: '/img/upload'
locale: 'ja'
collections:
  - name: 'post'
    label: 'Post'
    folder: 'content/post'
    create: true
    extension: 'md'
    slug: '{{fields.slug}}'
    fields:
      - { label: 'Slug', name: 'slug', widget: 'string' }
      - { label: 'Title', name: 'title', widget: 'string' }
      - {
          label: 'Date',
          name: 'date',
          widget: 'datetime',
          format: 'YYYY-MM-DD HH:mm',
        }
      - {
          label: 'Update',
          name: 'update',
          default: '',
          widget: 'datetime',
          format: 'YYYY-MM-DD HH:mm',
          required: false,
        }
      - {
          label: 'Description',
          name: 'description',
          widget: 'text',
          required: false,
        }
      - {
          label: 'Category',
          name: 'category',
          widget: 'relation',
          collection: 'categorylist',
          searchFields: 'name',
          valueField: 'name',
        }
      - {
          label: 'Tags',
          name: 'tags',
          widget: 'list',
          allow_add: true,
          minimize_collapsed: true,
          summary: '{{fields.tag}}',
          field: { label: Tag, name: tag, widget: 'string' },
        }
      - { label: 'Body', name: 'body', widget: 'markdown' }
  - name: 'page'
    label: 'Page'
    folder: 'content/page'
    create: true
    extension: 'md'
    slug: '{{fields.slug}}'
    fields:
      - { label: 'Slug', name: 'slug', widget: 'string' }
      - { label: 'Title', name: 'title', widget: 'string' }
      - {
          label: 'Date',
          name: 'date',
          widget: 'datetime',
          format: 'YYYY-MM-DD HH:mm',
        }
      - {
          label: 'Update',
          name: 'update',
          default: '',
          widget: 'datetime',
          format: 'YYYY-MM-DD HH:mm',
          required: false,
        }
      - {
          label: 'Description',
          name: 'description',
          widget: 'text',
          required: false,
        }
      - { label: 'Body', name: 'body', widget: 'markdown' }
  - name: 'categorylist'
    label: 'Category'
    identifier_field: name
    create: true
    extension: 'yml'
    folder: 'content/category'
    fields:
      - { label: 'Name', name: 'name', widget: 'string' }
      - { label: 'Description', name: 'description', widget: 'text', required: false}
```

順を追って説明していきます。

### backendの指定

```powershell
backend:
  name: git-gateway
```

backendを指定します。

指定方法によって、認証の仕方が変わってきます。

Netlify Identity widgetを使用する場合は、`name:git-gateway`を指定します。

GitHubでログインできれば良い場合は、下記のように指定します。

```yaml
backend:
name: github
repo: ユーザー名/レポジトリ名
```

### publish modeの指定(editorial_workflow)

```yaml
publish_mode: editorial_workflow
```

下書きを有効にするかの指定です。

**editorial_workflow**を指定すると、下の画像のように、かんばん方式で記事の状態を管理できます。

記事を公開できる状態になったら「準備完了」へステータスを移して公開しましょう。

![Netlify CMSのワークフロー画面 下書きの管理を行う](/img/upload/gatsbyjs_netlifycms_07.png "gatsbyjs_netlifycms_07.png")

### 画像フォルダの指定

```yaml
media_folder: 'content/post/img/upload'
public_folder: '/img/upload'
```

画像フォルダの指定は、`media_folder`と`public_folder`で行います。

* media_folder：実際に画像を保管するフォルダを指定（プロジェクトのルートフォルダからの相対パス）
* public_folder：記事中で画像を取得するときの相対パス

### collectionの指定(コンテンツ管理の単位)

collectionで、コンテンツ管理の単位を指定します。

記事やページを分けて管理したい場合や、カテゴリー一覧を管理する場合に使えます。

```yaml
collections:
  - name: 'post'
    label: 'Post'
    folder: 'content/post'
    create: true
    extension: 'md'
    slug: '{{fields.slug}}'
    fields:
      - { label: 'Slug', name: 'slug', widget: 'string' }
      - { label: 'Title', name: 'title', widget: 'string' }
      - {
          label: 'Date',
          name: 'date',
          widget: 'datetime',
          format: 'YYYY-MM-DD HH:mm',
        }
      - {
          label: 'Update',
          name: 'update',
          default: '',
          widget: 'datetime',
          format: 'YYYY-MM-DD HH:mm',
          required: false,
        }
      - {
          label: 'Description',
          name: 'description',
          widget: 'text',
          required: false,
        }
      - {
          label: 'Category',
          name: 'category',
          widget: 'relation',
          collection: 'categorylist',
          searchFields: 'name',
          valueField: 'name',
        }
      - {
          label: 'Tags',
          name: 'tags',
          widget: 'list',
          allow_add: true,
          minimize_collapsed: true,
          summary: '{{fields.tag}}',
          field: { label: Tag, name: tag, widget: 'string' },
        }
      - { label: 'Body', name: 'body', widget: 'markdown' }
```

それぞれの項目の詳細は下記の通り。

| 項目        | 説明                                                                                             |
| --------- | ---------------------------------------------------------------------------------------------- |
| name      | collectionの名前。他のcollectionからrelationで紐付けるときにも使う                                                |
| label     | 管理画面に表示する名前                                                                                    |
| folder    | collectionのファイルを格納するフォルダを指定。例えば、postのfolderを`content/post`で指定すると、content/postフォルダの中身をpostとして扱う |
| create    | `true`にすると、管理画面上で新しいファイルが作成できる                                                                 |
| extension | ファイルの保存形式。`yaml`、`toml`、`json`、`md`、`markdown`、`html`が指定できる                                    |
| slug      | ファイル名の指定                                                                                       |
| fields    | collectionの各ファイル編集ページに持たせるフィールド。詳しくは後述                                                         |

詳しくは[Configuration Options | Netlify CMS | Open-Source Content Management System](https://www.netlifycms.org/docs/configuration-options/)を参照

### fieldsの指定

fields部分を抜き出すとこんな感じになっています。

```yaml
    fields:
      - { label: 'Slug', name: 'slug', widget: 'string' }
      - { label: 'Title', name: 'title', widget: 'string' }
      - {
          label: 'Date',
          name: 'date',
          widget: 'datetime',
          format: 'YYYY-MM-DD HH:mm',
        }
      - {
          label: 'Update',
          name: 'update',
          default: '',
          widget: 'datetime',
          format: 'YYYY-MM-DD HH:mm',
          required: false,
        }
      - {
          label: 'Description',
          name: 'description',
          widget: 'text',
          required: false,
        }
      - {
          label: 'Category',
          name: 'category',
          widget: 'relation',
          collection: 'categorylist',
          searchFields: 'name',
          valueField: 'name',
        }
      - {
          label: 'Tags',
          name: 'tags',
          widget: 'list',
          allow_add: true,
          minimize_collapsed: true,
          summary: '{{fields.tag}}',
          field: { label: Tag, name: tag, widget: 'string' },
        }
      - { label: 'Body', name: 'body', widget: 'markdown' }
```

基本的な項目は下記のとおりです。

| 項目       | 説明                                     |
| -------- | -------------------------------------- |
| label    | 管理画面上に表示するフィールド名                       |
| name     | フィールドの値を判別する名前。GraphQLで指定するfieldsと合わせる |
| widget   | フィールドの種類を指定する                          |
| required | `false`を指定すると、入力を任意にできる。               |

widgetによって、何を指定しなければいけないかが変わります。

詳しくは[Widgets | Netlify CMS | Open-Source Content Management System](https://www.netlifycms.org/docs/widgets/)を参照してください。

投稿のマークダウン部分を取得するには、下記の通り指定します。

```yaml
- { label: 'Body', name: 'body', widget: 'markdown' }
```

この指定をすると、今までの投稿内容も取得されます。

## 作成できたら開発環境で確認しよう

ファイルが作成できたら、開発環境で確認します。

adminフォルダ内のindex.htmlが**サイトURL/admin**になるので、`develop`ではなく、`build`と`serve`を使います。

```powershell
gatsby build
```

してから、

```powershell
gatsby serve -H 0.0.0.0
```

してください。

※`-H`以降はPC以外でローカルホストを表示させるためのオプションなので、なくても大丈夫です。

* 参考：[GatsbyJSのローカル環境をスマホやタブレットから確認する方法](./gatsbyjs-local-other-device)

**<http://localhost:9000/admin>**を開いて反映されていることを確認しましょう。

## pushして反映させる

開発環境でうまく表示ができていたら、ローカルリポジトリにpushして反映させます。

buildが完了したら、**サイトURL/admin**にアクセスして管理画面を確認しましょう。
