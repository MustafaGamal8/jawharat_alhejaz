import { t } from 'i18next'
import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="site-footer footer-1" style={{ backgroundImage: 'url("images/npZQYFZZwBxl.jpg")' }}>
        <div className="container-fullwidth">
          <div className="site-footer__section">
            <div className="section-row flex-box  flex-box-4i flex-space-30" >
              <div className="section-column">
                <h4 className="heading-footer">{t('Why are we the best choice?')}</h4>
                <ol className="list-unstyled list-space-sm">
                  <li>
                    <div className="icon-text">
                      <p style={{ fontSize: "15px", marginBottom: "4px" }}>*{t('Over ten years of experience in the beauty industry')}</p>
                    </div>

                    <div className="icon-text">
                      <p style={{ fontSize: "15px", marginBottom: "4px" }}>*{t('A long track record of achievements in Saudi Arabia and Egypt')}</p>
                    </div>

                    <div className="icon-text">
                      <p style={{ fontSize: "15px", marginBottom: "4px" }}>*{t('A team of skilled craftsmen and creative designers.')}</p>
                    </div>

                    <div className="icon-text">
                      <p style={{ fontSize: "15px", marginBottom: "4px" }}>*{t('Modern designs to suit all tastes')}</p>
                    </div>

                    <div className="icon-text">
                      <p style={{ fontSize: "15px", marginBottom: "4px" }}>*{t('Commitment to quality and accuracy in implementation')}</p>
                    </div>
                  </li>

                </ol>
              </div>

              <div className="section-column">
                <h4 className="heading-footer">{t('Contact Information')}</h4>
                <ul className="list-unstyled list-space-sm">
                  <li>
                    <div className="icon-text">
                      <svg width={1024} height={1024} viewBox="0 0 1024 1024"><g><path d="M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128-128-256-192-256-192 192-192 192c0 128 131.5 387.5 256 512s384 256 512 256c0 0 192-128 192-192s-192-256-256-192z" /></g></svg>
                      <p>01050677802</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <svg width={1024} height={1024} viewBox="0 0 1024 1024"><g><path d="M928 128h-832c-52.8 0-96 43.2-96 96v640c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-640c0-52.8-43.2-96-96-96zM398.74 550.372l-270.74 210.892v-501.642l270.74 290.75zM176.38 256h671.24l-335.62 252-335.62-252zM409.288 561.698l102.712 110.302 102.71-110.302 210.554 270.302h-626.528l210.552-270.302zM625.26 550.372l270.74-290.75v501.642l-270.74-210.892z" /></g></svg>
                      <p> info@guessitt.com</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="section-column">
                <ul className="list-unstyled list-space-sm" style={{ display: "flex", justifyContent: "space-between" }}>
                  <li>
                    <a href='#!' style={{ width: "32px", height: "32px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#b2811f", padding: "4px", }}>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 16 16" id="facebook">
                        <path fillRule="evenodd" d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href='#!' style={{ width: "32px", height: "32px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#b2811f", padding: "4px", }}>
                      <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 16 16" id="twitter">
                        <path d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href='#!' style={{ width: "32px", height: "32px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#b2811f", padding: "4px", }}>
                      <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 16 16" id="youtube">
                        <path fill-rule="evenodd" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438zM6 11.5v-6l5 3-5 3z" clip-rule="evenodd"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href='#!' style={{ width: "32px", height: "32px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#b2811f", padding: "4px", }}>
                      <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 16 16" id="instagram">
                        <path d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"></path>
                        <path d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"></path>
                        <circle cx="12.3" cy="3.7" r=".533"></circle>
                      </svg>
                    </a>
                  </li>

                </ul>
              </div>



            </div>
          </div>
          <div className="site-footer__section" style={{ display: "flex", flexDirection: "column-reverse", justifyContent: "center", alignItems: "center", gap: "10px" }}>
            <div className="copy-right text-center">{t('By')} <a href="https://www.facebook.com/guessiteg">Guessit</a> </div>
            <div className="copy-right text-center">|</div>
            <div className="copy-right text-center">{t('All Rights Are Reserved')} - Ⓒ {new Date().getFullYear()}  </div>
          </div>
        </div>
      </footer>
    </>
  )
}
