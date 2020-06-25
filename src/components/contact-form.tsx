import * as React from 'react'

import { Link } from 'gatsby'

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action="../contact_success/"
      className="c-form"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="u-border--bottom u-space--pad--2-top u-space--pad--2-bottom">
        <div className="c-form__item-wrapper">
          <div className="c-form__label-wrapper">
            <label htmlFor="contactName" className="c-form__label">お名前</label>
          </div>
          <div className="c-form__form-item-wrapper">
            <input
              type="text"
              id="contactName"
              name="name"
              placeholder="サンプル 花子"
              className="c-form__input"
            />
          </div>
        </div>
        <div className="c-form__item-wrapper">
          <div className="c-form__label-wrapper">
            <label htmlFor="contactEmail" className="c-form__label">メールアドレス</label>
          </div>
          <div className="c-form__form-item-wrapper">
            <input
              type="email"
              id="contactEmail"
              name="email"
              placeholder="name@example.com"
              className="c-form__input"
            />
          </div>
        </div>
        <div className="c-form__item-wrapper">
          <div className="c-form__label-wrapper">
            <label htmlFor="contactTextarea" className="c-form__label">本文</label>
          </div>
          <div className="c-form__form-item-wrapper">
            <textarea
              id="contactTextarea"
              name="message"
              rows={5}
              className="c-form__textarea"
            ></textarea>
          </div>
        </div>
        <div>
          <p>
            送信いただいた内容は<Link to="/privacy/">プライバシーポリシー</Link>
            に沿って対応します。
          </p>
          <p>プライバシーポリシーに同意の上、送信をお願いします。</p>
          <div className="u-align--center">
            <button type="submit" className="c-button--primary">
              送信
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
