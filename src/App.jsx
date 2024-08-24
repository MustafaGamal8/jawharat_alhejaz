import React, { useEffect } from 'react'
import './css/hdpwURSFdeQx.css'
import './js/fFQtoz9nO7FV.js'
import './js/Ru91PHFAYqFq.js'
import './js/KSPrHpE0UCiQ.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Section1 from './components/sections/Section1.jsx'
import Section2 from './components/sections/Section2.jsx'
import Section3 from './components/sections/Section3.jsx'
import Section4 from './components/sections/Section4.jsx'
import Section5 from './components/sections/Section5.jsx'
import Section6 from './components/sections/Section6.jsx'
import Section7 from './components/sections/Section7.jsx'
import Section8 from './components/sections/Section8';
import Menu from './components/Menu';
import  { t } from 'i18next'
import { useTranslation } from 'react-i18next'





export default function App() {
  const [IsMenuOpen, setIsMenuOpen] = React.useState(false)
  const { i18n } = useTranslation();


  useEffect(() => {
    const currentLanguage = localStorage.getItem('language')

    if (currentLanguage === 'en') {
      i18n.changeLanguage('en')
      document.body.setAttribute('dir', 'ltr')
      localStorage.setItem('language', 'en')
    } else {      
      i18n.changeLanguage('ar')
      document.body.setAttribute('dir', 'rtl')
      localStorage.setItem('language', 'ar')
    }
  },[])

  
  return (
    <div>
      {/* .site-wrapper */}
      <div className="site-wrapper">
        <Header setIsMenuOpen={setIsMenuOpen} />
        <div className="site-content">

          <Section1 />
          <Section2 />
          <Section8 />

          <Section3 />
          <Section4 />
          <Section5 />
          {/* <Section6 /> */}
          <Section7 />


        </div>{/* .site-content */}
        <Footer />

        <Menu IsMenuOpen={IsMenuOpen} setIsMenuOpen={setIsMenuOpen} />



        <a href="#!" className="atbs-go-top btn btn-default hidden-xs js-go-top-el"><i className="mdicon mdicon-arrow_upward" /></a>
      </div>{/* .site-wrapper */}



    </div>
  )
}
