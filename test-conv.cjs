const H = require('htmltojsx');
const c = new H({ createClass: false });
const html = '<div class="foo"><img src="x.png"><p>hi</p></div>';
console.log(c.convert(html));
