---
title: 'yarnでWordPressのテーマ作成を効率化する手順'
date: '2020-01-26 09:23:15'
description: 'WordPressの自作テーマを作るとき、sassをコンパイルしたり、javascriptのライブラリを最新化したり、色々やることが多いなぁと感じました。yarnを使って効率化する方法を考えたので共有します。'
category: '技術'
tags: ['yarn', 'WordPress']
---

WordPress の自作テーマって、意外とやらなきゃいけないことが多いなと感じます。

sass のコンパイルや、作成した CSS の圧縮、javascript のライブラリは最新版を使いたいし、javascript も圧縮したいし……。

というわけで、今回は**yarn**を使って WordPress の自作テーマづくりを効率化する方法を考えてみました。

## そもそもの話。yarn って何

yarn はパッケージマネージャーです。

世の中に出回っている便利なソースコード（パッケージ）を管理するお手伝いをしてくれるソフトです。

同様の機能を持つものに、Node.js に標準で付いてくる**npm**があるのですが、yarn は並行でインストール可能なので、インストール時間が早いです。

機能自体は npm とほぼ同じなので、Node.js がインストールされていることが前提です。

[Node.js インストールページ](https://nodejs.org/ja/)

[yarn インストールページ](https://legacy.yarnpkg.com/ja/)

yarn のインストールが完了したら、次の手順に進みましょう

[[note]]
| npmが良い！という方は、「[npmからの移行](https://legacy.yarnpkg.com/ja/docs/migrating-from-npm)」を参考にコマンドを読み替えてください。

## 今回のフォルダ構成

今回は下記のようなフォルダ構成にします。

```text
my-theme
├─component
├─node_modules
├─scripts
│  ├─dist
│  └─src
│      ├─js
│      └─ts
│
└─styles
   └─scss
```

各フォルダの役割はこんな感じです。

| フォルダ     | 説明                                                                                 |
| ------------ | ------------------------------------------------------------------------------------ |
| component    | テンプレートファイル。`get_template_part()`で読み込むファイルを格納                  |
| node_modules | yarn でインストールした package が格納されている                                     |
| scripts      | javascript を格納。src に編集用のファイルを格納、dist に実際に参照するファイルを格納 |
| styles       | スタイルシートを格納。scss に機能ごとに分けた scss ファイルを格納                    |

## yarn のプロジェクト立ち上げ

今回は**my-theme**というフォルダ内に自作テーマ用のファイルを作成していくことにします。

まずは、コマンドプロンプトで下記コマンドを実行して、作成したフォルダに移動します。

```powershell
cd my-theme
```

プロジェクトを新規で作成するには下記のコマンドを実行します。

```powershell
yarn init
```

いくつか質問をされるので答えていくと、package.json が作成されます。

package.json は入っているパッケージを一覧化したファイル。

yarn のコマンドを実行すれば自動で書き換わります。

## SCSS のコンパイルと CSS の圧縮

sass を使って開発を進めていくことにします。

### CSS フレームワークのインストール

sass を使ってカスタマイズ可能な CSS フレームワークに**bulma**がありますので、今回はこちらを使っていきましょう。

[bulma](https://bulma.io/)

bulma も yarn でインストール可能なので、yarn のコマンドを使って追加します。

下記を実行。

```powershell
yarn add bulma
```

コマンドを実行すると**node_modules**に bulma のファイルが格納され、package.json の"dependencies"が書き換わります。

styles フォルダ直下に mystyle.scss というファイルを作成し、bulma の sass ファイルを import します。

```scss:title=mystyle.scss
@import '../node_modules/bulma/bulma.sass';
```

### sass→css へのコンパイル

WordPress では sass ファイルのままスタイルの読込ができないので、CSS 形式にコンパイルします。

コンパイルには**node-sass**を使います。

[node-sass](https://legacy.yarnpkg.com/ja/package/node-sass)

下記を実行。

```powershell
yarn add node-sass --dev
```

これで、sass→css への変換ができるようになりました。

package.json に下記の script を追加します。

```json:title=package.json
  "scripts": {
    "scss": "node-sass ./styles/mystyle.scss ./styles/mystyle.css -w",
  }
```

[[note]]
| -w は変更を監視して、変更があれば css に変換するオプションです。コマンドを実行した後にファイルを保存すると CSS 変換されます。

これで、コマンドプロンプトで下記のコマンドを実行するだけで、css への変換ができます。

```powershell
yarn scss
```

### css の圧縮

次に、CSS の圧縮をしましょう。

**clean-css**を使います。

[clean-css](https://legacy.yarnpkg.com/ja/package/clean-css-cli)

インストールするには下記を実行。

```powershell
yarn add clean-css-cli --dev
```

[[danger]]
| clean-css-cli をローカルでインストールすると、yarn スクリプトを使ってしか実行できません。cleancss ～と直接入力したい場合は、「yarn」を「yarn global」に変えて、グローバルインストールしてください。

package.json に下記 script を追加します。

```json{3}
  "scripts": {
    "scss": "node-sass ./styles/mystyle.scss ./styles/mystyle.css -w",
    "mincss": "cleancss -o ./styles/mystyle.min.css ./styles/mystyle.css",
  }
```

下記コマンドを実行することで CSS の圧縮が可能です。

```powershell
yarn mincss
```

## typescript→javascript へのコンパイル、圧縮

javascript の扱いは下記のようにします。

1. 元のソースは typescript で書く
2. typescript→javascript に変換
3. 圧縮して読込

### typescript→javascript への変換

typescript から javascript への変換のため、**typescript**をインストールします。

[typescript](https://legacy.yarnpkg.com/ja/package/typescript)

```powershell
yarn global add typescript
```

javascript への変換は`tsc`コマンドを使います。

例えばこんな感じです。

```powershell
tsc scripts/src/ts/navmenu.ts --outDir scripts/src/js
```

`--outDir`は出力先のディレクトリを指定するオプションです。

これも、json.package の scripts に登録しておくと良いでしょう。

### javascript の圧縮

javascript の圧縮は uglify-js を使います。

[uglify-js](https://legacy.yarnpkg.com/ja/package/uglify-js)

```powershell
yarn global add uglify-js
```

下記のようなコマンドを実行すると、javascript ファイルを圧縮できます。

```powershell
uglifyjs scripts/src/js/navmenu.js -c -o scripts/dist/navmenu.min.js
```

`-c`が圧縮をする、というオプション、`-o`が出力先のファイルを指定するオプションです。

こちらも長いので、json.package の scripts に登録しておきましょう。

## メンテナンスや、javascript 外部のライブラリの使用

今回の記事の通りコマンドを実行して、作成された package.json はこんな感じになります。

```json:title=package.json
{
  "name": "wp-theme",
  "version": "0.1.0",
  "description": "WordPress用オリジナルテーマ",
  "main": "index.php",
  "author": "sake <sakelog.website@gmail.com>",
  "license": "MIT",
  "private": true,
  "scripts": {
    "scss": "node-sass ./styles/mystyle.scss ./styles/mystyle.css -w",
    "mincss": "cleancss -o ./styles/mystyle.min.css ./styles/mystyle.css",
    "navMenuC": "tsc scripts/src/ts/navmenu.ts --outDir scripts/src/js",
    "navMenuM": "uglifyjs scripts/src/js/navmenu.js -c -o scripts/dist/navmenu.min.js",
    "toTopPageC": "tsc scripts/src/ts/to_toppage.ts --outDir scripts/src/js",
    "toTopPageM": "uglifyjs scripts/src/js/to_toppage.js -c -o scripts/dist/to_toppage.min.js"
  },
  "dependencies": {
    "bulma": "^0.8.0"
  },
  "devDependencies": {
    "clean-css-cli": "^4.3.0",
    "node-sass": "^4.13.1"
  }
}
```

定期的に下記コマンドを使ってインストールされたパッケージをアップデートできます。

```powershell
yarn upgrade-interactive
```

公開されている javascript のライブラリを使用したい場合、自作の javascript の実行に必要なものであれば、javascript 上で下記のような import 文を書けば実行可能です。

```javascript
import xxx = require('xxx');
```

WordPress 上で直接読ませたい！という場合は、uglify-js を使って圧縮しつつコピーしてくるのが良いのかな…という印象です。

[[note]]
| 今回の記事を作成するのに試作した WordPress テーマを近日 Github で公開予定です。
