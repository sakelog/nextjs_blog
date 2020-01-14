import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const pageTitle = "プライバシーポリシー"

export default () => (
  <Layout>
    <Head
        title={pageTitle}
        description="sake logのプライバシーポリシーです。"
    />
    <h1>{pageTitle}</h1>
    <p className="text-muted">作成日：2020/1/10</p>
    <p className="text-muted">更新日：2020/01/14</p>
    <h2>当サイトに掲載されている広告について</h2>
    <p>
      当サイトでは、第三者配信の広告サービス（
      <a href="http://www.google.com/adsense/start/">Googleアドセンス</a>
      ）を利用しています。
    </p>
    <p>
      このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報
      『Cookie』(氏名、住所、メール アドレス、電話番号は含まれません)
      を使用することがあります。
    </p>
    <p>
      またGoogleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、
      <a href="http://www.google.co.jp/policies/technologies/ads/">こちら</a>
      をクリックしてください。
    </p>
    <h2>当サイトが使用しているアクセス解析ツールについて</h2>
    <p>
      当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
    </p>
    <p>
      このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
    </p>
    <p>
      このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
    </p>
    <p>
      この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
    </p>
    <p>
      この規約に関して、詳しくは
      <a href="http://www.google.com/analytics/terms/jp.html">こちら</a>
      、または
      <a href="https://www.google.com/intl/ja/policies/privacy/partners/">
        こちら
      </a>
      をクリックしてください。
    </p>
    <h2>免責事項</h2>
    <p>
      当サイトからリンクなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
    </p>
    <p>
      当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
    </p>
    <p>
      当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
    </p>
    <h2>プライバシーポリシーの変更について</h2>
    <p>
      当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。
    </p>
    <p>
      修正された最新のプライバシーポリシーは常に本ページにて開示されます。
    </p>
  </Layout>
)
