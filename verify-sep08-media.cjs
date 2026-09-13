const fs = require('node:fs');
const vm = require('node:vm');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const ts = require('../sns-literacy-app/node_modules/typescript');
function extract(source, storage) {
  const ast = ts.createSourceFile('runtime.js', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
  assert.equal(ast.parseDiagnostics.length, 0);
  const names = new Set(['j','dr','fr','pr','mr','hr','gr','yr','br','Er','Dr','rubyReadings']);
  const code = [];
  for (const node of ast.statements) {
    if (ts.isVariableStatement(node)) for (const decl of node.declarationList.declarations) {
      if (names.has(decl.name.getText(ast))) code.push('var '+decl.getText(ast)+';');
    }
    if (ts.isFunctionDeclaration(node) && ['xr','Sr','splitRubyReading'].includes(node.name?.text)) code.push(node.getText(ast));
  }
  code.push('({profile:dr,posts:fr,renderedPosts:hr,questions:gr,read:xr,save:Sr,dictionary:Er,split:splitRubyReading})');
  return vm.runInNewContext(code.join('\n'),{window:{localStorage:storage}});
}
const plain = value => JSON.parse(JSON.stringify(value));
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const state = new Map();
const storage = {getItem:key=>state.get(key)??null,setItem:(key,value)=>state.set(key,value)};
const baseline = extract(fs.readFileSync('baseline-sep08-media/app-runtime.js','utf8'),storage);
const current = extract(fs.readFileSync('app-runtime.js','utf8'),storage);
const manifest = JSON.parse(fs.readFileSync('media-manifest.json','utf8'));
assert.equal(manifest.length,8);
assert.equal(new Set(manifest.map(m=>m.file)).size,8);
assert.deepEqual(plain(current.profile),plain(baseline.profile));
assert.equal(current.posts.length,baseline.posts.length);
for (const post of current.posts) {
  const old = plain(baseline.posts.find(p=>p.id===post.id));
  const matching = manifest.filter(m=>m.postId===post.id);
  if (matching.length) {
    if (post.gallery) old.gallery=plain(post.gallery);
    else old.media=plain(post.media);
  }
  assert.deepEqual(plain(post),old);
}
for (const item of manifest) {
  const post=current.posts.find(p=>p.id===item.postId);
  const media=item.index===undefined?post.media:post.gallery[item.index];
  assert.equal(media.file,item.file);
  assert.equal(media.type,item.file.endsWith('.mp4')?'video':'image');
  assert.equal(hash('media/'+item.file),hash('C:/Users/kkazu/Downloads/'+item.source),item.source);
}
assert.deepEqual(plain(current.posts.find(p=>p.id==='p17').gallery.map(m=>m.file)),manifest.filter(m=>m.postId==='p17').map(m=>m.file));
assert.ok(current.renderedPosts.every(p=>p.counts.replies===0 && p.replies.length===0));
for (const question of current.questions) {
  const old = plain(baseline.questions.find(q=>q.id===question.id));
  if (question.id==='fake') {
    old.options=['画像1：スタジアムの外観','画像2：スタジアム前の出店','画像3：サッカーの試合中','画像4：選手のサイン'];
    old.answer=old.options[0];
    old.explanation=old.explanation.replace('画像4が','画像1が');
  }
  assert.deepEqual(plain(question),old);
}
for (const [word,reading] of Object.entries(current.dictionary)) {
  const parts=current.split(word,reading);
  assert.equal(parts.map(p=>p.text).join(''),word);
  assert.equal(parts.map(p=>p.reading??p.text.replace(/AI/g,'エーアイ')).join(''),reading,word);
  for (const part of parts) if (part.reading) assert.match(part.text,/^[\p{Script=Han}々]+$/u);
}
const saved={solved:Object.fromEntries(current.questions.map(q=>[q.id,true])),attempts:Object.fromEntries(current.questions.map(q=>[q.id,2]))};
state.set('sns-literacy-quiz-progress-v5',JSON.stringify({version:5,...saved}));
const migrated=current.read();
assert.equal(Object.keys(migrated.solved).length,7);
assert.equal(migrated.solved.fake,undefined);
assert.equal(migrated.attempts.fake,undefined);
for (const q of current.questions.filter(q=>q.id!=='fake')) {
  assert.equal(migrated.solved[q.id],true);
  assert.equal(migrated.attempts[q.id],2);
}
current.save(saved);
assert.deepEqual(plain(current.read()),saved);
current.save({solved:{},attempts:{}});
assert.deepEqual(plain(current.read()),{solved:{},attempts:{}});
console.log('PASS: 8 original assets, post mapping and gallery order; only media and authorized Q5 changed; replies/profile retained; kanji-only ruby; v5 migrates 7 questions and v6 persists.');
