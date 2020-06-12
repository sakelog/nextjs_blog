# sake log

## このrepositoryの概要

GatsbyJSで作成しているブログ、[sake log](https://sake-log.website/)のソースコード部分のみ抽出しています。

GatsbyJSでの開発の参考にしてください。

## 使用する際の注意点

コンテンツ部分（記事やページ）は含めていません。

このソースコードをそのまま流用する場合は、ローカルリポジトリ直下に**content**というフォルダを作成してください。

contentフォルダの下のpostフォルダの中身を記事、pageフォルダの中身を固定ページとして扱います。

```text
./
├ content
│　├ post
│　└ page
├ src
・
・
・
```
