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
    } else if (f.endsWith('.jsx') || f.endsWith('.js') || f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.css')) {
      callback(fullPath);
    }
  });
}

walkDir(srcDir, (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  // Fix invisible cream text used as text color on light backgrounds
  // text-[#FDFBF7] → text-slate-900
  content = content.replace(/text-\[#FDFBF7\]/g, 'text-slate-900');
  
  // Also fix bg-[#FDFBF7] used as button background (invisible on cream page bg)
  // We ONLY want to fix it when it's a button/link bg, not section backgrounds
  // Target: classes that have both bg-[#FDFBF7] AND text-white (these are buttons)
  content = content.replace(/bg-\[#FDFBF7\]\s+hover:bg-\[#0EA5E9\]\s+text-white/g, 'bg-[#0EA5E9] hover:bg-[#0284C7] text-white');
  content = content.replace(/bg-\[#FDFBF7\]\s+hover:bg-\[#0EA5E9\]\s+text-black/g, 'bg-[#0EA5E9] hover:bg-[#0284C7] text-white');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    const count = (original.match(/text-\[#FDFBF7\]/g) || []).length
      + (original.match(/bg-\[#FDFBF7\]\s+hover:bg-\[#0EA5E9\]/g) || []).length;
    totalReplacements += count;
    totalFiles++;
    console.log(`Fixed ${count} instance(s) in: ${path.relative(srcDir, filePath)}`);
  }
});

console.log(`\n✅ Done! Fixed ${totalReplacements} total instances across ${totalFiles} files.`);
