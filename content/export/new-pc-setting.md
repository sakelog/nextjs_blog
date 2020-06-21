---
title: "PC買い替え！設定したことまとめ"
date: "2020-03-07 07:28:31"
update: ""
description: "この度、PCを買い替えました。設定したことを備忘録として残しておきます。"
category: "技術"
tags: ["設定"]
---

## PCを買い替えました

今まで使っていたPCの使用期間が5年以上経ったので、この度買い替えを行いました。

参考までに旧PCと新PCのスペックは下記のとおりです。

||旧PC|新PC|
|---|---|---|
|機種名|Panasonic Let's note CF-SZ5|Lenovo ThinkPad X1 Carbon|
|ディスプレイ|12.1インチWUXGA|14.0インチFHD|
|メモリ|8GB|16GB|
|OS|Windows 10 Pro 64ビット|Windows Home 64ビット|
|CPU|Intel Core i7-65000U|Intel Core i7-10510U|
|ストレージ|256GB SSD|256GB SSD|

今回の記事は購入したPCのレビューと言うよりは、購入後に設定したことのまとめです。

PCそのものの使い心地については、機会があれば記事にまとめたいと思います。

## PC購入後に設定したこと

主に開発環境の構築に向けて行ったことをまとめておきます。

### Google Chromeのインストール

さよなら、Edge……。

メインブラウザとして、Google Chromeをインストールします。

アカウントと紐付けていれば、ブックマークや拡張機能もそのまま移行できます。便利ですね。

### Google日本語入力のインストール

文字入力を少しでも快適にするため、Google日本語入力をインストールします。

[Google日本語入力](https://www.google.co.jp/ime/)

### chocolateyの導入

良い機会なので、パッケージ管理ツールのchocolateyを導入しました。

インストールの仕方は下記公式サイトを参照。

PowerShellでコマンドを叩いてインストールします。

[Chocolatey Software | Installing Chocolatey](https://chocolatey.org/install#installing-chocolatey)

インストールができたらPowerShellを再起動して、パッケージをインストールしていきます。

### yarnのインストール

下記コマンドを実行。

```powershell
choco install yarn
```

#### yarnでglobalインストール

下記コマンドを実行して、globalインストールをしていきます。

```powershell
yarn global add hogehoge
```

globalインストールしているのは下記パッケージです。

* gatsby-cli
* npm-check-updates
* prettier
* typescript
* uglify-js
* windows-build-tools

### Node.jsをインストール

続いて、Nod.jsをインストールします。

下記コマンドを実行。

```powershell
choco install nodejs
```

### Gitをインストール

Gitをインストールします。

下記コマンドを実行。

```powershell
choco install git
```

ユーザー名とEメールアドレスも設定しておきます。

```powershell
git config --global user.name sake
```

```powershell
git config --global user.email sakelog.website@gmail.com
```

### VSCodeのインストール

Visual Studio Codeをインストールします。

インストール方法や、導入している拡張機能は下記記事にまとめています。

[VSCodeで快適な開発環境を～拡張機能編～](https://sake-log.website/vscode-install-extension/)

### Dropboxのインストール

Dropboxをインストールします。基本的に開発用のデータはDropboxに突っ込んでます。

[Dropbox](https://www.dropbox.com/)

インストールしたらファイルの同期が終わるまで待機……。

### ブログ関連の設定

ブログが更新できる環境を整えます。

Dropboxに突っ込んでいたので、そのまま下記コマンドが実行できるかと思ったのですが通らず。

```powershell
gatsby develop
```

一度**node_modules**フォルダを削除し、再インストールします。yarn installではうまくいかなかったので、npmでインストールしています。

```powershell
npm i
```

＜参考＞

[Generating SSR bundle fails #19922](https://github.com/gatsbyjs/gatsby/issues/19922)

これでブログの更新ができるようになりました。

### まとめ

書き出してみると、そこまで手数をかけず新PCが使える状態になったかなという印象です。

書いているのは開発環境の構築ですが、他もそこまで作業はしていないです。

windowsの設定自体もアカウントと紐付いているので、基本的なものは持ってこれるし……久々にPCを買い替えて便利な世の中になったもんだなーと実感しています。

今回新たに導入したchocolateyについてはしばらく使ってみて勉強していきたいと思います。

ではでは、またの機会に。
