import fs from 'fs';
import path from 'path';
export default function hashpathPlugin() {
return {
name: 'hashpath-plugin',
apply: 'build',
generateBundle(options, bundle) {
const outputDir = path.resolve(options.dir || 'dist');
const pathMap = {};
for (const fileName in bundle) {
const chunk = bundle[fileName];
if (fileName.endsWith('.md')) {
const originalPath = fileName.replace(/\.md$/, '');
pathMap[originalPath] = fileName;
}
}
const mapFilePath = path.join(outputDir, 'path-map.json');
fs.writeFileSync(mapFilePath, JSON.stringify(bundle, null, 2));
console.log(`Path map generated at: ${mapFilePath}`);
},
};
}
