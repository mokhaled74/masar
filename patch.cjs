const fs = require('fs');
const p = 'public/assets/js/products.js';
let s = fs.readFileSync(p, 'utf8');

// Guard backLink listener
s = s.replace(
  'document.getElementById("backLink").addEventListener("click", (e) => {',
  'const __backLink = document.getElementById("backLink");\nif (__backLink) __backLink.addEventListener("click", (e) => {'
);

// Guard trailing loadProduct call: ensure element exists
s = s.replace(/\nloadProduct\(requestedId\);\s*$/,
  '\nif (document.getElementById("productDetailContainer") || document.querySelector(".product-detail")) loadProduct(requestedId);');

fs.writeFileSync(p, s);
console.log('patched products.js');
