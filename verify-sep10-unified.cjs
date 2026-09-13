const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const ts = require('../sns-literacy-app/node_modules/typescript');
const baseline = 'C:/Users/kkazu/Documents/Codex/9_10までのコピー/編集用-sns-literacy-minutes-work/';
const read = file => fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
const plain = value => JSON.parse(JSON.stringify(value));
const mutable = new Set(['kr', 'Rr', 'zr', 'Hr', 'Ur', 'useDialogFocus', 'GuideDialog', 'UnifiedWorkspace']);
function inspect(file, storage) {
  const source = read(file);
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
  assert.equal(ast.parseDiagnostics.length, 0);
  const untouched = [], declarations = [], code = [];
  const names = new Set(['j', 'dr', 'fr', 'pr', 'mr', 'hr', 'gr', 'yr', 'br', 'wr', 'Er', 'Dr', 'rubyReadings', 'followingGradients']);
  for (const node of ast.statements) {
    if (ts.isVariableStatement(node)) {
      for (const decl of node.declarationList.declarations) {
        const name = decl.name.getText(ast);
        if (!['Er', 'gr'].includes(name)) declarations.push(decl.getText(ast));
        if (names.has(name)) code.push('var ' + decl.getText(ast) + ';');
      }
    } else if (!(ts.isFunctionDeclaration(node) && mutable.has(node.name.text))) untouched.push(node.getText(ast));
    if (ts.isFunctionDeclaration(node) && ['xr', 'Sr', 'splitRubyReading'].includes(node.name.text)) code.push(node.getText(ast));
  }
  code.push('({profile:dr,posts:hr,questions:gr,dictionary:Er,read:xr,save:Sr})');
  return { source, untouched, declarations, data: vm.runInNewContext(code.join('\n'), {window:{localStorage:storage}}) };
}
const values = new Map();
const storage = {getItem:key=>values.get(key)??null, setItem:(key,value)=>values.set(key,value)};
const before = inspect(baseline + 'app-runtime.js', storage), after = inspect('app-runtime.js', storage);
assert.deepEqual(after.untouched, before.untouched);
assert.deepEqual(after.declarations, before.declarations);
for (const key of ['profile', 'posts']) assert.deepEqual(plain(after.data[key]), plain(before.data[key]), key);
const retainedOptions = {birthday:[0,1,2,4,7,9], club:[0,1,2,3,4,9], school:[0,1,2,3,4,9], abuse:[0,1,2,5,8,9]};
const oldRisk = '学校や行事の中止などで損害が発生すると、損害賠償を求められる。';
const newRisk = '偽情報の発信が原因で、学校が休校になったり行事が中止になったりして損害が発生すると、損害賠償を求められる。';
const expectedQuestions = plain(before.data.questions).map(question => {
  const expected = {...question, options:retainedOptions[question.id] ? retainedOptions[question.id].map(index=>question.options[index]) : question.options};
  if (question.id === 'fake-crime') {
    expected.options = expected.options.map(option => option === oldRisk ? newRisk : option);
    expected.answers = expected.answers.map(answer => answer === oldRisk ? newRisk : answer);
  }
  return expected;
});
assert.deepEqual(plain(after.data.questions), expectedQuestions);
assert.deepEqual(plain(after.data.dictionary), {...plain(before.data.dictionary), 結果:'けっか'});
assert.equal(after.data.posts.length, 14);
assert.equal(after.data.questions.length, 8);
for (const question of after.data.questions) {
  const answers = question.answers ?? [question.answer];
  assert.ok(answers.every(answer => question.options.includes(answer)));
  assert.equal(answers.length, question.multiple ? question.selectionCount : 1);
  let count = 0;
  for (let bits = 0; bits < 1 << question.options.length; bits++) {
    const selected = question.options.filter((_, index) => bits & 1 << index);
    if (selected.length === answers.length && selected.every(answer => answers.includes(answer))) count++;
  }
  assert.equal(count, 1);
}
const saved = {solved:Object.fromEntries(after.data.questions.map(q=>[q.id,true])),attempts:Object.fromEntries(after.data.questions.map((q,i)=>[q.id,i+1]))};
before.data.save(saved);
assert.deepEqual(plain(after.data.read()), saved);
after.data.save(saved);
assert.deepEqual(plain(before.data.read()), saved);
const grading = source => source.slice(source.indexOf('if (!f || !s.length || t[f.id])'), source.indexOf('}, disabled: f.multiple'));
assert.ok(grading(before.source).length > 100);
assert.equal(grading(after.source), grading(before.source));
assert.ok(after.source.includes('path: `/quiz`, element: (0, M.jsx)(Rt, { to: `/feed`, replace: true })'));
assert.ok(!after.source.includes('className: `mode-switch`'));
for (const file of ['base.css', 'vendor-prefix.js', 'build.cjs', 'media-manifest.json']) assert.equal(read(file), read(baseline + file), file);
assert.ok(read('changes.css').startsWith(read(baseline + 'changes.css')));
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
for (const file of fs.readdirSync('media')) assert.equal(hash('media/' + file), hash(baseline + 'media/' + file));
console.log('PASS: unified layout, six-option update and Q6 option 4 prefix; 14 posts, grading, progress and media retained.');
