const fs = require('fs');
const path = require('path');

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');

const versionString = `${year}${month}${day}_${hours}${minutes}${seconds}`;

const filePath = path.join(__dirname, 'src', 'version.ts');
const content = `export const VERSION = '${versionString}';\n`;

fs.writeFileSync(filePath, content, 'utf8');

console.log(`Version ${versionString} generated and written to ${filePath}`);
