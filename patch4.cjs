const fs = require('fs');
const p = 'public/assets/js/main.js';
let s = fs.readFileSync(p, 'utf8');
s = s.replace(
  /\$\("\.counter"\)\.counterUp\(\{\s*\n\s*delay: 10,\s*\n\s*time: 500,\s*\n\s*\}\);/,
  'try { $(".counter").counterUp({\n    delay: 10,\n    time: 500,\n  }); } catch (e) { /* ignore */ }'
);
fs.writeFileSync(p, s);
console.log('done');
