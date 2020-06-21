---
title: "【CSS】フッターとページ下部の隙間を解消する方法"
date: "2020-01-14 20:26:37"
description: "サイトを作るとき、いつも悩むのがコンテンツ量が少ないときにフッターとページの下に隙間ができてしまうこと。今回、最適解と考えられる方法を見つけたので共有します。"
category: "技術"
tags: ["HTML", "CSS", "Bootstrap"]
---

## コンテンツ量が少ないときにできる「アイツ」

ヘッダーがあって、メインのコンテンツがあって、フッターがあって～という基本的なサイト構造を考えたとして、いつも悩んでしまうのがフッターの表示方法です。

コンテンツ量が少ないとページの最下部と隙間ができてしまうのです。

最下部に固定表示してあげても良いのですが、コンテンツ内容によっては非常にジャマ。

今回紹介する方法は**とにかく最下部に隙間ができないように表示してくれ！固定とかいらん！**という方向けの方法です。

## 設定のポイント

フッターを最下部に表示したいときのポイントは 3 つ。

1. wrapper クラスを作成して、 `display:flex;` にする
2. wrapper クラスに `flex-direction: column;` を設定する
3. wrapper クラスに `min-height: 100vh;` を設定する
4. footer に `margin-top:auto;` を設定する

コードのサンプルを作成したので見てみましょう。

<iframe height="400" style="width: 100%;" scrolling="no" title="footer-bottom-sample" src="https://codepen.io/sake_log/embed/BayPBLp?height=400&theme-id=light&default-tab=css,result" frameborder="no">
  See the Pen <a href='https://codepen.io/sake_log/pen/BayPBLp'>footer-bottom-sample</a> by sake
  (<a href='https://codepen.io/sake_log'>@sake_log</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

わかりやすいようにパーツごとに色を付けています。

header と footer の間のメインコンテンツが広がっているわけではないので、wrapper クラスにメインコンテンツに設定したい背景色と同じものを設定してあげると良い感じです。

## Bootstrap での書き方

ちなみに、Bootstrap だとあらかじめ定義されている class を使って楽に設定することができます。

Bootstrap だとこんな書き方になります。

```html
<div class="d-flex flex-column min-vh-100">
  <header>header</header>
  <main>main</main>
  <footer class="mt-auto">footer</footer>
</div>
```

Bootstrap 使いの方は覚えておいて損のない技だと思いますので、是非ご活用くださいませ。
