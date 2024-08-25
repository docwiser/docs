<script setup>
import {shallowRef, ref, onMounted, computed, watch, inject, defineAsyncComponent} from 'vue';
import { useRoute, useRouter} from 'vue-router';
const config = inject('appConfig');
const route = useRoute();
const router = useRouter();
const MarkdownContent = shallowRef(null);
const isLoaded = ref('No');
const regex = {
title: /^#\s+.+/,
heading: /^#+\s+.+/,
custom: /\$\$\s*\w+/,
ol: /\d+\.\s+.*/,
ul: /\*\s+.*/,
task: /\*\s+\[.]\s+.*/,
blockQuote: /\>.*/,
table: /\|.*/,
image: /\!\[.+\]\(.+\).*/,
url: /\[.+\]\(.+\).*/,
codeBlock: /\`{3}\w+.*/,
};
const loadMarkdownFile = async (path) => {
try {
const filePath = `../content${path}.md`;
MarkdownContent.value = defineAsyncComponent(() => {
return import (filePath).catch((error) => {
console.error(error);
router.push('/404');
});
});
isLoaded.value = 'Yes';
} catch (error) {
console.error(`Markdown file not found at: ${path}`, error);
router.push('/404');
}
};
onMounted(() => {
loadMarkdownFile(route.path);
});
watch(() => route.path, (newPath) => {
loadMarkdownFile(newPath);
});
</script>
<template>
<component :is="MarkdownContent"></component>
</template>
<style scoped>
/* Add your styles here, if needed */
</style>
