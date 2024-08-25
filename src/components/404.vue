<script setup>
import {onMounted, inject} from 'vue';
import {RouterLink} from 'vue-router';
const config = inject('appConfig');
onMounted(() => {
const title = config.title || "Tech Assistant for Blind";
document.title = `404: page not Found | ${title}`;
});
</script>
<template>
<h1>404: page not found</h1>
<p>Sorry, this page does not exists on this server</p>
<p>Please double-check the URL and try again</p>
<RouterLink to="/">Take me home</RouterLink>
</template>