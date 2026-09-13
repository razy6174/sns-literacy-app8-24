const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('../sns-literacy-app/node_modules/typescript');
function extract(source, storage) {
  const ast = ts.createSourceFile('runtime.js', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
  const names = new Set(['j', 'dr', 'fr', 'pr', 'mr', 'hr', 'gr', 'yr', 'br']);
  const code = [];
  for (const node of ast.statements) {
    if (ts.isVariableStatement(node)) {
      for (const decl of node.declarationList.declarations) {
        if (names.has(decl.name.getText(ast))) code.push('var ' + decl.getText(ast) + ';');
      }
    }
    if (ts.isFunctionDeclaration(node) && ['xr', 'Sr'].includes(node.name?.text)) code.push(node.getText(ast));
  }
  code.push('({profile:dr,posts:fr,questions:gr,read:xr,save:Sr})');
  return vm.runInNewContext(code.join('\n'), { window: { localStorage: storage } });
}
const plain = value => JSON.parse(JSON.stringify(value));
const state = new Map();
const storage = { getItem: key => state.get(key) ?? null, setItem: (key, value) => state.set(key, value) };
const baseline = extract(fs.readFileSync('baseline/index-BbtBJoHe.js', 'utf8'), storage);
const current = extract(fs.readFileSync('app-runtime.js', 'utf8'), storage);
assert.deepEqual(plain(current.profile), plain(baseline.profile));
assert.equal(current.posts.length, baseline.posts.length);
for (const post of current.posts) {
  const expected = plain(baseline.posts.find(p => p.id === post.id));
  if (post.id === 'p18') expected.date = '6月28日';
  if (post.id === 'p02') expected.body = '学校から家へ下校中、突然の大雨。公園で雨宿り中';
  assert.deepEqual(plain(post), expected);
}
assert.deepEqual(plain(current.questions.map(q => q.id)), ['birthday','club','school','personal-risk','fake','fake-crime','abuse','arrest-risk']);
for (const [id, expected] of [['personal-risk',[1,3,4,6]],['fake-crime',[2,6]],['abuse',[8]],['arrest-risk',[1,3,4,5]]]) {
  const q = current.questions.find(q => q.id === id);
  assert.equal(q.options.length, id === 'abuse' ? 10 : 6);
  const answers = q.answers ?? [q.answer];
  assert.deepEqual(plain(answers.map(answer => q.options.indexOf(answer) + 1)), expected);
}
assert.equal(current.questions.find(q => q.id === 'personal-risk').selectionCount, undefined);
assert.equal(current.questions.find(q => q.id === 'fake-crime').selectionCount, 2);
assert.equal(current.questions.find(q => q.id === 'arrest-risk').selectionCount, 4);
assert.equal(current.questions[2].hintUrl, 'https://www.google.com/maps?authuser=0');
assert.ok(current.questions[2].hint.startsWith('4月29日'));
const oldSolved = Object.fromEntries(baseline.questions.map(q => [q.id, true]));
const oldAttempts = Object.fromEntries(baseline.questions.map(q => [q.id, 2]));
state.set('sns-literacy-quiz-progress-v4', JSON.stringify({version:4,solved:oldSolved,attempts:oldAttempts}));
const migrated = current.read();
assert.deepEqual(Object.keys(migrated.solved).sort(), ['abuse','birthday','club','fake','school']);
assert.deepEqual(Object.keys(migrated.attempts).sort(), ['abuse','birthday','club','fake','school']);
current.save({solved:{},attempts:{}});
assert.deepEqual(plain(current.read()), {solved:{},attempts:{}});
console.log('PASS: only authorized post/profile data changed; 8 questions in correct order; answer indices and selection counts; Google Maps URL; old progress migration and reset.');
