<script setup>
import { ref, onMounted, onUnmounted, watch, computed, inject} from 'vue';
import { useRoute } from 'vue-router';
const config = inject('appConfig');
const sidebar = ref([]);
const route = useRoute();
const openButton = ref(null);
const closeButton = ref(null);
const isOpened = ref(false);
const isMobile = ref(false);
const label = ref('Lower tabs sidebar Navigation');
const openSidebar = () => {
isOpened.value = true;
setTimeout(() => {
closeButton.value.focus();
}, 50);
}
const closeSidebar = () => {
isOpened.value = false;
setTimeout(() => {
openButton.value.focus();
}, 50);
}
const generateSidebar = (pathMatch) => {
if (pathMatch !== "") {
const files = Object.keys(import.meta.glob('../content/**/*.md')).filter((file) => file.includes(pathMatch)).map((path) => path.replace('../content', '').replace('.md', ''));
sidebar.value = files;
}
}
const updateDeviceType = () => {
isMobile.value = window.matchMedia('(max-width: 768px)').matches;
};
onMounted(() => {
generateSidebar(route.path.split('/')[1]);
updateDeviceType();
window.addEventListener('resize', updateDeviceType);
});
onUnmounted(() => {
window.removeEventListener('resize', updateDeviceType);
});
watch(() => route.path, (newPath) => {
isOpened.value = false;
sidebar.value = [];
generateSidebar(newPath.split('/')[1]);
});
</script>
<template>
<div v-if="config.enableSidebar&&sidebar.length > 1">
<button v-if="isMobile && !isOpened" @click="openSidebar" ref="openButton">Open Sidebar</button>
<button v-if="isMobile && isOpened" @click="closeSidebar" ref="closeButton">Close Sidebar</button>
<div v-if="sidebar.length > 0 && !isMobile || isOpened" role="region" :aria-label="label">
<ul style="list-style-type: none;">
<li v-for="(item, index) in sidebar" :key="index"><RouterLink :to="item">{{item.split('/')[item.split('/').length-1].replace(/-/g, ' ')}}</RouterLink></li>
</ul>
</div>
</div>
</template>
