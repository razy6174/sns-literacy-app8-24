const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const ts = require('../sns-literacy-app/node_modules/typescript');
const sourceRoot = 'C:/Users/kkazu/Documents/Codex/2026-09-06/sns-literacy-app8_24';
const runtime = fs.readFileSync('app-runtime.js', 'utf8');
const javascript = fs.readFileSync('vendor-prefix.js', 'utf8') + '\n' + runtime;
const parsed = ts.createSourceFile('bundle.js', javascript, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
if (parsed.parseDiagnostics.length) throw new Error(parsed.parseDiagnostics.map(d => d.messageText).join('\n'));
const css = fs.readFileSync('base.css', 'utf8') + '\n' + fs.readFileSync('changes.css', 'utf8');
const hash = content => crypto.createHash('sha256').update(content).digest('hex').slice(0, 10);
const scriptName = `index-${hash(javascript)}.js`;
const styleName = `index-${hash(css)}.css`;
const faviconName = 'favicon-sns-sep08-v1.png';
const html = fs.readFileSync('baseline/index.html', 'utf8')
  .replace('index-BbtBJoHe.js', scriptName)
  .replace('index-DqxkT1tJ.css', styleName)
  .replace('    <meta name="theme-color" content="#ffffff" />', `    <meta name="theme-color" content="#ffffff" />\n    <link rel="icon" type="image/png" href="./assets/${faviconName}" />`);
fs.mkdirSync('preview/assets', { recursive: true });
for (const file of fs.readdirSync(path.join(sourceRoot, 'assets'))) {
  if (file.startsWith('index-')) continue;
  const source = path.join(sourceRoot, 'assets', file);
  if (fs.statSync(source).isFile()) fs.copyFileSync(source, path.join('preview/assets', file));
}
const media = JSON.parse(fs.readFileSync('media-manifest.json', 'utf8'));
for (const item of media) {
  fs.copyFileSync(path.join('media', item.file), path.join('preview/assets', item.file));
}
fs.copyFileSync(path.join('media', faviconName), path.join('preview/assets', faviconName));
fs.writeFileSync(path.join('preview/assets', scriptName), javascript, 'utf8');
fs.writeFileSync(path.join('preview/assets', styleName), css, 'utf8');
fs.writeFileSync('preview/index.html', html, 'utf8');
const files = ['index.html', `assets/${scriptName}`, `assets/${styleName}`, ...media.map(item => `assets/${item.file}`), `assets/${faviconName}`];
fs.writeFileSync('build-manifest.json', JSON.stringify({ files }, null, 2) + '\n', 'utf8');
console.log(JSON.stringify({ files, javascriptBytes: Buffer.byteLength(javascript), cssBytes: Buffer.byteLength(css), syntax: 'passed' }));
