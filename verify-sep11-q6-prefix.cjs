const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const ts = require('../sns-literacy-app/node_modules/typescript');

const baseline = 'baseline-sep11-q6-prefix/';
const read = file => fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
const plain = value => JSON.parse(JSON.stringify(value));

function inspect(file) {
  const source = read(file);
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.JS);
  assert.equal(ast.parseDiagnostics.length, 0);
  let dataNode;
  for (const node of ast.statements) if (ts.isVariableStatement(node)) {
    for (const declaration of node.declarationList.declarations) {
      if (declaration.name.getText(ast) === 'gr') dataNode = declaration.initializer;
    }
  }
  assert.ok(dataNode);
  return {
    questions: plain(vm.runInNewContext('(' + dataNode.getText(ast) + ')')),
    outside: source.slice(0, dataNode.getStart(ast)) + '<QUESTIONS>' + source.slice(dataNode.end)
  };
}

const before = inspect(baseline + 'app-runtime.js');
const after = inspect('app-runtime.js');
assert.equal(after.outside, before.outside);

const oldText = '学校や行事の中止などで損害が発生すると、損害賠償を求められる。';
const newText = '偽情報の発信が原因で、学校が休校になったり行事が中止になったりして損害が発生すると、損害賠償を求められる。';
const expected = before.questions.map(question => {
  if (question.id !== 'fake-crime') return question;
  return {
    ...question,
    options: question.options.map(option => option === oldText ? newText : option),
    answers: question.answers.map(answer => answer === oldText ? newText : answer)
  };
});

assert.deepEqual(after.questions, expected);
const question6 = after.questions.find(question => question.id === 'fake-crime');
assert.equal(question6.options[3], newText);
assert.ok(question6.answers.includes(newText));
assert.equal(question6.options.length, 4);
assert.equal(question6.answers.length, 2);
console.log('PASS: only Q6 option 4 and its matching correct-answer value received the requested prefix.');
