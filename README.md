# sake log

## このrepositoryの概要

GatsbyJSで作成しているブログ、[sake log](https://sake-log.website/)のソースコード部分のみ抽出しています。

GatsbyJSでの開発の参考にしてください。

## 使用する際の注意点

Contentfulとの連携を前提にしています。

使用する際はルートフォルダに`.env`ファイルを作成してください。

下記環境変数を使用します。

* CFL_SPACE_ID
* CFL_DELIVERY_API

ContentfulのAPI_Key確認画面から取得してください。

参考：[Authentication | Contentful](https://www.contentful.com/developers/docs/references/authentication/)
