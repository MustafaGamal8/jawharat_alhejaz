import React, { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu';
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import KitchensPage from './pages/KitchensPage';
import DressingPage from './pages/DressingPage';
import DecorationsPage from './pages/DecorationsPage';
import ScrollToTopOnPageChange from './components/ScrollToTop';





export default function App() {
  const [IsMenuOpen, setIsMenuOpen] = React.useState(false);
  const { i18n } = useTranslation();

  useEffect(() => {
    // Check if the URL contains 'ar' or 'en', and set 'ar' as default
    const lang = localStorage.getItem('language');

    if (lang == 'en') {
      i18n.changeLanguage('en');
      document.body.setAttribute('dir', 'ltr');
      localStorage.setItem('language', 'en');
    } else {
      i18n.changeLanguage('ar');
      document.body.setAttribute('dir', 'rtl');
      localStorage.setItem('language', 'ar');
    }
  }, []);


  return (
    <div>
      <ScrollToTopOnPageChange />
      {/* .site-wrapper */}
      <div className="site-wrapper">
        <Header setIsMenuOpen={setIsMenuOpen} />
        <div className="site-content">

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/kitchens' element={<KitchensPage />} />
            <Route path='/dressing' element={<DressingPage />} />
            <Route path='/decorations' element={<DecorationsPage />} />            

            <Route path="*" element={<HomePage />} />
          </Routes>


        </div>{/* .site-content */}
        <Footer />

        <Menu IsMenuOpen={IsMenuOpen} setIsMenuOpen={setIsMenuOpen} />



        <a href="#!" className="atbs-go-top btn btn-default hidden-xs js-go-top-el"><i className="mdicon mdicon-arrow_upward" /></a>
      </div>{/* .site-wrapper */}



    </div>
  )
}
