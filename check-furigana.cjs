const fs = require('node:fs');
const ts = require('../sns-literacy-app/node_modules/typescript');
const ast = ts.createSourceFile('app-runtime.js', fs.readFileSync('app-runtime.js', 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
let dictionary;
function find(node) {
  if (ts.isVariableDeclaration(node) && node.name.getText(ast) === 'Er') dictionary = node.initializer;
  ts.forEachChild(node, find);
}
find(ast);
const keys = dictionary.properties.map(p => p.name.text).sort((a, b) => b.length - a.length);
const uncovered = new Map();
function inspect(node) {
  if (node === dictionary) return;
  if (ts.isStringLiteralLike(node) && /\p{Script=Han}/u.test(node.text)) {
    let missing = '';
    for (let i = 0; i < node.text.length;) {
      const key = keys.find(k => node.text.startsWith(k, i));
      if (key) { i += key.length; continue; }
      if (/\p{Script=Han}/u.test(node.text[i])) missing += node.text[i];
      i++;
    }
    if (missing) uncovered.set(node.text, missing);
  }
  ts.forEachChild(node, inspect);
}
inspect(ast);
for (const [value, missing] of uncovered) console.log(missing + ' :: ' + value);
console.log('Strings with uncovered kanji: ' + uncovered.size);
