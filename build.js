// Gera index.html autocontido (imagens em base64) para importar no Canva Code.
const fs = require('fs');
const path = require('path');
const b64 = (f, mime) => `data:${mime};base64,` + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
const html = fs.readFileSync(path.join(__dirname, 'src', 'convite.template.html'), 'utf8')
  .replace('__ENVELOPE__', b64('envelope.webp', 'image/webp'))
  .replace('__MONOGRAMA__', b64('monograma.png', 'image/png'));
fs.writeFileSync(path.join(__dirname, 'index.html'), html);
console.log('index.html gerado (' + Math.round(html.length / 1024) + ' KB)');
