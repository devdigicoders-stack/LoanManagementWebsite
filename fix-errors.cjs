const fs = require('fs');
const { execSync } = require('child_process');

let success = false;
let iterations = 0;

while (!success && iterations < 50) {
  iterations++;
  try {
    execSync('npm.cmd run build', { stdio: 'pipe', env: { ...process.env, NO_COLOR: '1', FORCE_COLOR: '0' } });
    console.log("Build succeeded! All syntax errors fixed.");
    success = true;
  } catch (error) {
    let log = error.stdout.toString() + '\n' + error.stderr.toString();
    log = log.replace(/\u001b\[[0-9;]*m/g, '');
    
    const regex = /╭─\[ (src\/[^:]+):(\d+):(\d+) \]/g;
    let match;
    let fixes = 0;
    
    let fileFixes = {};
    
    while ((match = regex.exec(log)) !== null) {
      let file = match[1];
      let line = parseInt(match[2]);
      let col = parseInt(match[3]);
      
      if (!fileFixes[file]) fileFixes[file] = [];
      fileFixes[file].push({ line, col });
    }
    
    for (const [file, fixesList] of Object.entries(fileFixes)) {
      let lines = fs.readFileSync(file, 'utf8').split('\n');
      
      for (const fix of fixesList) {
        let lineIdx = fix.line - 1;
        let str = lines[lineIdx];
        if (str.includes('}')) {
          let colIdx = fix.col - 1;
          lines[lineIdx] = str.slice(0, colIdx) + ']' + str.slice(colIdx);
          fixes++;
        } else if (str.includes(';')) {
          let colIdx = fix.col - 1;
          lines[lineIdx] = str.slice(0, colIdx) + ']' + str.slice(colIdx);
          fixes++;
        }
      }
      
      fs.writeFileSync(file, lines.join('\n'), 'utf8');
      console.log(`Fixed ${fixesList.length} errors in ${file}`);
    }
    
    if (fixes === 0) {
      console.log("No more fixes could be applied, but build still failed.");
      break;
    }
  }
}
