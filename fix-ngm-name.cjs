const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
let totalFiles = 0;
let totalReplacements = 0;

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback);
    } else if (f.endsWith('.jsx') || f.endsWith('.js') || f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.html')) {
      callback(fullPath);
    }
  });
}

walkDir(srcDir, (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Replace all NGM variants with HAUS NUO-Pay equivalents
  content = content.replace(/NGM Housing Payments Limited/g, 'HAUS NUO-Pay');
  content = content.replace(/NGM Housing Payment's Limited/g, 'HAUS NUO-Pay');
  content = content.replace(/NGM Housing Payments/g, 'HAUS NUO-Pay');
  content = content.replace(/NGM Housing Payment's/g, 'HAUS NUO-Pay');
  content = content.replace(/NGM Housing/g, 'HAUS NUO-Pay');
  content = content.replace(/NGM Finance/g, 'HAUS NUO-Pay');
  content = content.replace(/NGM App/g, 'HAUS NUO-Pay App');
  content = content.replace(/NGM Mobile App/g, 'HAUS NUO-Pay App');
  content = content.replace(/NGM Advantage/g, 'HAUS NUO-Pay Advantage');
  content = content.replace(/NGM Logo/g, 'HAUS NUO-Pay Logo');

  if (content !== original) {
    const count = (original.match(/NGM/g) || []).length;
    totalReplacements += count;
    totalFiles++;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${count} instance(s) in: ${path.relative(srcDir, filePath)}`);
  }
});

console.log(`\n✅ Done! Replaced ${totalReplacements} total "NGM" instances across ${totalFiles} files.`);
