---
title: "Error: pngquant failed to build, make sure that libpng-dev is installedの解決方法"
date: "2020-03-28 10:44:18"
update: "2020-06-03 04:33:11"
description: "WindowsでError: pngquant failed to build, make sure that libpng-dev is installedが出てしまったときの解決方法を説明します"
category: "技術"
tags: ["エラー","GatsbyJS"]
---

[前回の記事](../new-pc-setting/)で新しい端末を買ったよ～という話をしたのですが、ちょっと困ったことがおきました。

新しい端末でGatsbyJSが動かないのです…。

このブログのソースはDropboxに保管してたので、ビルドし直すだけでOKの認識だったのですが。

出てきたエラーは下記の通り。

```powershell
Error: pngquant failed to build, make sure that libpng-dev is installed
```

## 解決方法

解決方法はWindows-Build-Toolsを入れること。

npmだと下記コマンドで入れられます。

```powershell
npm install --global windows-build-tools
```

yarnだと下記。

```powershell
yarn global add windows-build-tools
```

Windows-Build-ToolsはPythonなどを動かすのに必要な開発環境とのこと。

そういえば前のPCにはPythonの環境を作っていましたね。

GatsbyJSがうまく動かないよ～という方は試してみてください。

## 追記：GatsbyJS公式の方法が最強だった

[[note]]
|2020/6/3 追記

ソフト管理周りを見直しているうちに、再び同じエラーが出るようになってしまいました。

しかも今度はwindows-build-toolsを再インストールしても解消しない…。

Yarnがメイン使いなので、[Yarn で windows-build-tools がインストールできなかった](https://qiita.com/knaito-531/items/6d8f840732ddd3d32f7f)を参考にちょこちょこいじってみましたが解決せず。

こういうときはGatsbyJS公式に頼ろう、ということでマニュアルを漁ったらばっちりな記述を見つけました。

[Setting up your environment for building native Node.js modules](https://www.gatsbyjs.org/docs/gatsby-on-windows/#setting-up-your-environment-for-building-native-nodejs-modules)

要約すると、PowerShellを管理者権限で起動して、下記コマンドを入力してね～ということ。

```powershell
npm install --global windows-build-tools --vs2015
```

コマンドを実行する前に、下記実行しました。

* Pythonのアンインストール
* Visual Studio Installerのアンインストール
* yarn、npmのconfigからpythonのパス削除
* yarn、npmのconfigからmsvs_versionの削除
* C:\Users\<ユーザー名>の「.windows-build-tools」フォルダ削除

この状態でコマンド実行したらバッチリでした。

Yarnでも問題なくGatsbyJSのビルド実行できています。
