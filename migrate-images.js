import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_DIR = __dirname;
const CLOUDINARY_PREFIX = '"https://res.cloudinary.com/daz9tusly/image/upload/f_auto,q_auto/v1/horizon2026/images/';

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  // Replace references like src="https://res.cloudinary.com/daz9tusly/image/upload/f_auto,q_auto/v1/horizon2026/images/..." or href="https://res.cloudinary.com/daz9tusly/image/upload/f_auto,q_auto/v1/horizon2026/images/..."
  // This looks for "https://res.cloudinary.com/daz9tusly/image/upload/f_auto,q_auto/v1/horizon2026/images/ and replaces it with the Cloudinary prefix
  content = content.replace(/"\/images\//g, CLOUDINARY_PREFIX);
  content = content.replace(/'\/images\//g, "'" + CLOUDINARY_PREFIX.slice(1));
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated images in: ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!['node_modules', '.git', 'dist', 'images'].includes(file)) {
        walkDir(fullPath);
      }
    } else {
      if (fullPath.endsWith('.html') || fullPath.endsWith('.js')) {
        replaceInFile(fullPath);
      }
    }
  }
}

walkDir(TARGET_DIR);
console.log('Done migrating image URLs!');
