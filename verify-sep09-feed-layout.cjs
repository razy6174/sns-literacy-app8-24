const fs = require('node:fs');
const assert = require('node:assert/strict');
const ts = require('../sns-literacy-app/node_modules/typescript');
const read = file => fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
const baseline = 'baseline-sep09-feed-layout/';
function inspect(file) {
  const source = read(file);
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
  assert.equal(ast.parseDiagnostics.length, 0);
  const functions = new Map();
  const untouched = [];
  for (const node of ast.statements) {
    if (ts.isFunctionDeclaration(node) && ['Rr', 'zr'].includes(node.name.text)) {
      functions.set(node.name.text, node.getText(ast));
    } else untouched.push(node.getText(ast));
  }
  return { source, functions, untouched };
}
const before = inspect(baseline + 'app-runtime.js');
const after = inspect('app-runtime.js');
assert.deepEqual(after.untouched, before.untouched, 'Only the note and feed layout may change.');
const oldText = 'それぞれに該当する投稿を見つけ「問題に答える」ボタンから回答してください。';
const newText = '${hr.length}件の投稿内容を確認して「問題に答える」から問題に取り組みましょう。';
assert.equal(after.functions.get('Rr'), before.functions.get('Rr').replace(oldText, newText));
const oldFeed = before.functions.get('zr');
const start = oldFeed.indexOf('                    (0, M.jsxs)(`div`, {\n                        className: `feed-titlebar`');
const end = oldFeed.indexOf('(0, M.jsx)(Ir, {', start);
assert.ok(start > 0 && end > start);
assert.equal(after.functions.get('zr'), oldFeed.slice(0, start) + '                    ' + oldFeed.slice(end));
assert.ok(!after.source.includes(oldText));
assert.ok(!after.source.includes('className: `feed-titlebar`'));
assert.equal(after.source.split(newText).length - 1, 1);
const cssReplacement = "/* Keep the cover's upper corners rounded, including on narrow screens. */\n.feed-column {\n  border-top-left-radius: 22px;\n  border-top-right-radius: 22px;\n}";
assert.equal(read('changes.css'), read(baseline + 'changes.css').replace('.feed-titlebar span { line-height: 1.8; }', cssReplacement));
for (const file of ['base.css', 'build.cjs', 'media-manifest.json']) assert.equal(read(file), read(baseline + file), file);
console.log('PASS: only the note text, redundant feed titlebar and upper corners changed; all other code, data, progress logic and base CSS retained.');
