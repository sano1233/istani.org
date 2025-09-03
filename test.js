const fs = require('fs');

for (const file of ['index.html', 'google09fb6384e727b88f.html']) {
  if (!fs.existsSync(file)) {
    console.error(`Missing required file: ${file}`);
    process.exit(1);
  }
}

console.log('All verification files exist.');
