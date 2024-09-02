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
      <header className="site-header padding-left-container">
        {/* Mobile header */}
        <div id="atbs-mobile-header" className="mobile-header ">
          <div className="mobile-header__inner mobile-header__inner--flex">
            <div className="header-branding header-branding--mobile mobile-header__section text-left">
              <div className="header-logo header-logo--mobile flexbox__item text-left">
                <a href="#!">
                  <img src="logo.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="mobile-header__section text-right">
              <h1 onClick={handelChangeLanguage} style={{ cursor: 'pointer',display:"flex",alignItems:"center" }} className="mobile-header-btn">
                {
                  i18n.language == 'en' ? "Ar": "En"
                }
              </h1>
              {/* <a onClick={() => setIsMenuOpen(true)} href="#atbs-offcanvas-primary" className="offcanvas-menu-toggle mobile-header-btn js-atbs-offcanvas-toggle">
                <i className="mdicon mdicon-menu hidden-xs" />
                <i className="mdicon mdicon-menu visible-xs-inline-block" />
              </a> */}
            </div>
          </div>
        </div>{/* Mobile header */}
    
      </header>{/* Site header */}
    </>
  )
}
