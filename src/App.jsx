import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Projects from './pages/Projects.jsx';
import Certificates from './pages/Certificates.jsx';
import Contact from './pages/Contact.jsx';
import ProductCatalog from './pages/ProductCatalog.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Search from './pages/Search.jsx';

const scriptPromises = {};
function loadScriptOnce(src) {
  if (scriptPromises[src]) return scriptPromises[src];
  scriptPromises[src] = new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
  return scriptPromises[src];
}

function loadCssOnce(href) {
  if (document.querySelector('link[href="'+href+'"]')) return;
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = href;
  document.head.appendChild(l);
}

async function runFile(src) {
  const res = await fetch(src);
  const code = await res.text();
  // execute in a function scope to avoid global redeclaration errors
  new Function(code)();
}

// Resolves once the hero background images of the current page are decoded,
// so the preloader does not lift on an empty white hero.
function heroReady() {
  const urls = new Set();
  document.querySelectorAll('.page-title, .slide-item').forEach((el) => {
    const m = getComputedStyle(el).backgroundImage.match(/url\(["']?(.+?)["']?\)/);
    if (m) urls.add(m[1]);
  });
  return Promise.all([...urls].map((u) => new Promise((done) => {
    const img = new Image();
    img.onload = img.onerror = done;
    img.src = u;
  })));
}

let booted = false;

function ScriptLoader() {
  const location = useLocation();
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        if (!window.__jqLoaded) {
          await loadScriptOnce('/assets/js/jquery-3.3.1.min.js');
          await loadScriptOnce('/assets/js/plugins.js');
          window.__jqLoaded = true;
        }
        await runFile('/assets/js/main.js');
        const path = location.pathname;
        if (path.startsWith('/product') && !path.startsWith('/products')) {
          loadCssOnce('/assets/css/product-detail-inline.css');
          await runFile('/assets/js/products.js');
        }
        if (path === '/products') {
          loadCssOnce('/assets/css/catalog-inline.css');
          await runFile('/assets/js/catalog.js');
        }
        if (path === '/search') {
          await runFile('/assets/js/products.js');
          await runFile('/assets/js/search.js');
        }
      } catch (e) {
        if (!cancelled) console.error('script load failed', e);
      } finally {
        if (!booted) {
          booted = true;
          // shortcut: cap the wait, a missing hero image must not hold the site behind the preloader
          await Promise.race([heroReady(), new Promise((r) => setTimeout(r, 4000))]);
          const p = document.getElementById('preloader-container');
          if (p) {
            p.classList.add('loader-hidden');
            // inline values guarantee the hide even if the CSS transition never runs
            p.style.opacity = '0';
            p.style.visibility = 'hidden';
            setTimeout(() => p.remove(), 700);
          }
        }
      }
    })();
    return () => { cancelled = true; };
  }, [location.pathname]);
  return null;
}

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/';

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <ScriptLoader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
