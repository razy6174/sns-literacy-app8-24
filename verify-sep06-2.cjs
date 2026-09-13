const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('../sns-literacy-app/node_modules/typescript');
function extract(source, storage) {
  const ast = ts.createSourceFile('runtime.js', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
  assert.equal(ast.parseDiagnostics.length, 0);
  const names = new Set(['j', 'dr', 'fr', 'pr', 'mr', 'hr', 'gr', 'yr', 'br', 'Er', 'Dr', 'rubyReadings']);
  const code = [];
  for (const node of ast.statements) {
    if (ts.isVariableStatement(node)) {
      for (const decl of node.declarationList.declarations) {
        if (names.has(decl.name.getText(ast))) code.push('var ' + decl.getText(ast) + ';');
      }
    }
    if (ts.isFunctionDeclaration(node) && ['xr', 'Sr', 'splitRubyReading', 'N'].includes(node.name?.text)) code.push(node.getText(ast));
  }
  code.push('({profile:dr,posts:fr,renderedPosts:hr,questions:gr,read:xr,save:Sr,dictionary:Er,split:typeof splitRubyReading === "function" ? splitRubyReading : null,renderText:N})');
  const jsx = (type, props) => ({type, props});
  return vm.runInNewContext(code.join('\n'), {window:{localStorage:storage}, M:{jsx,jsxs:jsx,Fragment:'fragment'}});
}
const plain = value => JSON.parse(JSON.stringify(value));
const state = new Map();
const storage = {getItem:key => state.get(key) ?? null, setItem:(key,value) => state.set(key,value)};
const baseline = extract(fs.readFileSync('baseline-sep06-2/app-runtime.js', 'utf8'), storage);
const runtime = fs.readFileSync('app-runtime.js', 'utf8');
const current = extract(runtime, storage);
const expectedNames = ['ノースリバーFC U-15','Lemon','Y','ショウ','ひつじ','Yuta','Mico','ケースケ','X.M','ただの男子中学生'];
assert.deepEqual(plain(current.profile.followingAccounts.map(a=>a.name)), expectedNames);
assert.equal(new Set(current.profile.followingAccounts.map(a=>a.handle)).size, 10);
assert.deepEqual(plain(current.profile.followerAccounts), plain(current.profile.followingAccounts.slice(1)));
assert.equal(current.profile.following, 10);
assert.equal(current.profile.followers, 9);
for (const key of ['name','handle','bio','avatar','cover']) assert.deepEqual(current.profile[key], baseline.profile[key]);
assert.equal(current.posts.length, baseline.posts.length);
for (const post of current.posts) {
  const expected = plain(baseline.posts.find(p => p.id === post.id));
  if (post.id === 'p18') expected.body = '近所にクマが出た！みんな気を付けて！';
  assert.deepEqual(plain(post), expected);
}
for (const post of current.renderedPosts) {
  const expected = plain(current.posts.find(p=>p.id===post.id));
  expected.replies = [];
  expected.counts.replies = 0;
  assert.deepEqual(plain(post), expected);
}
assert.deepEqual(plain(current.questions.map(q=>q.id)), plain(baseline.questions.map(q=>q.id)));
const answerIndices = q => (q.answers ?? [q.answer]).map(answer=>q.options.indexOf(answer)+1);
for (const question of current.questions) {
  assert.deepEqual(plain(answerIndices(question)), plain(answerIndices(baseline.questions.find(q=>q.id===question.id))));
  assert.ok(!answerIndices(question).includes(0));
  assert.equal(question.options.length, new Set(question.options).size);
  for (const value of [question.title,question.question,question.hint,question.explanation,...question.options]) {
    assert.ok(!/(せよ|選べ|見てみよう|探そう|注意しよう|考えてみよう|とどめておこう|である)(。|$)/u.test(value), value);
  }
}
assert.equal(current.questions[3].selectionCount,4);
assert.equal(current.questions[5].selectionCount,2);
assert.equal(current.questions[7].selectionCount,4);
assert.ok(current.questions[3].question.endsWith('あてはまるものを4つ選んでください。'));
assert.ok(current.questions[1].hint.includes('フォロー中のアカウントは、投稿の上にある"10フォロー中"をクリックすると見ることができます。'));
assert.equal(current.questions[2].hintUrl,'https://www.google.com/maps?authuser=0');
assert.ok(current.questions[5].question.includes('偽情報です。偽情報をインターネットに投稿すると'));
assert.equal(current.questions[5].options[3],'偽情報の投稿でも削除すれば問題はありません。');
assert.ok(!runtime.includes('className: `selection-guide`'));
assert.ok(!runtime.includes('post: e, onOpen: e.replies'));
assert.ok(!runtime.includes('(0, M.jsx)(cr,'));
// Every dictionary entry retains the full reading, but ruby contains only kanji.
for (const [word, reading] of Object.entries(current.dictionary)) {
  const segments = current.split(word,reading);
  assert.equal(segments.map(p=>p.text).join(''),word);
  assert.equal(segments.map(p=>p.reading ?? p.text.replace(/AI/g,'エーアイ')).join(''),reading,word);
  for (const part of segments) {
    if (part.reading) assert.match(part.text,/^[\p{Script=Han}々]+$/u,word);
    else assert.doesNotMatch(part.text,/\p{Script=Han}/u,word);
  }
}
assert.deepEqual(plain(current.split('送りつけられる','おくりつけられる')),[{text:'送',reading:'おく'},{text:'りつけられる'}]);
assert.deepEqual(plain(current.split('生成AI画像','せいせいエーアイがぞう')),[{text:'生成',reading:'せいせい'},{text:'AI'},{text:'画像',reading:'がぞう'}]);
// Wording changes must not discard the user's v5 quiz progress.
const saved = {solved:Object.fromEntries(baseline.questions.map(q=>[q.id,true])),attempts:Object.fromEntries(baseline.questions.map(q=>[q.id,2]))};
state.set('sns-literacy-quiz-progress-v5',JSON.stringify({version:5,...saved}));
assert.deepEqual(plain(current.read()),saved);
current.save({solved:{},attempts:{}});
assert.deepEqual(plain(current.read()),{solved:{},attempts:{}});
console.log('PASS: authorized changes only; follows/followers; no replies; question wording, answer indices and counts; ruby only on kanji; progress retained.');
