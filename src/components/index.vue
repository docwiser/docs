<script setup>
import {onMounted} from 'vue';
onMounted(() => {
document.title = config.title ? config.title : "Tech Assistant for Blind";
});
</script>
<template>
<h1>Home</h1>
<p>Welcome to Tech Assistant for Blind Developer Docs</p>
<p>Here is a code block:</p>
<Code lang="shell">/****</Code>
</template>