---
title: 'WordPressの自作テーマを作成したので構成の解説'
date: '2020-02-01 18:42:02'
update: ''
description: 'WordPressの自作テーマを作成し、Githubで公開しました。テーマの構成について解説します。'
category: '技術'
tags: ['WordPress']
---

「[yarn で WordPress のテーマ作成を効率化する手順](../yarn-wordpress)」で宣言した通り、WordPress の自作テーマを作成し、Github で公開しました。

[simple-wp-theme](https://github.com/sakelog/simple-wp-theme)

今回の記事では、自作テーマの構成を解説しつつ、今後の課題を整理していきたいと思います。

## 超シンプル構成を目指しました

あまり複雑な構成にはしたくなかったので、できる限りシンプルな構成にしています。

下記のようなファイル構成になっています。

```text
simple-wp-theme
├─component
├─node_modules
├─package.json
├─yarn.lock
│
├─scripts
│  ├─dist
│  └─src
│      ├─js
│      └─ts
│
├─styles
│  └─scss
│
├─functions.php
│
├─header.php
├─footer.php
├─index.php
├─singular.php
├─searchform.php
└─style.css
```

### 各パーツ解説

#### component

共通部品が入っています。

下記のように、`get_template_part`を使って呼び出します。

```php
get_template_part('/component/to_pagetop');
```

#### yarn 関連

- node_modules
- package.json
- yarn.lock

は yarn 関連のフォルダ、ファイルです。

package.json に CSS 関連、JavaScript 関連の script を登録していますので、カスタマイズ時は script を実行して公開用のファイルを作成します。

#### scripts

JavaScript を格納しています。

**dist**が公開用のファイルを格納するフォルダ、**src**が変換元のファイルを格納するフォルダです。

1. src>ts に TypeScript 形式でソースを書く
2. package.json の script で src>js にコンパイル
3. さらに package.json の script で圧縮したものを dist に格納

という流れで公開用の JavaScript を格納しています。

#### styles

CSS を格納しています。

1. styles>scss に scss 形式でスタイル記述 →mystyle.scss で import して結合
2. package.json の script で CSS 形式でコンパイル(mystyle.css)
3. さらに package.json の script で圧縮(mystyle.min.css)

CSS フレームワークの[Bulma](https://bulma.io/)を使用しています。

#### functions.php

諸々機能を定義しています。

2020/2/1 現在のソースは下記のとおりです。

```php
<?php
/*-----------------------------------------------------------------------------
  WordPress機能
  -----------------------------------------------------------------------------*/
if (! function_exists('my_setup') ) {
  function my_setup() {
    add_theme_support('title-tag');

    add_theme_support( 'html5', array(
      'search-form',
      'comment-form',
      'comment-list',
      'gallery',
      'caption',
    ) );

    add_post_type_support( 'page', 'excerpt' );
  }
  add_action('after_setup_theme', 'my_setup');
}
if (!function_exists('disable_meta')) {
  function disable_meta() {
  remove_action('wp_head', 'wp_generator');
  remove_action('wp_head', 'wlwmanifest_link');
  remove_action('wp_head', 'rsd_link');
  }
  add_action ('init', 'disable_meta');
}
if (!function_exists('disable_emojis')) {
  function disable_emojis() {
    remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
    remove_action( 'wp_print_styles', 'print_emoji_styles' );
    remove_action( 'admin_print_styles', 'print_emoji_styles' );
    remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
    remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
    remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
  }
  add_action( 'init', 'disable_emojis' );
}
if (!function_exists('remove_block_library_style')) {
  function remove_block_library_style() {
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'wp-block-library-theme' );
  }
  add_action( 'wp_enqueue_scripts', 'remove_block_library_style' );
}
/*-----------------------------------------------------------------------------
  Menu登録
  -----------------------------------------------------------------------------*/
if ( !function_exists('my_register_menu') ) {
  function my_register_menu() {
    register_nav_menus(array(
      'global' => 'グローバルナビ',
    ));
  }
  add_action('after_setup_theme', 'my_register_menu');
}
/*-----------------------------------------------------------------------------
  CSS登録
  -----------------------------------------------------------------------------*/
if ( ! function_exists('my_register_style') ){
  function my_register_style() {
    wp_enqueue_style('my-style', get_template_directory_uri() . '/styles/mystyle.min.css', array());
    //wp_enqueue_style('my-style', get_template_directory_uri() . '/styles/mystyle.css', array());
  }
  add_action('wp_enqueue_scripts', 'my_register_style');
}
/*-----------------------------------------------------------------------------
  js登録
  -----------------------------------------------------------------------------*/
if (! function_exists('my_register_scripts')){
  function my_register_scripts() {
    //navMenu
    wp_enqueue_script('navMenu',
    get_template_directory_uri() . '/scripts/dist/navmenu.min.js',
    array(), false, true);

    //toTopPage
    wp_enqueue_script('toTopPage',
    get_template_directory_uri() . '/scripts/dist/to_topPage.min.js',
    array(), false, true);
    //jQuery
    if (! is_admin()) {
      wp_deregister_script( 'jquery' );
      wp_enqueue_script('jquery',
      'https://cdn.jsdelivr.net/npm/jquery@3.4.1',
      array(), false, true);
    }
  }
  add_action( 'wp_enqueue_scripts', 'my_register_scripts' );
}
/*-----------------------------------------------------------------------------
  get_the_archive_title 余分な文字削除
  -----------------------------------------------------------------------------*/
  add_filter( 'get_the_archive_title', function ($title) {
    if (is_category()) {
      $title = single_cat_title('',false);
    } elseif (is_tag()) {
      $title = single_tag_title('',false);
    } elseif (is_tax()) {
      $title = single_term_title('',false);
    } elseif (is_post_type_archive() ){
      $title = post_type_archive_title('',false);
    } elseif (is_date()) {
      $title = get_the_time('Y年n月');
    } elseif (is_search()) {
      $title = '「'.esc_html( get_search_query(false) ) . '」検索結果';
    } else {

    }
    return $title;
  });
```

現時点では下記のような機能をもたせています。

- WordPress本体の機能(titleタグの自動出力、HTML5サポート、ページに抜粋機能追加、不要タグ削除)
- グローバルメニューの追加
- CSS登録
- JavaScript登録(jQueryはver3.4.1を読込)
- アーカイブタイトルの修正

#### header.php～style.css

WordPressの基本的な構成要素です。

それぞれの機能の詳細は「[【WordPress】自作テーマ作成に最低限必要なファイル](../wordpress-theme-parts)」で解説しています。

## 今後の課題

公開用テーマとして成り立つためには、まだまだ課題も。

現時点の課題を洗い出してみます。

- Readme.mdの作成
- SEO対策
- style.cssの修正
- ウィジェット表示エリアの追加(フッター？)

特に、SEOはしょぼしょぼなのでなんとかせねば、状態ですね。

各種metaタグ、ogpタグを追加予定です。
