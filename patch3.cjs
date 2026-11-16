const fs = require('fs');
const p = 'public/assets/js/main.js';
let s = fs.readFileSync(p, 'utf8');
s = s.replace(
  'document.querySelector(".read-more-btn").addEventListener("click", function () {',
  'const __rm = document.querySelector(".read-more-btn");\nif (__rm) __rm.addEventListener("click", function () {'
);
// fix closing: the block ends with }); on next lines; leave as is since if wraps the addEventListener call only? Need to ensure braces. We only replaced the call opening; the handler body and closing remain. The if statement then needs closing brace after the handler's }); 
// Simpler: instead, wrap not feasible with simple replace. Revert approach: guard with optional chaining using replace of the whole statement.
fs.writeFileSync(p, s);
console.log('done');
