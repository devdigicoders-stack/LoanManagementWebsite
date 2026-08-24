const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const colorReplacements = {
  '#0a0f0a': '#FDFBF7',
  '#132a13': '#E0F2FE',
  '#2d5a27': '#BAE6FD',
  '#71d924': '#0369A1',
  '#0b120e': '#FDFBF7',
  '#1a2e1d': '#E0F2FE',
  '#2a4d2e': '#BAE6FD',
  '#050b06': '#F0F9FF',
  '#050806': '#F0F9FF',
  '#1a241c': '#E0F2FE',
  '#2d3a30': '#BAE6FD',
  '#131a14': '#FDFBF7',
  '#0b150e': '#E0F2FE',
  '#18291c': '#F0F9FF',
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
      if (filePath.endsWith('.jsx')) {
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

  // 1. Replace remaining dark hex codes
  for (const [oldStr, newStr] of Object.entries(colorReplacements)) {
    const regex = new RegExp(oldStr.replace('#', '\\#'), 'g');
    newContent = newContent.replace(regex, newStr);
  }

  // 2. Fix Hero sections specifically (text colors and broken overlays)
  if (file.includes('Hero') && !file.includes('HeroSlider')) {
    // Fix broken overlays
    newContent = newContent.replace(/className="absolute inset-0 \]"/g, 'className="absolute inset-0 bg-slate-900/60"');
    newContent = newContent.replace(/className="absolute inset-0 \] md:hidden"/g, 'className="absolute inset-0 bg-slate-900/70 md:hidden"');
    
    // Fix text colors over images
    newContent = newContent.replace(/text-slate-900/g, 'text-white');
    newContent = newContent.replace(/text-slate-700/g, 'text-gray-200');
    newContent = newContent.replace(/text-slate-600/g, 'text-gray-300');
    newContent = newContent.replace(/text-slate-800/g, 'text-gray-100');
  }
  
  // Clean up any remaining broken gradient classes like `bg-clip-text ] ]` in HappyClients
  newContent = newContent.replace(/\] \]/g, '');
  newContent = newContent.replace(/ \]/g, '');

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Fixed: ${file}`);
    changedFiles++;
  }
});

console.log(`Fix complete! Updated ${changedFiles} files.`);
