import React, { useEffect } from 'react';

export default function ProductCatalog() {
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
                    <a href="/products" className="nav__item-link active">Products</a>
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
        <section id="pageTitle" className="page-title page-title-layout7 bg-parallax">
          <div className="bg-img"><img src="assets/images/page-titles/products.webp" alt="background" /></div>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
                <span className="pagetitle__subheading">Building The Future, Restoring The Past</span>
                <h1 className="pagetitle__heading">Individually Assess Each Plan &amp;
                  Offer Optimal Solutions!</h1>
                {/* <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Products</li>
              </ol>
            </nav> */}
              </div>{/* /.col-xl-8 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>{/* /.page-title */}
        {/* =========================== 
      products
          ============================= */}
        <div className="page pt-90 pb-90">
          {/* ================= SIDEBAR ================= */}
          <aside>
            <a href="https://drive.google.com/drive/folders/1MVKGUauvm7WaEyZ0uBuZWzIWJ9QryzvY" target="_blank" className="btn btn__default sidebar-btn w-100 pl-3 pr-3"><i><img style={{width: 12, marginRight: 10}} src="assets/images/icons/donwload.svg" alt="" /></i>Download catalogue</a>
            <div className="sidebar-block">
              <h2 className="sidebar-title">Categories</h2>
              <ul className="cat-list" id="categoryList" />
            </div>
            <div className="sidebar-block">
              <h2 className="sidebar-title">Featured Items</h2>
              <ul className="recent-list" id="recentList" />
            </div>
          </aside>
          {/* ================= MAIN ================= */}
          <main>
            <div className="toolbar">
              <h1 id="pageHeading">All Products</h1>
              <form className="search-box" id="searchForm">
                <input type="text" id="searchInput" placeholder="Search anything..." />
                <button type="submit" aria-label="Search">
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none">
                    <circle cx={11} cy={11} r={7} stroke="white" strokeWidth={2} />
                    <line x1={21} y1={21} x2="16.65" y2="16.65" stroke="white" strokeWidth={2} strokeLinecap="round" />
                  </svg>
                </button>
              </form>
            </div>
            <div className="active-filters" id="activeFilters" />
            <div className="results-info" id="resultsInfo" />
            <div className="grid-wrap" id="gridWrap">
              <div className="spinner" />
              <div className="grid" id="grid" />
            </div>
            <div className="pagination" id="pagination" />
          </main>
        </div>
        <section className="pt-60 pb-60 pb-0-m">
          <div className="container hero">
            <div className="hero__content">
              <h1 className="hero__title">Building Better Water Networks Starts Here.</h1>
              <p className="hero__desc">Discover reliable water infrastructure solutions, quality products, and professional project support tailored to your requirements.</p>
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



