import React, { useEffect } from 'react';

export default function About() {
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
                <h1 className="pagetitle__heading">About Us</h1>
                {/* <nav aria-label="breadcrumb">
              <ol class="breadcrumb justify-content-center">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">About Us</li>
              </ol>
            </nav> */}
              </div>{/* /.col-lg-8 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>{/* /.page-title */}
        {/* =========================== 
      awards
          ============================= */}
        <section id="about2" className="about about-2 pt-90 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 pr-4">
                <div className="about__text">
                  <div className="heading d-flex align-items-center mb-10">
                    {/* <span class="line"></span> */}
                    <img className="title-icon" src="assets/images/icons/title-icon.webp" alt="" />
                    <h2 className="heading__title color-theme">About Us</h2>
                  </div>
                  <div className="blog-item mb-0">
                    <div className="blog__content p-0">
                      <h4 className="blog__title color-theme">Masar Al Taqadom Trading EST is a Saudi-based company established
                        in 1990 by Engineer Fawzy Eltaweel,
                      </h4>
                    </div>{/* /.entry-content */}
                  </div>
                  <p>One of the pioneers in the field with over 30 years of expertise. As one of the
                    oldest and most trusted companies in the Kingdom and the Gulf region, Masar Al Taqadom has built a
                    strong reputation for reliability and excellence.
                  </p>
                  <p>The company specializes in importing high-density polyethylene (HDPE) pipe fittings used in water
                    projects through both heat fusion and electrofusion welding. In addition, Masar Al Taqadom supplies a
                    wide range of essential components for infrastructure and landscaping projects, ensuring comprehensive
                    solutions that meet the highest quality standards.
                  </p>
                  <p>MASAR is one of the biggest companies in Saudi Arabia that specializes in water management systems.
                    Known as the slogan EVK. MASAR was founded in 1990 and has more than 30 years of expertise in the
                    plastic water systems for irrigation and drinking. MASAR specializes in importing high-density
                    polyethylene Compression fittings used in water projects, whether by heat or electric welding.
                    <button className="read-more-btn" type="button">
                      Read More
                    </button>
                    <span className="hidden-text">
                      The company also imports the necessary pieces for the infrastructure and landscape. Our mission is to
                      be a
                      leader in the manufacturing and trading of high-quality polypropylene and polyethylene fittings
                      products
                      for water systems, including drinking water and irrigation systems, and fire-fighting equipment. We
                      are
                      committed to providing reliable solutions that meet the evolving needs of our customers while
                      prioritizing safety, quality, and sustainability.</span>
                  </p>
                </div>
                {/* <div class="signature mb-30">
              <img src="assets/images/about/singnture.png" alt="singnture" class="signature">
      
            </div> */}
              </div>{/* /.col-lg-4 */}
              <div className="col-sm-12 col-md-8 col-lg-6">
                <img src="assets/images/about/2.webp" alt="about" className="img-fluid" />
              </div>{/* /.col-lg-5 */}
            </div>{/* /.row */}
            <div className="row mt-90 flex-column-reverse flex-lg-row flex-md-row flex-sm-row flex-xl-row">
              <div className="col-sm-12 col-md-8 col-lg-6 pr-4">
                <img src="assets/images/about/mission.webp" alt="about" className="img-fluid stretch" />
              </div>{/* /.col-lg-5 */}
              <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center flex-column pb-3-m">
                <div className="about__text2">
                  <div className="heading d-flex align-items-center">
                    {/* <span class="line"></span> */}
                    <img className="title-icon" src="assets/images/icons/title-icon.webp" alt="" />
                    <h2 className="heading__title color-theme">Our Mission</h2>
                  </div>
                  <p>
                    At Masar Al Taqadom Trading EST, our mission is to deliver high-quality polyethylene and polypropylene
                    piping systems and fittings for water, irrigation, and fire-fighting applications.
                    We are committed to:
                  </p>
                  <ul>
                    <li>Supplying reliable and certified products that meet international standards</li>
                    <li>Supporting infrastructure and landscaping projects with complete solutions</li>
                    <li>Building long-term relationships based on trust and performance</li>
                    <li>Prioritizing safety, sustainability, and continuous improvement</li>
                    <li>Meeting the evolving needs of the water management sector in the Kingdom</li>
                  </ul>
                </div>
                {/* <div class="signature mb-30">
              <img src="assets/images/about/singnture.png" alt="singnture" class="signature">
      
            </div> */}
              </div>{/* /.col-lg-4 */}
            </div>{/* /.row */}
            <div className="row mt-90">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="about__text2">
                  <div className="heading d-flex align-items-center">
                    {/* <span class="line"></span> */}
                    <img className="title-icon" src="assets/images/icons/title-icon.webp" alt="" />
                    <h2 className="heading__title color-theme">Our Vision</h2>
                  </div>
                  <p>
                    To be the leading provider of advanced water management and piping solutions in Saudi Arabia and the
                    Gulf region, recognized for innovation, quality, and long-term partnerships that support sustainable
                    infrastructure development.
                  </p>
                </div>
                {/* <div class="signature mb-30">
              <img src="assets/images/about/singnture.png" alt="singnture" class="signature">
      
            </div> */}
              </div>{/* /.col-lg-4 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>{/* /.About 2 */}
        <section id="banner3" className="banner banner-2 fancybox-white bg-overlay bg-overlay-theme inner-padding">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-12 col-md-12 col-lg-12 counters-div">
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-3">
                    <div className="counter-item counters-white">
                      <span className="d-flex justify-content-center align-items-center suffix">
                        <h4 className="counter">30</h4>+
                      </span>
                      <p className="counter__subtitle">Years of Experience</p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-3">
                    <div className="counter-item counters-white">
                      <span className="d-flex justify-content-center align-items-center suffix">
                        <h4 className="counter">3,000</h4>+
                      </span>
                      <p className="counter__subtitle">Available Products</p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-3">
                    <div className="counter-item counters-white">
                      <span className="d-flex justify-content-center align-items-center suffix">
                        <h4 className="counter">200</h4>+
                      </span>
                      <p className="counter__subtitle">Projects Supported</p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-3">
                    <div className="counter-item counters-white">
                      <span className="d-flex justify-content-center align-items-center suffix">
                        <h4 className="counter">1000</h4>+
                      </span>
                      <p className="counter__subtitle">Satisfied clients</p>
                    </div>
                  </div>
                </div>
                {/* <div class="bg-img"><img src="assets/images/banners/1.jpg" alt="background"> */}
              </div>{/* /.col-lg-6 */}
            </div>{/* /.row */}
          </div>{/* /.container */}
        </section>{/* /. Banner 2 */}
        <section id="blogGrid" className="blog blog-grid pt-120 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 offset-lg-3">
                <div className="heading text-center mb-50">
                  <span className="heading__subtitle">Looking For The Right Products For Your Project? </span>
                  <h2 className="heading__title">Contact Our Team</h2>
                  <div className="divider__line divider__theme divider__center mb-0" />
                  {/* <p class="heading__desc">Follow our latest news and thoughts which focuses exclusively on insight,
                industry trends, top news headlines.</p> */}
                </div>{/* /.heading */}
              </div>{/* /.col-lg-6 */}
            </div>{/* /.row*/}
            <div className="row">
              {/* Blog Item #1 */}
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="blog-item">
                  <div className="blog__img">
                    <a href="#">
                      <img src="assets/images/blog/grid/1.webp" alt="blog image" />
                    </a>
                  </div>{/* /.entry-img */}
                  <div className="blog__content">
                    <h4 className="blog__title">Supplying Infrastructure Projects
                      Across Saudi Arabia </h4>
                    <p className="blog__desc">Supplying fittings, valves, and water connection
                      accessories for infrastructure and utility projects.</p>
                  </div>{/* /.entry-content */}
                </div>{/* /.blog-item */}
              </div>{/* /.col-lg-4 */}
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="blog-item">
                  <div className="blog__img">
                    <a href="#">
                      <img src="assets/images/blog/grid/2.webp" alt="blog image" />
                    </a>
                  </div>{/* /.entry-img */}
                  <div className="blog__content">
                    <h4 className="blog__title">Commercial Developments</h4>
                    <p className="blog__desc">Supporting commercial and residential developments with reliable water system
                      products.</p>
                  </div>{/* /.entry-content */}
                </div>{/* /.blog-item */}
              </div>{/* /.col-lg-4 */}
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="blog-item">
                  <div className="blog__img">
                    <a href="#">
                      <img src="assets/images/blog/grid/3.webp" alt="blog image" />
                    </a>
                  </div>{/* /.entry-img */}
                  <div className="blog__content">
                    <h4 className="blog__title">Industrial Facilities</h4>
                    <p className="blog__desc">Providing durable connection solutions and welding equipment for industrial
                      applications.</p>
                  </div>{/* /.entry-content */}
                </div>{/* /.blog-item */}
              </div>{/* /.col-lg-4 */}
            </div>{/* /.row*/}
          </div>{/* /.container */}
        </section>{/* /.blog Grid */}
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



