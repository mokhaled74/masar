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

function loadScriptOnce(src) {
  if (document.querySelector(`script[src="${src}"]`)) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.body.appendChild(s);
  });
}

async function runFile(src) {
  const res = await fetch(src);
  const code = await res.text();
  // execute in a function scope to avoid global redeclaration errors
  new Function(code)();
}

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
          await runFile('/assets/js/products.js');
        }
        if (path === '/products') {
          await runFile('/assets/js/catalog.js');
        }
        if (path === '/search') {
          await runFile('/assets/js/search.js');
        }
      } catch (e) {
        if (!cancelled) console.error('script load failed', e);
      }
    })();
    return () => { cancelled = true; };
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
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
