import * as React from "react"

import { Link } from "gatsby"

const ContactForm = () => {
    return(
        <form name="contact" method="POST" data-netlify="true" action="../contact_success/" className="sl-contact">
        <input type="hidden" name="form-name" value="contact" />
        <div className="sl-border-bottom">
          <div className="">
            <div className="">
             <label htmlFor="contactName">お名前</label>
            </div>
            <div className="">
              <input
                type="text"
                id="contactName"
                name="name"
                placeholder="サンプル 花子"
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <label htmlFor="contactEmail">メールアドレス</label>
            </div>
            <div className="">
              <input
                type="email"
                id="contactEmail"
                name="email"
                placeholder="name@example.com"
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <label htmlFor="contactTextarea">メッセージ</label>
            </div>
            <div className="">
              <textarea
                id="contactTextarea"
                name="message"
                rows={5}
              ></textarea>
            </div>
          </div>
          <div className="">
            <p>
              送信いただいた内容は<Link to="/privacy/">プライバシーポリシー</Link>
              に沿って対応します。
            </p>
            <p>プライバシーポリシーに同意の上、送信をお願いします。</p>
            <div className="">
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