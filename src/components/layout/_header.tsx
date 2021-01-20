import React from 'react';
import { useState } from 'react';
import { Link } from 'gatsby';
import { MdMenu, MdClose } from 'react-icons/md';
import loadable from '@loadable/component';

import config from '../config';
const HeaderCatList = loadable(() => import('./_headerCatList'));
const SocialIcon = loadable(() => import('../social_Icon'));

const Header = () => {
  const siteTitle = config.title;

  const [navMenuShow, setNavMenuShow] = useState<string>('');

  const handleChangeNavMenu_Show = (): void => {
    setNavMenuShow('l-header__nav__darwer--show');
  };
  const handleChangeNavMenu_Hide = (): void => {
    setNavMenuShow('l-header__nav__darwer--hide');
  };

  const pageList = (
    <ul className="l-header__nav__drawer--list">
      <li>
        <Link to="/tags/" className="nav-link">
          タグ一覧
        </Link>
      </li>
      <li>
        <Link to="/about_this_site/" className="nav-link">
          このサイトについて
        </Link>
      </li>
      <li>
        <Link to="/privacy/" className="nav-link">
          プライバシーポリシー
        </Link>
      </li>
      <li>
        <Link to="/contact/" className="nav-link">
          お問い合わせ
        </Link>
      </li>
    </ul>
  );

  return (
    <header className="l-header">
      <nav
        className="l-header__nav"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="l-header__nav__main">
          <span
            className="l-header__nav--menuIcon"
            onClick={handleChangeNavMenu_Show}
          >
            <MdMenu />
          </span>
          <span className="l-header__nav--title">
            <Link to="/">{siteTitle}</Link>
          </span>
        </div>
        <div className={'l-header__nav__drawer ' + navMenuShow}>
          <span
            className="l-header__nav--menuIcon"
            onClick={handleChangeNavMenu_Hide}
          >
            <MdClose />
          </span>
          <div className="l-header__nav__drawer__item">
            <h2>カテゴリー一覧</h2>
            <HeaderCatList />
          </div>
          <div className="l-header__nav__drawer__item">
            <h2>ページ一覧</h2>
            {pageList}
          </div>
          <div className="l-header__nav__drawer__item">
            <h2>連絡</h2>
            <SocialIcon />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
