<script setup>
import { inject, onMounted, watch} from 'vue';
import {useRoute} from 'vue-router';
const route = useRoute();
const config = inject('appConfig');
const updateMeta = () => {
const interval = setInterval(() => {
const title = document.querySelector('h1');
const description = document.querySelector('p');
const metaDescription = document.querySelector('meta[name="description"]');
document.title = `${title ? title.textContent.replace('¶', '') + ' | ' : ''}${config.title || "Tech Assistant for Blind"}`;
if (metaDescription) {
metaDescription.setAttribute('content', description.textContent || '');
} else {
const newMeta = document.createElement('meta');
newMeta.name = 'description';
newMeta.content = description.textContent || '';
document.head.appendChild(newMeta);
}
}, 400);
setTimeout(() => {
clearInterval(interval);
}, 2500);
}
onMounted(() => {
updateMeta();
});
watch(() => route.path, (newPath) => updateMeta());
</script>
<template>
<div>
</div>
</template>
