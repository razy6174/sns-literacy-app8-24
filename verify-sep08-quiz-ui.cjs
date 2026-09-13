const fs = require('node:fs');
const vm = require('node:vm');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const ts = require('../sns-literacy-app/node_modules/typescript');
const plain = value => JSON.parse(JSON.stringify(value));
function inspect(file, storage) {
  const source = fs.readFileSync(file, 'utf8');
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
  assert.equal(ast.parseDiagnostics.length, 0, file);
  const names = new Set(['j', 'dr', 'fr', 'pr', 'mr', 'hr', 'gr', 'yr', 'br', 'wr', 'Er', 'Dr', 'rubyReadings', 'followingGradients']);
  const functions = new Map();
  const code = [];
  for (const node of ast.statements) {
    if (ts.isVariableStatement(node)) for (const declaration of node.declarationList.declarations) {
      if (names.has(declaration.name.getText(ast))) code.push('var ' + declaration.getText(ast) + ';');
    }
    if (ts.isFunctionDeclaration(node)) {
      const name = node.name.text;
      functions.set(name, node.getText(ast));
      if (['xr', 'Sr', 'Tr', 'followingAvatarStyle', 'splitRubyReading'].includes(name)) code.push(node.getText(ast));
    }
  }
  code.push('({dr,fr,hr,gr,Er,read:xr,save:Sr,split:splitRubyReading,avatar:typeof followingAvatarStyle==="function"?followingAvatarStyle:Tr})');
  return { source, functions, data: vm.runInNewContext(code.join('\n'), {window:{localStorage:storage}}) };
}
const entries = new Map();
const storage = {getItem:key=>entries.get(key)??null,setItem:(key,value)=>entries.set(key,value)};
const before = inspect('baseline-sep08-quiz-ui/app-runtime.js', storage);
const after = inspect('app-runtime.js', storage);
const current = after.data;
const old = before.data;
assert.deepEqual(plain(current.dr), plain(old.dr), 'Profile and account identities must not change');
const deleted = new Set(['p03','p05','p08','p09','p10','p11','p20']);
assert.equal(current.fr.length, 14);
assert.deepEqual(plain(current.fr.map(p=>p.id)), plain(old.fr.filter(p=>!deleted.has(p.id)).map(p=>p.id)));
const imageTitles = ['スタジアムの道中','屋台と人混み','サッカーの試合','サインを書く選手'];
for (const post of current.fr) {
  const expected = plain(old.fr.find(p=>p.id===post.id));
  if (post.id === 'p17') expected.gallery.forEach((media,index)=>Object.assign(media,{title:imageTitles[index],alt:imageTitles[index],placeholderTitle:imageTitles[index]}));
  assert.deepEqual(plain(post), expected, post.id);
}
assert.ok(current.hr.every(p=>p.replies.length===0 && p.counts.replies===0));
assert.deepEqual(plain(current.gr.map(q=>q.title)),['誕生日','所属クラブ','所属中学校','個人情報漏洩のリスク','生成AI画像','偽情報発信のリスク','根拠のない悪口','誹謗中傷発信のリスク']);
assert.equal(current.gr[0].hint,'投稿ページの一番上に表示されているKTさんのユーザーIDと過去の投稿を照らし合わせて確認してみましょう。');
assert.equal(current.gr[3].question,'個人情報を知られると、どのような被害につながる恐れがありますか。あてはまるものを2つ選んでください。');
assert.equal(current.gr[3].options[1],'携帯電話番号を知られると、その番号をもとに住所が特定される。');
assert.deepEqual(plain(current.gr[4].options),imageTitles);
assert.equal(current.gr[4].answer,imageTitles[0]);
assert.equal(current.gr[7].options[2],'相手に危害を加えると予告する投稿');
assert.deepEqual(plain(current.gr.map(q=>q.options.length)),[10,10,10,4,4,6,10,4]);
for (const question of current.gr) {
  assert.equal(new Set(question.options).size,question.options.length);
  assert.ok(question.options.every(option=>!/(?:です|ます|ません)[。！]?$/.test(option)),question.id+' must use plain forms');
  const answers = question.answers ?? [question.answer];
  assert.ok(answers.every(answer=>question.options.includes(answer)),question.id);
  assert.equal(answers.length,question.multiple?question.selectionCount:1);
  // Exhaust every combination; exactly one selection set must be accepted.
  let correctSets=0;
  for(let mask=0;mask<(1<<question.options.length);mask++) {
    const selected=question.options.filter((_,index)=>mask&(1<<index));
    if(selected.length===answers.length && answers.every(answer=>selected.includes(answer))) correctSets++;
  }
  assert.equal(correctSets,1,question.id);
}
for (const index of [0,1,2,6]) assert.equal(current.gr[index].answer,old.gr[index].answer);
assert.deepEqual(plain(current.gr[3].answers),[current.gr[3].options[0],current.gr[3].options[2]]);
assert.deepEqual(plain(current.gr[7].answers),[current.gr[7].options[1],current.gr[7].options[2]]);
for(const option of current.gr[6].options) {
  const date=option.match(/^\d+月\d+日/)[0];
  assert.ok(current.fr.some(post=>post.date===date),'Q7 references deleted post: '+date);
}
const following = current.dr.followingAccounts.map(account=>current.avatar(account.handle).backgroundImage);
assert.equal(new Set(following).size,10);
for (const account of current.dr.followerAccounts) assert.equal(current.avatar(account.handle).backgroundImage,following[current.dr.followingAccounts.findIndex(item=>item.handle===account.handle)]);
for (const [word,reading] of Object.entries(current.Er)) {
  const parts=current.split(word,reading);
  assert.equal(parts.map(p=>p.text).join(''),word);
  assert.equal(parts.map(p=>p.reading??p.text.replace(/AI/g,'エーアイ')).join(''),reading,word);
  for(const part of parts) if(part.reading) assert.match(part.text,/^[\p{Script=Han}々]+$/u);
}
const changedFunctions=new Set(['Mr','Lr','Rr','Hr']);
for(const [name,source] of before.functions) if(!changedFunctions.has(name)) assert.equal(after.functions.get(name),source,'Unexpected function change: '+name);
assert.equal(after.functions.get('Hr').includes('text: `正解です'),false);
assert.equal(after.functions.get('Hr').includes('text: `不正解です'),false);
for(const removed of ['採点結果','問に回答し、すべて正解しました！','投稿をもう一度見る','おつかれさまでした！']) assert.ok(!after.functions.get('Hr').includes(removed));
assert.ok(after.functions.get('Hr').includes('すべての問題に正解しました！'));
const saved={solved:Object.fromEntries(current.gr.map(q=>[q.id,true])),attempts:Object.fromEntries(current.gr.map((q,index)=>[q.id,index+1]))};
current.save(saved);
assert.deepEqual(plain(current.read()),saved,'All current progress and attempts must survive');
assert.deepEqual(plain(old.read()),saved,'Same storage version as before');
const manifest=JSON.parse(fs.readFileSync('media-manifest.json','utf8'));
assert.equal(fs.readFileSync('media-manifest.json','utf8'),fs.readFileSync('baseline-sep08-quiz-ui/media-manifest.json','utf8'));
const hash=file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
for(const item of manifest) assert.equal(hash('media/'+item.file),hash('C:/Users/kkazu/Downloads/'+item.source));
console.log('PASS: 8 titles; plain-form choices; exact answer sets; 14 posts with only authorized removals; 4 image labels; 10 unique account gradients; ruby; unchanged media, profile and progress.');
console.log('Pending confirmation: Q6 still keeps all 6 choices to preserve its 2 valid answers; June 28 bear video retained.');
