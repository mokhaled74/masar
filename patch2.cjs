const fs = require('fs');
const p = 'public/assets/js/search.js';
let s = fs.readFileSync(p, 'utf8');
// Guard the init IIFE: only run if results container exists
s = s.replace(
  '(async function () {',
  '(async function () {\n  if (!document.getElementById("results")) return;'
);
fs.writeFileSync(p, s);
console.log('patched search.js');
