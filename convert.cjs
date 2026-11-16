const fs = require('fs');
const path = require('path');
const H = require('htmltojsx');

const srcDir = 'E:/Downloads/masar/masar';
const outDir = 'E:/Downloads/masar/masar-react/src/pages';

const files = [
  { file: 'index.html', comp: 'Home', route: '/' },
  { file: 'about-us.html', comp: 'About', route: '/about' },
  { file: 'services.html', comp: 'Services', route: '/services' },
  { file: 'projects.html', comp: 'Projects', route: '/projects' },
  { file: 'certificates.html', comp: 'Certificates', route: '/certificates' },
  { file: 'contact-us.html', comp: 'Contact', route: '/contact' },
  { file: 'product-catalog.html', comp: 'ProductCatalog', route: '/products' },
  { file: 'product-detail.html', comp: 'ProductDetail', route: '/product/:id' },
  { file: 'search.html', comp: 'Search', route: '/search' },
];

// map internal links
const linkMap = {
  'index.html': '/',
  'about-us.html': '/about',
  'services.html': '/services',
  'projects.html': '/projects',
  'certificates.html': '/certificates',
  'contact-us.html': '/contact',
  'product-catalog.html': '/products',
  'product-detail.html': '/product',
  'search.html': '/search',
};

function fixLinks(jsx) {
  // replace href="page.html" and href="page.html?..." 
  return jsx.replace(/href="([a-z-]+\.html)([^"]*)"/g, (m, page, qs) => {
    const base = linkMap[page];
    if (!base) return m;
    if (page === 'product-detail.html') {
      // keep query
      return `href="${base}${qs}"`;
    }
    return `href="${base}${qs}"`;
  });
}

const converter = new H({ createClass: false });

for (const { file, comp } of files) {
  const html = fs.readFileSync(path.join(srcDir, file), 'utf8');
  const start = html.indexOf('<div class="wrapper">');
  const end = html.indexOf('</div><!-- /.wrapper -->');
  if (start === -1 || end === -1) { console.log('MISSING wrapper', file); continue; }
  let wrapper = html.slice(start, end + '</div><!-- /.wrapper -->'.length);
  // remove the wrapper comment? keep
  // convert
  let jsx = converter.convert(wrapper);
  jsx = fixLinks(jsx);
  // write component
  const compCode = `import React, { useEffect } from 'react';\n\nexport default function ${comp}() {\n  return (\n    <>\n${jsx.split('\n').map(l => '      ' + l).join('\n')}\n    </>\n  );\n}\n`;
  fs.writeFileSync(path.join(outDir, comp + '.jsx'), compCode);
  console.log('converted', file, '->', comp + '.jsx');
}
