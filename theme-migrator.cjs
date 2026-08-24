const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = {
  // Backgrounds
  '#0b0f0e': '#FDFBF7',
  '#030403': '#FDFBF7',
  '#030706': '#F0F9FF',
  '#0a110d': '#F0F9FF',
  '#1a1f1e': '#F0F9FF',
  '#0f1f13': '#BAE6FD',
  '#11240c': '#7DD3FC',
  
  // Greens to Blues
  '#5bc116': '#0EA5E9',
  '#1cf200': '#0284C7',
  '#4a9b12': '#0369A1',
  '#e8fbe9': '#E0F2FE',
  '#c3f2cd': '#BAE6FD',
  '#f4fdf5': '#F8FAFC',
  '#2e5e15': '#0369A1',
  '#3b791b': '#0284C7',

  // Text adjustments
  'text-white': 'text-slate-900',
  'text-gray-300': 'text-slate-700',
  'text-gray-400': 'text-slate-600',
  'text-gray-200': 'text-slate-800'
};

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(filePath));
    } else {
      if (filePath.endsWith('.jsx') || filePath.endsWith('.css') || filePath.endsWith('.js')) {
        results.push(filePath);
      }
    }
  });
  return results;
}

const files = walkDir(srcDir);
let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;
  
  for (const [oldStr, newStr] of Object.entries(replacements)) {
    // Escape hash for regex
    const regex = new RegExp(oldStr.replace('#', '\\#'), 'g');
    newContent = newContent.replace(regex, newStr);
  }

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Updated: ${file}`);
    changedFiles++;
  }
});

console.log(`Migration complete! Updated ${changedFiles} files.`);
