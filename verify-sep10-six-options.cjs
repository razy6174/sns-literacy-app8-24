const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('../sns-literacy-app/node_modules/typescript');
const baseline = 'baseline-sep10-six-options/';
const read = file => fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
const plain = value => JSON.parse(JSON.stringify(value));
function inspect(file) {
  const source = read(file);
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
  assert.equal(ast.parseDiagnostics.length, 0);
  let dataNode;
  for (const node of ast.statements) if (ts.isVariableStatement(node)) {
    for (const declaration of node.declarationList.declarations) if (declaration.name.getText(ast) === 'gr') dataNode = declaration.initializer;
  }
  assert.ok(dataNode);
  return {questions:plain(vm.runInNewContext('(' + dataNode.getText(ast) + ')')), outside:source.slice(0,dataNode.getStart(ast)) + '<QUESTIONS>' + source.slice(dataNode.end)};
}
const before = inspect(baseline + 'app-runtime.js'), after = inspect('app-runtime.js');
assert.equal(after.outside, before.outside, 'No changes outside the question data.');
const keep = {birthday:[0,1,2,4,7,9], club:[0,1,2,3,4,9], school:[0,1,2,3,4,9], abuse:[0,1,2,5,8,9]};
const oldRisk = '学校や行事の中止などで損害が発生すると、損害賠償を求められる。';
const newRisk = '偽情報の発信が原因で、学校が休校になったり行事が中止になったりして損害が発生すると、損害賠償を求められる。';
const expectedQuestions = before.questions.map(q => {
  const expected = {...q, options:keep[q.id] ? keep[q.id].map(index=>q.options[index]) : q.options};
  if (q.id === 'fake-crime') {
    expected.options = expected.options.map(option => option === oldRisk ? newRisk : option);
    expected.answers = expected.answers.map(answer => answer === oldRisk ? newRisk : answer);
  }
  return expected;
});
assert.deepEqual(after.questions, expectedQuestions);
assert.deepEqual(after.questions.map(q=>q.options.length), [6,6,6,4,4,4,6,4]);
for (const q of after.questions) {
  const original = before.questions.find(old=>old.id===q.id);
  const answers = q.answers ?? [q.answer];
  assert.equal(q.options.length, original.options.length > 6 ? 6 : original.options.length);
  assert.equal(new Set(q.options).size, q.options.length);
  assert.ok(answers.every(answer=>q.options.includes(answer)));
  assert.equal(answers.length, q.multiple ? q.selectionCount : 1);
  let correct = 0;
  for (let mask=0; mask < 1<<q.options.length; mask++) {
    const selected = q.options.filter((_,i)=>mask & 1<<i);
    if (selected.length===answers.length && selected.every(answer=>answers.includes(answer))) correct++;
  }
  assert.equal(correct, 1);
}
const date = option => {const [,month,day] = option.match(/^(\d+)月(\d+)日/);return Number(month)*100+Number(day);};
for (const id of ['birthday','abuse']) {
  const dates=after.questions.find(q=>q.id===id).options.map(date);
  assert.deepEqual(dates,[...dates].sort((a,b)=>a-b));
}
assert.equal(read('changes.css'),read(baseline+'changes.css'));
console.log('PASS: Q1, Q2, Q3 and Q7 reduced from 10 to 6; Q6 option 4 prefix updated; correct answers, chronological order, UI, CSS and storage logic preserved.');
