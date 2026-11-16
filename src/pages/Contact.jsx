import React, { useEffect } from 'react';

export default function Contact() {
  return (
    <>
      <div className="wrapper">
        {/* =========================
        Header
          =========================== */}
        <header id="header" className="header header-transparent">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid pl-5 pr-5 pl-0-m pr-2-m">
              <a className="navbar-brand" href="/">
                <img src="assets/images/logo/white-logo.png" className="logo-light" alt="logo" />
                <img src="assets/images/logo/dark-logo.png" className="logo-dark" alt="logo" />
              </a>
              <a href="#" className="module__btn module__btn-search d-block d-lg-none"><i className="fa fa-search" /></a>
              <button className="navbar-toggler" type="button">
                <span className="menu-lines"><span /></span>
              </button>
              <div className="collapse navbar-collapse" id="mainNavigation">
                <ul className="navbar-nav ml-auto">
                  <li className="nav__item">
                    <a href="/" className="dropdown-toggle nav__item-link ">Home</a>
                  </li>{/* /.nav-item */}
                  <li className="nav__item with-dropdown">
                    <a href="/about" className="dropdown-toggle nav__item-link">About Us</a>
                    <i className="fa fa-angle-right" data-toggle="dropdown" />
                    <ul className="dropdown-menu">
                      {/* <li class="nav__item"><a href="/about" class="nav__item-link">About Us</a></li> */}
                      {/* /.nav-item */}
                      <li className="nav__item"><a href="/projects" className="nav__item-link">Projects</a></li>
                      {/* /.nav-item */}
                      <li className="nav__item"><a href="/certificates" className="nav__item-link">Certificates</a></li>
                      {/* /.nav-item */}
                    </ul>{/* /.dropdown-menu */}
                  </li>{/* /.nav-item */}
                  <li className="nav__item">
                    <a href="/services" className="nav__item-link">Services</a>
                  </li>{/* /.nav-item */}
                  <li className="nav__item">
                    <a href="/products" className="nav__item-link">Products</a>
                  </li>{/* /.nav-item */}
                  <li className="nav__item">
                    <a href="/contact" className="nav__item-link active">Contact Us</a>
                  </li>{/* /.nav-item */}
                  {/* <li class="nav__item align-content-center"><a href="#" class="module__btn module__btn-search"><i
                    class="fa fa-search"></i></a></li> */}
                </ul>{/* /.navbar-nav */}
              </div>{/* /.navbar-collapse */}
              <div className="navbar-modules">
                <ul className="list-unstyled d-flex align-items-center modules__btns-list">
                  <li className="nav__item align-content-center"><a href="#" className="module__btn module__btn-search"><i className="fa fa-search" /></a></li>
                  <li className="nav__item d-none d-lg-block">
                    <a href="https://maps.app.goo.gl/sKsLGZAmc2HAUcSV8" target="_blank" className="nav__item-link">
                      <i className="fa fa-globe mr-1" />
                      Our Location</a>
                  </li>
                  <li className="nav__item d-none d-lg-block">
                    <a href="https://drive.google.com/drive/folders/1MVKGUauvm7WaEyZ0uBuZWzIWJ9QryzvY" target="_blank" className="nav__item-link">
                      <i className="fa fa-download mr-1" />
                      Download Catalog</a>
                  </li>
                  {/* /.nav-item */}
                  {/* <li class="d-none d-lg-block"><a href="/contact" class="btn btn__primary module__btn-request">
                  <span>Request A Quote</span><i class="icon-arrow-right2"></i>
                </a>
              </li> */}
                  {/* <li class="d-none d-lg-block yox">
                <img src="assets/images/logo/30.webp" alt="" srcset="">
              </li> */}
                </ul>{/* /.modules-wrapper */}
              </div>{/* /.navbar-modules */}
            </div>{/* /.container */}
          </nav>{/* /.navabr */}
        </header>{/* /.Header */}
        {/* ========================
       page title 
          =========================== */}
        <section id="pageTitle" className="page-title page-title-layout4 bg-overlay bg-parallax text-center">
          <div className="bg-img"><img src="assets/images/page-titles/certificates.webp" alt="background" /></div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                <h1 className="pagetitle__heading">Contact Us</h1>
                {/* <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
              </ol>
            </nav> */}
              </div>{/* /.col-lg-8 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>{/* /.page-title */}
        {/* =========================== 
      awards
          ============================= */}
        <section id="contact1" className="contact pt-120 bg-gray">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-sm-10 col-md-6 col-lg-5 contact-data">
                <div className="contact-panel bg-bb">
                  <h6 className="contact__panel-title pb-2">Contact Details</h6>
                  <ul className="contact__panel-list list-unstyled">
                    <li><i className="fa fa-map-marker" /><span>Building No. 8303, Ayub Bin Warith Street, Off Salah Al-Din
                        Al-Ayyubi Street, Al-Malaz District, Riyadh 12841, Saudi Arabia</span></li>
                    {/* <li><i class="fa fa-envelope"></i><span><a class="color-theme"
                      href="mailto:info@masaraltaqadom.com">info@masaraltaqadom.com</a></span></li> */}
                    <li><i className="fa fa-envelope" /><span><a className="color-theme" href="mailto:sales@masaraltaqadom.com">sales@masaraltaqadom.com</a></span></li>
                    <li><i className="fa fa-phone" /><span><a href="tel:+966550264606" className="font-weight-bold">+966 55 026
                          4606</a></span></li>
                    <li><i className="fa fa-phone" /><span><a href="tel:+966550160026" className="font-weight-bold">+966 55 016
                          0026</a></span></li>
                    <li><i className="fa fa-phone" /><span><a href="tel:+966504143845" className="font-weight-bold">+966 50 414
                          3845</a></span></li>
                  </ul>
                </div>
                <div className="contact-panel bg-bb">
                  <h6 className="contact__panel-title">our warehouses</h6>
                  <ul className="contact__panel-list contact__panel-list-2">
                    {/* <li>• Al Malaz Exhibition, Riyadh</li> */}
                    <li>• Dammam City Exhibition</li>
                    <li>• Afjah Warehouse, Al Kharj Road</li>
                    <li>• Hail City Warehouse</li>
                    <li>• Hashbal City Warehouse</li>
                    <li>• Jeddah City Warehouse</li>
                  </ul>
                </div>
              </div>{/* /.col-lg-4 */}
              <div className="col-sm-12 col-md-12 col-lg-7">
                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.929138017322!2d46.73761257487362!3d24.66056735322802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f042e52ae7247%3A0x1d824b7b59d11e11!2z2YXYpNiz2LPYqSDZhdiz2KfYsSDYp9mE2KrZgtiv2YUg2YTZhNiq2KzYp9ix2Kk!5e0!3m2!1sen!2seg!4v1784756147282!5m2!1sen!2seg" width="100%" height={690} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
              </div>{/* /.col-lg-8 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>{/* /.contact 1 */}
        <section id="contact1" className="contact pb-110">
          <div className="container">
            <div className="contact-panel mb-40 mb-0-m pb-1-m">
              <h6 className="contact__panel-title pb-2 text-center">Enquiries and Suggestions</h6>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <form>
                  <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                      <div className="form-group"><input type="text" className="form-control" placeholder="Name" /></div>
                    </div>{/* /.col-lg-4 */}
                    <div className="col-sm-4 col-md-4 col-lg-4">
                      <div className="form-group"><input type="email" className="form-control" placeholder="Email" /></div>
                    </div>{/* /.col-lg-4 */}
                    <div className="col-sm-4 col-md-4 col-lg-4">
                      <div className="form-group"><input type="tel" className="form-control" placeholder="Phone" /></div>
                    </div>{/* /.col-lg-4 */}
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <div className="form-group">
                        <textarea className="form-control" placeholder="Message" defaultValue={""} />
                      </div>
                    </div>{/* /.col-lg-12 */}
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <button type="submit" className="btn btn__secondary btn__hover3 btn__block">Submit</button>
                    </div>{/* /.col-lg-12 */}
                  </div>{/* /.row */}
                </form>
              </div>{/* /.col-lg-8 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>{/* /.contact 1 */}
        {/* ========================
      Footer
          ========================== */}
        <footer id="footer" className="footer footer-1 bg-gray">
          <div className="footer-top">
            <div className="pl-5 pr-5 pl-2-m pr-2-m">
              <div className="row justify-content-between align-items-baseline">
                <div className="col-12 col-sm-12 col-md-12 col-lg-3 footer__widget footer__widget-about">
                  <div className="footer__widget-content">
                    <a href="/">
                      <img src="assets/images/logo/flogo.webp" alt="logo" />
                    </a>
                    <div className="footer__widget-content">
                      <p><i className="fa fa-map-marker pr-2" />Building No. 8303, Ayub Bin Warith Street, Off Salah Al-Din
                        Al-Ayyubi Street, Al-Malaz District,
                        Riyadh 12841, Saudi Arabia
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="social__icons w-100">
                        <a href="https://www.linkedin.com/company/masar-al-taqadom/?originalSubdomain=sa" target="_blank"><i className="fa fa-linkedin-square" /></a>
                        <a href="https://www.facebook.com/61560961435285/mentions/" target="_blank"><i className="fa fa-facebook-square" /></a>
                      </div>{/* /.social-icons */}
                    </div>{/* /.col-lg-6 */}
                  </div>
                </div>{/* /.col-lg-4 */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2 footer__widget footer__widget-nav">
                  <div className="footer__widget-content">
                    <h6 className="footer__widget-title">Contact Details</h6>
                    <div className="contact-panel">
                      <ul className="contact__panel-list list-unstyled">
                        <li><i className="fa fa-envelope" /><span><a href="mailto:info@masaraltaqadom.com">info@masaraltaqadom.com</a></span>
                        </li>
                        <li><i className="fa fa-phone" /><span><a href="tel:+966550264606" className="font-weight-bold">+966 55
                              026
                              4606</a></span></li>
                        <li><i className="fa fa-phone" /><span><a href="tel:+966550160026" className="font-weight-bold">+966 55
                              016
                              0026</a></span></li>
                        <li><i className="fa fa-phone" /><span><a href="tel:+966504143845" className="font-weight-bold">+966 50
                              414
                              3845</a></span></li>
                      </ul>
                    </div>
                  </div>{/* /.footer-widget-content */}
                </div>{/* /.col-lg-2 */}
                <div className="col-12 col-sm-6 col-md-3 col-lg-2 footer__widget footer__widget-nav">
                  <h6 className="footer__widget-title">Quick Links</h6>
                  <div className="footer__widget-content">
                    <nav>
                      <ul className="list-unstyled">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                      </ul>
                    </nav>
                  </div>{/* /.footer-widget-content */}
                </div>{/* /.col-lg-2 */}
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 footer__widget footer__widget-newsletter">
                  <div className="footer__widget-content">
                    <h6 className="footer__widget-title">Newsletter</h6>
                    <p>Sign up for industry alerts, our latest news, thoughts, and insights from Industic.</p>
                    <form className="widget__newsletter-form">
                      <div className="form-group mb-0">
                        <input type="text" className="form-control" placeholder="Your Email Address " />
                        <button type="submit" className="btn btn__primary btn__hover2">Subscribe</button>
                      </div>
                    </form>
                  </div>{/* /.footer-widget-content */}
                  <div className="text-right mt-20">
                    <span className="footer__contact-link">Have a question?
                      <a href="/contact">Click here</a>
                    </span>
                  </div>
                </div>{/* /.col-lg-4 */}
              </div>{/* /.row */}
            </div>{/* /.container */}
          </div>{/* /.footer-top */}
          <div className="footer-bottom">
            <div className="pl-5 pr-5 pl-2-m pr-2-m">
              <div className="row">
                <div className="col-sm-12 col-md-9 col-lg-9">
                  <div className="footer__copyright">
                    <nav>
                      <ul className="list-unstyled footer__copyright-links d-flex flex-wrap">
                        <li>
                          <a href="https://glitci.com/" target="_blank">
                            © 2026 Masar, Developed by <span className="color-theme">Glitci Software Solutions</span>
                          </a>
                        </li>
                        {/* <li><a href="#">Terms & Conditions </a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Sitemap</a></li> */}
                      </ul>
                    </nav>
                  </div>{/* /.Footer-copyright */}
                </div>{/* /.col-lg-6 */}
                {/* <div class="col-sm-12 col-md-3 col-lg-3 d-flex align-items-center">
              <div class="social__icons justify-content-end w-100">
                <a href="https://www.linkedin.com/company/masar-al-taqadom/?originalSubdomain=sa" target="_blank"><i
                    class="fa fa-linkedin"></i></a>
                <a href="https://www.facebook.com/61560961435285/mentions/" target="_blank"><i
                    class="fa fa-facebook"></i></a>
              </div>
            </div> */}
              </div>{/* /.row */}
            </div>{/* /.Footer-bottom */}
          </div>{/* /.container */}
        </footer>{/* /.Footer */}
        <button id="scrollTopBtn"><i className="fa fa-long-arrow-up" /></button>
        <div className="module__search-container">
          <i className="fa fa-times close-search" />
          <form className="module__search-form" action="search.html" method="GET">
            <input type="search" name="q" className="search__input" placeholder="Type words then press Enter" required />
            <button type="submit" className="module__search-btn">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
      </div>{/* /.wrapper */}
      
    </>
  );
}



