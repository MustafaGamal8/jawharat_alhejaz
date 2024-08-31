import { t } from 'i18next'
import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="site-footer footer-1" style={{ backgroundImage: 'url("images/npZQYFZZwBxl.jpg")' }}>
        <div className="container-fullwidth">
          <div className="site-footer__section text-center">
            <div className="footer-text text-center">
              <h1>{t('Why are we the best choice?')}</h1>
              
          <br />
              <p>{t('Over ten years of experience in the beauty industry')}</p>
              <p>{t('A long track record of achievements in Saudi Arabia and Egypt')}</p>
              <p>{t('A team of skilled craftsmen and creative designers.')}</p>
              <p>{t('Modern designs to suit all tastes')}</p>
              <p>{t('Commitment to quality and accuracy in implementation')}</p>
            
            </div>
          </div>
          <div className="site-footer__section">
            {/* <div className="section-row flex-box  flex-box-4i flex-space-30">
              <div className="section-column">
                <h4 className="heading-footer">HEAD OFFICE</h4>
                <ul className="list-unstyled list-space-sm">
                  <li>
                    <div className="icon-text">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                        <g>
                          <path d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5  c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021  C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333    s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z" />
                        </g>
                      </svg>
                      <p>3146 New York</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <svg width={1024} height={1024} viewBox="0 0 1024 1024"><g><path d="M704 640c-64 64-64 128-128 128s-128-64-192-128-128-128-128-192 64-64 128-128-128-256-192-256-192 192-192 192c0 128 131.5 387.5 256 512s384 256 512 256c0 0 192-128 192-192s-192-256-256-192z" /></g></svg>
                      <p>012-345-6789</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <svg width={1024} height={1024} viewBox="0 0 1024 1024"><g><path d="M896 704v-512c0-35.2-28.8-64-64-64h-640c-35.2 0-64 28.8-64 64v512h-128v192h1024v-192h-128zM640 832h-256v-64h256v64zM832 704h-640v-511.886c0.034-0.040 0.076-0.082 0.114-0.114h639.77c0.040 0.034 0.082 0.076 0.116 0.116v511.884z" /></g></svg>
                      <p>818-674-1177</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <svg width={1024} height={1024} viewBox="0 0 1024 1024"><g><path d="M928 128h-832c-52.8 0-96 43.2-96 96v640c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-640c0-52.8-43.2-96-96-96zM398.74 550.372l-270.74 210.892v-501.642l270.74 290.75zM176.38 256h671.24l-335.62 252-335.62-252zM409.288 561.698l102.712 110.302 102.71-110.302 210.554 270.302h-626.528l210.552-270.302zM625.26 550.372l270.74-290.75v501.642l-270.74-210.892z" /></g></svg>
                      <p>exemple@gmail.com</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="section-column">
                <h4 className="heading-footer">SITE LINKS</h4>
                <nav className="footer-menu">
                  <ul className="navigation navigation--footer list-space-sm">
                    <li><a href="./contact.html">Contact</a></li>
                    <li><a href="./404">404</a></li>
                    <li><a href="#!">Documentation</a></li>
                    <li><a href="#!">All features</a></li>
                    <li><a href="#!">Other themes</a></li>
                  </ul>
                </nav>
              </div>
              <div className="section-column">
                <h4 className="heading-footer">HEAD OFFICE</h4>
                <ul className="list-unstyled list-space-sm">
                  <li>
                    <div className="icon-text">
                      <p>Brian Lewis</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <p>Chas R. Walker</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <p>Christy Mullen</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <p>David B. Bass</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <p>Jennifer Mankin</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon-text">
                      <p>Ann Allen</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="section-column">
                <h4 className="heading-footer">PRACTICE AREAS</h4>
                <nav className="footer-menu">
                  <ul className="navigation navigation--footer list-space-sm">
                    <li><a href="./contact.html">Contact</a></li>
                    <li><a href="./404">404</a></li>
                    <li><a href="#!">Documentation</a></li>
                    <li><a href="#!">All features</a></li>
                    <li><a href="#!">Other themes</a></li>
                  </ul>
                </nav>
              </div>
            </div> */}
          </div>
          <div className="site-footer__section" style={{display:"flex", justifyContent:"center", alignItems:"center",gap:"10px"}}>
            <div className="copy-right text-center">{t('Website Created By')} <a href="https://www.facebook.com/guessiteg">Guessit</a> </div>
            <p style={{color:"white"}}>|</p>
            <div className="copy-right text-center">Ⓒ {new Date().getFullYear()} - All Rights Are Reserved</div>
          </div>
        </div>
      </footer>
    </>
  )
}
