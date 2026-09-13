const fs = require('node:fs');
const vm = require('node:vm');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const ts = require('../sns-literacy-app/node_modules/typescript');
const plain = value => JSON.parse(JSON.stringify(value));
const baseline = 'baseline-sep08-content-v2';
function inspect(file, storage) {
  const source=fs.readFileSync(file,'utf8');
  const ast=ts.createSourceFile(file,source,ts.ScriptTarget.Latest,true,ts.ScriptKind.JS);
  assert.equal(ast.parseDiagnostics.length,0,file);
  const names=new Set(['j','dr','fr','pr','mr','hr','gr','yr','br','wr','Er','Dr','rubyReadings','followingGradients']);
  const functions=new Map();
  const code=[];
  for(const node of ast.statements) {
    if(ts.isVariableStatement(node)) for(const decl of node.declarationList.declarations) if(names.has(decl.name.getText(ast))) code.push('var '+decl.getText(ast)+';');
    if(ts.isFunctionDeclaration(node)) {
      functions.set(node.name.text,node.getText(ast));
      if(['xr','Sr','Tr','followingAvatarStyle','splitRubyReading','N'].includes(node.name.text)) code.push(node.getText(ast));
    }
  }
  const jsx=(type,props)=>({type,props});
  code.push('({profile:dr,posts:fr,renderedPosts:hr,questions:gr,dictionary:Er,split:splitRubyReading,render:N,read:xr,save:Sr,avatar:followingAvatarStyle})');
  return {source,functions,data:vm.runInNewContext(code.join('\n'),{window:{localStorage:storage},M:{jsx,jsxs:jsx,Fragment:'fragment'}})};
}
const entries=new Map();
const storage={getItem:key=>entries.get(key)??null,setItem:(key,value)=>entries.set(key,value)};
const before=inspect(baseline+'/app-runtime.js',storage);
const after=inspect('app-runtime.js',storage);
const old=before.data,current=after.data;
const expectedProfile=plain(old.profile);
expectedProfile.followingAccounts[0]={name:'金沢ユナイテッドU-15',handle:'@kanazawa_united_u15'};
assert.deepEqual(plain(current.profile),expectedProfile);
assert.equal(current.posts.length,14);
assert.deepEqual(plain(current.posts.map(p=>p.id)),['p22','p21','p18','p17','p02','p16','p15','p14','p13','p12','p07','p06','p04','p01']);
for(const post of current.posts) {
  const expected=plain(old.posts.find(p=>p.id===post.id));
  if(post.id==='p02') expected.date='6月17日';
  if(post.id==='p04') expected.body='うちの犬。かわいいから特別公開';
  assert.deepEqual(plain(post),expected,post.id);
}
const dateValue=text=>{const [,month,day]=text.match(/^(\d+)月(\d+)日/);return Number(month)*100+Number(day);};
const postDates=current.posts.map(p=>dateValue(p.date));
assert.ok(postDates.every((date,index)=>!index||date<=postDates[index-1]));
const expectedQuestions=plain(old.questions);
expectedQuestions[0].options.sort((a,b)=>dateValue(a)-dateValue(b));
expectedQuestions[1].options[2]='金沢ユナイテッドU-15';
expectedQuestions[1].answer='金沢ユナイテッドU-15';
expectedQuestions[1].explanation=expectedQuestions[1].explanation.split('\n').slice(1).join('\n');
expectedQuestions[2].hint='6月17日に投稿された公園の場所をGoogleマップ（ここをクリックするとサイトに飛びます）で検索してみましょう。公園の場所を特定した後、検索欄に"中学校"と入力すると付近の中学校が一覧表示されます。';
[expectedQuestions[2].options[0],expectedQuestions[2].options[9]]=[expectedQuestions[2].options[9],expectedQuestions[2].options[0]];
expectedQuestions[3].question='個人情報を他人に知られると、どのような被害につながる恐れがあるでしょうか。正しい選択肢を2つ選びましょう。';
expectedQuestions[3].options[2]='携帯電話番号を知られると、いたずら電話をかけられたり、あなたから個人情報を聞き出したり金銭をだまし取るための「詐欺メッセージ」が送られてくるようになる。';
expectedQuestions[3].options[3]='携帯電話番号を知られると、勝手に家へ商品が送られてくるようになる。';
expectedQuestions[3].answers[1]=expectedQuestions[3].options[2];
expectedQuestions[3].explanation='メールであなたをだますための偽のサイトに誘い、パスワードなどを盗む詐欺をフィッシングといいます。また、複数の個人情報を組み合わさることで、名前や住んでいる場所が分かってしまうことがあります。';
expectedQuestions[4].explanation=expectedQuestions[4].explanation.replace('インターネット上の画像や動画には、生成AIで作られたものも多くあります。','インターネット上の画像や動画には、生成AIで作られたものが数多く紛れ込んでいます。');
expectedQuestions[5].question=expectedQuestions[5].question.replace('あてはまるものを2つ選んでください。','正しい選択肢を2つ選びましょう。');
expectedQuestions[5].options=expectedQuestions[5].options.filter((_,index)=>index!==2&&index!==4);
assert.equal(current.questions[5].options.length,4);
assert.deepEqual(plain(current.questions[5].answers),[current.questions[5].options[1],current.questions[5].options[3]]);
expectedQuestions[6].options=expectedQuestions[6].options.map(option=>option.replace('4月29日の公園','6月17日の公園')).sort((a,b)=>dateValue(a)-dateValue(b));
expectedQuestions[7].question='次のうち、法律に違反する可能性がある投稿はどれでしょうか。正しい選択肢を2つ選びましょう。';
assert.deepEqual(plain(current.questions),expectedQuestions);
for(const q of current.questions) {
  const answers=q.answers??[q.answer];
  assert.ok(answers.every(answer=>q.options.includes(answer)),q.id);
  assert.equal(new Set(q.options).size,q.options.length,q.id);
  assert.equal(answers.length,q.multiple?q.selectionCount:1,q.id);
  let accepted=0;
  for(let mask=0;mask<(1<<q.options.length);mask++) {
    const selection=q.options.filter((_,index)=>mask&(1<<index));
    if(selection.length===answers.length&&answers.every(answer=>selection.includes(answer))) accepted++;
  }
  assert.equal(accepted,1,q.id);
}
for(const option of current.questions[6].options) assert.ok(current.posts.some(post=>dateValue(post.date)===dateValue(option)));
assert.ok(current.renderedPosts.every(post=>post.replies.length===0&&post.counts.replies===0));
assert.equal(new Set(current.profile.followingAccounts.map(account=>current.avatar(account.handle).backgroundImage)).size,10);
function rubies(text) {
  const result=[];
  function visit(node) {
    if(!node||typeof node!=='object') return;
    if(Array.isArray(node)) {node.forEach(visit);return;}
    if(node.type==='ruby') result.push({base:node.props.children[0],reading:node.props.children[1].props.children});
    visit(node.props?.children);
  }
  visit(current.render({text}));
  return result;
}
for(const id of ['p06','p14']) assert.deepEqual(rubies(current.posts.find(p=>p.id===id).body).find(part=>part.base==='日'),{base:'日',reading:'ひ'});
assert.deepEqual(rubies('6月10日').find(part=>part.base==='日'),{base:'日',reading:'にち'});
assert.deepEqual(rubies(current.questions[6].title).find(part=>part.base==='悪口'),{base:'悪口',reading:'わるぐち'});
for(const [word,reading] of Object.entries(current.dictionary)) {
  const parts=current.split(word,reading);
  assert.equal(parts.map(part=>part.text).join(''),word);
  assert.equal(parts.map(part=>part.reading??part.text.replace(/AI/g,'エーアイ')).join(''),reading,word);
  for(const part of parts) if(part.reading) assert.match(part.text,/^[\p{Script=Han}々]+$/u);
}
for(const [word,reading] of Object.entries(old.dictionary)) assert.equal(current.dictionary[word],word==='根拠のない悪口'?'こんきょのないわるぐち':reading,word);
for(const [name,source] of before.functions) if(!['Mr','Rr','zr','Hr'].includes(name)) assert.equal(after.functions.get(name),source,'Unexpected function change: '+name);
for(const text of ['投稿内容を手がかりに問題に答えよう！','件の投稿内容を確認して「問題に答える」から問題に取り組みましょう。','生成AIが生成した動画','投稿を見て、分かったことを答えましょう。']) assert.ok(after.source.includes(text));
const saved={solved:Object.fromEntries(current.questions.map(q=>[q.id,true])),attempts:Object.fromEntries(current.questions.map((q,index)=>[q.id,index+1]))};
old.save(saved);
assert.deepEqual(plain(current.read()),saved);
current.save(saved);
assert.deepEqual(plain(current.read()),saved);
assert.equal(fs.readFileSync('media-manifest.json','utf8'),fs.readFileSync(baseline+'/media-manifest.json','utf8'));
assert.equal(fs.readFileSync('build.cjs','utf8'),fs.readFileSync(baseline+'/build.cjs','utf8'));
const hash=file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
for(const media of JSON.parse(fs.readFileSync('media-manifest.json','utf8'))) assert.equal(hash('media/'+media.file),hash('C:/Users/kkazu/Downloads/'+media.source));
assert.equal(hash('media/favicon-sns-sep08-v1.png'),hash('C:/Users/kkazu/Downloads/sns.png'));
console.log('PASS: exact requested content edits; chronological post/option order; school answer swap; renamed club; context-specific ruby; all answer sets valid; media, favicon, progress and unrelated functions retained.');
console.log('PASS: Q6 former choices 3 and 5 removed; 4 choices remain, with current choices 2 and 4 correct.');
