import React, { useEffect } from 'react';

export default function Certificates() {
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
                    <a href="/about" className="dropdown-toggle nav__item-link active">About Us</a>
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
                    <a href="/contact" className="nav__item-link">Contact Us</a>
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
        <section id="pageTitle" className="page-title page-title-layout4 bg-overlay bg-parallax text-center bg-img" style={{ backgroundImage: `url(assets/images/page-titles/certificates.webp)`, backgroundSize: "cover", backgroundPosition: "center" }}>
          
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                <h1 className="pagetitle__heading">Certificates</h1>
                {/* <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Certificates</li>
              </ol>
            </nav> */}
              </div>{/* /.col-lg-8 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>{/* /.page-title */}
        {/* =========================== 
      awards
          ============================= */}
        <section id="awards" className="awards">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-10 offset-lg-1">
                <div className="heading heading-3 text-center mb-50">
                  <span className="heading__subtitle">Manufacture A Variety Of High Quality Products</span>
                  <h2 className="heading__title">A Leading Industrial &amp; Manufacturing Company, Serving Since 1997.</h2>
                </div>{/* /.heading */}
              </div>{/* /.col-lg-10 */}
            </div>{/* /.row */}
            <div className="row justify-content-center">
              {/* feature item #1 */}
              <div className="col-sm-12 col-md-4 col-lg-4 pt-3-m">
                <div className="feature-item cardd">
                  <div className="feature__img logo" data-toggle="modal" data-target=".bd-example-modal-lg">
                    <img src="assets/images/clients/1.webp" alt="certificate" className="img-fluid" />
                    <h4 data-toggle="modal" data-target=".bd-example-modal-lg" className="feature__title mt-3">View Certificates
                    </h4>
                  </div>{/* /.feature-img */}
                  {/* <div class="feature__content">
                <p class="feature__desc">Issued by Infinity Cert International (ICI), certifying compliance with ISO
                  14001:2015 for the environmental management system covering the production of polypropylene fittings
                  and saddles for drinking water and irrigation systems.</p>
              </div> */}
                </div>{/* /.feature-item */}
                {/* Modal */}
                <div className="modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          {/* feature item #1 */}
                          <div className="col-sm-12 col-md-12 col-lg-12 pb-3">
                            <div className="feature-item">
                              <div className="feature__img">
                                <img src="assets/images/awards/certificate-1.webp" alt="certificate" className="img-fluid" />
                              </div>
                              <div className="feature__content">
                                <h4 className="feature__title">ISO 14001:2015 <br />Environmental Management System Certificate
                                </h4>
                              </div>
                            </div>
                          </div>
                          {/* feature item #2 */}
                          <div className="col-sm-12 col-md-12 col-lg-12 pb-3">
                            <div className="feature-item">
                              <div className="feature__img">
                                <img src="assets/images/awards/certificate-2.webp" alt="certificate" className="img-fluid" />
                              </div>
                              <div className="feature__content">
                                <h4 className="feature__title">ISO 9001:2015 <br />Quality Management System Certificate</h4>
                              </div>
                            </div>
                          </div>
                          {/* feature item #3 */}
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <div className="feature-item">
                              <div className="feature__img">
                                <img src="assets/images/awards/certificate-3.webp" alt="certificate" className="img-fluid" />
                              </div>
                              <div className="feature__content">
                                <h4 className="feature__title">National Organization for Potable Water &amp; Sanitary Drainage</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/* /.col-lg-4 */}
              {/* feature item #2 */}
              <div className="col-sm-12 col-md-4 col-lg-4 pt-3-m">
                <div className="feature-item cardd">
                  <div className="feature__img logo" data-toggle="modal" data-target=".bd-example-modal-lg2">
                    <img src="assets/images/clients/logo_saber.svg" alt="certificate" className="img-fluid" />
                    <h4 data-toggle="modal" data-target=".bd-example-modal-lg" className="feature__title mt-3">View Certificates
                    </h4>
                  </div>{/* /.feature-img */}
                  {/* <div class="feature__content">
                <p class="feature__desc">Issued by Infinity Cert International (ICI), certifying compliance with ISO
                  14001:2015 for the environmental management system covering the production of polypropylene fittings
                  and saddles for drinking water and irrigation systems.</p>
              </div> */}
                </div>{/* /.feature-item */}
                {/* Modal */}
                <div className="modal fade bd-example-modal-lg2" tabIndex={-1} role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-lg modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="row">
                          {/* feature item #1 */}
                          <div className="col-sm-12 col-md-12 col-lg-12 pb-3">
                            <div className="feature-item">
                              <div className="feature__img">
                                <img src="assets/images/awards/saber-1-1.webp" alt="certificate" className="img-fluid" />
                                <img src="assets/images/awards/saber-1-2.webp" alt="certificate" className="img-fluid" />
                                <img src="assets/images/awards/saber-1-3.webp" alt="certificate" className="img-fluid" />
                                <img src="assets/images/awards/saber-1-4.webp" alt="certificate" className="img-fluid" />
                                <img src="assets/images/awards/saber-1-5.webp" alt="certificate" className="img-fluid" />
                              </div>
                              <div className="feature__content">
                                <h4 className="feature__title">Certificate of conformity
                                  for regulated products (PP compression pipe fittings)
                                </h4>
                              </div>
                            </div>
                          </div>
                          {/* feature item #2 */}
                          <div className="col-sm-12 col-md-12 col-lg-12 pb-3">
                            <div className="feature-item">
                              <div className="feature__img">
                                <img src="assets/images/awards/saber-2-1.webp" alt="certificate" className="img-fluid" />
                                <img src="assets/images/awards/saber-2-2.webp" alt="certificate" className="img-fluid" />
                                <img src="assets/images/awards/saber-2-3.webp" alt="certificate" className="img-fluid" />
                                <img src="assets/images/awards/saber-2-4.webp" alt="certificate" className="img-fluid" />
                              </div>
                              <div className="feature__content">
                                <h4 className="feature__title">Certificate of conformity
                                  for regulated products (PP coated flange)</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{/* /.col-lg-4 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>{/* /.awards */}
        <section className="pt-60 pb-60 pb-0-m">
          <div className="container hero">
            <div className="hero__content">
              <h1 className="hero__title">Building Better Water Networks Starts Here.</h1>
              <p className="hero__desc">Discover reliable water infrastructure solutions, quality products, and professional
                project support tailored to your requirements.</p>
              <a href="/contact" className="hero__cta">
                Request A Quote
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1={5} y1={12} x2={19} y2={12} />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
            <div className="hero__art">
              <img src="assets/images/products/cta.png" alt="Socket End Non-rising Stem Resilient Seated Gate Valve For PVC Pipe" />
            </div>
          </div>
        </section>
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
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 footer__widget footer__widget-nav">
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
                <div className="col-12 col-sm-6 col-md-2 col-lg-2 footer__widget footer__widget-nav">
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
          <form className="module__search-form" action="/search" method="GET">
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



