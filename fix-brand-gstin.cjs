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

  // Remove "(HAUS NUO-Pay)" / "(HAUS NUO-PAY)" / "(HAUS NUO-PayPL)" from after company name
  content = content.replace(/\s*\(HAUS NUO-Pay\)/gi, '');
  content = content.replace(/\s*\(HAUS NUO-PAY\)/gi, '');
  content = content.replace(/\s*\(HAUS NUO-PayPL\)/gi, '');
  content = content.replace(/\s*\(HAUS NUO-Paypl\)/gi, '');

  // Remove GSTIN line content — remove entire span/text containing GSTIN number
  content = content.replace(/22AAKCN7722G1ZJ/g, '');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalFiles++;
    console.log(`Fixed: ${path.relative(srcDir, filePath)}`);
  }
});

console.log(`\n✅ Done! Fixed ${totalFiles} files.`);
