const fs = require('fs');
const path = require('path');
const roots = [path.resolve('app'), path.resolve('src')];
const target = '/images/placeholders/hero.jpg';
let count = 0;

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    if (!full.match(/\.(ts|tsx)$/)) continue;
    const text = fs.readFileSync(full, 'utf8');
    const updated = text.replace(/"\/images\/placeholders\/[^"]+"/g, `"${target}"`);
    if (updated !== text) {
      fs.writeFileSync(full, updated, 'utf8');
      count += 1;
    }
  }
}

roots.forEach(walk);
console.log('updated', count, 'files');
