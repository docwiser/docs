<template>
<div>
<button @click="toggleMode" aria-atomic="true">{{ mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}</button>
</div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const mode = ref('light');
const toggleMode = () => {
mode.value = mode.value === 'light' ? 'dark' : 'light';
updateLocalStorage(mode.value);
applyMode(mode.value);
};
const applyMode = (mode) => {
document.body.classList.remove('dark', 'light');
document.body.classList.add(mode);
};
const updateLocalStorage = (mode) => {
localStorage.setItem('theme', mode);
};
onMounted(() => {
const savedMode = localStorage.getItem('theme') || 'light';
mode.value = savedMode;
applyMode(mode.value);
});
</script>

<style scoped>
/* Add styles for the button if needed */
</style>
