import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Header({ setIsMenuOpen }) {
  const { i18n } = useTranslation();

  const handelChangeLanguage = () => {
    const currentLanguage = localStorage.getItem('language')

    if (currentLanguage === 'en') {
      i18n.changeLanguage('ar')
      document.body.setAttribute('dir', 'rtl')
      localStorage.setItem('language', 'ar')
    } else {
      i18n.changeLanguage('en')
      document.body.setAttribute('dir', 'ltr')
      localStorage.setItem('language', 'en')
    }
  }

  return (
    <>
      {/* Site header */}
      <header className="site-header">
        {/* Mobile header */}
        <div id="atbs-mobile-header" className="mobile-header visible-xs visible-sm">
          <div className="mobile-header__inner mobile-header__inner--flex">
            <div className="header-branding header-branding--mobile mobile-header__section text-left">
              {/* <div className="header-logo header-logo--mobile flexbox__item text-left">
                <a href="index.html">
                  <img src="images/eva711X5FepU.png" alt="logo" />
                </a>
              </div> */}
            </div>
            <div className="mobile-header__section text-right">
              <button onClick={handelChangeLanguage} type="submit" className="mobile-header-btn js-search-dropdown-toggle">
                {
                  i18n.language === 'en' ? "Ar": "En"
                }
              </button>
              {/* <a onClick={() => setIsMenuOpen(true)} href="#atbs-offcanvas-primary" className="offcanvas-menu-toggle mobile-header-btn js-atbs-offcanvas-toggle">
                <i className="mdicon mdicon-menu hidden-xs" />
                <i className="mdicon mdicon-menu visible-xs-inline-block" />
              </a> */}
            </div>
          </div>
        </div>{/* Mobile header */}
        {/* Navigation bar */}
        <nav className="navigation-bar hidden-xs hidden-sm js-sticky-header-holder">
          <div className="navigation-bar__inner flexbox-wrap flexbox-center-y">
            <div className="navigation-bar__section">
              {/* <div className="header-logo">
                <a href="index.html">
                  <img src="images/eva711X5FepU.png" alt="logo" />
                </a>
              </div> */}
            </div>
            <div  className="navigation-bar__section">
              {/* <a onClick={() => setIsMenuOpen(true)} href='#!' className="offcanvas-menu-toggle js-atbs-offcanvas-toggle">
                <i className="mdicon mdicon-menu" />
              </a> */}

              <a onClick={handelChangeLanguage} href='#!' className="offcanvas-menu-toggle js-atbs-offcanvas-toggle" style={{marginTop: '15px'}} >
              {
                  i18n.language === 'en' ? "Ar": "En"
                }
              </a>
            </div>
          
            <div className="navigation-bar__section">
              <ul className="social-list list-space-xs">
                <li><a href="#!"><i className="mdicon mdicon-facebook" /></a></li>
                <li><a href="#!"><i className="mdicon mdicon-twitter" /></a></li>
                <li><a href="#!"><i className="mdicon mdicon-youtube" /></a></li>
              </ul>
            </div>
          </div>{/* .navigation-bar__inner */}
          <div id="header-search-dropdown" className="header-search-dropdown ajax-search is-in-navbar js-ajax-search">
            <div className="container container--narrow">
              <form className="search-form search-form--horizontal" method="get" action="#">
                <div className="search-form__input-wrap">
                  <input type="text" name="s" className="search-form__input" placeholder="Search" defaultValue />
                </div>
                <div className="search-form__submit-wrap">
                  <button type="submit" className="search-form__submit btn btn-primary">Search</button>
                </div>
              </form>
              <div className="search-results">
                <div className="typing-loader" />
                <div className="search-results__inner" />
              </div>
            </div>
          </div>{/* .header-search-dropdown */}
        </nav>{/* Navigation-bar */}
        <div className="socials-share">
          <ul className="list-horizontal list-unstyled list-space-xl">
            <li><a href="#!">Facebook</a></li>
            <li><a href="#!">Twitter</a></li>
            <li><a href="#!">LinkedIn</a></li>
            <li><a href="#!">Pinteres</a></li>
            <li><a href="#!">Telegram</a></li>
          </ul>
        </div>
      </header>{/* Site header */}
    </>
  )
}
