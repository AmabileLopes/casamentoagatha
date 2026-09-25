// Gera index.html autocontido (imagens em base64) para importar no Canva Code.
const fs = require('fs');
const path = require('path');
const mimes = { webp: 'image/webp', png: 'image/png', jpg: 'image/jpeg' };
const b64 = f => `data:${mimes[f.split('.').pop()]};base64,` + fs.readFileSync(path.join(__dirname, 'assets', f)).toString('base64');
const imagens = {
  __ENVELOPE__: 'envelope.webp',
  __CASAL__: 'casal.webp',
  __IGREJA__: 'igreja.webp',
  __RAMO__: 'ramo.webp',
  __FLORES__: 'flores.webp',
  __MANUAL__: 'manual.webp',
};
let html = fs.readFileSync(path.join(__dirname, 'src', 'convite.template.html'), 'utf8');
for (const [marca, arquivo] of Object.entries(imagens)) html = html.replace(marca, b64(arquivo));
fs.writeFileSync(path.join(__dirname, 'index.html'), html);
console.log('index.html gerado (' + Math.round(html.length / 1024) + ' KB)');
