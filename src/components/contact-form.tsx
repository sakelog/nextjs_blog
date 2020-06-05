import * as React from "react"

import { Link } from "gatsby"

const ContactForm = () => {
    return(
        <form name="contact" method="POST" data-netlify="true" action="../contact_success/" className="sl-contact">
        <input type="hidden" name="form-name" value="contact" />
        <div className="grid sl-border-bottom">
          <div className="grid-center-middle col-12">
            <div className="col-2_sm-12">
             <label htmlFor="contactName">お名前</label>
            </div>
            <div className="col-6_sm-12">
              <input
                type="text"
                id="contactName"
                name="name"
                placeholder="サンプル 花子"
              />
            </div>
          </div>
          <div className="grid-center-middle col-12">
            <div className="col-2_sm-12">
              <label htmlFor="contactEmail">メールアドレス</label>
            </div>
            <div className="col-6_sm-12">
              <input
                type="email"
                id="contactEmail"
                name="email"
                placeholder="name@example.com"
              />
            </div>
          </div>
          <div className="grid-center-top col-12">
            <div className="col-2_sm-12">
              <label htmlFor="contactTextarea">メッセージ</label>
            </div>
            <div className="col-6_sm-12">
              <textarea
                id="contactTextarea"
                name="message"
                rows={5}
              ></textarea>
            </div>
          </div>
          <div className="grid-column-middle col-12">
            <p>
              送信いただいた内容は<Link to="/privacy/">プライバシーポリシー</Link>
              に沿って対応します。
            </p>
            <p>プライバシーポリシーに同意の上、送信をお願いします。</p>
            <div className="col-4_sm-12">
              <button type="submit" className="sl-btn sl-btn sl-btn-primary">
              送信
              </button>
            </div>
          </div>
        </div>
      </form>
    )
}

export default ContactForm