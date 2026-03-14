import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const eventsDataPath = path.join(__dirname, 'js', 'events-data.js');
let content = fs.readFileSync(eventsDataPath, 'utf8');

// Replace `${CMS_BASE}/` with `${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/`
// ONLY if it is NOT followed by `f_auto` to avoid double-prefixing posters
const updatedContent = content.replace(/\$\{CMS_BASE\}\/(?!f_auto)/g, '${CMS_BASE}/f_auto,q_auto/v1/horizon2026/gallery/');

if (content !== updatedContent) {
  fs.writeFileSync(eventsDataPath, updatedContent, 'utf8');
  console.log('Fixed gallery paths in events-data.js!');
} else {
  console.log('No changes were needed.');
}
