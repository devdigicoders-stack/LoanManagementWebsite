const fs = require('fs');
let content = fs.readFileSync('src/pages/Terms.jsx', 'utf8');
content = content.replace(/<h2 id="section-(\d+)" className="scroll-mt-32 text-2xl font-bold mt-10 mb-4 text-\[#0b0f0e\]">/g, '<h2 id="section-$1" className="scroll-mt-32 mt-12 mb-4 flex items-center gap-3 text-2xl font-extrabold text-[#0b0f0e] border-l-4 border-[#5bc116] pl-4">');
fs.writeFileSync('src/pages/Terms.jsx', content);
