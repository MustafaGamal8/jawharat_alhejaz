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
              <div className="header-logo header-logo--mobile flexbox__item text-left">
                <a href="index.html">
                  <img src="images/eva711X5FepU.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="mobile-header__section text-right">
              <button onClick={handelChangeLanguage} type="submit" className="mobile-header-btn js-search-dropdown-toggle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="language"><path fill="none" d="M0 0h24v24H0V0z"></path><path fill='#A4A3A6' d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>
            
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
              <div className="header-logo">
                <a href="index.html">
                  <img src="images/eva711X5FepU.png" alt="logo" />
                </a>
              </div>
            </div>
            <div  className="navigation-bar__section">
              {/* <a onClick={() => setIsMenuOpen(true)} href='#!' className="offcanvas-menu-toggle js-atbs-offcanvas-toggle">
                <i className="mdicon mdicon-menu" />
              </a> */}

              <a onClick={handelChangeLanguage} href='#!' className="offcanvas-menu-toggle js-atbs-offcanvas-toggle" style={{marginTop: '15px'}} >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="language"><path fill="none" d="M0 0h24v24H0V0z"></path><path fill='#ad9271' d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>
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
