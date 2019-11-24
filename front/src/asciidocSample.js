
function convertToHTML() {
  const asciidoctor = require('asciidoctor')();
  const content = 'http://asciidoctor.org[*Asciidoctor*] ' +
    'running on https://opalrb.com[_Opal_] ' +
    'brings AsciiDoc to Node.js!';
  const html = asciidoctor.convert(content);
  console.log(html);
}

