import React from 'react'

export default function Menu({IsMenuOpen, setIsMenuOpen}) {
  return (
    <>
    {/* Off-canvas menu */}
    <div id="atbs-offcanvas-primary" className="atbs-offcanvas js-atbs-offcanvas scrollbar-hidden" style={IsMenuOpen ? {opacity: 1, visibility: 'visible'}:{opacity: 0, visibility: 'hidden'}}>
          <div className="atbs-offcanvas__section flex-box">
            <div className="column-left">
              <ul id="menu-offcanvas-menu" className="navigation navigation--offcanvas">
                <li className="menu-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="menu-item">
                  <a href="single-1.html">Single</a>
                </li>
                <li className="menu-item-has-children">
                  <a href="#!">Archive</a>
                  <ul className="sub-menu">
                    <li><a href="category.html">Category</a></li>
                    <li><a href="author.html">Author</a></li>
                    <li><a href="search.html">Search</a></li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#!">Pages</a>
                  <ul className="sub-menu">
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="service.html">Service</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="404.html">404</a></li>
                    <li><a href="page.html">Page</a></li>
                    <li><a href="typography.html">Typography</a></li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="column-right">
              <button  onClick={() => setIsMenuOpen(false)} className="atbs-offcanvas-close js-atbs-offcanvas-close" aria-label="Close"><span aria-hidden="true">✕</span></button>
              <div className="offcanvas-background">
                <img src="images/npZQYFZZwBxl.jpg" alt="File not found" />
              </div>
            </div>
          </div>
          <div className="atbs-offcanvas__section flex-box">
            <div className="column-left">
              <form className="search-form search-form--horizontal" method="get" action="#">
                <div className="search-form__input-wrap">
                  <input type="text" name="s" className="search-form__input" placeholder="Search" defaultValue />
                </div>
                <div className="search-form__submit-wrap">
                  <button type="submit" className="search-form__submit btn btn-primary"><i className="mdicon mdicon-search" /></button>
                </div>
              </form>
            </div>
            <div className="column-right">
              <div className="flex-box flex-box-3i flex-space-30">
                <div className="section-column">
                  <h5 className="paragraph-heading">Get In Touch</h5>
                  <p className="paragraph-text">541 Melville Ave, Palo Alto, CA 94301</p>
                  <p className="paragraph-text">Email: exemple@gmail.com</p>
                  <p className="paragraph-text">Phone: +012.345.6789</p>
                </div>
                <div className="section-column">
                  <h5 className="paragraph-heading">Work Inquiries</h5>
                  <p className="paragraph-text">Email: exemple@gmail.com</p>
                  <p className="paragraph-text">Phone: +012.345.6789</p>
                </div>
                <div className="section-column">
                  <ul className="social-list list-horizontal">
                    <li><a href="#!"><i className="mdicon mdicon-facebook" /></a>
                    </li>
                    <li><a href="#!"><i className="mdicon mdicon-twitter" /></a>
                    </li>
                    <li><a href="#!"><i className="mdicon mdicon-youtube" /></a>
                    </li>
                    <li><a href="#!"><i className="mdicon mdicon-google-plus" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>{/* Off-canvas menu */}
    </>
  )
}
