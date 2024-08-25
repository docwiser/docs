import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import md from 'vite-plugin-md';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItPrism from 'markdown-it-prism';
import hashpath from './hashpath'
export default defineConfig({
plugins: [
hashpath(),
vue({
include: [/\.vue$/, /\.md$/],
reactivityTransform: true
}),
md({
markdownItOptions: {
html: true,
linkify: true,
typographer: true
},
markdownItSetup(markdown) {
markdown.use(markdownItAnchor, {lebel: [2,3,4,5,6], permalink: true, permalinkClass: 'header-anchor', permalinkSymbol: '¶'});
markdown.use(markdownItPrism);

}
})
],
resolve: {
alias: {
'@': fileURLToPath(new URL('./src', import.meta.url))
}
}
});
