const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

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

  // 1. Remove all gradient utility classes
  // e.g., bg-gradient-to-r, bg-gradient-to-tr, bg-gradient-to-b, etc.
  newContent = newContent.replace(/\bbg-gradient-to-[a-z]+\b/g, '');
  
  // 2. Remove all from-* utility classes
  newContent = newContent.replace(/\bfrom-[^\s"']+\b/g, '');
  
  // 3. Remove all to-* utility classes
  newContent = newContent.replace(/\bto-[^\s"']+\b/g, '');

  // 4. Remove all via-* utility classes
  newContent = newContent.replace(/\bvia-[^\s"']+\b/g, '');

  // 5. Fix text color on Primary Sky Blue buttons/elements.
  // We look for class strings that contain `bg-[#0EA5E9]` AND `text-slate-900`
  // and replace the text color with `text-white`.
  // Also hover states like `hover:bg-[#0284C7]` might have text color issues.
  
  // To safely do this, we can use a regex replacement with a replacer function on className="" strings.
  newContent = newContent.replace(/className=(["'])(.*?)\1/g, (match, quote, classStr) => {
    if (classStr.includes('bg-[#0EA5E9]') || classStr.includes('bg-[#0284C7]')) {
      // If it's a primary button, it should have white text.
      classStr = classStr.replace(/\btext-slate-900\b/g, 'text-white');
      classStr = classStr.replace(/\btext-slate-800\b/g, 'text-white');
      classStr = classStr.replace(/\btext-slate-700\b/g, 'text-white');
    }
    
    // Clean up multiple spaces left by removing gradients
    classStr = classStr.replace(/\s+/g, ' ').trim();
    
    return `className=${quote}${classStr}${quote}`;
  });

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Refined: ${file}`);
    changedFiles++;
  }
});

console.log(`Refinement complete! Updated ${changedFiles} files.`);
