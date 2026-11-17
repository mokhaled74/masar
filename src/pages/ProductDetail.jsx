import React, { useEffect } from 'react';

export default function ProductDetail() {
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
        <section id="pageTitle" className="page-title page-title-layout7 bg-parallax bg-img" style={{ backgroundImage: `url(assets/images/page-titles/products.webp)`, backgroundSize: "cover", backgroundPosition: "center" }}>
          
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
                <span className="pagetitle__subheading">Building The Future, Restoring The Past</span>
                <h1 className="pagetitle__heading">Individually Assess Each Plan &amp;
                  Offer Optimal Solutions!</h1>
                {/* <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="/products">Products</a></li>
                <li class="breadcrumb-item active" aria-current="page">Product Details</li>
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
          <a className="back-link" id="backLink" href="/products">‹ Back to Products</a>
          <div className="top row flex-column flex-lg-row flex-md-row flex-sm-row flex-xl-row">
            {/* ============ GALLERY ============ */}
            <div className="gallery col-lg-4 col-12">
              <div className="gallery-main" id="galleryMain">
                <button className="gallery-nav gallery-nav-prev" id="galleryPrev" aria-label="Previous image">❮</button>
                <div className="gallery-main-media" id="galleryMedia" />
                <button className="gallery-nav gallery-nav-next" id="galleryNext" aria-label="Next image">❯</button>
              </div>
              <div className="thumb-row" id="thumbRow" />
              <div className="color-row" id="colorRow" />
            </div>
            {/* ============ INFO ============ */}
            <div className="info col-lg-8 col-12">
              <h1 id="prodTitle" />
              <p className="desc" id="prodDesc" />
              <hr className="info-divider" />
              <div className="tabs">
                <button className="tab-btn active" data-tab="details">Details</button>
                {/* <button class="tab-btn" data-tab="reviews">Reviews</button> */}
              </div>
              <div className="tab-panel active" id="tab-details">
                <div className="spec-table-wrap">
                  <div id="specImages" style={{display: 'none'}} />
                  {/* STANDARD TABLE: Code No / Size / PCS-CTN / Weight / Carton Size */}
                  <table className="spec-table" id="table-standard">
                    <thead>
                      <tr>
                        <th>Code No</th>
                        <th>Size</th>
                        <th>PCS/CTN</th>
                        <th>PCS Weight-KGM</th>
                        <th>Carton Size</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-standard" />
                  </table>
                  {/* STANDARD TABLE: Code No / Size / PCS-CTN / Weight / Carton Size / PN */}
                  <table className="spec-table" id="table-standard2">
                    <thead>
                      <tr>
                        <th>Code No</th>
                        <th>Size</th>
                        <th>PCS/CTN</th>
                        <th>PCS Weight-KGM</th>
                        <th>Carton Size</th>
                        <th>PN</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-standard2" />
                  </table>
                  {/* CLAMP SADDLE TABLE (P.P. Fittings > Clamp Saddle) */}
                  <table className="spec-table" id="table-clampSaddle">
                    <thead>
                      <tr>
                        <th>d x G</th>
                        <th>L</th>
                        <th>H</th>
                        <th>E</th>
                        <th>F</th>
                        <th>PN</th>
                        <th>Number of Bolts</th>
                        <th>Weight/Fe (nm)</th>
                        <th>Code</th>
                        <th>Qty/Ctn</th>
                        <th>Carton Size</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-clampSaddle" />
                  </table>
                  {/* STEEL COATED TABLE (Flange > P.P. Steel Coated) */}
                  <table className="spec-table" id="table-steelCoated">
                    <thead>
                      <tr>
                        <th>Code</th>
                        <th>DN</th>
                        <th>dn</th>
                        <th>D</th>
                        <th>K</th>
                        <th>B</th>
                        <th>n</th>
                        <th>d</th>
                        <th>h</th>
                        <th>h1</th>
                        <th>H</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-steelCoated" />
                  </table>
                  {/* Valve 1 */}
                  <table className="spec-table" id="table-valve-1">
                    <thead>
                      <tr>
                        <th colSpan={11}>DIMENSION</th>
                      </tr>
                      <tr>
                        <th rowSpan={2}>DN</th>
                        <th colSpan={4}>OUTLINE mm</th>
                        <th colSpan={6}>END FLANGE PN10-16</th>
                      </tr>
                      <tr>
                        <th>L</th>
                        <th>H</th>
                        <th>M</th>
                        <th>h1</th>
                        <th>D</th>
                        <th>K</th>
                        <th>G</th>
                        <th>n-d1</th>
                        <th>b</th>
                        <th>f</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-valve-1">
                    </tbody>
                  </table>
                  {/* Valve 2 */}
                  <table className="spec-table" id="table-valve-2">
                    <thead>
                      <tr>
                        <th colSpan={11}>DIMENSION</th>
                      </tr>
                      <tr>
                        <th rowSpan={2}>DN</th>
                        <th colSpan={4}>OUTLINE mm</th>
                        <th colSpan={6}>END FLANGE PN10-16</th>
                      </tr>
                      <tr>
                        <th>L</th>
                        <th>H</th>
                        <th>M</th>
                        {/* <th>h1</th> */}
                        <th>D</th>
                        <th>K</th>
                        <th>G</th>
                        <th>n-d1</th>
                        <th>b</th>
                        <th>f</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-valve-2">
                    </tbody>
                  </table>
                  {/* Valve 3 */}
                  <table className="spec-table" id="table-valve-3">
                    <thead>
                      <tr>
                        <th colSpan={6}>DIMENSION</th>
                      </tr>
                      <tr>
                        <th rowSpan={2}>DN</th>
                        <th colSpan={2}>OUTLINE mm</th>
                        <th colSpan={3}>END FLANGE</th>
                      </tr>
                      <tr>
                        <th>L</th>
                        <th>H</th>
                        <th>φM</th>
                        <th>D1</th>
                        <th>C</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-valve-3">
                    </tbody>
                  </table>
                  {/* Valve 4 */}
                  <table className="spec-table" id="table-valve-4">
                    <thead>
                      <tr>
                        <th colSpan={6}>DIMENSION</th>
                      </tr>
                      <tr>
                        <th>DN</th>
                        <th>L</th>
                        <th>H</th>
                        <th>d1</th>
                        <th>d3</th>
                        <th>t1</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-valve-4">
                    </tbody>
                  </table>
                  {/* Valve 5 */}
                  <table className="spec-table" id="table-valve-5">
                    <thead>
                      <tr>
                        <th>DN</th>
                        <th>PN</th>
                        <th>L13</th>
                        <th>L14</th>
                        <th>D</th>
                        <th>PCD</th>
                        <th>D1</th>
                        <th>B</th>
                        <th>f</th>
                        <th>n-d</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-vatable-valve-5">
                      <tr>
                        <td rowSpan={2}>100</td>
                        <td>10</td>
                        <td rowSpan={2}>127</td>
                        <td rowSpan={2}>190</td>
                        <td>220</td>
                        <td>180</td>
                        <td>156</td>
                        <td>19</td>
                        <td>3</td>
                        <td>8-19</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>220</td>
                        <td>180</td>
                        <td>156</td>
                        <td>19</td>
                        <td>3</td>
                        <td>8-19</td>
                      </tr>
                      <tr>
                        <td rowSpan={2}>150</td>
                        <td>10</td>
                        <td rowSpan={2}>140</td>
                        <td rowSpan={2}>210</td>
                        <td>285</td>
                        <td>240</td>
                        <td>211</td>
                        <td>19</td>
                        <td>3</td>
                        <td>8-23</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>285</td>
                        <td>240</td>
                        <td>211</td>
                        <td>19</td>
                        <td>3</td>
                        <td>8-23</td>
                      </tr>
                      <tr>
                        <td rowSpan={2}>200</td>
                        <td>10</td>
                        <td rowSpan={2}>152</td>
                        <td rowSpan={2}>230</td>
                        <td>340</td>
                        <td>295</td>
                        <td>266</td>
                        <td>20</td>
                        <td>3</td>
                        <td>8-23</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>340</td>
                        <td>295</td>
                        <td>266</td>
                        <td>20</td>
                        <td>3</td>
                        <td>12-23</td>
                      </tr>
                      <tr>
                        <td rowSpan={2}>250</td>
                        <td>10</td>
                        <td rowSpan={2}>165</td>
                        <td rowSpan={2}>250</td>
                        <td>400</td>
                        <td>350</td>
                        <td>319</td>
                        <td>22</td>
                        <td>3</td>
                        <td>12-23</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>400</td>
                        <td>355</td>
                        <td>319</td>
                        <td>22</td>
                        <td>3</td>
                        <td>12-28</td>
                      </tr>
                      <tr>
                        <td rowSpan={2}>300</td>
                        <td>10</td>
                        <td rowSpan={2}>178</td>
                        <td rowSpan={2}>270</td>
                        <td>455</td>
                        <td>400</td>
                        <td>370</td>
                        <td>24.5</td>
                        <td>3</td>
                        <td>12-23</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>455</td>
                        <td>410</td>
                        <td>370</td>
                        <td>24.5</td>
                        <td>4</td>
                        <td>12-28</td>
                      </tr>
                      <tr>
                        <td rowSpan={2}>350</td>
                        <td>10</td>
                        <td rowSpan={2}>190</td>
                        <td rowSpan={2}>290</td>
                        <td>505</td>
                        <td>460</td>
                        <td>429</td>
                        <td>24.5</td>
                        <td>4</td>
                        <td>16-23</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>520</td>
                        <td>470</td>
                        <td>429</td>
                        <td>26.5</td>
                        <td>4</td>
                        <td>16-28</td>
                      </tr>
                      <tr>
                        <td rowSpan={2}>400</td>
                        <td>10</td>
                        <td rowSpan={2}>216</td>
                        <td rowSpan={2}>310</td>
                        <td>565</td>
                        <td>515</td>
                        <td>480</td>
                        <td>24.5</td>
                        <td>4</td>
                        <td>16-28</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>580</td>
                        <td>525</td>
                        <td>480</td>
                        <td>28</td>
                        <td>4</td>
                        <td>16-31</td>
                      </tr>
                      <tr>
                        <td rowSpan={2}>450</td>
                        <td>10</td>
                        <td rowSpan={2}>222</td>
                        <td rowSpan={2}>330</td>
                        <td>615</td>
                        <td>565</td>
                        <td>530</td>
                        <td>25.5</td>
                        <td>4</td>
                        <td>20-28</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>640</td>
                        <td>585</td>
                        <td>548</td>
                        <td>30</td>
                        <td>4</td>
                        <td>20-31</td>
                      </tr>
                      <tr>
                        <td rowSpan={2}>500</td>
                        <td>10</td>
                        <td rowSpan={2}>229</td>
                        <td rowSpan={2}>350</td>
                        <td>670</td>
                        <td>620</td>
                        <td>582</td>
                        <td>26.5</td>
                        <td>4</td>
                        <td>20-28</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>715</td>
                        <td>650</td>
                        <td>609</td>
                        <td>31.5</td>
                        <td>4</td>
                        <td>20-34</td>
                      </tr>
                      <tr>
                        <td rowSpan={2}>600</td>
                        <td>10</td>
                        <td rowSpan={2}>267</td>
                        <td rowSpan={2}>390</td>
                        <td>780</td>
                        <td>725</td>
                        <td>682</td>
                        <td>30</td>
                        <td>5</td>
                        <td>20-31</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>840</td>
                        <td>770</td>
                        <td>720</td>
                        <td>36</td>
                        <td>5</td>
                        <td>20-37</td>
                      </tr>
                      <tr>
                        <td rowSpan={2}>700</td>
                        <td>10</td>
                        <td rowSpan={2}>292</td>
                        <td rowSpan={2}>430</td>
                        <td>895</td>
                        <td>840</td>
                        <td>794</td>
                        <td>32.5</td>
                        <td>5</td>
                        <td>24-31</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>910</td>
                        <td>840</td>
                        <td>794</td>
                        <td>39.5</td>
                        <td>5</td>
                        <td>24-37</td>
                      </tr>
                      <tr>
                        <td rowSpan={2}>800</td>
                        <td>10</td>
                        <td rowSpan={2}>318</td>
                        <td rowSpan={2}>470</td>
                        <td>1015</td>
                        <td>950</td>
                        <td>901</td>
                        <td>35</td>
                        <td>5</td>
                        <td>24-34</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>1025</td>
                        <td>950</td>
                        <td>901</td>
                        <td>43</td>
                        <td>5</td>
                        <td>24-41</td>
                      </tr>
                      <tr>
                        <td rowSpan={2}>900</td>
                        <td>10</td>
                        <td rowSpan={2}>330</td>
                        <td rowSpan={2}>510</td>
                        <td>1115</td>
                        <td>1050</td>
                        <td>1001</td>
                        <td>37.5</td>
                        <td>5</td>
                        <td>28-34</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>1125</td>
                        <td>1050</td>
                        <td>1001</td>
                        <td>46.5</td>
                        <td>5</td>
                        <td>28-41</td>
                      </tr>
                      <tr>
                        <td rowSpan={2}>1000</td>
                        <td>10</td>
                        <td rowSpan={2}>410</td>
                        <td rowSpan={2}>550</td>
                        <td>1230</td>
                        <td>1160</td>
                        <td>1112</td>
                        <td>40</td>
                        <td>5</td>
                        <td>28-37</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>1255</td>
                        <td>1170</td>
                        <td>1112</td>
                        <td>50</td>
                        <td>5</td>
                        <td>28-44</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Valve 6 */}
                  <table className="spec-table" id="table-valve-6">
                    <thead>
                      <tr>
                        <th colSpan={9}>DIMENSION</th>
                      </tr>
                      <tr>
                        <th rowSpan={2}>DN</th>
                        <th colSpan={8}>END FLANGE PN10/16</th>
                      </tr>
                      <tr>
                        <th>L</th>
                        <th>D</th>
                        <th>K</th>
                        <th>G</th>
                        <th>n-d</th>
                        <th>f</th>
                        <th>b</th>
                        <th>H</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-valve-6">
                    </tbody>
                  </table>
                  {/* Valve 7 */}
                  <table className="spec-table" id="table-valve-7">
                    <thead>
                      <tr>
                        <th colSpan={8}>DIMENSION</th>
                      </tr>
                      <tr>
                        <th rowSpan={2}>DN</th>
                        <th colSpan={7}>END FLANGE PN10/16</th>
                      </tr>
                      <tr>
                        <th>D</th>
                        <th>D1</th>
                        <th>D2</th>
                        <th>b</th>
                        <th>f</th>
                        <th>H</th>
                        <th>Z-d</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-valve-7">
                    </tbody>
                  </table>
                  {/* Valve 8 */}
                  <table className="spec-table" id="table-valve-8">
                    <thead>
                      <tr>
                        <th colSpan={8}>DIMENSION</th>
                      </tr>
                      <tr>
                        <th rowSpan={2}>DN</th>
                        <th>OUTLINE mm</th>
                        <th colSpan={6}>END FLANGE PN16</th>
                      </tr>
                      <tr>
                        <th>L</th>
                        <th>D</th>
                        <th>K</th>
                        <th>G</th>
                        <th>n-d1</th>
                        <th>b</th>
                        <th>f</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-valve-8">
                    </tbody>
                  </table>
                  {/* Valve 9 */}
                  <table className="spec-table" id="table-valve-9">
                    <thead>
                      <tr>
                        <th colSpan={4}>DIMENSION</th>
                      </tr>
                      <tr>
                        <th rowSpan={2}>DN</th>
                        <th colSpan={3}>END FLANGE PN10/16</th>
                      </tr>
                      <tr>
                        <th>L</th>
                        <th>H</th>
                        <th>H1</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-valve-9">
                    </tbody>
                  </table>
                  {/* Valve 10 */}
                  <table className="spec-table" id="table-valve-10">
                    <thead>
                      <tr>
                        <th colSpan={5}>DIMENSION</th>
                      </tr>
                      <tr>
                        <th rowSpan={2}>DN</th>
                        <th>OUTLINE mm</th>
                        <th colSpan={3}>END FLANGE PN10-16</th>
                      </tr>
                      <tr>
                        <th>L</th>
                        <th>D</th>
                        <th>D1</th>
                        <th>n-d1</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-valve-10">
                    </tbody>
                  </table>
                  {/* Valve 11 */}
                  <table className="spec-table" id="table-valve-11">
                    <thead>
                      <tr>
                        <th colSpan={13}>DIMENSION</th>
                      </tr>
                      <tr>
                        <th>DN</th>
                        <th>50</th>
                        <th>65</th>
                        <th>80</th>
                        <th>100</th>
                        <th>125</th>
                        <th>150</th>
                        <th>200</th>
                        <th>250</th>
                        <th>300</th>
                        <th>350</th>
                        <th>400</th>
                        <th>450</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-valve-11">
                    </tbody>
                  </table>
                  {/* Valve 12 */}
                  <table className="spec-table" id="table-valve-12">
                    <thead>
                    </thead>
                    <tbody id="specBody-valve-12">
                    </tbody>
                  </table>
                  {/* Valve 13 */}
                  <table className="spec-table" id="table-valve-13">
                    <thead>
                      <tr>
                        <th>DN</th>
                        <th>D</th>
                        <th>K</th>
                        <th>N</th>
                        <th>I</th>
                        <th>L1</th>
                        <th>L2</th>
                        <th>Gewicht weight</th>
                      </tr>
                      <tr>
                        <th>mm</th>
                        <th>mm</th>
                        <th>mm</th>
                        <th />
                        <th>mm</th>
                        <th>mm</th>
                        <th>mm</th>
                        <th>kg</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-valve-13">
                    </tbody>
                  </table>
                  {/* Valve 14 */}
                  <table className="spec-table" id="table-valve-14">
                    <thead>
                      <tr>
                        <th>DN</th>
                        <th>Main pipe</th>
                        <th>PN</th>
                        <th>Bands No.</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-valve-14">
                    </tbody>
                  </table>
                  {/* Valve 15 */}
                  <table className="spec-table" id="table-valve-15">
                    <thead>
                      <tr>
                        <th>Main pipe DN</th>
                        <th>Thread outlet</th>
                        <th>Ductile iron OD</th>
                        <th>Asbestos cement max OD</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-valve-15">
                    </tbody>
                  </table>
                  {/* Valve 16 */}
                  <table className="spec-table" id="table-valve-16">
                    <thead>
                      <tr>
                        <th rowSpan={2}>size</th>
                        <th rowSpan={2}>pipe</th>
                        <th colSpan={5}>Dimensions</th>
                        <th rowSpan={2}>Weight</th>
                      </tr>
                      <tr>
                        <th>D</th>
                        <th>K</th>
                        <th>b</th>
                        <th>l</th>
                        <th>t</th>
                      </tr>
                      <tr>
                        <th>DN mm</th>
                        <th>d1 mm</th>
                        <th>mm</th>
                        <th>mm</th>
                        <th>mm</th>
                        <th>mm</th>
                        <th>mm</th>
                        <th>kg</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-valve-16">
                    </tbody>
                  </table>
                  {/* Valve 17 */}
                  <table className="spec-table" id="table-valve-17">
                    <thead>
                      <tr>
                        <th>Pipe ø A mm</th>
                        <th>L</th>
                        <th>A</th>
                        <th>B</th>
                        <th>Weight kg</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-valve-17">
                    </tbody>
                  </table>
                  {/* Valve 18 */}
                  <table className="spec-table" id="table-valve-18">
                    <thead>
                      <tr>
                        <th>Flange DN mm</th>
                        <th>OD PE/PVC</th>
                        <th>D mm</th>
                        <th>Bolt</th>
                        <th>L mm</th>
                        <th>Weight kg</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-valve-18">
                    </tbody>
                  </table>
                  {/* Valve 19 */}
                  <table className="spec-table" id="table-valve-19">
                    <thead>
                      <tr>
                        <th colSpan={2}>DN Normal diameter</th>
                        <th rowSpan={2}>L Length (mm)</th>
                        <th rowSpan={2}>Flange thickness b (mm)</th>
                        <th rowSpan={2}>NO. of bolt n</th>
                        <th rowSpan={2}>Bolt hole ⌀H (mm)</th>
                        <th rowSpan={2}>Diameter Bolt hole center (mm)</th>
                        <th colSpan={2}>Axial displacement</th>
                        <th rowSpan={2}>Later displacement (mm)</th>
                        <th rowSpan={2}>Angle deflection (a1+a2)</th>
                      </tr>
                      <tr>
                        <th>(mm)</th>
                        <th>(in)</th>
                        <th>Stretch</th>
                        <th>Compression</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-valve-19">
                    </tbody>
                  </table>
                  {/* Valve 20 */}
                  <table className="spec-table" id="table-valve-20">
                    <thead>
                      <tr>
                        <th />
                        <th>OD RAING</th>
                        <th>BAND</th>
                        <th>L(length) MM</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-valve-20">
                    </tbody>
                  </table>
                  {/* title: "Butt Fusion welding Machine", */}
                  <table className="spec-table" id="table-Butt-Fusion-welding-Machine">
                    <thead>
                      <tr>
                        <th>Model</th>
                        <th>Application Range</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-Butt-Fusion-welding-Machine">
                      <tr>
                        <td>160</td>
                        <td>63~160</td>
                      </tr>
                      <tr>
                        <td>250</td>
                        <td>90~250</td>
                      </tr>
                      <tr>
                        <td>250</td>
                        <td>110~250</td>
                      </tr>
                      <tr>
                        <td>315</td>
                        <td>160~315</td>
                      </tr>
                      <tr>
                        <td>450</td>
                        <td>280~450</td>
                      </tr>
                      <tr>
                        <td>630</td>
                        <td>400~630</td>
                      </tr>
                      <tr>
                        <td>800</td>
                        <td>630~800</td>
                      </tr>
                      <tr>
                        <td>1200</td>
                        <td>900~1200</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* title: "Electro Fusion welding Machine", */}
                  <table className="spec-table" id="table-Electro-Fusion-welding-Machine">
                    <thead>
                      <tr>
                        <th>Model</th>
                        <th>Application Range</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-Electro-Fusion-welding-Machine">
                      <tr>
                        <td>DRJ-CA-9C</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DRJ-CA-15C</td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                  {/* Polypropylene P.P. Coated Steel Flange */}
                  <table className="spec-table" id="table-packing-ring">
                    <thead>
                      <tr>
                        <th colSpan={7}>Packing Ring PN16, with steel for stub and pp-steel</th>
                        <th colSpan={4}>H: Thickness of steel flange<br />H1: Thickness of pp one side</th>
                      </tr>
                      <tr>
                        <th>code</th>
                        <th>DN</th>
                        <th>dn</th>
                        <th>D</th>
                        <th>K</th>
                        <th>B</th>
                        <th>n</th>
                        <th>d</th>
                        <th>h</th>
                        <th>h1</th>
                        <th>H</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-packing-ring">
                      <tr>
                        <td>sp63</td>
                        <td>50</td>
                        <td>63</td>
                        <td>165</td>
                        <td>125</td>
                        <td>78</td>
                        <td>4</td>
                        <td>18</td>
                        <td>20</td>
                        <td>5</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>sp75</td>
                        <td>65</td>
                        <td>75</td>
                        <td>185</td>
                        <td>145</td>
                        <td>92</td>
                        <td>4</td>
                        <td>18</td>
                        <td>20</td>
                        <td>5</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>sp90</td>
                        <td>80</td>
                        <td>90</td>
                        <td>200</td>
                        <td>160</td>
                        <td>108</td>
                        <td>8</td>
                        <td>18</td>
                        <td>20</td>
                        <td>5</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>sp110</td>
                        <td>100</td>
                        <td>110</td>
                        <td>220</td>
                        <td>180</td>
                        <td>128</td>
                        <td>8</td>
                        <td>18</td>
                        <td>20</td>
                        <td>5</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>sp125</td>
                        <td>125</td>
                        <td>125</td>
                        <td>250</td>
                        <td>210</td>
                        <td>135</td>
                        <td>8</td>
                        <td>18</td>
                        <td>22</td>
                        <td>5</td>
                        <td>12</td>
                      </tr>
                      <tr>
                        <td>sp140</td>
                        <td>125</td>
                        <td>140</td>
                        <td>250</td>
                        <td>210</td>
                        <td>158</td>
                        <td>8</td>
                        <td>18</td>
                        <td>22</td>
                        <td>5</td>
                        <td>12</td>
                      </tr>
                      <tr>
                        <td>sp160</td>
                        <td>150</td>
                        <td>160</td>
                        <td>285</td>
                        <td>240</td>
                        <td>178</td>
                        <td>8</td>
                        <td>22</td>
                        <td>24</td>
                        <td>5</td>
                        <td>14</td>
                      </tr>
                      <tr>
                        <td>sp180</td>
                        <td>150</td>
                        <td>180</td>
                        <td>285</td>
                        <td>240</td>
                        <td>188</td>
                        <td>8</td>
                        <td>22</td>
                        <td>24</td>
                        <td>5</td>
                        <td>14</td>
                      </tr>
                      <tr>
                        <td>sp200</td>
                        <td>200</td>
                        <td>200</td>
                        <td>340</td>
                        <td>295</td>
                        <td>235</td>
                        <td>12</td>
                        <td>22</td>
                        <td>26</td>
                        <td>5</td>
                        <td>16</td>
                      </tr>
                      <tr>
                        <td>sp225</td>
                        <td>200</td>
                        <td>225</td>
                        <td>340</td>
                        <td>295</td>
                        <td>238</td>
                        <td>12</td>
                        <td>22</td>
                        <td>26</td>
                        <td>5</td>
                        <td>16</td>
                      </tr>
                      <tr>
                        <td>sp250</td>
                        <td>250</td>
                        <td>250</td>
                        <td>405</td>
                        <td>355</td>
                        <td>288</td>
                        <td>12</td>
                        <td>26</td>
                        <td>28</td>
                        <td>5</td>
                        <td>18</td>
                      </tr>
                      <tr>
                        <td>sp280</td>
                        <td>250</td>
                        <td>280</td>
                        <td>405</td>
                        <td>355</td>
                        <td>294</td>
                        <td>12</td>
                        <td>26</td>
                        <td>28</td>
                        <td>5</td>
                        <td>18</td>
                      </tr>
                      <tr>
                        <td>sp315</td>
                        <td>300</td>
                        <td>315</td>
                        <td>460</td>
                        <td>410</td>
                        <td>338</td>
                        <td>12</td>
                        <td>26</td>
                        <td>32</td>
                        <td>5</td>
                        <td>22</td>
                      </tr>
                      <tr>
                        <td>sp355</td>
                        <td>350</td>
                        <td>355</td>
                        <td>520</td>
                        <td>470</td>
                        <td>378</td>
                        <td>16</td>
                        <td>26</td>
                        <td>35</td>
                        <td>5</td>
                        <td>25</td>
                      </tr>
                      <tr>
                        <td>sp400</td>
                        <td>400</td>
                        <td>400</td>
                        <td>580</td>
                        <td>525</td>
                        <td>430</td>
                        <td>16</td>
                        <td>30</td>
                        <td>38</td>
                        <td>6.5</td>
                        <td>25</td>
                      </tr>
                      <tr>
                        <td>sp450</td>
                        <td>450</td>
                        <td>450</td>
                        <td>640</td>
                        <td>585</td>
                        <td>472</td>
                        <td>20</td>
                        <td>30</td>
                        <td>42</td>
                        <td>6.5</td>
                        <td>29</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Butt Fusion Male Adapter */}
                  <table className="spec-table" id="table-sdr11-pn16">
                    <thead>
                      <tr>
                        <th colSpan={2}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) Ødn</th>
                        <th>Item Code</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16">
                      <tr>
                        <td>20 X ½ M</td>
                        <td>XDRML - 20/½</td>
                      </tr>
                      <tr>
                        <td>25 X ¾ M</td>
                        <td>XDRML - 25/¾</td>
                      </tr>
                      <tr>
                        <td>32 X 1 M</td>
                        <td>XDRML - 32/1</td>
                      </tr>
                      <tr>
                        <td>40 X 1 1/4 M</td>
                        <td>XDRML - 40/1¼</td>
                      </tr>
                      <tr>
                        <td>50 X 1 ½ M</td>
                        <td>XDRML - 50/1½</td>
                      </tr>
                      <tr>
                        <td>63 X 2 M</td>
                        <td>XDRML - 63/2</td>
                      </tr>
                      <tr>
                        <td>90 X 3 M</td>
                        <td>XDRML -90/3</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Butt Fusion Female Adapter */}
                  <table className="spec-table" id="table-sdr11-pn16-f">
                    <thead>
                      <tr>
                        <th colSpan={2}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) Ødn</th>
                        <th>Item Code</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-f">
                      <tr>
                        <td>20 X ½ F</td>
                        <td>XDRFL - 20/½</td>
                      </tr>
                      <tr>
                        <td>25 X ¾ F</td>
                        <td>XDRFL - 25/¾</td>
                      </tr>
                      <tr>
                        <td>32 X 1 F</td>
                        <td>XDRFL - 32/1</td>
                      </tr>
                      <tr>
                        <td>40 X 1 1/4 F</td>
                        <td>XDRFL - 40/1¼</td>
                      </tr>
                      <tr>
                        <td>50 X 1 ½ F</td>
                        <td>XDRFL - 50/1½</td>
                      </tr>
                      <tr>
                        <td>63 X 2 F</td>
                        <td>XDRFL - 63/2</td>
                      </tr>
                      <tr>
                        <td>90 X 3 F</td>
                        <td>XDRFL -90/3</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Electro Fusion Flange Adapter */}
                  <table className="spec-table" id="table-sdr11-pn16-ddd">
                    <thead>
                      <tr>
                        <th colSpan={8}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) ØD</th>
                        <th>Ød1</th>
                        <th>Ød2</th>
                        <th>L</th>
                        <th>A</th>
                        <th>B</th>
                        <th>Ød</th>
                        <th>Item Code</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-ddd">
                      <tr>
                        <td>50</td>
                        <td>89</td>
                        <td>65</td>
                        <td>116</td>
                        <td>110</td>
                        <td>17</td>
                        <td>4.7</td>
                        <td>XDDD - 50</td>
                      </tr>
                      <tr>
                        <td>63</td>
                        <td>102</td>
                        <td>79</td>
                        <td>120</td>
                        <td>115</td>
                        <td>18</td>
                        <td>4.7</td>
                        <td>XDDD - 63</td>
                      </tr>
                      <tr>
                        <td>75</td>
                        <td>121</td>
                        <td>94</td>
                        <td>130</td>
                        <td>125</td>
                        <td>20</td>
                        <td>4.7</td>
                        <td>XDDD - 75</td>
                      </tr>
                      <tr>
                        <td>90</td>
                        <td>139</td>
                        <td>109</td>
                        <td>145</td>
                        <td>140</td>
                        <td>23</td>
                        <td>4.7</td>
                        <td>XDDD - 90</td>
                      </tr>
                      <tr>
                        <td>110</td>
                        <td>172</td>
                        <td>139</td>
                        <td>150</td>
                        <td>145</td>
                        <td>25</td>
                        <td>4.7</td>
                        <td>XDDD - 110</td>
                      </tr>
                      <tr>
                        <td>160</td>
                        <td>228</td>
                        <td>189</td>
                        <td>160</td>
                        <td>152</td>
                        <td>28</td>
                        <td>4.7</td>
                        <td>XDDD - 160</td>
                      </tr>
                      <tr>
                        <td>200</td>
                        <td>289</td>
                        <td>234</td>
                        <td>178</td>
                        <td>174</td>
                        <td>30</td>
                        <td>4.7</td>
                        <td>XDDD - 200</td>
                      </tr>
                      <tr>
                        <td>250</td>
                        <td>339</td>
                        <td>280</td>
                        <td>129</td>
                        <td>123</td>
                        <td>32</td>
                        <td>4.7</td>
                        <td>XDDD - 250</td>
                      </tr>
                      <tr>
                        <td>315</td>
                        <td>390</td>
                        <td>349</td>
                        <td>135</td>
                        <td>127</td>
                        <td>39</td>
                        <td>4.7</td>
                        <td>XDDD - 315</td>
                      </tr>
                      <tr>
                        <td>400</td>
                        <td>513</td>
                        <td>436</td>
                        <td>160</td>
                        <td>153</td>
                        <td>39</td>
                        <td>4.7</td>
                        <td>XDDD - 400</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Electro Fusion Equal Tee */}
                  <table className="spec-table" id="table-sdr11-pn16-xdt">
                    <thead>
                      <tr>
                        <th colSpan={6}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                        <th>B</th>
                        <th>Ød</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdt">
                      <tr>
                        <td>20 X 20 X 20</td>
                        <td>XDT - 20</td>
                        <td>100</td>
                        <td>40</td>
                        <td>40</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>25 X 25 X 25</td>
                        <td>XDT - 25</td>
                        <td>105</td>
                        <td>45</td>
                        <td>50</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>32 X 32 X 32</td>
                        <td>XDT - 32</td>
                        <td>120</td>
                        <td>45</td>
                        <td>55</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>40 X 40 X 40</td>
                        <td>XDT - 40</td>
                        <td>125</td>
                        <td>45</td>
                        <td>60</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>50 X 50 X 50</td>
                        <td>XDT - 50</td>
                        <td>145</td>
                        <td>55</td>
                        <td>60</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>63 X 63 X 63</td>
                        <td>XDT - 63</td>
                        <td>165</td>
                        <td>55</td>
                        <td>60</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>75 X 75 X 75</td>
                        <td>XDT - 75</td>
                        <td>195</td>
                        <td>68</td>
                        <td>70</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>90 X 90 X 90</td>
                        <td>XDT - 90</td>
                        <td>210</td>
                        <td>68</td>
                        <td>75</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>110 X 110 X 110</td>
                        <td>XDT - 110</td>
                        <td>240</td>
                        <td>75</td>
                        <td>79</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>125 X 125 X 125</td>
                        <td>XDT - 125</td>
                        <td>255</td>
                        <td>80</td>
                        <td>85</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>160 X 160 X 160</td>
                        <td>XDT - 160</td>
                        <td>310</td>
                        <td>90</td>
                        <td>95</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>180 X 180 X 180</td>
                        <td>XDT - 180</td>
                        <td>340</td>
                        <td>98</td>
                        <td>100</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>200 X 200 X 200</td>
                        <td>XDT - 200</td>
                        <td>360</td>
                        <td>98</td>
                        <td>105</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>250 X 250 X 250</td>
                        <td>XDT - 250</td>
                        <td>405</td>
                        <td>98</td>
                        <td>115</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>315 X 315 X 315</td>
                        <td>XDT - 315</td>
                        <td>520</td>
                        <td>125</td>
                        <td>115</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>400 X 400 X 400</td>
                        <td>XDT - 400</td>
                        <td>600</td>
                        <td>125</td>
                        <td>115</td>
                        <td>4.7</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Electro Fusion Equal 45 Elbow */}
                  <table className="spec-table" id="table-sdr11-pn16-xdvl">
                    <thead>
                      <tr>
                        <th colSpan={5}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                        <th>Ød</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdvl">
                      <tr>
                        <td>50 X 45°</td>
                        <td>XDVL - 50</td>
                        <td>130</td>
                        <td>50</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>63 X 45°</td>
                        <td>XDVL - 63</td>
                        <td>180</td>
                        <td>63</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>90 X 45°</td>
                        <td>XDVL - 90</td>
                        <td>230</td>
                        <td>83</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>110 X 45°</td>
                        <td>XDVL - 110</td>
                        <td>270</td>
                        <td>85</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>160 X 45°</td>
                        <td>XDVL - 160</td>
                        <td>280</td>
                        <td>85</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>200 X 45°</td>
                        <td>XDVL - 200</td>
                        <td>330</td>
                        <td>100</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>250 X 45°</td>
                        <td>XDVL - 250</td>
                        <td>420</td>
                        <td>115</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>315 X 45°</td>
                        <td>XDVL - 315</td>
                        <td>470</td>
                        <td>125</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>400 X 45°</td>
                        <td>XDVL - 400</td>
                        <td>580</td>
                        <td>140</td>
                        <td>4.7</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Electro Fusion End Cap */}
                  <table className="spec-table" id="table-sdr11-pn16-xdm">
                    <thead>
                      <tr>
                        <th colSpan={5}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) dn Ødn X 90°</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                        <th>Ød</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdm">
                      <tr>
                        <td>32</td>
                        <td>XDM - 32</td>
                        <td>60</td>
                        <td>45</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>40</td>
                        <td>XDT - 40</td>
                        <td>70</td>
                        <td>55</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>50</td>
                        <td>XDT - 50</td>
                        <td>70</td>
                        <td>55</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>63</td>
                        <td>XDT - 63</td>
                        <td>80</td>
                        <td>55</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>90</td>
                        <td>XDT - 90</td>
                        <td>95</td>
                        <td>55</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>110</td>
                        <td>XDT - 110</td>
                        <td>105</td>
                        <td>70</td>
                        <td>4.7</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Electro Fusion Branch Saddle */}
                  <table className="spec-table" id="table-sdr11-pn16-xdfi">
                    <thead>
                      <tr>
                        <th colSpan={7}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) dn Ødn X 90°</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                        <th>B</th>
                        <th>H</th>
                        <th>Ød</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdfi">
                      <tr>
                        <td>63 X 32</td>
                        <td>XDFI - 63/32</td>
                        <td>145</td>
                        <td>155</td>
                        <td>80</td>
                        <td>145</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>90 X 63</td>
                        <td>XDFI - 90/63</td>
                        <td>145</td>
                        <td>155</td>
                        <td>80</td>
                        <td>145</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>110 X 32</td>
                        <td>XDFI - 110/32</td>
                        <td>145</td>
                        <td>160</td>
                        <td>80</td>
                        <td>145</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>110 X 63</td>
                        <td>XDFI - 110/63</td>
                        <td>145</td>
                        <td>160</td>
                        <td>80</td>
                        <td>145</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>160 X 63</td>
                        <td>XDFI - 160/63</td>
                        <td>190</td>
                        <td>230</td>
                        <td>100</td>
                        <td>185</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>160 X 90</td>
                        <td>XDFI - 160/90</td>
                        <td>190</td>
                        <td>230</td>
                        <td>100</td>
                        <td>185</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>200 X 63</td>
                        <td>XDFI - 200/63</td>
                        <td>190</td>
                        <td>235</td>
                        <td>110</td>
                        <td>185</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>200 X 90</td>
                        <td>XDFI - 200/90</td>
                        <td>190</td>
                        <td>235</td>
                        <td>115</td>
                        <td>195</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>250 X 63</td>
                        <td>XDFI - 250/63</td>
                        <td>190</td>
                        <td>300</td>
                        <td>115</td>
                        <td>195</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>250 X 90</td>
                        <td>XDFI - 250/90</td>
                        <td>190</td>
                        <td>300</td>
                        <td>115</td>
                        <td>195</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>315 X 63</td>
                        <td>XDFI - 315/63</td>
                        <td>190</td>
                        <td>300</td>
                        <td>115</td>
                        <td>195</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>315 X 90</td>
                        <td>XDFI - 315/90</td>
                        <td>190</td>
                        <td>300</td>
                        <td>120</td>
                        <td>200</td>
                        <td>4.7</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Butt Fusion Cross Fitting */}
                  <table className="spec-table" id="table-sdr11-pn16-xdrx">
                    <thead>
                      <tr>
                        <th colSpan={5}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) Ødn</th>
                        <th>L</th>
                        <th>A</th>
                        <th>H</th>
                        <th>Item Code</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdrx">
                      <tr>
                        <td>63</td>
                        <td>230</td>
                        <td>82</td>
                        <td>102</td>
                        <td>XDRX - 63</td>
                      </tr>
                      <tr>
                        <td>90</td>
                        <td>290</td>
                        <td>79</td>
                        <td>143</td>
                        <td>XDRX - 90</td>
                      </tr>
                      <tr>
                        <td>110</td>
                        <td>290</td>
                        <td>82</td>
                        <td>145</td>
                        <td>XDRX - 110</td>
                      </tr>
                      <tr>
                        <td>160</td>
                        <td>428</td>
                        <td>98</td>
                        <td>225</td>
                        <td>XDRX - 160</td>
                      </tr>
                      <tr>
                        <td>200</td>
                        <td>420</td>
                        <td>88</td>
                        <td>210</td>
                        <td>XDRX - 200</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="spec-table" id="table-sdr11-pn16-xdrx17">
                    <thead>
                      <tr>
                        <th colSpan={5}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) Ødn</th>
                        <th>L</th>
                        <th>A</th>
                        <th>H</th>
                        <th>Item Code</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdrx17">
                      <tr>
                        <td>250</td>
                        <td>507</td>
                        <td>120</td>
                        <td>252</td>
                        <td>XDRX17 - 250</td>
                      </tr>
                      <tr>
                        <td>315</td>
                        <td>605</td>
                        <td>120</td>
                        <td>305</td>
                        <td>XDRX17 - 315</td>
                      </tr>
                      <tr>
                        <td>355</td>
                        <td>655</td>
                        <td>130</td>
                        <td>330</td>
                        <td>XDRX17 - 355</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Electro Fusion Reducer */}
                  <table className="spec-table" id="table-sdr11-pn16-xds">
                    <thead>
                      <tr>
                        <th colSpan={6}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                        <th>B</th>
                        <th>Ød</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xds">
                      <tr>
                        <td>25 X 20</td>
                        <td>XDS - 25 X 20</td>
                        <td>94</td>
                        <td>42</td>
                        <td>35</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>32 X 20</td>
                        <td>XDS - 32 X 20</td>
                        <td>94</td>
                        <td>42</td>
                        <td>40</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>32 X 25</td>
                        <td>XDS - 32 X 25</td>
                        <td>94</td>
                        <td>42</td>
                        <td>40</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>40 X 25</td>
                        <td>XDS - 40 X 25</td>
                        <td>100</td>
                        <td>50</td>
                        <td>40</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>40 X 32</td>
                        <td>XDS - 40 X 32</td>
                        <td>100</td>
                        <td>50</td>
                        <td>40</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>50 X 25</td>
                        <td>XDS - 50 X 25</td>
                        <td>110</td>
                        <td>55</td>
                        <td>40</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>50 X 32</td>
                        <td>XDS - 50 X 32</td>
                        <td>110</td>
                        <td>55</td>
                        <td>40</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>50 X 40</td>
                        <td>XDS - 50 X 40</td>
                        <td>110</td>
                        <td>50</td>
                        <td>50</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>63 X 25</td>
                        <td>XDS - 63 X 25</td>
                        <td>115</td>
                        <td>60</td>
                        <td>40</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>63 X 32</td>
                        <td>XDS - 63 X 32</td>
                        <td>120</td>
                        <td>60</td>
                        <td>40</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>63 X 40</td>
                        <td>XDS - 63 X 40</td>
                        <td>120</td>
                        <td>55</td>
                        <td>40</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>63 X 50</td>
                        <td>XDS - 63 X 50</td>
                        <td>120</td>
                        <td>55</td>
                        <td>50</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>75 X 50</td>
                        <td>XDS - 75 X 50</td>
                        <td>120</td>
                        <td>65</td>
                        <td>50</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>75 X 63</td>
                        <td>XDS - 75 X 63</td>
                        <td>130</td>
                        <td>65</td>
                        <td>65</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>90 X 50</td>
                        <td>XDS - 90 X 50</td>
                        <td>140</td>
                        <td>65</td>
                        <td>55</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>90 X 63</td>
                        <td>XDS - 90 X 63</td>
                        <td>140</td>
                        <td>65</td>
                        <td>55</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>90 X 75</td>
                        <td>XDS - 90 X 75</td>
                        <td>145</td>
                        <td>65</td>
                        <td>60</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>110 X 63</td>
                        <td>XDS - 110 X 63</td>
                        <td>160</td>
                        <td>75</td>
                        <td>55</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>110 X 75</td>
                        <td>XDS - 110 X 75</td>
                        <td>155</td>
                        <td>75</td>
                        <td>60</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>110 X 90</td>
                        <td>XDS - 110 X 90</td>
                        <td>155</td>
                        <td>75</td>
                        <td>65</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>125 X 63</td>
                        <td>XDS - 125 X 63</td>
                        <td>160</td>
                        <td>80</td>
                        <td>70</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>125 X 90</td>
                        <td>XDS - 125 X 90</td>
                        <td>160</td>
                        <td>80</td>
                        <td>70</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>125 X 110</td>
                        <td>XDS - 125 X 110</td>
                        <td>165</td>
                        <td>85</td>
                        <td>69</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>160 X 90</td>
                        <td>XDS - 160 X 90</td>
                        <td>195</td>
                        <td>94</td>
                        <td>74</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>160 X 110</td>
                        <td>XDS - 160 X 110</td>
                        <td>195</td>
                        <td>95</td>
                        <td>75</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>160 X 125</td>
                        <td>XDS - 160 X 125</td>
                        <td>195</td>
                        <td>95</td>
                        <td>75</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>200 X 110</td>
                        <td>XDS - 200 X 110</td>
                        <td>210</td>
                        <td>95</td>
                        <td>80</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>200 X 160</td>
                        <td>XDS - 200 X 160</td>
                        <td>210</td>
                        <td>95</td>
                        <td>85</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>250 X 110</td>
                        <td>XDS - 250 X 110</td>
                        <td>230</td>
                        <td>100</td>
                        <td>80</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>250 X 160</td>
                        <td>XDS - 250 X 160</td>
                        <td>230</td>
                        <td>110</td>
                        <td>90</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>250 X 200</td>
                        <td>XDS - 250 X 200</td>
                        <td>230</td>
                        <td>110</td>
                        <td>100</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>315 X 200</td>
                        <td>XDS - 315 X 200</td>
                        <td>240</td>
                        <td>100</td>
                        <td>100</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>315 X 250</td>
                        <td>XDS - 315 X 250</td>
                        <td>240</td>
                        <td>100</td>
                        <td>100</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>400 X 250</td>
                        <td>XDS - 400 X 250</td>
                        <td>260</td>
                        <td>110</td>
                        <td>105</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>400 X 315</td>
                        <td>XDS - 400 X 315</td>
                        <td>260</td>
                        <td>110</td>
                        <td>105</td>
                        <td>4.7</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Electro Fusion Equal 90 elbow */}
                  <table className="spec-table" id="table-sdr11-pn16-xdi">
                    <thead>
                      <tr>
                        <th colSpan={5}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) dn Ødn x 90°</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                        <th>Ød</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdi">
                      <tr>
                        <td>25 X 90°</td>
                        <td>XDI - 25</td>
                        <td>85</td>
                        <td>42</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>32 X 90°</td>
                        <td>XDI - 32</td>
                        <td>94</td>
                        <td>45</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>40 X 90°</td>
                        <td>XDI - 40</td>
                        <td>95</td>
                        <td>50</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>50 X 90°</td>
                        <td>XDI - 50</td>
                        <td>110</td>
                        <td>50</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>63 X 90°</td>
                        <td>XDI - 63</td>
                        <td>130</td>
                        <td>55</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>75 X 90°</td>
                        <td>XDI - 75</td>
                        <td>155</td>
                        <td>60</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>90 X 90°</td>
                        <td>XDI - 90</td>
                        <td>170</td>
                        <td>65</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>110 X 90°</td>
                        <td>XDI - 110</td>
                        <td>195</td>
                        <td>70</td>
                        <td>4.7</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="spec-table" id="table-sdr11-pn16-xdi-2">
                    <thead>
                      <tr>
                        <th colSpan={5}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) dn Ødn x 90°</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                        <th>Ød</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdi-2">
                      <tr>
                        <td>125 X 90°</td>
                        <td>XDI - 125</td>
                        <td>225</td>
                        <td>80</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>160 X 90°</td>
                        <td>XDI - 160</td>
                        <td>265</td>
                        <td>80</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>180 X 90°</td>
                        <td>XDI - 180</td>
                        <td>295</td>
                        <td>85</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>200 X 90°</td>
                        <td>XDI - 200</td>
                        <td>330</td>
                        <td>102</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>250 X 90°</td>
                        <td>XDI - 250</td>
                        <td>395</td>
                        <td>113</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>315 X 90°</td>
                        <td>XDI - 315</td>
                        <td>482</td>
                        <td>127</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>400 X 90°</td>
                        <td>XDI - 400</td>
                        <td>590</td>
                        <td>140</td>
                        <td>4.7</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Butt Fusion Flange adaptor (Stub End) */}
                  <table className="spec-table" id="table-sdr11-pn16-xdrd">
                    <thead>
                      <tr>
                        <th colSpan={6}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>Ødn1</th>
                        <th>L</th>
                        <th>A</th>
                        <th>B</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdrd">
                      <tr>
                        <td>20</td>
                        <td>XDRD 11 - 20</td>
                        <td>45</td>
                        <td>84</td>
                        <td>63</td>
                        <td>7</td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>XDRD 11 - 25</td>
                        <td>58</td>
                        <td>84</td>
                        <td>61</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>32</td>
                        <td>XDRD 11 - 32</td>
                        <td>68</td>
                        <td>84</td>
                        <td>61</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>40</td>
                        <td>XDRD 11 - 40</td>
                        <td>78</td>
                        <td>79</td>
                        <td>61</td>
                        <td>12</td>
                      </tr>
                      <tr>
                        <td>50</td>
                        <td>XDRD 11 - 50</td>
                        <td>88</td>
                        <td>84</td>
                        <td>67</td>
                        <td>12</td>
                      </tr>
                      <tr>
                        <td>63</td>
                        <td>XDRD 11 - 63</td>
                        <td>102</td>
                        <td>85</td>
                        <td>68</td>
                        <td>13</td>
                      </tr>
                      <tr>
                        <td>75</td>
                        <td>XDRD 11 - 75</td>
                        <td>122</td>
                        <td>94</td>
                        <td>75</td>
                        <td>14</td>
                      </tr>
                      <tr>
                        <td>90</td>
                        <td>XDRD 11 - 90</td>
                        <td>138</td>
                        <td>98</td>
                        <td>75</td>
                        <td>17</td>
                      </tr>
                      <tr>
                        <td>110</td>
                        <td>XDRD 11 - 110</td>
                        <td>158</td>
                        <td>103</td>
                        <td>81</td>
                        <td>19</td>
                      </tr>
                      <tr>
                        <td>125</td>
                        <td>XDRD 11 - 125</td>
                        <td>158</td>
                        <td>127</td>
                        <td>102</td>
                        <td>21</td>
                      </tr>
                      <tr>
                        <td>140</td>
                        <td>XDRD 11 - 140</td>
                        <td>188</td>
                        <td>127</td>
                        <td>97</td>
                        <td>22</td>
                      </tr>
                      <tr>
                        <td>160</td>
                        <td>XDRD 11 - 160</td>
                        <td>212</td>
                        <td>135</td>
                        <td>100</td>
                        <td>26</td>
                      </tr>
                      <tr>
                        <td>180</td>
                        <td>XDRD 11 - 180</td>
                        <td>212</td>
                        <td>135</td>
                        <td>100</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>200</td>
                        <td>XDRD 11 - 200</td>
                        <td>268</td>
                        <td>155</td>
                        <td>112</td>
                        <td>35</td>
                      </tr>
                      <tr>
                        <td>225</td>
                        <td>XDRD 11 - 225</td>
                        <td>268</td>
                        <td>145</td>
                        <td>105</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>250</td>
                        <td>XDRD 11 - 250</td>
                        <td>320</td>
                        <td>160</td>
                        <td>118</td>
                        <td>32</td>
                      </tr>
                      <tr>
                        <td>280</td>
                        <td>XDRD 11 - 280</td>
                        <td>320</td>
                        <td>150</td>
                        <td>105</td>
                        <td>35</td>
                      </tr>
                      <tr>
                        <td>315</td>
                        <td>XDRD 11 - 315</td>
                        <td>370</td>
                        <td>175</td>
                        <td>130</td>
                        <td>35</td>
                      </tr>
                      <tr>
                        <td>355</td>
                        <td>XDRD 11 - 355</td>
                        <td>430</td>
                        <td>170</td>
                        <td>125</td>
                        <td>39</td>
                      </tr>
                      <tr>
                        <td>400</td>
                        <td>XDRD 11 - 400</td>
                        <td>482</td>
                        <td>175</td>
                        <td>135</td>
                        <td>34</td>
                      </tr>
                      <tr>
                        <td>450/A</td>
                        <td>XDRD 11 - 450A</td>
                        <td>585</td>
                        <td>208</td>
                        <td>135</td>
                        <td>43</td>
                      </tr>
                      <tr>
                        <td>450/B</td>
                        <td>XDRD 11 - 450B</td>
                        <td>546</td>
                        <td>208</td>
                        <td>135</td>
                        <td>43</td>
                      </tr>
                      <tr>
                        <td>450/C</td>
                        <td>XDRD 11 - 450C</td>
                        <td>530</td>
                        <td>208</td>
                        <td>135</td>
                        <td>43</td>
                      </tr>
                      <tr>
                        <td>500</td>
                        <td>XDRD 11 - 500</td>
                        <td>585</td>
                        <td>210</td>
                        <td>150</td>
                        <td>47</td>
                      </tr>
                      <tr>
                        <td>560/A</td>
                        <td>XDRD 11 - 560A</td>
                        <td>685</td>
                        <td>215</td>
                        <td>160</td>
                        <td>45</td>
                      </tr>
                      <tr>
                        <td>560/B</td>
                        <td>XDRD 11 - 560B</td>
                        <td>630</td>
                        <td>215</td>
                        <td>160</td>
                        <td>45</td>
                      </tr>
                      <tr>
                        <td>560/C</td>
                        <td>XDRD 11 - 560C</td>
                        <td>630</td>
                        <td>215</td>
                        <td>160</td>
                        <td>60</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="spec-table" id="table-sdr17-pn10-xdrd">
                    <thead>
                      <tr>
                        <th colSpan={6}>SDR 17 – PN10</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>Ødn1</th>
                        <th>L</th>
                        <th>A</th>
                        <th>B</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr17-pn10-xdrd">
                      <tr>
                        <td>63</td>
                        <td>XDRD 17 - 63</td>
                        <td>102</td>
                        <td>85</td>
                        <td>68</td>
                        <td>13</td>
                      </tr>
                      <tr>
                        <td>75</td>
                        <td>XDRD 17 - 75</td>
                        <td>122</td>
                        <td>94</td>
                        <td>75</td>
                        <td>14</td>
                      </tr>
                      <tr>
                        <td>90</td>
                        <td>XDRD 17 - 90</td>
                        <td>138</td>
                        <td>98</td>
                        <td>75</td>
                        <td>17</td>
                      </tr>
                      <tr>
                        <td>110</td>
                        <td>XDRD 17 - 110</td>
                        <td>158</td>
                        <td>103</td>
                        <td>79</td>
                        <td>19</td>
                      </tr>
                      <tr>
                        <td>125</td>
                        <td>XDRD 17 - 125</td>
                        <td>158</td>
                        <td>127</td>
                        <td>102</td>
                        <td>21</td>
                      </tr>
                      <tr>
                        <td>140</td>
                        <td>XDRD 17 - 140</td>
                        <td>188</td>
                        <td>127</td>
                        <td>97</td>
                        <td>22</td>
                      </tr>
                      <tr>
                        <td>160</td>
                        <td>XDRD 17 - 160</td>
                        <td>212</td>
                        <td>135</td>
                        <td>100</td>
                        <td>26</td>
                      </tr>
                      <tr>
                        <td>180</td>
                        <td>XDRD 17 - 180</td>
                        <td>212</td>
                        <td>135</td>
                        <td>100</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>200</td>
                        <td>XDRD 17 - 200</td>
                        <td>268</td>
                        <td>155</td>
                        <td>112</td>
                        <td>35</td>
                      </tr>
                      <tr>
                        <td>225</td>
                        <td>XDRD 17 - 225</td>
                        <td>268</td>
                        <td>145</td>
                        <td>105</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>250</td>
                        <td>XDRD 17 - 250</td>
                        <td>320</td>
                        <td>160</td>
                        <td>118</td>
                        <td>32</td>
                      </tr>
                      <tr>
                        <td>280</td>
                        <td>XDRD 17 - 280</td>
                        <td>320</td>
                        <td>150</td>
                        <td>105</td>
                        <td>35</td>
                      </tr>
                      <tr>
                        <td>315</td>
                        <td>XDRD 17 - 315</td>
                        <td>370</td>
                        <td>165</td>
                        <td>130</td>
                        <td>35</td>
                      </tr>
                      <tr>
                        <td>355</td>
                        <td>XDRD 17 - 355</td>
                        <td>430</td>
                        <td>170</td>
                        <td>125</td>
                        <td>35</td>
                      </tr>
                      <tr>
                        <td>400</td>
                        <td>XDRD 17 - 400</td>
                        <td>482</td>
                        <td>175</td>
                        <td>135</td>
                        <td>34</td>
                      </tr>
                      <tr>
                        <td>450A</td>
                        <td>XDRD 17 - 450A</td>
                        <td>530</td>
                        <td>205</td>
                        <td>135</td>
                        <td>43</td>
                      </tr>
                      <tr>
                        <td>450B</td>
                        <td>XDRD 17 - 450B</td>
                        <td>546</td>
                        <td>205</td>
                        <td>135</td>
                        <td>43</td>
                      </tr>
                      <tr>
                        <td>450C</td>
                        <td>XDRD 17 - 450C</td>
                        <td>585</td>
                        <td>205</td>
                        <td>135</td>
                        <td>43</td>
                      </tr>
                      <tr>
                        <td>500</td>
                        <td>XDRD 17 - 500</td>
                        <td>585</td>
                        <td>210</td>
                        <td>150</td>
                        <td>47</td>
                      </tr>
                      <tr>
                        <td>560A</td>
                        <td>XDRD 17 - 560A</td>
                        <td>630</td>
                        <td>215</td>
                        <td>160</td>
                        <td>45</td>
                      </tr>
                      <tr>
                        <td>560B</td>
                        <td>XDRD 17 - 560B</td>
                        <td>685</td>
                        <td>215</td>
                        <td>160</td>
                        <td>45</td>
                      </tr>
                      <tr>
                        <td>630A</td>
                        <td>XDRD 17 - 630A</td>
                        <td>685</td>
                        <td>210</td>
                        <td>145</td>
                        <td>52</td>
                      </tr>
                      <tr>
                        <td>630B</td>
                        <td>XDRD 17 - 630B</td>
                        <td>710</td>
                        <td>210</td>
                        <td>145</td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td>630C</td>
                        <td>XDRD 17 - 630C</td>
                        <td>720</td>
                        <td>210</td>
                        <td>145</td>
                        <td>52</td>
                      </tr>
                      <tr>
                        <td>710</td>
                        <td>XDRD 17 - 710</td>
                        <td>800</td>
                        <td>190</td>
                        <td>117</td>
                        <td>57</td>
                      </tr>
                      <tr>
                        <td>800</td>
                        <td>XDRD 17 - 800</td>
                        <td>905</td>
                        <td>185</td>
                        <td>122</td>
                        <td>54</td>
                      </tr>
                      <tr>
                        <td>900</td>
                        <td>XDRD 17 - 900</td>
                        <td>1005</td>
                        <td>190</td>
                        <td>124</td>
                        <td>56</td>
                      </tr>
                      <tr>
                        <td>1000</td>
                        <td>XDRD 17 - 1000</td>
                        <td>1110</td>
                        <td>189</td>
                        <td>105</td>
                        <td>58</td>
                      </tr>
                      <tr>
                        <td>1200</td>
                        <td>XDRD 17 - 1200</td>
                        <td>1330</td>
                        <td>335</td>
                        <td>215</td>
                        <td>70</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Compression Male Adapter */}
                  <table className="spec-table" id="table-sdr11-pn16-xdksmi">
                    <thead>
                      <tr>
                        <th colSpan={2}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) Ødn</th>
                        <th>Item Code</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdksmi">
                      <tr>
                        <td>20 X ½ M</td>
                        <td>XDKSMI - 20/½</td>
                      </tr>
                      <tr>
                        <td>25 X ¾ M</td>
                        <td>XDKSMI - 25/¾</td>
                      </tr>
                      <tr>
                        <td>32 X 1 M</td>
                        <td>XDKSMI - 32/1</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Compression Male Elbow */}
                  <table className="spec-table" id="table-sdr11-pn16-xdksml">
                    <thead>
                      <tr>
                        <th colSpan={2}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) Ødn</th>
                        <th>Item Code</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdksml">
                      <tr>
                        <td>20 X ½ M</td>
                        <td>XDKSML - 20/½</td>
                      </tr>
                      <tr>
                        <td>25 X ¾ M</td>
                        <td>XDKSML - 25/¾</td>
                      </tr>
                      <tr>
                        <td>32 X 1 M</td>
                        <td>XDKSML - 32/1</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Electro Fusion Coupler */}
                  <table className="spec-table" id="table-sdr11-pn16-xdi-full">
                    <thead>
                      <tr>
                        <th colSpan={5}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                        <th>Ød</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdi-full">
                      <tr>
                        <td>20</td>
                        <td>XDI - 20</td>
                        <td>85</td>
                        <td>40</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>XDI - 25</td>
                        <td>90</td>
                        <td>43</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>32</td>
                        <td>XDI - 32</td>
                        <td>90</td>
                        <td>44</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>40</td>
                        <td>XDI - 40</td>
                        <td>95</td>
                        <td>45</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>50</td>
                        <td>XDI - 50</td>
                        <td>105</td>
                        <td>50</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>63</td>
                        <td>XDI - 63</td>
                        <td>110</td>
                        <td>50</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>75</td>
                        <td>XDI - 75</td>
                        <td>135</td>
                        <td>65</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>90</td>
                        <td>XDI - 90</td>
                        <td>130</td>
                        <td>63</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>110</td>
                        <td>XDI - 110</td>
                        <td>150</td>
                        <td>70</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>125</td>
                        <td>XDI - 125</td>
                        <td>165</td>
                        <td>80</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>140</td>
                        <td>XDI - 140</td>
                        <td>170</td>
                        <td>80</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>160</td>
                        <td>XDI - 160</td>
                        <td>180</td>
                        <td>85</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>180</td>
                        <td>XDI - 180</td>
                        <td>208</td>
                        <td>100</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>200</td>
                        <td>XDI - 200</td>
                        <td>208</td>
                        <td>100</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>225</td>
                        <td>XDI - 225</td>
                        <td>220</td>
                        <td>105</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>250</td>
                        <td>XDI - 250</td>
                        <td>215</td>
                        <td>105</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>315</td>
                        <td>XDI - 315</td>
                        <td>225</td>
                        <td>110</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>355</td>
                        <td>XDI - 355</td>
                        <td>265</td>
                        <td>130</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>400</td>
                        <td>XDI - 400</td>
                        <td>210</td>
                        <td>150</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>500</td>
                        <td>XDI - 500</td>
                        <td>370</td>
                        <td>180</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>560</td>
                        <td>XDI - 560</td>
                        <td>380</td>
                        <td>185</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>630</td>
                        <td>XDI - 630</td>
                        <td>420</td>
                        <td>205</td>
                        <td>4.7</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Butt Fusion Equal Tee */}
                  <table className="spec-table" id="table-sdr11-pn16-xdrst">
                    <thead>
                      <tr>
                        <th colSpan={6}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                        <th>B</th>
                        <th>H</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdrst">
                      <tr>
                        <td>50 x 50 x 50</td>
                        <td>XDRST 11 - 50</td>
                        <td>170</td>
                        <td>55</td>
                        <td>55</td>
                        <td>87</td>
                      </tr>
                      <tr>
                        <td>63 x 63 x 63</td>
                        <td>XDRST 11 - 63</td>
                        <td>203</td>
                        <td>63</td>
                        <td>63</td>
                        <td>104</td>
                      </tr>
                      <tr>
                        <td>75 x 75 x 75</td>
                        <td>XDRST 11 - 75</td>
                        <td>230</td>
                        <td>70</td>
                        <td>70</td>
                        <td>118</td>
                      </tr>
                      <tr>
                        <td>90 x 90 x 90</td>
                        <td>XDRST 11 - 90</td>
                        <td>263</td>
                        <td>79</td>
                        <td>77</td>
                        <td>134</td>
                      </tr>
                      <tr>
                        <td>110 x 110 x 110</td>
                        <td>XDRST 11 - 110</td>
                        <td>295</td>
                        <td>82</td>
                        <td>82</td>
                        <td>145</td>
                      </tr>
                      <tr>
                        <td>125 x 125 x 125</td>
                        <td>XDRST 11 - 125</td>
                        <td>315</td>
                        <td>87</td>
                        <td>87</td>
                        <td>163</td>
                      </tr>
                      <tr>
                        <td>140 x 140 x 140</td>
                        <td>XDRST 11 - 140</td>
                        <td>345</td>
                        <td>92</td>
                        <td>92</td>
                        <td>178</td>
                      </tr>
                      <tr>
                        <td>160 x 160 x 160</td>
                        <td>XDRST 11 - 160</td>
                        <td>325</td>
                        <td>70</td>
                        <td>70</td>
                        <td>169</td>
                      </tr>
                      <tr>
                        <td>180 x 180 x 180</td>
                        <td>XDRST 11 - 180</td>
                        <td>437</td>
                        <td>105</td>
                        <td>105</td>
                        <td>225</td>
                      </tr>
                      <tr>
                        <td>200 x 200 x 200</td>
                        <td>XDRST 11 - 200</td>
                        <td>380</td>
                        <td>78</td>
                        <td>87</td>
                        <td>200</td>
                      </tr>
                      <tr>
                        <td>225 x 225 x 225</td>
                        <td>XDRST 11 - 225</td>
                        <td>423</td>
                        <td>87</td>
                        <td>104</td>
                        <td>240</td>
                      </tr>
                      <tr>
                        <td>250 x 250 x 250</td>
                        <td>XDRST 11 - 250</td>
                        <td>517</td>
                        <td>120</td>
                        <td>120</td>
                        <td>275</td>
                      </tr>
                      <tr>
                        <td>280 x 280 x 280</td>
                        <td>XDRST 11 - 280</td>
                        <td>600</td>
                        <td>139</td>
                        <td>139</td>
                        <td>310</td>
                      </tr>
                      <tr>
                        <td>315 x 315 x 315</td>
                        <td>XDRST 11 - 315</td>
                        <td>619</td>
                        <td>137</td>
                        <td>127</td>
                        <td>315</td>
                      </tr>
                      <tr>
                        <td>355 x 335 x 355</td>
                        <td>XDRST 11 - 355</td>
                        <td>635</td>
                        <td>120</td>
                        <td>120</td>
                        <td>350</td>
                      </tr>
                      <tr>
                        <td>400 x 400 x 400</td>
                        <td>XDRST 11 - 400</td>
                        <td>675</td>
                        <td>110</td>
                        <td>120</td>
                        <td>380</td>
                      </tr>
                      <tr>
                        <td>450 x 450 x 450</td>
                        <td>XDRST 11 - 450</td>
                        <td>800</td>
                        <td>155</td>
                        <td>170</td>
                        <td>410</td>
                      </tr>
                      <tr>
                        <td>500 x 500 x 500</td>
                        <td>XDRST 11 - 500</td>
                        <td>860</td>
                        <td>140</td>
                        <td>160</td>
                        <td>505</td>
                      </tr>
                      <tr>
                        <td>560 x 560 x 560</td>
                        <td>XDRST 11 - 560</td>
                        <td>910</td>
                        <td>140</td>
                        <td>160</td>
                        <td>555</td>
                      </tr>
                      <tr>
                        <td>630 x 630 x 630</td>
                        <td>XDRST 11 - 630</td>
                        <td>1000</td>
                        <td>140</td>
                        <td>160</td>
                        <td>570</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="spec-table" id="table-sdr17-pn10-xdrst">
                    <thead>
                      <tr>
                        <th colSpan={6}>SDR 17 – PN10</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                        <th>B</th>
                        <th>H</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr17-pn10-xdrst">
                      <tr>
                        <td>63 x 63 x 63</td>
                        <td>XDRST 17 - 63</td>
                        <td>203</td>
                        <td>63</td>
                        <td>63</td>
                        <td>104</td>
                      </tr>
                      <tr>
                        <td>75 x 75 x 75</td>
                        <td>XDRST 17 - 75</td>
                        <td>230</td>
                        <td>70</td>
                        <td>70</td>
                        <td>118</td>
                      </tr>
                      <tr>
                        <td>90 x 90 x 90</td>
                        <td>XDRST 17 - 90</td>
                        <td>263</td>
                        <td>79</td>
                        <td>77</td>
                        <td>134</td>
                      </tr>
                      <tr>
                        <td>110 x 110 x 110</td>
                        <td>XDRST 17 - 110</td>
                        <td>295</td>
                        <td>82</td>
                        <td>82</td>
                        <td>145</td>
                      </tr>
                      <tr>
                        <td>125 x 125 x 125</td>
                        <td>XDRST 17 - 125</td>
                        <td>315</td>
                        <td>87</td>
                        <td>87</td>
                        <td>163</td>
                      </tr>
                      <tr>
                        <td>140 x 140 x 140</td>
                        <td>XDRST 17 - 140</td>
                        <td>345</td>
                        <td>92</td>
                        <td>92</td>
                        <td>178</td>
                      </tr>
                      <tr>
                        <td>160 x 160 x 160</td>
                        <td>XDRST 17 - 160</td>
                        <td>325</td>
                        <td>70</td>
                        <td>70</td>
                        <td>169</td>
                      </tr>
                      <tr>
                        <td>180 x 180 x 180</td>
                        <td>XDRST 17 - 180</td>
                        <td>437</td>
                        <td>105</td>
                        <td>105</td>
                        <td>225</td>
                      </tr>
                      <tr>
                        <td>200 x 200 x 200</td>
                        <td>XDRST 17 - 200</td>
                        <td>380</td>
                        <td>78</td>
                        <td>87</td>
                        <td>200</td>
                      </tr>
                      <tr>
                        <td>225 x 225 x 225</td>
                        <td>XDRST 17 - 225</td>
                        <td>423</td>
                        <td>87</td>
                        <td>104</td>
                        <td>240</td>
                      </tr>
                      <tr>
                        <td>250 x 250 x 250</td>
                        <td>XDRST 17 - 250</td>
                        <td>517</td>
                        <td>120</td>
                        <td>120</td>
                        <td>275</td>
                      </tr>
                      <tr>
                        <td>280 x 280 x 280</td>
                        <td>XDRST 17 - 280</td>
                        <td>600</td>
                        <td>139</td>
                        <td>139</td>
                        <td>310</td>
                      </tr>
                      <tr>
                        <td>315 x 315 x 315</td>
                        <td>XDRST 17 - 315</td>
                        <td>619</td>
                        <td>137</td>
                        <td>127</td>
                        <td>315</td>
                      </tr>
                      <tr>
                        <td>355 x 335 x 355</td>
                        <td>XDRST 17 - 355</td>
                        <td>635</td>
                        <td>120</td>
                        <td>120</td>
                        <td>350</td>
                      </tr>
                      <tr>
                        <td>400 x 400 x 400</td>
                        <td>XDRST 17 - 400</td>
                        <td>675</td>
                        <td>110</td>
                        <td>120</td>
                        <td>380</td>
                      </tr>
                      <tr>
                        <td>450 x 450 x 450</td>
                        <td>XDRST 17 - 450</td>
                        <td>800</td>
                        <td>155</td>
                        <td>170</td>
                        <td>410</td>
                      </tr>
                      <tr>
                        <td>500 x 500 x 500</td>
                        <td>XDRST 17 - 500</td>
                        <td>860</td>
                        <td>140</td>
                        <td>160</td>
                        <td>505</td>
                      </tr>
                      <tr>
                        <td>560 x 560 x 560</td>
                        <td>XDRST 17 - 560</td>
                        <td>910</td>
                        <td>140</td>
                        <td>160</td>
                        <td>555</td>
                      </tr>
                      <tr>
                        <td>630 x 630 x 630</td>
                        <td>XDRST 17 - 630</td>
                        <td>1000</td>
                        <td>140</td>
                        <td>160</td>
                        <td>570</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Butt Fusion Reducing Tee */}
                  <table className="spec-table" id="table-sdr11-pn16-xdrst-reducing">
                    <thead>
                      <tr>
                        <th colSpan={6}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                        <th>B</th>
                        <th>H</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdrst-reducing">
                      <tr>
                        <td>50 X 32 X 50</td>
                        <td>XDRST 11 - 50/32</td>
                        <td>169</td>
                        <td>55</td>
                        <td>54</td>
                        <td>86</td>
                      </tr>
                      <tr>
                        <td>63 X 25 X 63</td>
                        <td>XDRST 11 - 63/25</td>
                        <td>168</td>
                        <td>63</td>
                        <td>44</td>
                        <td>92</td>
                      </tr>
                      <tr>
                        <td>63 X 32 X 63</td>
                        <td>XDRST 11 - 63/32</td>
                        <td>174</td>
                        <td>63</td>
                        <td>44</td>
                        <td>93</td>
                      </tr>
                      <tr>
                        <td>63 X 40 X 63</td>
                        <td>XDRST 11 - 63/40</td>
                        <td>182</td>
                        <td>63</td>
                        <td>55</td>
                        <td>102</td>
                      </tr>
                      <tr>
                        <td>63 X 50 X 63</td>
                        <td>XDRST 11 - 63/50</td>
                        <td>191</td>
                        <td>63</td>
                        <td>55</td>
                        <td>102</td>
                      </tr>
                      <tr>
                        <td>75 X 32 X 75</td>
                        <td>XDRST 11 - 75/32</td>
                        <td>227</td>
                        <td>72</td>
                        <td>40</td>
                        <td>95</td>
                      </tr>
                      <tr>
                        <td>75 X 40 X 75</td>
                        <td>XDRST 11 - 75/40</td>
                        <td>227</td>
                        <td>72</td>
                        <td>49</td>
                        <td>106</td>
                      </tr>
                      <tr>
                        <td>75 X 50 X 75</td>
                        <td>XDRST 11 - 75/50</td>
                        <td>227</td>
                        <td>72</td>
                        <td>56</td>
                        <td>108</td>
                      </tr>
                      <tr>
                        <td>75 X 63 X 75</td>
                        <td>XDRST 11 - 75/63</td>
                        <td>227</td>
                        <td>72</td>
                        <td>63</td>
                        <td>118</td>
                      </tr>
                      <tr>
                        <td>90 X 32 X 90</td>
                        <td>XDRST 11 - 90/32</td>
                        <td>212</td>
                        <td>79</td>
                        <td>44</td>
                        <td>101</td>
                      </tr>
                      <tr>
                        <td>90 X 40 X 90</td>
                        <td>XDRST 11 - 90/40</td>
                        <td>223</td>
                        <td>79</td>
                        <td>49</td>
                        <td>115</td>
                      </tr>
                      <tr>
                        <td>90 X 50 X 90</td>
                        <td>XDRST 11 - 90/50</td>
                        <td>230</td>
                        <td>79</td>
                        <td>55</td>
                        <td>110</td>
                      </tr>
                      <tr>
                        <td>90 X 63 X 90</td>
                        <td>XDRST 11 - 90/63</td>
                        <td>244</td>
                        <td>79</td>
                        <td>63</td>
                        <td>115</td>
                      </tr>
                      <tr>
                        <td>90 X 75 X 90</td>
                        <td>XDRST 11 - 90/75</td>
                        <td>251</td>
                        <td>79</td>
                        <td>70</td>
                        <td>128</td>
                      </tr>
                      <tr>
                        <td>110 X 32 X 110</td>
                        <td>XDRST 11 - 110/32</td>
                        <td>222</td>
                        <td>82</td>
                        <td>48</td>
                        <td>115</td>
                      </tr>
                      <tr>
                        <td>110 X 40 X 110</td>
                        <td>XDRST 11 - 110/40</td>
                        <td>230</td>
                        <td>82</td>
                        <td>49</td>
                        <td>125</td>
                      </tr>
                      <tr>
                        <td>110 X 50 X 110</td>
                        <td>XDRST 11 - 110/50</td>
                        <td>240</td>
                        <td>82</td>
                        <td>55</td>
                        <td>135</td>
                      </tr>
                      <tr>
                        <td>110 X 63 X 110</td>
                        <td>XDRST 11 - 110/63</td>
                        <td>245</td>
                        <td>82</td>
                        <td>63</td>
                        <td>138</td>
                      </tr>
                      <tr>
                        <td>110 X 75 X 110</td>
                        <td>XDRST 11 - 110/75</td>
                        <td>262</td>
                        <td>82</td>
                        <td>70</td>
                        <td>145</td>
                      </tr>
                      <tr>
                        <td>110 X 90 X 110</td>
                        <td>XDRST 11 - 110/90</td>
                        <td>273</td>
                        <td>82</td>
                        <td>79</td>
                        <td>152</td>
                      </tr>
                      <tr>
                        <td>125 X 63 X 125</td>
                        <td>XDRST 11 - 125/63</td>
                        <td>318</td>
                        <td>87</td>
                        <td>63</td>
                        <td>146</td>
                      </tr>
                      <tr>
                        <td>125 X 75 X 125</td>
                        <td>XDRST 11 - 125/75</td>
                        <td>318</td>
                        <td>87</td>
                        <td>70</td>
                        <td>160</td>
                      </tr>
                      <tr>
                        <td>125 X 90 X 125</td>
                        <td>XDRST 11 - 125/90</td>
                        <td>318</td>
                        <td>87</td>
                        <td>79</td>
                        <td>160</td>
                      </tr>
                      <tr>
                        <td>125 X 110 X 125</td>
                        <td>XDRST 11 - 125/110</td>
                        <td>318</td>
                        <td>87</td>
                        <td>82</td>
                        <td>165</td>
                      </tr>
                      <tr>
                        <td>140 X 110 X 140</td>
                        <td>XDRST 11 - 140/110</td>
                        <td>315</td>
                        <td>92</td>
                        <td>82</td>
                        <td>160</td>
                      </tr>
                      <tr>
                        <td>140 X 125 X 140</td>
                        <td>XDRST 11 - 140/125</td>
                        <td>333</td>
                        <td>92</td>
                        <td>87</td>
                        <td>175</td>
                      </tr>
                      <tr>
                        <td>160 X 63 X 160</td>
                        <td>XDRST 11 - 160/63</td>
                        <td>275</td>
                        <td>98</td>
                        <td>63</td>
                        <td>163</td>
                      </tr>
                      <tr>
                        <td>160 X 75 X 160</td>
                        <td>XDRST 11 - 160/75</td>
                        <td>288</td>
                        <td>98</td>
                        <td>70</td>
                        <td>173</td>
                      </tr>
                      <tr>
                        <td>160 X 90 X 160</td>
                        <td>XDRST 11 - 160/90</td>
                        <td>300</td>
                        <td>98</td>
                        <td>79</td>
                        <td>185</td>
                      </tr>
                      <tr>
                        <td>160 X 110 X 160</td>
                        <td>XDRST 11 - 160/110</td>
                        <td>325</td>
                        <td>98</td>
                        <td>82</td>
                        <td>195</td>
                      </tr>
                      <tr>
                        <td>160 X 125 X 160</td>
                        <td>XDRST 11 - 160/125</td>
                        <td>335</td>
                        <td>98</td>
                        <td>87</td>
                        <td>192</td>
                      </tr>
                      <tr>
                        <td>160 X 140 X 160</td>
                        <td>XDRST 11 - 160/140</td>
                        <td>347</td>
                        <td>98</td>
                        <td>92</td>
                        <td>197</td>
                      </tr>
                      <tr>
                        <td>180 X 90 X 180</td>
                        <td>XDRST 11 - 180/90</td>
                        <td>340</td>
                        <td>105</td>
                        <td>79</td>
                        <td>190</td>
                      </tr>
                      <tr>
                        <td>180 X 110 X 180</td>
                        <td>XDRST 11 - 180/110</td>
                        <td>355</td>
                        <td>105</td>
                        <td>82</td>
                        <td>190</td>
                      </tr>
                      <tr>
                        <td>180 X 125 X 180</td>
                        <td>XDRST 11 - 180/125</td>
                        <td>365</td>
                        <td>105</td>
                        <td>87</td>
                        <td>202</td>
                      </tr>
                      <tr>
                        <td>180 X 140 X 180</td>
                        <td>XDRST 11 - 180/140</td>
                        <td>380</td>
                        <td>105</td>
                        <td>92</td>
                        <td>202</td>
                      </tr>
                      <tr>
                        <td>180 X 160 X 180</td>
                        <td>XDRST 11 - 180/160</td>
                        <td>400</td>
                        <td>105</td>
                        <td>98</td>
                        <td>202</td>
                      </tr>
                      <tr>
                        <td>200 X 63 X 200</td>
                        <td>XDRST 11 - 200/63</td>
                        <td>307</td>
                        <td>112</td>
                        <td>63</td>
                        <td>181</td>
                      </tr>
                      <tr>
                        <td>200 X 75 X 200</td>
                        <td>XDRST 11 - 200/75</td>
                        <td>315</td>
                        <td>112</td>
                        <td>70</td>
                        <td>182</td>
                      </tr>
                      <tr>
                        <td>200 X 90 X 200</td>
                        <td>XDRST 11 - 200/90</td>
                        <td>334</td>
                        <td>112</td>
                        <td>79</td>
                        <td>190</td>
                      </tr>
                      <tr>
                        <td>200 X 110 X 200</td>
                        <td>XDRST 11 - 200/110</td>
                        <td>365</td>
                        <td>112</td>
                        <td>82</td>
                        <td>200</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="spec-table" id="table-sdr17-pn10-xdrst-reducing">
                    <thead>
                      <tr>
                        <th colSpan={6}>SDR 17 – PN10</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                        <th>B</th>
                        <th>H</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr17-pn10-xdrst-reducing">
                      <tr>
                        <td>90 x 50 x 90</td>
                        <td>XDRST 17 - 90/50</td>
                        <td>230</td>
                        <td>79</td>
                        <td>55</td>
                        <td>110</td>
                      </tr>
                      <tr>
                        <td>90 x 63 x 90</td>
                        <td>XDRST 17 - 90/63</td>
                        <td>244</td>
                        <td>79</td>
                        <td>63</td>
                        <td>115</td>
                      </tr>
                      <tr>
                        <td>90 x 75 x 90</td>
                        <td>XDRST 17 - 90/75</td>
                        <td>251</td>
                        <td>79</td>
                        <td>70</td>
                        <td>128</td>
                      </tr>
                      <tr>
                        <td>110 x 50 x 110</td>
                        <td>XDRST 17 - 110/50</td>
                        <td>240</td>
                        <td>82</td>
                        <td>55</td>
                        <td>135</td>
                      </tr>
                      <tr>
                        <td>110 x 63 x 110</td>
                        <td>XDRST 17 - 110/63</td>
                        <td>245</td>
                        <td>82</td>
                        <td>63</td>
                        <td>130</td>
                      </tr>
                      <tr>
                        <td>110 x 75 x 110</td>
                        <td>XDRST 17 - 110/75</td>
                        <td>262</td>
                        <td>82</td>
                        <td>70</td>
                        <td>140</td>
                      </tr>
                      <tr>
                        <td>110 x 90 x 110</td>
                        <td>XDRST 17 - 110/90</td>
                        <td>277</td>
                        <td>82</td>
                        <td>79</td>
                        <td>145</td>
                      </tr>
                      <tr>
                        <td>125 x 75 x 125</td>
                        <td>XDRST 17 - 125/75</td>
                        <td>318</td>
                        <td>87</td>
                        <td>70</td>
                        <td>150</td>
                      </tr>
                      <tr>
                        <td>125 x 90 x 125</td>
                        <td>XDRST 17 - 125/90</td>
                        <td>318</td>
                        <td>87</td>
                        <td>79</td>
                        <td>150</td>
                      </tr>
                      <tr>
                        <td>125 x 110 x 125</td>
                        <td>XDRST 17 - 125/110</td>
                        <td>318</td>
                        <td>87</td>
                        <td>82</td>
                        <td>160</td>
                      </tr>
                      <tr>
                        <td>140 x 110 x 140</td>
                        <td>XDRST 17 - 140/110</td>
                        <td>315</td>
                        <td>92</td>
                        <td>82</td>
                        <td>160</td>
                      </tr>
                      <tr>
                        <td>140 x 125 x 140</td>
                        <td>XDRST 17 - 140/125</td>
                        <td>333</td>
                        <td>92</td>
                        <td>87</td>
                        <td>167</td>
                      </tr>
                      <tr>
                        <td>160 x 63 x 160</td>
                        <td>XDRST 17 - 160/63</td>
                        <td>275</td>
                        <td>98</td>
                        <td>63</td>
                        <td>153</td>
                      </tr>
                      <tr>
                        <td>160 x 75 x 160</td>
                        <td>XDRST 17 - 160/75</td>
                        <td>288</td>
                        <td>98</td>
                        <td>70</td>
                        <td>165</td>
                      </tr>
                      <tr>
                        <td>160 x 90 x 160</td>
                        <td>XDRST 17 - 160/90</td>
                        <td>300</td>
                        <td>98</td>
                        <td>79</td>
                        <td>170</td>
                      </tr>
                      <tr>
                        <td>160 x 110 x 160</td>
                        <td>XDRST 17 - 160/110</td>
                        <td>325</td>
                        <td>98</td>
                        <td>82</td>
                        <td>170</td>
                      </tr>
                      <tr>
                        <td>160 x 125 x 160</td>
                        <td>XDRST 17 - 160/125</td>
                        <td>335</td>
                        <td>98</td>
                        <td>79</td>
                        <td>180</td>
                      </tr>
                      <tr>
                        <td>180 x 90 x 180</td>
                        <td>XDRST 17 - 180/90</td>
                        <td>340</td>
                        <td>105</td>
                        <td>87</td>
                        <td>180</td>
                      </tr>
                      <tr>
                        <td>180 x 110 x 180</td>
                        <td>XDRST 17 - 180/110</td>
                        <td>365</td>
                        <td>105</td>
                        <td>82</td>
                        <td>185</td>
                      </tr>
                      <tr>
                        <td>180 x 125 x 180</td>
                        <td>XDRST 17 - 180/125</td>
                        <td>365</td>
                        <td>105</td>
                        <td>87</td>
                        <td>185</td>
                      </tr>
                      <tr>
                        <td>180 x 140 x 180</td>
                        <td>XDRST 17 - 180/140</td>
                        <td>380</td>
                        <td>105</td>
                        <td>92</td>
                        <td>202</td>
                      </tr>
                      <tr>
                        <td>180 x 160 x 180</td>
                        <td>XDRST 17 - 180/160</td>
                        <td>400</td>
                        <td>105</td>
                        <td>98</td>
                        <td>202</td>
                      </tr>
                      <tr>
                        <td>200 x 63 x 200</td>
                        <td>XDRST 17 - 200/63</td>
                        <td>307</td>
                        <td>112</td>
                        <td>63</td>
                        <td>175</td>
                      </tr>
                      <tr>
                        <td>200 x 75 x 200</td>
                        <td>XDRST 17 - 200/75</td>
                        <td>315</td>
                        <td>112</td>
                        <td>70</td>
                        <td>180</td>
                      </tr>
                      <tr>
                        <td>200 x 90 x 200</td>
                        <td>XDRST 17 - 200/90</td>
                        <td>334</td>
                        <td>112</td>
                        <td>79</td>
                        <td>190</td>
                      </tr>
                      <tr>
                        <td>200 x 110 x 200</td>
                        <td>XDRST 17 - 200/110</td>
                        <td>356</td>
                        <td>112</td>
                        <td>82</td>
                        <td>195</td>
                      </tr>
                      <tr>
                        <td>200 x 125 x 200</td>
                        <td>XDRST 17 - 200/125</td>
                        <td>380</td>
                        <td>112</td>
                        <td>87</td>
                        <td>195</td>
                      </tr>
                      <tr>
                        <td>200 x 160 x 200</td>
                        <td>XDRST 17 - 200/160</td>
                        <td>420</td>
                        <td>112</td>
                        <td>98</td>
                        <td>210</td>
                      </tr>
                      <tr>
                        <td>225 x 90 x 225</td>
                        <td>XDRST 17 - 225/90</td>
                        <td>360</td>
                        <td>120</td>
                        <td>79</td>
                        <td>210</td>
                      </tr>
                      <tr>
                        <td>225 x 110 x 225</td>
                        <td>XDRST 17 - 225/110</td>
                        <td>374</td>
                        <td>120</td>
                        <td>82</td>
                        <td>218</td>
                      </tr>
                      <tr>
                        <td>225 x 160 x 225</td>
                        <td>XDRST 17 - 225/160</td>
                        <td>422</td>
                        <td>120</td>
                        <td>98</td>
                        <td>210</td>
                      </tr>
                      <tr>
                        <td>225 x 180 x 225</td>
                        <td>XDRST 17 - 225/180</td>
                        <td>430</td>
                        <td>115</td>
                        <td>85</td>
                        <td>220</td>
                      </tr>
                      <tr>
                        <td>250 x 90 x 250</td>
                        <td>XDRST 17 - 250/90</td>
                        <td>375</td>
                        <td>130</td>
                        <td>79</td>
                        <td>220</td>
                      </tr>
                      <tr>
                        <td>250 x 110 x 250</td>
                        <td>XDRST 17 - 250/110</td>
                        <td>385</td>
                        <td>130</td>
                        <td>82</td>
                        <td>220</td>
                      </tr>
                      <tr>
                        <td>250 x 160 x 250</td>
                        <td>XDRST 17 - 250/160</td>
                        <td>380</td>
                        <td>95</td>
                        <td>98</td>
                        <td>240</td>
                      </tr>
                      <tr>
                        <td>250 x 200 x 250</td>
                        <td>XDRST 17 - 250/200</td>
                        <td>380</td>
                        <td>75</td>
                        <td>112</td>
                        <td>255</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="spec-table" id="table-sdr11-pn16-xdrst-reducing2">
                    <thead>
                      <tr>
                        <th colSpan={6}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                        <th>B</th>
                        <th>H</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdrst-reducing2">
                      <tr>
                        <td>200 x 125 x 200</td>
                        <td>XDRST 11 - 200/125</td>
                        <td>380</td>
                        <td>112</td>
                        <td>87</td>
                        <td>204</td>
                      </tr>
                      <tr>
                        <td>200 x 160 x 200</td>
                        <td>XDRST 11 - 200/160</td>
                        <td>420</td>
                        <td>112</td>
                        <td>98</td>
                        <td>210</td>
                      </tr>
                      <tr>
                        <td>225 x 90 x 225</td>
                        <td>XDRST 11 - 225/90</td>
                        <td>360</td>
                        <td>120</td>
                        <td>79</td>
                        <td>220</td>
                      </tr>
                      <tr>
                        <td>225 x 110 x 225</td>
                        <td>XDRST 11 - 225/110</td>
                        <td>370</td>
                        <td>120</td>
                        <td>82</td>
                        <td>215</td>
                      </tr>
                      <tr>
                        <td>225 x 160 x 225</td>
                        <td>XDRST 11 - 225/160</td>
                        <td>422</td>
                        <td>120</td>
                        <td>98</td>
                        <td>230</td>
                      </tr>
                      <tr>
                        <td>225 x 180 x 225</td>
                        <td>XDRST 11 - 225/180</td>
                        <td>430</td>
                        <td>95</td>
                        <td>85</td>
                        <td>195</td>
                      </tr>
                      <tr>
                        <td>250 x 90 x 250</td>
                        <td>XDRST 11 - 250/90</td>
                        <td>375</td>
                        <td>130</td>
                        <td>79</td>
                        <td>230</td>
                      </tr>
                      <tr>
                        <td>250 x 110 x 250</td>
                        <td>XDRST 11 - 250/110</td>
                        <td>378</td>
                        <td>120</td>
                        <td>82</td>
                        <td>225</td>
                      </tr>
                      <tr>
                        <td>250 x 125 x 250</td>
                        <td>XDRST 11 - 250/125</td>
                        <td>412</td>
                        <td>125</td>
                        <td>87</td>
                        <td>235</td>
                      </tr>
                      <tr>
                        <td>250 x 160 x 250</td>
                        <td>XDRST 11 - 250/160</td>
                        <td>380</td>
                        <td>95</td>
                        <td>98</td>
                        <td>235</td>
                      </tr>
                      <tr>
                        <td>250 x 180 x 250</td>
                        <td>XDRST 11 - 250/180</td>
                        <td>464</td>
                        <td>130</td>
                        <td>102</td>
                        <td>248</td>
                      </tr>
                      <tr>
                        <td>250 x 200 x 250</td>
                        <td>XDRST 11 - 250/200</td>
                        <td>380</td>
                        <td>75</td>
                        <td>112</td>
                        <td>255</td>
                      </tr>
                      <tr>
                        <td>280 x 90 x 280</td>
                        <td>XDRST 11 - 280/90</td>
                        <td>406</td>
                        <td>139</td>
                        <td>79</td>
                        <td>245</td>
                      </tr>
                      <tr>
                        <td>280 x 110 x 280</td>
                        <td>XDRST 11 - 280/110</td>
                        <td>410</td>
                        <td>139</td>
                        <td>82</td>
                        <td>250</td>
                      </tr>
                      <tr>
                        <td>280 x 125 x 280</td>
                        <td>XDRST 11 - 280/125</td>
                        <td>427</td>
                        <td>139</td>
                        <td>87</td>
                        <td>255</td>
                      </tr>
                      <tr>
                        <td>280 x 160 x 280</td>
                        <td>XDRST 11 - 280/160</td>
                        <td>459</td>
                        <td>139</td>
                        <td>98</td>
                        <td>270</td>
                      </tr>
                      <tr>
                        <td>280 x 225 x 280</td>
                        <td>XDRST 11 - 280/225</td>
                        <td>545</td>
                        <td>147</td>
                        <td>127</td>
                        <td>285</td>
                      </tr>
                      <tr>
                        <td>315 x 90 x 315</td>
                        <td>XDRST 11 - 315/90</td>
                        <td>425</td>
                        <td>150</td>
                        <td>79</td>
                        <td>265</td>
                      </tr>
                      <tr>
                        <td>315 x 110 x 315</td>
                        <td>XDRST 11 - 315/110</td>
                        <td>437</td>
                        <td>150</td>
                        <td>82</td>
                        <td>265</td>
                      </tr>
                      <tr>
                        <td>315 x 160 x 315</td>
                        <td>XDRST 11 - 315/160</td>
                        <td>450</td>
                        <td>132</td>
                        <td>74</td>
                        <td>290</td>
                      </tr>
                      <tr>
                        <td>315 x 180 x 315</td>
                        <td>XDRST 11 - 315/180</td>
                        <td>430</td>
                        <td>118</td>
                        <td>100</td>
                        <td>285</td>
                      </tr>
                      <tr>
                        <td>315 x 200 x 315</td>
                        <td>XDRST 11 - 315/200</td>
                        <td>450</td>
                        <td>113</td>
                        <td>98</td>
                        <td>285</td>
                      </tr>
                      <tr>
                        <td>315 x 225 x 315</td>
                        <td>XDRST 11 - 315/225</td>
                        <td>450</td>
                        <td>95</td>
                        <td>100</td>
                        <td>275</td>
                      </tr>
                      <tr>
                        <td>315 x 250 x 315</td>
                        <td>XDRST 11 - 315/250</td>
                        <td>450</td>
                        <td>93</td>
                        <td>77</td>
                        <td>268</td>
                      </tr>
                      <tr>
                        <td>315 x 280 x 315</td>
                        <td>XDRST 11 - 315/280</td>
                        <td>583</td>
                        <td>140</td>
                        <td>110</td>
                        <td>320</td>
                      </tr>
                      <tr>
                        <td>400 x 200 x 400</td>
                        <td>XDRST 11 - 400/200</td>
                        <td>670</td>
                        <td>130</td>
                        <td>150</td>
                        <td>380</td>
                      </tr>
                      <tr>
                        <td>400 x 250 x 400</td>
                        <td>XDRST 11 - 400/250</td>
                        <td>670</td>
                        <td>130</td>
                        <td>150</td>
                        <td>380</td>
                      </tr>
                      <tr>
                        <td>400 x 315 x 400</td>
                        <td>XDRST 11 - 400/315</td>
                        <td>670</td>
                        <td>130</td>
                        <td>150</td>
                        <td>380</td>
                      </tr>
                      <tr>
                        <td>400 x 355 x 400</td>
                        <td>XDRST 11 - 400/355</td>
                        <td>670</td>
                        <td>130</td>
                        <td>150</td>
                        <td>380</td>
                      </tr>
                      <tr>
                        <td>450 x 315 x 450</td>
                        <td>XDRST 11 - 450/315</td>
                        <td>660</td>
                        <td>150</td>
                        <td>150</td>
                        <td>410</td>
                      </tr>
                      <tr>
                        <td>450 x 400 x 450</td>
                        <td>XDRST 11 - 450/400</td>
                        <td>740</td>
                        <td>150</td>
                        <td>170</td>
                        <td>410</td>
                      </tr>
                      <tr>
                        <td>500 x 125 x 500</td>
                        <td>XDRST 11 - 500/125</td>
                        <td>500</td>
                        <td>160</td>
                        <td>120</td>
                        <td>420</td>
                      </tr>
                      <tr>
                        <td>500 x 160 x 500</td>
                        <td>XDRST 11 - 500/160</td>
                        <td>530</td>
                        <td>160</td>
                        <td>135</td>
                        <td>420</td>
                      </tr>
                      <tr>
                        <td>500 x 250 x 500</td>
                        <td>XDRST 11 - 500/250</td>
                        <td>620</td>
                        <td>160</td>
                        <td>135</td>
                        <td>420</td>
                      </tr>
                      <tr>
                        <td>500 x 315 x 500</td>
                        <td>XDRST 11 - 500/315</td>
                        <td>685</td>
                        <td>160</td>
                        <td>150</td>
                        <td>420</td>
                      </tr>
                      <tr>
                        <td>500 x 400 x 500</td>
                        <td>XDRST 11 - 500/400</td>
                        <td>770</td>
                        <td>160</td>
                        <td>170</td>
                        <td>470</td>
                      </tr>
                      <tr>
                        <td>560 x 160 x 560</td>
                        <td>XDRST 11 - 560/160</td>
                        <td>715</td>
                        <td>128</td>
                        <td>120</td>
                        <td>440</td>
                      </tr>
                      <tr>
                        <td>560 x 250 x 560</td>
                        <td>XDRST 11 - 560/250</td>
                        <td>715</td>
                        <td>155</td>
                        <td>135</td>
                        <td>420</td>
                      </tr>
                      <tr>
                        <td>560 x 355 x 560</td>
                        <td>XDRST 11 - 560/355</td>
                        <td>720</td>
                        <td>155</td>
                        <td>135</td>
                        <td>555</td>
                      </tr>
                      <tr>
                        <td>560 x 400 x 560</td>
                        <td>XDRST 11 - 560/400</td>
                        <td>760</td>
                        <td>155</td>
                        <td>170</td>
                        <td>555</td>
                      </tr>
                      <tr>
                        <td>630 x 400 x 630</td>
                        <td>XDRST 11 - 630/400</td>
                        <td>770</td>
                        <td>135</td>
                        <td>170</td>
                        <td>570</td>
                      </tr>
                      <tr>
                        <td>630 x 500 x 630</td>
                        <td>XDRST 11 - 630/500</td>
                        <td>1000</td>
                        <td>135</td>
                        <td>190</td>
                        <td>570</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Butt Fusion Equal 90 Elbow */}
                  <table className="spec-table" id="table-sdr11-pn16-xdrl">
                    <thead>
                      <tr>
                        <th colSpan={4}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdrl">
                      <tr>
                        <td>50</td>
                        <td>XDRL 11 - 50</td>
                        <td>119</td>
                        <td>66</td>
                      </tr>
                      <tr>
                        <td>63</td>
                        <td>XDRL 11 - 63</td>
                        <td>132</td>
                        <td>63</td>
                      </tr>
                      <tr>
                        <td>75</td>
                        <td>XDRL 11 - 75</td>
                        <td>165</td>
                        <td>70</td>
                      </tr>
                      <tr>
                        <td>90</td>
                        <td>XDRL 11 - 90</td>
                        <td>182</td>
                        <td>79</td>
                      </tr>
                      <tr>
                        <td>110</td>
                        <td>XDRL 11 - 110</td>
                        <td>210</td>
                        <td>82</td>
                      </tr>
                      <tr>
                        <td>125</td>
                        <td>XDRL 11 - 125</td>
                        <td>240</td>
                        <td>87</td>
                      </tr>
                      <tr>
                        <td>140</td>
                        <td>XDRL 11 - 140</td>
                        <td>241</td>
                        <td>89</td>
                      </tr>
                      <tr>
                        <td>160</td>
                        <td>XDRL 11 - 160</td>
                        <td>258</td>
                        <td>80</td>
                      </tr>
                      <tr>
                        <td>180</td>
                        <td>XDRL 11 - 180</td>
                        <td>295</td>
                        <td>105</td>
                      </tr>
                      <tr>
                        <td>200</td>
                        <td>XDRL 11 - 200</td>
                        <td>308</td>
                        <td>96</td>
                      </tr>
                      <tr>
                        <td>225</td>
                        <td>XDRL 11 - 225</td>
                        <td>367</td>
                        <td>120</td>
                      </tr>
                      <tr>
                        <td>250</td>
                        <td>XDRL 11 - 250</td>
                        <td>361</td>
                        <td>98</td>
                      </tr>
                      <tr>
                        <td>280</td>
                        <td>XDRL 11 - 280</td>
                        <td>423</td>
                        <td>139</td>
                      </tr>
                      <tr>
                        <td>315</td>
                        <td>XDRL 11 - 315</td>
                        <td>455</td>
                        <td>123</td>
                      </tr>
                      <tr>
                        <td>355</td>
                        <td>XDRL 11 - 355</td>
                        <td>550</td>
                        <td>155</td>
                      </tr>
                      <tr>
                        <td>400</td>
                        <td>XDRL 11 - 400</td>
                        <td>610</td>
                        <td>160</td>
                      </tr>
                      <tr>
                        <td>450</td>
                        <td>XDRL 11 - 450</td>
                        <td>650</td>
                        <td>155</td>
                      </tr>
                      <tr>
                        <td>500</td>
                        <td>XDRL 11 - 500</td>
                        <td>700</td>
                        <td>155</td>
                      </tr>
                      <tr>
                        <td>560</td>
                        <td>XDRL 11 - 560</td>
                        <td>780</td>
                        <td>165</td>
                      </tr>
                      <tr>
                        <td>630</td>
                        <td>XDRL 11 - 630</td>
                        <td>850</td>
                        <td>170</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="spec-table" id="table-sdr17-pn10-xdrl">
                    <thead>
                      <tr>
                        <th colSpan={4}>SDR 17 – PN10</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr17-pn10-xdrl">
                      <tr>
                        <td>63</td>
                        <td>XDRL 17 - 63</td>
                        <td>132</td>
                        <td>63</td>
                      </tr>
                      <tr>
                        <td>75</td>
                        <td>XDRL 17 - 75</td>
                        <td>165</td>
                        <td>70</td>
                      </tr>
                      <tr>
                        <td>90</td>
                        <td>XDRL 17 - 90</td>
                        <td>188</td>
                        <td>79</td>
                      </tr>
                      <tr>
                        <td>110</td>
                        <td>XDRL 17 - 110</td>
                        <td>212</td>
                        <td>82</td>
                      </tr>
                      <tr>
                        <td>125</td>
                        <td>XDRL 17 - 125</td>
                        <td>240</td>
                        <td>87</td>
                      </tr>
                      <tr>
                        <td>140</td>
                        <td>XDRL 17 - 140</td>
                        <td>240</td>
                        <td>89</td>
                      </tr>
                      <tr>
                        <td>160</td>
                        <td>XDRL 17 - 160</td>
                        <td>258</td>
                        <td>80</td>
                      </tr>
                      <tr>
                        <td>180</td>
                        <td>XDRL 17 - 180</td>
                        <td>295</td>
                        <td>105</td>
                      </tr>
                      <tr>
                        <td>200</td>
                        <td>XDRL 17 - 200</td>
                        <td>308</td>
                        <td>96</td>
                      </tr>
                      <tr>
                        <td>225</td>
                        <td>XDRL 17 - 225</td>
                        <td>367</td>
                        <td>120</td>
                      </tr>
                      <tr>
                        <td>250</td>
                        <td>XDRL 17 - 250</td>
                        <td>361</td>
                        <td>98</td>
                      </tr>
                      <tr>
                        <td>280</td>
                        <td>XDRL 17 - 280</td>
                        <td>432</td>
                        <td>129</td>
                      </tr>
                      <tr>
                        <td>315</td>
                        <td>XDRL 17 - 315</td>
                        <td>467</td>
                        <td>130</td>
                      </tr>
                      <tr>
                        <td>355</td>
                        <td>XDRL 17 - 355</td>
                        <td>550</td>
                        <td>150</td>
                      </tr>
                      <tr>
                        <td>400</td>
                        <td>XDRL 17 - 400</td>
                        <td>610</td>
                        <td>180</td>
                      </tr>
                      <tr>
                        <td>450</td>
                        <td>XDRL 17 - 450</td>
                        <td>650</td>
                        <td>155</td>
                      </tr>
                      <tr>
                        <td>500</td>
                        <td>XDRL 17 - 500</td>
                        <td>700</td>
                        <td>155</td>
                      </tr>
                      <tr>
                        <td>560</td>
                        <td>XDRL 17 - 560</td>
                        <td>780</td>
                        <td>170</td>
                      </tr>
                      <tr>
                        <td>630</td>
                        <td>XDRL 17 - 630</td>
                        <td>850</td>
                        <td>170</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Butt Fusion Equal 45 Elbow */}
                  <table className="spec-table" id="table-sdr11-pn16-xdrvl">
                    <thead>
                      <tr>
                        <th colSpan={5}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                        <th>B</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdrvl">
                      <tr>
                        <td>63</td>
                        <td>XDRVL 11 - 63</td>
                        <td>160</td>
                        <td>63</td>
                        <td>80</td>
                      </tr>
                      <tr>
                        <td>75</td>
                        <td>XDRVL 11 - 75</td>
                        <td>180</td>
                        <td>70</td>
                        <td>89</td>
                      </tr>
                      <tr>
                        <td>90</td>
                        <td>XDRVL 11 - 90</td>
                        <td>227</td>
                        <td>79</td>
                        <td>112</td>
                      </tr>
                      <tr>
                        <td>110</td>
                        <td>XDRVL 11 - 110</td>
                        <td>245</td>
                        <td>82</td>
                        <td>118</td>
                      </tr>
                      <tr>
                        <td>125</td>
                        <td>XDRVL 11 - 125</td>
                        <td>244</td>
                        <td>87</td>
                        <td>118</td>
                      </tr>
                      <tr>
                        <td>160</td>
                        <td>XDRVL 11 - 160</td>
                        <td>302</td>
                        <td>98</td>
                        <td>145</td>
                      </tr>
                      <tr>
                        <td>180</td>
                        <td>XDRVL 11 - 180</td>
                        <td>340</td>
                        <td>105</td>
                        <td>155</td>
                      </tr>
                      <tr>
                        <td>200</td>
                        <td>XDRVL 11 - 200</td>
                        <td>355</td>
                        <td>112</td>
                        <td>168</td>
                      </tr>
                      <tr>
                        <td>225</td>
                        <td>XDRVL 11 - 225</td>
                        <td>390</td>
                        <td>120</td>
                        <td>170</td>
                      </tr>
                      <tr>
                        <td>250</td>
                        <td>XDRVL 11 - 250</td>
                        <td>405</td>
                        <td>130</td>
                        <td>189</td>
                      </tr>
                      <tr>
                        <td>280</td>
                        <td>XDRVL 11 - 280</td>
                        <td>460</td>
                        <td>140</td>
                        <td>215</td>
                      </tr>
                      <tr>
                        <td>315</td>
                        <td>XDRVL 11 - 315</td>
                        <td>505</td>
                        <td>150</td>
                        <td>220</td>
                      </tr>
                      <tr>
                        <td>355</td>
                        <td>XDRVL 11 - 355</td>
                        <td>530</td>
                        <td>145</td>
                        <td>235</td>
                      </tr>
                      <tr>
                        <td>400</td>
                        <td>XDRVL 11 - 400</td>
                        <td>580</td>
                        <td>160</td>
                        <td>270</td>
                      </tr>
                      <tr>
                        <td>450</td>
                        <td>XDRVL 11 - 450</td>
                        <td>650</td>
                        <td>155</td>
                        <td>280</td>
                      </tr>
                      <tr>
                        <td>500</td>
                        <td>XDRVL 11 - 500</td>
                        <td>735</td>
                        <td>180</td>
                        <td>320</td>
                      </tr>
                      <tr>
                        <td>560</td>
                        <td>XDRVL 11 - 560</td>
                        <td>760</td>
                        <td>160</td>
                        <td>330</td>
                      </tr>
                      <tr>
                        <td>630</td>
                        <td>XDRVL 11 - 630</td>
                        <td>820</td>
                        <td>160</td>
                        <td>360</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="spec-table" id="table-sdr17-pn10-xdrvl">
                    <thead>
                      <tr>
                        <th colSpan={5}>SDR 17 – PN10</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                        <th>B</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr17-pn10-xdrvl">
                      <tr>
                        <td>63</td>
                        <td>XDRVL 17 - 63</td>
                        <td>160</td>
                        <td>63</td>
                        <td>80</td>
                      </tr>
                      <tr>
                        <td>75</td>
                        <td>XDRVL 17 - 75</td>
                        <td>180</td>
                        <td>70</td>
                        <td>89</td>
                      </tr>
                      <tr>
                        <td>90</td>
                        <td>XDRVL 17 - 90</td>
                        <td>229</td>
                        <td>79</td>
                        <td>112</td>
                      </tr>
                      <tr>
                        <td>110</td>
                        <td>XDRVL 17 - 110</td>
                        <td>245</td>
                        <td>82</td>
                        <td>120</td>
                      </tr>
                      <tr>
                        <td>125</td>
                        <td>XDRVL 17 - 125</td>
                        <td>244</td>
                        <td>87</td>
                        <td>113</td>
                      </tr>
                      <tr>
                        <td>160</td>
                        <td>XDRVL 17 - 160</td>
                        <td>302</td>
                        <td>98</td>
                        <td>135</td>
                      </tr>
                      <tr>
                        <td>180</td>
                        <td>XDRVL 17 - 180</td>
                        <td>340</td>
                        <td>105</td>
                        <td>155</td>
                      </tr>
                      <tr>
                        <td>200</td>
                        <td>XDRVL 17 - 200</td>
                        <td>355</td>
                        <td>112</td>
                        <td>168</td>
                      </tr>
                      <tr>
                        <td>225</td>
                        <td>XDRVL 17 - 225</td>
                        <td>398</td>
                        <td>120</td>
                        <td>170</td>
                      </tr>
                      <tr>
                        <td>250</td>
                        <td>XDRVL 17 - 250</td>
                        <td>420</td>
                        <td>130</td>
                        <td>189</td>
                      </tr>
                      <tr>
                        <td>280</td>
                        <td>XDRVL 17 - 280</td>
                        <td>465</td>
                        <td>140</td>
                        <td>215</td>
                      </tr>
                      <tr>
                        <td>315</td>
                        <td>XDRVL 17 - 315</td>
                        <td>510</td>
                        <td>140</td>
                        <td>210</td>
                      </tr>
                      <tr>
                        <td>355</td>
                        <td>XDRVL 17 - 355</td>
                        <td>530</td>
                        <td>145</td>
                        <td>235</td>
                      </tr>
                      <tr>
                        <td>400</td>
                        <td>XDRVL 17 - 400</td>
                        <td>580</td>
                        <td>160</td>
                        <td>270</td>
                      </tr>
                      <tr>
                        <td>450</td>
                        <td>XDRVL 17 - 450</td>
                        <td>650</td>
                        <td>155</td>
                        <td>280</td>
                      </tr>
                      <tr>
                        <td>500</td>
                        <td>XDRVL 17 - 500</td>
                        <td>735</td>
                        <td>180</td>
                        <td>320</td>
                      </tr>
                      <tr>
                        <td>560</td>
                        <td>XDRVL 17 - 560</td>
                        <td>760</td>
                        <td>160</td>
                        <td>330</td>
                      </tr>
                      <tr>
                        <td>630</td>
                        <td>XDRVL 17 - 630</td>
                        <td>820</td>
                        <td>160</td>
                        <td>360</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Butt Fusion Reducer */}
                  <table className="spec-table" id="table-sdr11-pn16-xdrst-tee">
                    <thead>
                      <tr>
                        <th colSpan={5}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                        <th>B</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdrst-tee">
                      <tr>
                        <td>63 X 25</td>
                        <td>XDRST 11 - 63/25</td>
                        <td>146</td>
                        <td>65</td>
                        <td>58</td>
                      </tr>
                      <tr>
                        <td>63 X 32</td>
                        <td>XDRST 11 - 63/32</td>
                        <td>155</td>
                        <td>70</td>
                        <td>55</td>
                      </tr>
                      <tr>
                        <td>63 X 40</td>
                        <td>XDRST 11 - 63/40</td>
                        <td>152</td>
                        <td>70</td>
                        <td>55</td>
                      </tr>
                      <tr>
                        <td>63 X 50</td>
                        <td>XDRST 11 - 63/50</td>
                        <td>158</td>
                        <td>70</td>
                        <td>55</td>
                      </tr>
                      <tr>
                        <td>75 X 32</td>
                        <td>XDRST 11 - 75/32</td>
                        <td>160</td>
                        <td>80</td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td>75 X 50</td>
                        <td>XDRST 11 - 75/50</td>
                        <td>160</td>
                        <td>80</td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td>75 X 63</td>
                        <td>XDRST 11 - 75/63</td>
                        <td>160</td>
                        <td>80</td>
                        <td>63</td>
                      </tr>
                      <tr>
                        <td>90 X 32</td>
                        <td>XDRST 11 - 90/32</td>
                        <td>170</td>
                        <td>79</td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td>90 X 40</td>
                        <td>XDRST 11 - 90/40</td>
                        <td>175</td>
                        <td>79</td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td>90 X 50</td>
                        <td>XDRST 11 - 90/50</td>
                        <td>174</td>
                        <td>79</td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td>90 X 63</td>
                        <td>XDRST 11 - 90/63</td>
                        <td>174</td>
                        <td>79</td>
                        <td>65</td>
                      </tr>
                      <tr>
                        <td>90 X 75</td>
                        <td>XDRST 11 - 90/75</td>
                        <td>175</td>
                        <td>79</td>
                        <td>70</td>
                      </tr>
                      <tr>
                        <td>110 X 40</td>
                        <td>XDRST 11 - 110/40</td>
                        <td>180</td>
                        <td>89</td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td>110 X 50</td>
                        <td>XDRST 11 - 110/50</td>
                        <td>180</td>
                        <td>89</td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td>110 X 63</td>
                        <td>XDRST 11 - 110/63</td>
                        <td>185</td>
                        <td>89</td>
                        <td>63</td>
                      </tr>
                      <tr>
                        <td>110 X 75</td>
                        <td>XDRST 11 - 110/75</td>
                        <td>188</td>
                        <td>89</td>
                        <td>70</td>
                      </tr>
                      <tr>
                        <td>110 X 90</td>
                        <td>XDRST 11 - 110/90</td>
                        <td>190</td>
                        <td>89</td>
                        <td>79</td>
                      </tr>
                      <tr>
                        <td>125 X 63</td>
                        <td>XDRST 11 - 125/63</td>
                        <td>192</td>
                        <td>87</td>
                        <td>63</td>
                      </tr>
                      <tr>
                        <td>125 X 75</td>
                        <td>XDRST 11 - 125/75</td>
                        <td>186</td>
                        <td>87</td>
                        <td>70</td>
                      </tr>
                      <tr>
                        <td>125 X 90</td>
                        <td>XDRST 11 - 125/90</td>
                        <td>195</td>
                        <td>87</td>
                        <td>80</td>
                      </tr>
                      <tr>
                        <td>125 X 110</td>
                        <td>XDRST 11 - 125/110</td>
                        <td>195</td>
                        <td>87</td>
                        <td>82</td>
                      </tr>
                      <tr>
                        <td>140 X 90</td>
                        <td>XDRST 11 - 140/90</td>
                        <td>232</td>
                        <td>92</td>
                        <td>79</td>
                      </tr>
                      <tr>
                        <td>140 X 110</td>
                        <td>XDRST 11 - 140/110</td>
                        <td>232</td>
                        <td>92</td>
                        <td>82</td>
                      </tr>
                      <tr>
                        <td>160 X 32</td>
                        <td>XDRST 11 - 160/32</td>
                        <td>210</td>
                        <td>98</td>
                        <td>70</td>
                      </tr>
                      <tr>
                        <td>160 X 63</td>
                        <td>XDRST 11 - 160/63</td>
                        <td>210</td>
                        <td>98</td>
                        <td>70</td>
                      </tr>
                      <tr>
                        <td>160 X 75</td>
                        <td>XDRST 11 - 160/75</td>
                        <td>210</td>
                        <td>98</td>
                        <td>70</td>
                      </tr>
                      <tr>
                        <td>160 X 90</td>
                        <td>XDRST 11 - 160/90</td>
                        <td>212</td>
                        <td>98</td>
                        <td>80</td>
                      </tr>
                      <tr>
                        <td>160 X 110</td>
                        <td>XDRST 11 - 160/110</td>
                        <td>215</td>
                        <td>98</td>
                        <td>80</td>
                      </tr>
                      <tr>
                        <td>160 X 125</td>
                        <td>XDRST 11 - 160/125</td>
                        <td>218</td>
                        <td>98</td>
                        <td>87</td>
                      </tr>
                      <tr>
                        <td>180 X 90</td>
                        <td>XDRST 11 - 180/90</td>
                        <td>240</td>
                        <td>108</td>
                        <td>80</td>
                      </tr>
                      <tr>
                        <td>180 X 110</td>
                        <td>XDRST 11 - 180/110</td>
                        <td>228</td>
                        <td>108</td>
                        <td>82</td>
                      </tr>
                      <tr>
                        <td>180 X 125</td>
                        <td>XDRST 11 - 180/125</td>
                        <td>240</td>
                        <td>108</td>
                        <td>85</td>
                      </tr>
                      <tr>
                        <td>180 X 160</td>
                        <td>XDRST 11 - 180/160</td>
                        <td>240</td>
                        <td>104</td>
                        <td>93</td>
                      </tr>
                      <tr>
                        <td>200 X 63</td>
                        <td>XDRST 11 - 200/63</td>
                        <td>227</td>
                        <td>112</td>
                        <td>63</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="spec-table" id="table-sdr17-pn10-xdrs-tee">
                    <thead>
                      <tr>
                        <th colSpan={5}>SDR 17 – PN10</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                        <th>B</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr17-pn10-xdrs-tee">
                      <tr>
                        <td>90 X 50</td>
                        <td>XDRS 17 - 90/50</td>
                        <td>174</td>
                        <td>79</td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td>90 X 63</td>
                        <td>XDRS 17 - 90/63</td>
                        <td>174</td>
                        <td>79</td>
                        <td>65</td>
                      </tr>
                      <tr>
                        <td>90 X 75</td>
                        <td>XDRS 17 - 90/75</td>
                        <td>175</td>
                        <td>79</td>
                        <td>70</td>
                      </tr>
                      <tr>
                        <td>110 X 50</td>
                        <td>XDRS 17 - 110/50</td>
                        <td>180</td>
                        <td>89</td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td>110 X 63</td>
                        <td>XDRS 17 - 110/63</td>
                        <td>185</td>
                        <td>89</td>
                        <td>63</td>
                      </tr>
                      <tr>
                        <td>110 X 75</td>
                        <td>XDRS 17 - 110/75</td>
                        <td>188</td>
                        <td>89</td>
                        <td>70</td>
                      </tr>
                      <tr>
                        <td>110 X 90</td>
                        <td>XDRS 17 - 110/90</td>
                        <td>190</td>
                        <td>89</td>
                        <td>79</td>
                      </tr>
                      <tr>
                        <td>125 X 90</td>
                        <td>XDRS 17 - 125/90</td>
                        <td>195</td>
                        <td>87</td>
                        <td>80</td>
                      </tr>
                      <tr>
                        <td>125 X 110</td>
                        <td>XDRS 17 - 125/110</td>
                        <td>195</td>
                        <td>87</td>
                        <td>82</td>
                      </tr>
                      <tr>
                        <td>140 X 110</td>
                        <td>XDRS 17 - 140/110</td>
                        <td>232</td>
                        <td>92</td>
                        <td>82</td>
                      </tr>
                      <tr>
                        <td>160 X 63</td>
                        <td>XDRS 17 - 160/63</td>
                        <td>210</td>
                        <td>98</td>
                        <td>70</td>
                      </tr>
                      <tr>
                        <td>160 X 75</td>
                        <td>XDRS 17 - 160/75</td>
                        <td>210</td>
                        <td>98</td>
                        <td>70</td>
                      </tr>
                      <tr>
                        <td>160 X 90</td>
                        <td>XDRS 17 - 160/90</td>
                        <td>212</td>
                        <td>98</td>
                        <td>80</td>
                      </tr>
                      <tr>
                        <td>160 X 110</td>
                        <td>XDRS 17 - 160/110</td>
                        <td>215</td>
                        <td>98</td>
                        <td>80</td>
                      </tr>
                      <tr>
                        <td>160 X 125</td>
                        <td>XDRS 17 - 160/125</td>
                        <td>218</td>
                        <td>98</td>
                        <td>87</td>
                      </tr>
                      <tr>
                        <td>180 X 90</td>
                        <td>XDRS 17 - 180/90</td>
                        <td>240</td>
                        <td>108</td>
                        <td>80</td>
                      </tr>
                      <tr>
                        <td>180 X 110</td>
                        <td>XDRS 17 - 180/110</td>
                        <td>228</td>
                        <td>108</td>
                        <td>82</td>
                      </tr>
                      <tr>
                        <td>180 X 125</td>
                        <td>XDRS 17 - 180/125</td>
                        <td>240</td>
                        <td>108</td>
                        <td>87</td>
                      </tr>
                      <tr>
                        <td>200 X 90</td>
                        <td>XDRS 17 - 200/90</td>
                        <td>230</td>
                        <td>112</td>
                        <td>82</td>
                      </tr>
                      <tr>
                        <td>200 X 110</td>
                        <td>XDRS 17 - 200/110</td>
                        <td>230</td>
                        <td>112</td>
                        <td>82</td>
                      </tr>
                      <tr>
                        <td>200 X 160</td>
                        <td>XDRS 17 - 200/160</td>
                        <td>240</td>
                        <td>112</td>
                        <td>98</td>
                      </tr>
                      <tr>
                        <td>225 X 110</td>
                        <td>XDRS 17 - 225/110</td>
                        <td>250</td>
                        <td>110</td>
                        <td>82</td>
                      </tr>
                      <tr>
                        <td>225 X 160</td>
                        <td>XDRS 17 - 225/160</td>
                        <td>258</td>
                        <td>110</td>
                        <td>98</td>
                      </tr>
                      <tr>
                        <td>225 X 180</td>
                        <td>XDRS 17 - 225/180</td>
                        <td>250</td>
                        <td>110</td>
                        <td>88</td>
                      </tr>
                      <tr>
                        <td>225 X 200</td>
                        <td>XDRS 17 - 225/200</td>
                        <td>255</td>
                        <td>110</td>
                        <td>88</td>
                      </tr>
                      <tr>
                        <td>250 X 90</td>
                        <td>XDRS 17 - 250/90</td>
                        <td>230</td>
                        <td>110</td>
                        <td>88</td>
                      </tr>
                      <tr>
                        <td>250 X 110</td>
                        <td>XDRS 17 - 250/110</td>
                        <td>237</td>
                        <td>110</td>
                        <td>88</td>
                      </tr>
                      <tr>
                        <td>250 X 125</td>
                        <td>XDRS 17 - 250/125</td>
                        <td>230</td>
                        <td>110</td>
                        <td>90</td>
                      </tr>
                      <tr>
                        <td>250 X 160</td>
                        <td>XDRS 17 - 250/160</td>
                        <td>245</td>
                        <td>110</td>
                        <td>100</td>
                      </tr>
                      <tr>
                        <td>250 X 180</td>
                        <td>XDRS 17 - 250/180</td>
                        <td>248</td>
                        <td>110</td>
                        <td>105</td>
                      </tr>
                      <tr>
                        <td>250 X 200</td>
                        <td>XDRS 17 - 250/200</td>
                        <td>250</td>
                        <td>110</td>
                        <td>105</td>
                      </tr>
                      <tr>
                        <td>250 X 225</td>
                        <td>XDRS 17 - 250/225</td>
                        <td>280</td>
                        <td>130</td>
                        <td>120</td>
                      </tr>
                      <tr>
                        <td>280 X 160</td>
                        <td>XDRS 17 - 280/160</td>
                        <td>250</td>
                        <td>110</td>
                        <td>85</td>
                      </tr>
                      <tr>
                        <td>280 X 225</td>
                        <td>XDRS 17 - 280/225</td>
                        <td>250</td>
                        <td>110</td>
                        <td>85</td>
                      </tr>
                      <tr>
                        <td>315 X 90</td>
                        <td>XDRS 17 - 315/90</td>
                        <td>255</td>
                        <td>118</td>
                        <td>90</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Butt Fusion End Cap */}
                  <table className="spec-table" id="table-sdr11-pn16-xdrm">
                    <thead>
                      <tr>
                        <th colSpan={4}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdrm">
                      <tr>
                        <td>20</td>
                        <td>XDRM 11 - 20</td>
                        <td>55</td>
                        <td>45</td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>XDRM 11 - 25</td>
                        <td>46</td>
                        <td>40</td>
                      </tr>
                      <tr>
                        <td>32</td>
                        <td>XDRM 11 - 32</td>
                        <td>52</td>
                        <td>44</td>
                      </tr>
                      <tr>
                        <td>40</td>
                        <td>XDRM 11 - 40</td>
                        <td>87</td>
                        <td>67</td>
                      </tr>
                      <tr>
                        <td>50</td>
                        <td>XDRM 11 - 50</td>
                        <td>90</td>
                        <td>67</td>
                      </tr>
                      <tr>
                        <td>63</td>
                        <td>XDRM 11 - 63</td>
                        <td>84</td>
                        <td>70</td>
                      </tr>
                      <tr>
                        <td>75</td>
                        <td>XDRM 11 - 75</td>
                        <td>87</td>
                        <td>74</td>
                      </tr>
                      <tr>
                        <td>90</td>
                        <td>XDRM 11 - 90</td>
                        <td>93</td>
                        <td>84</td>
                      </tr>
                      <tr>
                        <td>110</td>
                        <td>XDRM 11 - 110</td>
                        <td>98</td>
                        <td>82</td>
                      </tr>
                      <tr>
                        <td>125</td>
                        <td>XDRM 11 - 125</td>
                        <td>107</td>
                        <td>87</td>
                      </tr>
                      <tr>
                        <td>160</td>
                        <td>XDRM 11 - 160</td>
                        <td>128</td>
                        <td>102</td>
                      </tr>
                      <tr>
                        <td>180</td>
                        <td>XDRM 11 - 180</td>
                        <td>145</td>
                        <td>112</td>
                      </tr>
                      <tr>
                        <td>200</td>
                        <td>XDRM 11 - 200</td>
                        <td>142</td>
                        <td>112</td>
                      </tr>
                      <tr>
                        <td>225</td>
                        <td>XDRM 11 - 225</td>
                        <td>146</td>
                        <td>119</td>
                      </tr>
                      <tr>
                        <td>250</td>
                        <td>XDRM 11 - 250</td>
                        <td>173</td>
                        <td>128</td>
                      </tr>
                      <tr>
                        <td>280</td>
                        <td>XDRM 11 - 280</td>
                        <td>166</td>
                        <td>140</td>
                      </tr>
                      <tr>
                        <td>315</td>
                        <td>XDRM 11 - 315</td>
                        <td>192</td>
                        <td>150</td>
                      </tr>
                      <tr>
                        <td>400</td>
                        <td>XDRM 11 - 400</td>
                        <td>215</td>
                        <td>150</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="spec-table" id="table-sdr17-pn10-xdrm">
                    <thead>
                      <tr>
                        <th colSpan={4}>SDR 17 – PN10</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr17-pn10-xdrm">
                      <tr>
                        <td>63</td>
                        <td>XDRM 17 - 63</td>
                        <td>84</td>
                        <td>70</td>
                      </tr>
                      <tr>
                        <td>90</td>
                        <td>XDRM 17 - 90</td>
                        <td>93</td>
                        <td>84</td>
                      </tr>
                      <tr>
                        <td>110</td>
                        <td>XDRM 17 - 110</td>
                        <td>98</td>
                        <td>82</td>
                      </tr>
                      <tr>
                        <td>125</td>
                        <td>XDRM 17 - 125</td>
                        <td>107</td>
                        <td>87</td>
                      </tr>
                      <tr>
                        <td>160</td>
                        <td>XDRM 17 - 160</td>
                        <td>128</td>
                        <td>102</td>
                      </tr>
                      <tr>
                        <td>180</td>
                        <td>XDRM 17 - 180</td>
                        <td>145</td>
                        <td>112</td>
                      </tr>
                      <tr>
                        <td>200</td>
                        <td>XDRM 17 - 200</td>
                        <td>142</td>
                        <td>112</td>
                      </tr>
                      <tr>
                        <td>225</td>
                        <td>XDRM 17 - 225</td>
                        <td>146</td>
                        <td>119</td>
                      </tr>
                      <tr>
                        <td>250</td>
                        <td>XDRM 17 - 250</td>
                        <td>176</td>
                        <td>128</td>
                      </tr>
                      <tr>
                        <td>280</td>
                        <td>XDRM 17 - 280</td>
                        <td>166</td>
                        <td>136</td>
                      </tr>
                      <tr>
                        <td>315</td>
                        <td>XDRM 17 - 315</td>
                        <td>192</td>
                        <td>155</td>
                      </tr>
                      <tr>
                        <td>355</td>
                        <td>XDRM 17 - 355</td>
                        <td>210</td>
                        <td>152</td>
                      </tr>
                      <tr>
                        <td>400</td>
                        <td>XDRM 17 - 400</td>
                        <td>215</td>
                        <td>150</td>
                      </tr>
                      <tr>
                        <td>500</td>
                        <td>XDRM 17 - 500</td>
                        <td>243</td>
                        <td>195</td>
                      </tr>
                      <tr>
                        <td>630</td>
                        <td>XDRM 17 - 630</td>
                        <td>238</td>
                        <td>182</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Electro Fusion Reducer Tee */}
                  <table className="spec-table" id="table-sdr11-pn16-xdst">
                    <thead>
                      <tr>
                        <th colSpan={6}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                        <th>B</th>
                        <th>Ød</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdst">
                      <tr>
                        <td>25 X 20 X 25</td>
                        <td>XDST - 25/20</td>
                        <td>105</td>
                        <td>45</td>
                        <td>50</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>32 X 20 X 32</td>
                        <td>XDST - 32/20</td>
                        <td>120</td>
                        <td>45</td>
                        <td>50</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>32 X 25 X 32</td>
                        <td>XDST - 32/25</td>
                        <td>120</td>
                        <td>45</td>
                        <td>50</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>40 X 25 X 40</td>
                        <td>XDST - 40/25</td>
                        <td>125</td>
                        <td>45</td>
                        <td>55</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>40 X 32 X 40</td>
                        <td>XDST - 40/32</td>
                        <td>125</td>
                        <td>45</td>
                        <td>55</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>50 X 25 X 50</td>
                        <td>XDST - 50/25</td>
                        <td>145</td>
                        <td>50</td>
                        <td>50</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>50 X 32 X 50</td>
                        <td>XDST - 50/32</td>
                        <td>145</td>
                        <td>50</td>
                        <td>55</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>50 X 40 X 50</td>
                        <td>XDST - 50/40</td>
                        <td>145</td>
                        <td>50</td>
                        <td>55</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>63 X 25 X 63</td>
                        <td>XDST - 63/25</td>
                        <td>130</td>
                        <td>50</td>
                        <td>55</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>63 X 32 X 63</td>
                        <td>XDST - 63/32</td>
                        <td>135</td>
                        <td>50</td>
                        <td>55</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>63 X 40 X 63</td>
                        <td>XDST - 63/40</td>
                        <td>140</td>
                        <td>50</td>
                        <td>55</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>63 X 50 X 63</td>
                        <td>XDST - 63/50</td>
                        <td>160</td>
                        <td>55</td>
                        <td>55</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>75 X 32 X 75</td>
                        <td>XDST - 75/32</td>
                        <td>195</td>
                        <td>70</td>
                        <td>70</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>75 X 40 X 75</td>
                        <td>XDST - 75/40</td>
                        <td>195</td>
                        <td>70</td>
                        <td>70</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>75 X 50 X 75</td>
                        <td>XDST - 75/50</td>
                        <td>195</td>
                        <td>70</td>
                        <td>70</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>75 X 63 X 75</td>
                        <td>XDST - 75/63</td>
                        <td>195</td>
                        <td>70</td>
                        <td>70</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>90 X 32 X 90</td>
                        <td>XDST - 90/32</td>
                        <td>210</td>
                        <td>70</td>
                        <td>80</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>90 X 40 X 90</td>
                        <td>XDST - 90/40</td>
                        <td>210</td>
                        <td>70</td>
                        <td>80</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>90 X 50 X 90</td>
                        <td>XDST - 90/50</td>
                        <td>210</td>
                        <td>70</td>
                        <td>80</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>90 X 63 X 90</td>
                        <td>XDST - 90/63</td>
                        <td>210</td>
                        <td>70</td>
                        <td>80</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>90 X 75 X 90</td>
                        <td>XDST - 90/75</td>
                        <td>210</td>
                        <td>70</td>
                        <td>75</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>110 X 32 X 110</td>
                        <td>XDST - 110/32</td>
                        <td>240</td>
                        <td>75</td>
                        <td>80</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>110 X 40 X 110</td>
                        <td>XDST - 110/40</td>
                        <td>240</td>
                        <td>75</td>
                        <td>80</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>110 X 50 X 110</td>
                        <td>XDST - 110/50</td>
                        <td>240</td>
                        <td>75</td>
                        <td>80</td>
                        <td>4.7</td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="spec-table" id="table-sdr11-pn16-xdst-2">
                    <thead>
                      <tr>
                        <th colSpan={6}>SDR 11 – PN16</th>
                      </tr>
                      <tr>
                        <th>(specification) dn</th>
                        <th>(Code Number)</th>
                        <th>L</th>
                        <th>A</th>
                        <th>B</th>
                        <th>Ød</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-sdr11-pn16-xdst-2">
                      <tr>
                        <td>110 X 63 X 110</td>
                        <td>XDST - 110/63</td>
                        <td>240</td>
                        <td>75</td>
                        <td>80</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>110 X 75 X 110</td>
                        <td>XDST - 110/75</td>
                        <td>240</td>
                        <td>75</td>
                        <td>80</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>110 X 90 X 110</td>
                        <td>XDST - 110/90</td>
                        <td>240</td>
                        <td>75</td>
                        <td>80</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>125 X 90 X 125</td>
                        <td>XDST - 125/90</td>
                        <td>255</td>
                        <td>80</td>
                        <td>85</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>125 X 110 X 125</td>
                        <td>XDST - 125/110</td>
                        <td>255</td>
                        <td>80</td>
                        <td>85</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>160 X 63 X 160</td>
                        <td>XDST - 160/63</td>
                        <td>305</td>
                        <td>90</td>
                        <td>90</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>160 X 75 X 160</td>
                        <td>XDST - 160/75</td>
                        <td>305</td>
                        <td>90</td>
                        <td>90</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>160 X 90 X 160</td>
                        <td>XDST - 160/90</td>
                        <td>305</td>
                        <td>90</td>
                        <td>90</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>160 X 110 X 160</td>
                        <td>XDST - 160/110</td>
                        <td>305</td>
                        <td>90</td>
                        <td>90</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>160 X 125 X 160</td>
                        <td>XDST - 160/125</td>
                        <td>305</td>
                        <td>90</td>
                        <td>80</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>200 X 90 X 200</td>
                        <td>XDST - 200/90</td>
                        <td>360</td>
                        <td>98</td>
                        <td>75</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>200 X 110 X 200</td>
                        <td>XDST - 200/110</td>
                        <td>360</td>
                        <td>98</td>
                        <td>75</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>200 X 160 X 200</td>
                        <td>XDST - 200/160</td>
                        <td>360</td>
                        <td>98</td>
                        <td>90</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>250 X 110 X 250</td>
                        <td>XDST - 250/110</td>
                        <td>405</td>
                        <td>98</td>
                        <td>95</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>250 X 160 X 250</td>
                        <td>XDST - 250/160</td>
                        <td>405</td>
                        <td>98</td>
                        <td>110</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>250 X 200 X 250</td>
                        <td>XDST - 250/200</td>
                        <td>405</td>
                        <td>98</td>
                        <td>110</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>315 X 110 X 315</td>
                        <td>XDST - 315/110</td>
                        <td>520</td>
                        <td>125</td>
                        <td>100</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>315 X 160 X 315</td>
                        <td>XDST - 315/160</td>
                        <td>520</td>
                        <td>125</td>
                        <td>100</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>315 X 200 X 315</td>
                        <td>XDST - 315/200</td>
                        <td>520</td>
                        <td>125</td>
                        <td>100</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>315 X 250 X 315</td>
                        <td>XDST - 315/250</td>
                        <td>520</td>
                        <td>125</td>
                        <td>120</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>400 X 110 X 400</td>
                        <td>XDST - 400/110</td>
                        <td>600</td>
                        <td>125</td>
                        <td>115</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>400 X 160 X 400</td>
                        <td>XDST - 400/160</td>
                        <td>600</td>
                        <td>125</td>
                        <td>115</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>400 X 200 X 400</td>
                        <td>XDST - 400/200</td>
                        <td>600</td>
                        <td>125</td>
                        <td>115</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>400 X 250 X 400</td>
                        <td>XDST - 400/250</td>
                        <td>600</td>
                        <td>125</td>
                        <td>115</td>
                        <td>4.7</td>
                      </tr>
                      <tr>
                        <td>400 X 315 X 400</td>
                        <td>XDST - 400/315</td>
                        <td>600</td>
                        <td>125</td>
                        <td>115</td>
                        <td>4.7</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* HDPE Electro Fusion Tapping Tee */}
                  <table className="spec-table" id="table-size-reducing">
                    <thead>
                      <tr>
                        <th>SIZE</th>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>D</th>
                        <th>E</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-size-reducing">
                      <tr>
                        <td>40×20</td>
                        <td>62.3</td>
                        <td>110</td>
                        <td>120.2</td>
                        <td>52.2</td>
                        <td>88</td>
                      </tr>
                      <tr>
                        <td>40×25</td>
                        <td>66.6</td>
                        <td>110</td>
                        <td>120.2</td>
                        <td>52.2</td>
                        <td>88</td>
                      </tr>
                      <tr>
                        <td>40×32</td>
                        <td>72.6</td>
                        <td>110</td>
                        <td>120.2</td>
                        <td>52.2</td>
                        <td>88</td>
                      </tr>
                      <tr>
                        <td>63×20</td>
                        <td>68.2</td>
                        <td>128.2</td>
                        <td>183</td>
                        <td>64</td>
                        <td>136</td>
                      </tr>
                      <tr>
                        <td>63×25</td>
                        <td>74.2</td>
                        <td>128.2</td>
                        <td>183</td>
                        <td>64</td>
                        <td>136</td>
                      </tr>
                      <tr>
                        <td>63×32</td>
                        <td>74.2</td>
                        <td>128.2</td>
                        <td>183</td>
                        <td>64</td>
                        <td>136</td>
                      </tr>
                      <tr>
                        <td>63×40</td>
                        <td>71</td>
                        <td>121</td>
                        <td>183</td>
                        <td>64</td>
                        <td>136</td>
                      </tr>
                      <tr>
                        <td>63×50</td>
                        <td>93.5</td>
                        <td>143.5</td>
                        <td>203</td>
                        <td>74</td>
                        <td>136</td>
                      </tr>
                      <tr>
                        <td>63×63</td>
                        <td>100</td>
                        <td>143.5</td>
                        <td>203</td>
                        <td>74</td>
                        <td>136</td>
                      </tr>
                      <tr>
                        <td>75×20</td>
                        <td>62</td>
                        <td>128.21</td>
                        <td>189.7</td>
                        <td>70.92</td>
                        <td>165.6</td>
                      </tr>
                      <tr>
                        <td>75×25</td>
                        <td>65</td>
                        <td>128.71</td>
                        <td>189.7</td>
                        <td>70.92</td>
                        <td>165.6</td>
                      </tr>
                      <tr>
                        <td>75×32</td>
                        <td>68</td>
                        <td>128.21</td>
                        <td>189.7</td>
                        <td>70.84</td>
                        <td>165.6</td>
                      </tr>
                      <tr>
                        <td>75×40</td>
                        <td>71</td>
                        <td>121</td>
                        <td>189.7</td>
                        <td>70.75</td>
                        <td>165.6</td>
                      </tr>
                      <tr>
                        <td>90×20</td>
                        <td>68.2</td>
                        <td>128.2</td>
                        <td>196</td>
                        <td>77.3</td>
                        <td>165.4</td>
                      </tr>
                      <tr>
                        <td>90×25</td>
                        <td>71.2</td>
                        <td>128.2</td>
                        <td>196</td>
                        <td>77.3</td>
                        <td>165.4</td>
                      </tr>
                      <tr>
                        <td>90×32</td>
                        <td>74.2</td>
                        <td>128.2</td>
                        <td>196</td>
                        <td>77.3</td>
                        <td>165.4</td>
                      </tr>
                      <tr>
                        <td>90×40</td>
                        <td>71</td>
                        <td>121</td>
                        <td>196</td>
                        <td>77.3</td>
                        <td>165.4</td>
                      </tr>
                      <tr>
                        <td>90×50</td>
                        <td>96.2</td>
                        <td>160</td>
                        <td>238.3</td>
                        <td>88.5</td>
                        <td>165.4</td>
                      </tr>
                      <tr>
                        <td>96×63</td>
                        <td>100</td>
                        <td>160</td>
                        <td>238.3</td>
                        <td>88.5</td>
                        <td>165.4</td>
                      </tr>
                      <tr>
                        <td>110×20</td>
                        <td>68.2</td>
                        <td>128.2</td>
                        <td>206</td>
                        <td>87</td>
                        <td>165.2</td>
                      </tr>
                      <tr>
                        <td>110×25</td>
                        <td>71.2</td>
                        <td>128.2</td>
                        <td>206</td>
                        <td>87</td>
                        <td>165.2</td>
                      </tr>
                      <tr>
                        <td>110×32</td>
                        <td>74.2</td>
                        <td>128.2</td>
                        <td>206</td>
                        <td>87</td>
                        <td>165.2</td>
                      </tr>
                      <tr>
                        <td>110×40</td>
                        <td>71</td>
                        <td>121</td>
                        <td>206</td>
                        <td>87</td>
                        <td>165.2</td>
                      </tr>
                      <tr>
                        <td>110×50</td>
                        <td>96.2</td>
                        <td>160</td>
                        <td>243.2</td>
                        <td>93.5</td>
                        <td>165.2</td>
                      </tr>
                      <tr>
                        <td>110×63</td>
                        <td>100</td>
                        <td>160</td>
                        <td>243.2</td>
                        <td>93.5</td>
                        <td>165.2</td>
                      </tr>
                      <tr>
                        <td>110×90</td>
                        <td>85</td>
                        <td>160</td>
                        <td>251.5</td>
                        <td>112.2</td>
                        <td>195.2</td>
                      </tr>
                      <tr>
                        <td>125×20</td>
                        <td>768.2</td>
                        <td>138.2</td>
                        <td>213.7</td>
                        <td>94.7</td>
                        <td>167</td>
                      </tr>
                      <tr>
                        <td>125×25</td>
                        <td>71.2</td>
                        <td>138.2</td>
                        <td>213.7</td>
                        <td>94.7</td>
                        <td>167</td>
                      </tr>
                      <tr>
                        <td>125×32</td>
                        <td>74.2</td>
                        <td>138.2</td>
                        <td>213.7</td>
                        <td>94.7</td>
                        <td>167</td>
                      </tr>
                      <tr>
                        <td>125×40</td>
                        <td>71</td>
                        <td>131</td>
                        <td>213.7</td>
                        <td>94.7</td>
                        <td>167</td>
                      </tr>
                      <tr>
                        <td>125×50</td>
                        <td>96.2</td>
                        <td>160</td>
                        <td>251</td>
                        <td>101.2</td>
                        <td>167</td>
                      </tr>
                      <tr>
                        <td>125×63</td>
                        <td>100</td>
                        <td>160</td>
                        <td>251</td>
                        <td>101.2</td>
                        <td>167</td>
                      </tr>
                      <tr>
                        <td>160×20</td>
                        <td>68.2</td>
                        <td>138.2</td>
                        <td>231.3</td>
                        <td>112.3</td>
                        <td>170.1</td>
                      </tr>
                      <tr>
                        <td>160×25</td>
                        <td>71.2</td>
                        <td>138.2</td>
                        <td>231.3</td>
                        <td>112.3</td>
                        <td>170.1</td>
                      </tr>
                      <tr>
                        <td>160×32</td>
                        <td>74.2</td>
                        <td>138.2</td>
                        <td>231.3</td>
                        <td>112.3</td>
                        <td>170.1</td>
                      </tr>
                      <tr>
                        <td>160×40</td>
                        <td>71</td>
                        <td>131</td>
                        <td>231.3</td>
                        <td>112.3</td>
                        <td>170.1</td>
                      </tr>
                      <tr>
                        <td>160×50</td>
                        <td>96.2</td>
                        <td>160</td>
                        <td>268.5</td>
                        <td>118.8</td>
                        <td>170.1</td>
                      </tr>
                      <tr>
                        <td>160×63</td>
                        <td>100</td>
                        <td>160</td>
                        <td>268.5</td>
                        <td>118.8</td>
                        <td>170.1</td>
                      </tr>
                      <tr>
                        <td>160×90</td>
                        <td>89.2</td>
                        <td>160</td>
                        <td>276.8</td>
                        <td>137.3</td>
                        <td>170.1</td>
                      </tr>
                      <tr>
                        <td>160×110</td>
                        <td>97</td>
                        <td>180</td>
                        <td>302.7</td>
                        <td>150.8</td>
                        <td>260.2</td>
                      </tr>
                      <tr>
                        <td>180×20</td>
                        <td>68.2</td>
                        <td>138.2</td>
                        <td>241.4</td>
                        <td>122.3</td>
                        <td>170.4</td>
                      </tr>
                      <tr>
                        <td>180×25</td>
                        <td>71.2</td>
                        <td>138.2</td>
                        <td>241.4</td>
                        <td>122.3</td>
                        <td>170.4</td>
                      </tr>
                      <tr>
                        <td>180×32</td>
                        <td>74.2</td>
                        <td>138.2</td>
                        <td>241.4</td>
                        <td>122.3</td>
                        <td>170.4</td>
                      </tr>
                      <tr>
                        <td>180×40</td>
                        <td>71</td>
                        <td>131</td>
                        <td>241.4</td>
                        <td>122.3</td>
                        <td>170.4</td>
                      </tr>
                      <tr>
                        <td>180×50</td>
                        <td>96.2</td>
                        <td>170</td>
                        <td>251</td>
                        <td>128.8</td>
                        <td>170</td>
                      </tr>
                      <tr>
                        <td>180×63</td>
                        <td>100</td>
                        <td>170</td>
                        <td>251</td>
                        <td>128.8</td>
                        <td>170</td>
                      </tr>
                      <tr>
                        <td>200×20</td>
                        <td>68.2</td>
                        <td>138.2</td>
                        <td>257.4</td>
                        <td>138.3</td>
                        <td>170.8</td>
                      </tr>
                      <tr>
                        <td>200×25</td>
                        <td>71.2</td>
                        <td>138.2</td>
                        <td>257.4</td>
                        <td>138.3</td>
                        <td>170.8</td>
                      </tr>
                      <tr>
                        <td>200×32</td>
                        <td>74.2</td>
                        <td>138.2</td>
                        <td>257.4</td>
                        <td>138.3</td>
                        <td>170.8</td>
                      </tr>
                      <tr>
                        <td>200×40</td>
                        <td>71</td>
                        <td>131</td>
                        <td>257.4</td>
                        <td>138.3</td>
                        <td>170.8</td>
                      </tr>
                      <tr>
                        <td>200×50</td>
                        <td>96.2</td>
                        <td>170</td>
                        <td>289.6</td>
                        <td>139.8</td>
                        <td>170.8</td>
                      </tr>
                      <tr>
                        <td>200×63</td>
                        <td>100</td>
                        <td>170</td>
                        <td>289.6</td>
                        <td>139.8</td>
                        <td>170.8</td>
                      </tr>
                      <tr>
                        <td>200×90</td>
                        <td>85</td>
                        <td>160</td>
                        <td>297.8</td>
                        <td>158.3</td>
                        <td>260.4</td>
                      </tr>
                      <tr>
                        <td>200×110</td>
                        <td>90</td>
                        <td>180</td>
                        <td>332.7</td>
                        <td>171.8</td>
                        <td>260.4</td>
                      </tr>
                      <tr>
                        <td>225×20</td>
                        <td>68.2</td>
                        <td>138.2</td>
                        <td>270.6</td>
                        <td>151.5</td>
                        <td>170.9</td>
                      </tr>
                      <tr>
                        <td>225×25</td>
                        <td>71.2</td>
                        <td>138.2</td>
                        <td>270.6</td>
                        <td>151.5</td>
                        <td>170.9</td>
                      </tr>
                      <tr>
                        <td>225×32</td>
                        <td>74.2</td>
                        <td>138.2</td>
                        <td>270.6</td>
                        <td>151.5</td>
                        <td>170.9</td>
                      </tr>
                      <tr>
                        <td>225×40</td>
                        <td>71</td>
                        <td>131</td>
                        <td>257.4</td>
                        <td>138.3</td>
                        <td>170.8</td>
                      </tr>
                      <tr>
                        <td>225×50</td>
                        <td>96.2</td>
                        <td>170</td>
                        <td>289.6</td>
                        <td>139.8</td>
                        <td>170.8</td>
                      </tr>
                      <tr>
                        <td>220×63</td>
                        <td>100</td>
                        <td>170</td>
                        <td>289.6</td>
                        <td>139.8</td>
                        <td>170.8</td>
                      </tr>
                      <tr>
                        <td>225×90</td>
                        <td>65</td>
                        <td>160</td>
                        <td>297.8</td>
                        <td>158.3</td>
                        <td>260.4</td>
                      </tr>
                      <tr>
                        <td>225×110</td>
                        <td>90</td>
                        <td>180</td>
                        <td>332.7</td>
                        <td>171.8</td>
                        <td>260.4</td>
                      </tr>
                      <tr>
                        <td>250×20</td>
                        <td>80.2</td>
                        <td>176.4</td>
                        <td>323.3</td>
                        <td>176.5</td>
                        <td>263.9</td>
                      </tr>
                      <tr>
                        <td>250×25</td>
                        <td>80.8</td>
                        <td>178.6</td>
                        <td>323.3</td>
                        <td>176.5</td>
                        <td>263.9</td>
                      </tr>
                      <tr>
                        <td>250×32</td>
                        <td>81.4</td>
                        <td>179.2</td>
                        <td>323.3</td>
                        <td>176.5</td>
                        <td>263.9</td>
                      </tr>
                      <tr>
                        <td>250×40</td>
                        <td>84.4</td>
                        <td>175.3</td>
                        <td>323.3</td>
                        <td>176.5</td>
                        <td>263.9</td>
                      </tr>
                      <tr>
                        <td>250×50</td>
                        <td>96.2</td>
                        <td>170</td>
                        <td>323.3</td>
                        <td>176.5</td>
                        <td>263.9</td>
                      </tr>
                      <tr>
                        <td>250×63</td>
                        <td>100</td>
                        <td>170</td>
                        <td>323.3</td>
                        <td>176.5</td>
                        <td>263.9</td>
                      </tr>
                      <tr>
                        <td>250×90</td>
                        <td>85</td>
                        <td>160</td>
                        <td>324.6</td>
                        <td>187.4</td>
                        <td>264.9</td>
                      </tr>
                      <tr>
                        <td>250×110</td>
                        <td>90</td>
                        <td>180</td>
                        <td>350.3</td>
                        <td>198.4</td>
                        <td>264.9</td>
                      </tr>
                      <tr>
                        <td>280×20</td>
                        <td>80.2</td>
                        <td>176.4</td>
                        <td>338.3</td>
                        <td>191.5</td>
                        <td>264.2</td>
                      </tr>
                      <tr>
                        <td>280×25</td>
                        <td>80.8</td>
                        <td>178.6</td>
                        <td>338.3</td>
                        <td>191.5</td>
                        <td>264.2</td>
                      </tr>
                      <tr>
                        <td>280×32</td>
                        <td>81.4</td>
                        <td>179.2</td>
                        <td>338.3</td>
                        <td>191.5</td>
                        <td>264.2</td>
                      </tr>
                      <tr>
                        <td>280×40</td>
                        <td>84.4</td>
                        <td>175.3</td>
                        <td>338.3</td>
                        <td>191.5</td>
                        <td>264.2</td>
                      </tr>
                      <tr>
                        <td>280×50</td>
                        <td>96.2</td>
                        <td>170</td>
                        <td>338.3</td>
                        <td>191.5</td>
                        <td>264.2</td>
                      </tr>
                      <tr>
                        <td>280×63</td>
                        <td>100</td>
                        <td>170</td>
                        <td>338.3</td>
                        <td>191.5</td>
                        <td>264.2</td>
                      </tr>
                      <tr>
                        <td>280×90</td>
                        <td>85</td>
                        <td>160</td>
                        <td>342</td>
                        <td>202.5</td>
                        <td>264.6</td>
                      </tr>
                      <tr>
                        <td>280×110</td>
                        <td>90</td>
                        <td>180</td>
                        <td>363.4</td>
                        <td>213.5</td>
                        <td>264.6</td>
                      </tr>
                      <tr>
                        <td>315×20</td>
                        <td>80.2</td>
                        <td>176.4</td>
                        <td>355.8</td>
                        <td>209</td>
                        <td>265.6</td>
                      </tr>
                      <tr>
                        <td>315×25</td>
                        <td>80.8</td>
                        <td>178.6</td>
                        <td>355.8</td>
                        <td>209</td>
                        <td>265.6</td>
                      </tr>
                      <tr>
                        <td>315×32</td>
                        <td>81.4</td>
                        <td>179.2</td>
                        <td>355.8</td>
                        <td>209</td>
                        <td>265.6</td>
                      </tr>
                      <tr>
                        <td>315×40</td>
                        <td>84.4</td>
                        <td>175.3</td>
                        <td>355.8</td>
                        <td>209</td>
                        <td>265.6</td>
                      </tr>
                      <tr>
                        <td>315×50</td>
                        <td>96</td>
                        <td>170</td>
                        <td>355.8</td>
                        <td>209</td>
                        <td>265.6</td>
                      </tr>
                      <tr>
                        <td>315×63</td>
                        <td>100</td>
                        <td>170</td>
                        <td>355.8</td>
                        <td>209</td>
                        <td>265.6</td>
                      </tr>
                      <tr>
                        <td>315×90</td>
                        <td>85</td>
                        <td>160</td>
                        <td>359</td>
                        <td>219.5</td>
                        <td>265.2</td>
                      </tr>
                      <tr>
                        <td>315×110</td>
                        <td>90</td>
                        <td>180</td>
                        <td>382.4</td>
                        <td>230.5</td>
                        <td>265.2</td>
                      </tr>
                      <tr>
                        <td>315×160</td>
                        <td>110</td>
                        <td>225</td>
                        <td>429</td>
                        <td>248</td>
                        <td>338</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Ductile iron saddle for PVC PE Pipe */}
                  <table className="spec-table" id="table-weight-r">
                    <thead>
                      <tr>
                        <th>Pipe / Weight / R</th>
                        <th>3/4</th>
                        <th>1</th>
                        <th>1-1/4</th>
                        <th>1-1/2</th>
                        <th>2</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-weight-r">
                      <tr>
                        <td>DN50</td>
                        <td>1.35</td>
                        <td>1.35</td>
                        <td>1.35</td>
                        <td>1.35</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN63</td>
                        <td>2.00</td>
                        <td>2.00</td>
                        <td>2.00</td>
                        <td>2.00</td>
                        <td>2.00</td>
                      </tr>
                      <tr>
                        <td>DN75</td>
                        <td>2.35</td>
                        <td>2.35</td>
                        <td>2.35</td>
                        <td>2.35</td>
                        <td>2.35</td>
                      </tr>
                      <tr>
                        <td>DN90</td>
                        <td>2.50</td>
                        <td>2.50</td>
                        <td>2.50</td>
                        <td>2.50</td>
                        <td>2.50</td>
                      </tr>
                      <tr>
                        <td>DN110</td>
                        <td>3.80</td>
                        <td>3.80</td>
                        <td>3.80</td>
                        <td>3.80</td>
                        <td>3.80</td>
                      </tr>
                      <tr>
                        <td>DN125</td>
                        <td>4.70</td>
                        <td>4.70</td>
                        <td>4.70</td>
                        <td>4.70</td>
                        <td>4.70</td>
                      </tr>
                      <tr>
                        <td>DN140</td>
                        <td>5.70</td>
                        <td>5.70</td>
                        <td>5.70</td>
                        <td>5.70</td>
                        <td>5.70</td>
                      </tr>
                      <tr>
                        <td>DN160</td>
                        <td>6.15</td>
                        <td>6.15</td>
                        <td>6.15</td>
                        <td>6.15</td>
                        <td>6.15</td>
                      </tr>
                      <tr>
                        <td>DN180</td>
                        <td>8.70</td>
                        <td>8.70</td>
                        <td>8.70</td>
                        <td>8.70</td>
                        <td>8.70</td>
                      </tr>
                      <tr>
                        <td>DN200</td>
                        <td>9.80</td>
                        <td>9.80</td>
                        <td>9.80</td>
                        <td>9.80</td>
                        <td>9.80</td>
                      </tr>
                      <tr>
                        <td>DN225</td>
                        <td>13.50</td>
                        <td>13.50</td>
                        <td>13.50</td>
                        <td>13.50</td>
                        <td>13.50</td>
                      </tr>
                      <tr>
                        <td>DN250</td>
                        <td>15.00</td>
                        <td>15.00</td>
                        <td>15.00</td>
                        <td>15.00</td>
                        <td>15.00</td>
                      </tr>
                      <tr>
                        <td>DN315</td>
                        <td>19.00</td>
                        <td>19.00</td>
                        <td>19.00</td>
                        <td>19.00</td>
                        <td>19.00</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Universal Coupling (Wide range) */}
                  <table className="spec-table" id="table-pipe-fit-2">
                    <thead>
                      <tr>
                        <th>Pipe</th>
                        <th>Range</th>
                        <th colSpan={2}>Bolt</th>
                        <th>A</th>
                        <th>H</th>
                        <th>Weight</th>
                        <th colSpan={6}>Pipe to fit</th>
                      </tr>
                      <tr>
                        <th>Norm</th>
                        <th />
                        <th>L</th>
                        <th>No</th>
                        <th>mm</th>
                        <th>mm</th>
                        <th>kgs</th>
                        <th>DI</th>
                        <th>ST</th>
                        <th>PVC</th>
                        <th>AC</th>
                        <th>CI</th>
                        <th>GRP</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-pipe-fit-corrected">
                      <tr>
                        <td>DN40</td>
                        <td>48-60</td>
                        <td>M12 x 170</td>
                        <td>2</td>
                        <td>150</td>
                        <td>98</td>
                        <td>2.4</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td />
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN50</td>
                        <td>59-72</td>
                        <td>M12 x 170</td>
                        <td>2/4</td>
                        <td>156</td>
                        <td>98</td>
                        <td>2.5</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN65</td>
                        <td>72-85</td>
                        <td>M12 x 170</td>
                        <td>2/4</td>
                        <td>174</td>
                        <td>98</td>
                        <td>3.2</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN80</td>
                        <td>88-108</td>
                        <td>M12 x 180</td>
                        <td>4</td>
                        <td>185</td>
                        <td>98</td>
                        <td>4.0</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN100</td>
                        <td>96-116</td>
                        <td>M12 x 180</td>
                        <td>4</td>
                        <td>205</td>
                        <td>98</td>
                        <td>4.5</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>DN100</td>
                        <td>108-120</td>
                        <td>M12 x 190</td>
                        <td>4</td>
                        <td>210</td>
                        <td>98</td>
                        <td>4.6</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>DN100</td>
                        <td>105-125</td>
                        <td>M12 x 190</td>
                        <td>4</td>
                        <td>210</td>
                        <td>98</td>
                        <td>4.6</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN100</td>
                        <td>109-128</td>
                        <td>M12 x 180</td>
                        <td>4</td>
                        <td>218</td>
                        <td>98</td>
                        <td>4.8</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN125</td>
                        <td>132-146</td>
                        <td>M12 x 180</td>
                        <td>4</td>
                        <td>240</td>
                        <td>98</td>
                        <td>6.1</td>
                        <td />
                        <td>★</td>
                        <td />
                        <td />
                        <td />
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN125</td>
                        <td>138-153</td>
                        <td>M12 x 180</td>
                        <td>4</td>
                        <td>246</td>
                        <td>98</td>
                        <td>6.2</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN150</td>
                        <td>158-172</td>
                        <td>M12 x 200</td>
                        <td>4</td>
                        <td>275</td>
                        <td>105</td>
                        <td>7.0</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>DN150</td>
                        <td>155-175</td>
                        <td>M12 x 200</td>
                        <td>4</td>
                        <td>275</td>
                        <td>105</td>
                        <td>7.0</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>DN150</td>
                        <td>159-182</td>
                        <td>M12 x 200</td>
                        <td>4</td>
                        <td>280</td>
                        <td>110</td>
                        <td>7.2</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN175</td>
                        <td>192-210</td>
                        <td>M12 x 210</td>
                        <td>4</td>
                        <td>312</td>
                        <td>130</td>
                        <td>8.0</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN200</td>
                        <td>198-225</td>
                        <td>M12 x 210</td>
                        <td>4</td>
                        <td>320</td>
                        <td>130</td>
                        <td>9.5</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN200</td>
                        <td>218-235</td>
                        <td>M12 x 220</td>
                        <td>4/6</td>
                        <td>328</td>
                        <td>130</td>
                        <td>10.0</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN225</td>
                        <td>242-262</td>
                        <td>M12 x 220</td>
                        <td>6</td>
                        <td>360</td>
                        <td>130</td>
                        <td>12.0</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN250</td>
                        <td>250-267</td>
                        <td>M12 x 220</td>
                        <td>6</td>
                        <td>368</td>
                        <td>130</td>
                        <td>14.0</td>
                        <td />
                        <td />
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN250</td>
                        <td>250-274</td>
                        <td>M12 x 220</td>
                        <td>6</td>
                        <td>370</td>
                        <td>130</td>
                        <td>14.0</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN250</td>
                        <td>272-289</td>
                        <td>M12 x 220</td>
                        <td>6</td>
                        <td>382</td>
                        <td>130</td>
                        <td>14.0</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN300</td>
                        <td>315-332</td>
                        <td>M12 x 220</td>
                        <td>6</td>
                        <td>430</td>
                        <td>130</td>
                        <td>16.5</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td />
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN300</td>
                        <td>322-339</td>
                        <td>M12 x 220</td>
                        <td>6</td>
                        <td>435</td>
                        <td>130</td>
                        <td>16.0</td>
                        <td>●</td>
                        <td>★</td>
                        <td />
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN350</td>
                        <td>340-360</td>
                        <td>M12 x 220</td>
                        <td>6/8</td>
                        <td>455</td>
                        <td>130</td>
                        <td>20.0</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN350</td>
                        <td>351-378</td>
                        <td>M14 x 230</td>
                        <td>8</td>
                        <td>510</td>
                        <td>130</td>
                        <td>23.0</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td />
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN350</td>
                        <td>374-391</td>
                        <td>M14 x 230</td>
                        <td>8</td>
                        <td>520</td>
                        <td>130</td>
                        <td>24.0</td>
                        <td>●</td>
                        <td />
                        <td />
                        <td>◆</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>DN400</td>
                        <td>390-410</td>
                        <td>M14 x 220</td>
                        <td>8</td>
                        <td>530</td>
                        <td>130</td>
                        <td>25.0</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>DN400</td>
                        <td>398-430</td>
                        <td>M14 x 270</td>
                        <td>8</td>
                        <td>560</td>
                        <td>140</td>
                        <td>26.0</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN400</td>
                        <td>417-437</td>
                        <td>M14 x 240</td>
                        <td>8</td>
                        <td>555</td>
                        <td>130</td>
                        <td>28.0</td>
                        <td>●</td>
                        <td />
                        <td />
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN400</td>
                        <td>425-475</td>
                        <td>M14 x 240</td>
                        <td>8</td>
                        <td>560</td>
                        <td>130</td>
                        <td>28.0</td>
                        <td>●</td>
                        <td />
                        <td />
                        <td />
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN450</td>
                        <td>450-463</td>
                        <td>M14 x 270</td>
                        <td>8</td>
                        <td>585</td>
                        <td>130</td>
                        <td>30.0</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN450</td>
                        <td>455-475</td>
                        <td>M14 x 270</td>
                        <td>10</td>
                        <td>600</td>
                        <td>130</td>
                        <td>32.0</td>
                        <td />
                        <td>★</td>
                        <td />
                        <td>◆</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>DN450</td>
                        <td>476-500</td>
                        <td>M14 x 270</td>
                        <td>10</td>
                        <td>620</td>
                        <td>130</td>
                        <td>36.0</td>
                        <td>●</td>
                        <td />
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN500</td>
                        <td>500-508</td>
                        <td>M14 x 270</td>
                        <td>10</td>
                        <td>620</td>
                        <td>130</td>
                        <td>38.0</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN500</td>
                        <td>500-533</td>
                        <td>M14 x 280</td>
                        <td>10</td>
                        <td>663</td>
                        <td>140</td>
                        <td>39.0</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td />
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN500</td>
                        <td>526-546</td>
                        <td>M14 x 270</td>
                        <td>10</td>
                        <td>725</td>
                        <td>130</td>
                        <td>40.0</td>
                        <td>●</td>
                        <td />
                        <td />
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN600</td>
                        <td>600-630</td>
                        <td>M14 x 270</td>
                        <td>10</td>
                        <td>740</td>
                        <td>130</td>
                        <td>47.0</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN600</td>
                        <td>608-636</td>
                        <td>M14 x 270</td>
                        <td>10</td>
                        <td>745</td>
                        <td>130</td>
                        <td>48.0</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td />
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN600</td>
                        <td>630-650</td>
                        <td>M14 x 270</td>
                        <td>10</td>
                        <td>875</td>
                        <td>130</td>
                        <td>50.0</td>
                        <td>●</td>
                        <td />
                        <td>▲</td>
                        <td />
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN700</td>
                        <td>710-739</td>
                        <td>M16 x 280</td>
                        <td>12</td>
                        <td>968</td>
                        <td>155</td>
                        <td>70.0</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN800</td>
                        <td>816-842</td>
                        <td>M16 x 330</td>
                        <td>12</td>
                        <td>968</td>
                        <td>180</td>
                        <td>80.0</td>
                        <td>●</td>
                        <td />
                        <td />
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Universal Flange Adaptor (Wide range) */}
                  <table className="spec-table" id="table-pipe-flange-fit">
                    <thead>
                      <tr>
                        <th>Pipe</th>
                        <th>Range</th>
                        <th>pressure</th>
                        <th colSpan={2}>Bolt</th>
                        <th>A</th>
                        <th>D</th>
                        <th>H</th>
                        <th>weight</th>
                        <th colSpan={6}>Pipe to fit</th>
                      </tr>
                      <tr>
                        <th>Flange</th>
                        <th />
                        <th>Flange</th>
                        <th>L</th>
                        <th>No</th>
                        <th>mm</th>
                        <th>mm</th>
                        <th>mm</th>
                        <th>KGS</th>
                        <th>DI</th>
                        <th>ST</th>
                        <th>PVC</th>
                        <th>AC</th>
                        <th>CI</th>
                        <th>GRP</th>
                      </tr>
                    </thead>
                    <tbody id="specBody-pipe-flange-fit">
                      <tr>
                        <td>DN40</td>
                        <td>48-60</td>
                        <td>PN10/16</td>
                        <td>M12 x 130</td>
                        <td>2</td>
                        <td>150</td>
                        <td>150</td>
                        <td>80</td>
                        <td>2.8</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td />
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN50</td>
                        <td>59-72</td>
                        <td>PN10/16</td>
                        <td>M12 x 130</td>
                        <td>2</td>
                        <td>156</td>
                        <td>165</td>
                        <td>80</td>
                        <td>3.0</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN65</td>
                        <td>72-85</td>
                        <td>PN10/16</td>
                        <td>M12 x 130</td>
                        <td>2</td>
                        <td>174</td>
                        <td>190</td>
                        <td>80</td>
                        <td>3.9</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN80</td>
                        <td>88-108</td>
                        <td>PN10/16</td>
                        <td>M12 x 130</td>
                        <td>4</td>
                        <td>185</td>
                        <td>200</td>
                        <td>80</td>
                        <td>4.8</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN100</td>
                        <td>96-116</td>
                        <td>PN10/16</td>
                        <td>M12 x 130</td>
                        <td>4</td>
                        <td>205</td>
                        <td>220</td>
                        <td>80</td>
                        <td>5.0</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>DN100</td>
                        <td>108-120</td>
                        <td>PN10/16</td>
                        <td>M12 x 130</td>
                        <td>4</td>
                        <td>210</td>
                        <td>220</td>
                        <td>80</td>
                        <td>5.3</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>DN100</td>
                        <td>105-125</td>
                        <td>PN10/16</td>
                        <td>M12 x 130</td>
                        <td>4</td>
                        <td>210</td>
                        <td>220</td>
                        <td>80</td>
                        <td>5.3</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN100</td>
                        <td>109-128</td>
                        <td>PN10/16</td>
                        <td>M12 x 130</td>
                        <td>4</td>
                        <td>218</td>
                        <td>220</td>
                        <td>80</td>
                        <td>5.5</td>
                        <td>●</td>
                        <td>★</td>
                        <td />
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN125</td>
                        <td>132-146</td>
                        <td>PN10/16</td>
                        <td>M12 x 140</td>
                        <td>4</td>
                        <td>240</td>
                        <td>250</td>
                        <td>80</td>
                        <td>6.5</td>
                        <td />
                        <td>★</td>
                        <td />
                        <td />
                        <td />
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN125</td>
                        <td>138-153</td>
                        <td>PN10/16</td>
                        <td>M12 x 140</td>
                        <td>4</td>
                        <td>246</td>
                        <td>250</td>
                        <td>80</td>
                        <td>6.6</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN150</td>
                        <td>158-172</td>
                        <td>PN10/16</td>
                        <td>M12 x 140</td>
                        <td>4</td>
                        <td>275</td>
                        <td>285</td>
                        <td>80</td>
                        <td>7.5</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>DN150</td>
                        <td>155-175</td>
                        <td>PN10/16</td>
                        <td>M12 x 140</td>
                        <td>4</td>
                        <td>275</td>
                        <td>285</td>
                        <td>80</td>
                        <td>7.5</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td />
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN150</td>
                        <td>159-182</td>
                        <td>PN10/16</td>
                        <td>M12 x 140</td>
                        <td>4</td>
                        <td>280</td>
                        <td>285</td>
                        <td>80</td>
                        <td>7.6</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN175</td>
                        <td>192-210</td>
                        <td>PN10/16</td>
                        <td>M12 x 140</td>
                        <td>4</td>
                        <td>312</td>
                        <td>340</td>
                        <td>80</td>
                        <td>11.0</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN200</td>
                        <td>198-225</td>
                        <td>PN10/16</td>
                        <td>M12 x 140</td>
                        <td>4</td>
                        <td>312</td>
                        <td>340</td>
                        <td>80</td>
                        <td>11.2</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN200</td>
                        <td>218-235</td>
                        <td>PN10/16</td>
                        <td>M12 x 140</td>
                        <td>4</td>
                        <td>320</td>
                        <td>340</td>
                        <td>80</td>
                        <td>12.0</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN225</td>
                        <td>242-262</td>
                        <td>PN10/16</td>
                        <td>M12 x 140</td>
                        <td>4</td>
                        <td>326</td>
                        <td>340</td>
                        <td>80</td>
                        <td>10.6</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN250</td>
                        <td>250-267</td>
                        <td>PN10/16</td>
                        <td>M12 x 140</td>
                        <td>6</td>
                        <td>360</td>
                        <td>400</td>
                        <td>85</td>
                        <td>14.0</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN250</td>
                        <td>250-274</td>
                        <td>PN10/16</td>
                        <td>M12 x 140</td>
                        <td>6</td>
                        <td>368</td>
                        <td>400</td>
                        <td>85</td>
                        <td>14.5</td>
                        <td />
                        <td />
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN250</td>
                        <td>272-289</td>
                        <td>PN10/16</td>
                        <td>M12 x 150</td>
                        <td>6</td>
                        <td>370</td>
                        <td>400</td>
                        <td>85</td>
                        <td>14.8</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td />
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN300</td>
                        <td>315-332</td>
                        <td>PN10/16</td>
                        <td>M12 x 150</td>
                        <td>6</td>
                        <td>382</td>
                        <td>400</td>
                        <td>85</td>
                        <td>14.9</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN300</td>
                        <td>322-339</td>
                        <td>PN10/16</td>
                        <td>M12 x 150</td>
                        <td>6</td>
                        <td>430</td>
                        <td>455</td>
                        <td>85</td>
                        <td>17.9</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN350</td>
                        <td>340-360</td>
                        <td>PN16</td>
                        <td>M12 x 150</td>
                        <td>6</td>
                        <td>435</td>
                        <td>455</td>
                        <td>85</td>
                        <td>17.0</td>
                        <td>●</td>
                        <td>★</td>
                        <td />
                        <td>◆</td>
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN350</td>
                        <td>351-378</td>
                        <td>PN10/16</td>
                        <td>M12 x 170</td>
                        <td>6</td>
                        <td>455</td>
                        <td>455</td>
                        <td>85</td>
                        <td>35.0</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>DN350</td>
                        <td>374-391</td>
                        <td>PN10/16</td>
                        <td>M14 x 190</td>
                        <td>8</td>
                        <td>455</td>
                        <td>520</td>
                        <td>85</td>
                        <td>28.0</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td />
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN400</td>
                        <td>390-410</td>
                        <td>PN10/16</td>
                        <td>M14 x 170</td>
                        <td>8</td>
                        <td>510</td>
                        <td>520</td>
                        <td>115</td>
                        <td>28.0</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>DN400</td>
                        <td>398-430</td>
                        <td>PN10/16</td>
                        <td>M14 x 180</td>
                        <td>8</td>
                        <td>520</td>
                        <td>520</td>
                        <td>108</td>
                        <td>30.4</td>
                        <td>●</td>
                        <td />
                        <td />
                        <td>◆</td>
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN400</td>
                        <td>417-437</td>
                        <td>PN10/16</td>
                        <td>M14 x 150</td>
                        <td>8</td>
                        <td>530</td>
                        <td>580</td>
                        <td>108</td>
                        <td>33.5</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN400</td>
                        <td>425-475</td>
                        <td>PN10/16</td>
                        <td>M14 x 210</td>
                        <td>8</td>
                        <td>560</td>
                        <td>580</td>
                        <td>108</td>
                        <td>34.0</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN450</td>
                        <td>450-463</td>
                        <td>PN16</td>
                        <td>M14 x 180</td>
                        <td>8</td>
                        <td>555</td>
                        <td>580</td>
                        <td>108</td>
                        <td>35.0</td>
                        <td>●</td>
                        <td />
                        <td />
                        <td />
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN450</td>
                        <td>455-475</td>
                        <td>PN10/16</td>
                        <td>M14 x 180</td>
                        <td>8</td>
                        <td>560</td>
                        <td>580</td>
                        <td>108</td>
                        <td>34.1</td>
                        <td>●</td>
                        <td />
                        <td>▲</td>
                        <td>◆</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>DN450</td>
                        <td>476-500</td>
                        <td>PN10/16</td>
                        <td>M14 x 180</td>
                        <td>8</td>
                        <td>585</td>
                        <td>580</td>
                        <td>108</td>
                        <td>34.0</td>
                        <td>●</td>
                        <td>★</td>
                        <td />
                        <td>◆</td>
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN500</td>
                        <td>500-508</td>
                        <td>PN10/16</td>
                        <td>M14 x 180</td>
                        <td>10</td>
                        <td>600</td>
                        <td>640</td>
                        <td>114</td>
                        <td>49.5</td>
                        <td />
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN500</td>
                        <td>500-533</td>
                        <td>PN10/16</td>
                        <td>M14 x 180</td>
                        <td>10</td>
                        <td>620</td>
                        <td>640</td>
                        <td>124</td>
                        <td>50.0</td>
                        <td>●</td>
                        <td />
                        <td>▲</td>
                        <td>◆</td>
                        <td />
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN500</td>
                        <td>526-546</td>
                        <td>PN10/16</td>
                        <td>M14 x 210</td>
                        <td>10</td>
                        <td>680</td>
                        <td>715</td>
                        <td>114</td>
                        <td>49.5</td>
                        <td>●</td>
                        <td />
                        <td>▲</td>
                        <td />
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN600</td>
                        <td>600-630</td>
                        <td>PN10/16</td>
                        <td>M14 x 180</td>
                        <td>10</td>
                        <td>663</td>
                        <td>715</td>
                        <td>114</td>
                        <td>60.0</td>
                        <td />
                        <td>★</td>
                        <td />
                        <td>◆</td>
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN600</td>
                        <td>608-636</td>
                        <td>PN10/16</td>
                        <td>M14 x 200</td>
                        <td>10</td>
                        <td>725</td>
                        <td>840</td>
                        <td>130</td>
                        <td>78.2</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td>◆</td>
                        <td />
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN600</td>
                        <td>630-650</td>
                        <td>PN10/16</td>
                        <td>M14 x 180</td>
                        <td>10</td>
                        <td>740</td>
                        <td>840</td>
                        <td>118</td>
                        <td>66.5</td>
                        <td>●</td>
                        <td />
                        <td>▲</td>
                        <td />
                        <td>○</td>
                        <td />
                      </tr>
                      <tr>
                        <td>DN700</td>
                        <td>710-739</td>
                        <td>PN10/16</td>
                        <td>M16 x 180</td>
                        <td>12</td>
                        <td>875</td>
                        <td>910</td>
                        <td>114</td>
                        <td>72.0</td>
                        <td>●</td>
                        <td>★</td>
                        <td>▲</td>
                        <td />
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                      <tr>
                        <td>DN800</td>
                        <td>816-842</td>
                        <td>PN10/16</td>
                        <td>M16 x 230</td>
                        <td>12</td>
                        <td>986</td>
                        <td>1025</td>
                        <td>128</td>
                        <td>120</td>
                        <td />
                        <td />
                        <td />
                        <td>◆</td>
                        <td>○</td>
                        <td>✚</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-panel" id="tab-reviews">
                <div className="empty-tab">No reviews yet for this product.</div>
              </div>
            </div>
          </div>
          {/* ============ RELATED PRODUCTS ============ */}
          <div className="related">
            <h2>Related Products</h2>
            <div className="related-grid" id="relatedGrid" />
          </div>
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



