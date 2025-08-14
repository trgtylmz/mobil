
const ts = require('typescript');
const fs = require('fs');
const path = require('path');

function walk(dir, files) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (['node_modules', '.git', 'android', 'ios'].includes(e.name)) continue;
      walk(p, files);
    } else {
      if (p.endsWith('.ts') || p.endsWith('.tsx') || p.endsWith('.js') || p.endsWith('.jsx')) files.push(p);
    }
  }
}

const files = [];
walk(process.cwd(), files);

const options = { jsx: ts.JsxEmit.React, target: ts.ScriptTarget.ES2017, module: ts.ModuleKind.CommonJS, allowJs: true };
const program = ts.createProgram(files, options);
const diagnostics = ts.getPreEmitDiagnostics(program);
if (diagnostics.length === 0) {
  console.log('No TypeScript diagnostics');
  process.exit(0);
}
for (const d of diagnostics) {
  const msg = ts.flattenDiagnosticMessageText(d.messageText, '\n');
  if (d.file) {
    const { line, character } = d.file.getLineAndCharacterOfPosition(d.start);
    console.log(`${d.file.fileName} (${line+1},${character+1}): ${msg}`);
  } else {
    console.log(msg);
  }
}
process.exit(1);
