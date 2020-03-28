---
title: "Error: pngquant failed to build, make sure that libpng-dev is installedの解決方法"
date: "2020-03-28 10:44:18"
update: ""
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
