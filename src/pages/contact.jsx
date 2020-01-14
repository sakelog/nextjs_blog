import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { Link } from "gatsby"

const pageTitle = "お問い合わせ"

export default() => (
    <Layout>
    <Head
        title={pageTitle}
        description="sake logについてのお問い合わせはこちらから"
    />
        <h1>{pageTitle}</h1>
        <form name="contact" method="POST" data-netlify="true">
        <div className="form-group">
                 <label htmlFor="contactName">お名前</label>
                 <input type="text" className="form-control" id="contactName" name="name" placeholder="サンプル 花子" />
            </div>
            <div className="form-group">
                 <label htmlFor="contactEmail">メールアドレス</label>
                 <input type="email" className="form-control" id="contactEmail" name="email" placeholder="name@example.com" />
            </div>
            <div className="form-group">
                <label htmlFor="contactTextarea">メッセージ</label>
                <textarea className="form-control" id="contactTextarea" name="message" rows="5"></textarea>
            </div>
            <p>送信いただいた内容は<Link to="/privacy/">プライバシーポリシー</Link>に沿って対応します。</p>
            <p>プライバシーポリシーに同意の上、送信をお願いします。</p>
            <button type="submit" className="btn btn-primary">送信</button>
        </form>
    </Layout>
)