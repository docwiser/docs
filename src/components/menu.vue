<template>
<nav aria-label="Top bar">
<button v-if="isMobile && !isOpened" @click="toggleMenu" ref="openButton">Open Mobile Menu</button>
<button v-if="isMobile && isOpened" @click="closeMenu" ref="closeButton">Close Menu</button>
<div v-if="!isMobile||isOpened" :class="{ 'menu-container': true, 'collapsed': isMobile && !isOpened }">
<ul style="list-style-type:none;">
<li><RouterLink to="/docs">Docs</RouterLink></li>
<li><RouterLink to="/api">API Overview</RouterLink></li>
<li><RouterLink to="/examples">Examples</RouterLink></li>
<li><RouterLink to="/reffrances">Reffrances</RouterLink></li>
<details>
<summary role="button" aria-haspopup="true">External Links</summary>
<li><a href="https://accounts.techassistantforblind.com/developers">API Keys</a></li>
<li><a href="https://accounts.techassistantforblind.com/billing">Billing</a></li>
<li><a href="https://www.techassistantforblind.com">Tech Assistant for Blind Website</a></li>
<li><a href="https://www.techassistantforblind.com/blog">Blog</a></li>
<li><a href="https://www.techassistantforblind.com/events">Events</a></li>
<li><a href="https://www.techassistantforblind.com/tools">Tools</a></li>
<li><a href="https://www.techassistantforblind.com/ai">Tech Assistant AI</a></li>
</details>
</ul>
</div>
</nav>
<Darkmode />
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import {RouterLink} from 'vue-router';
import Darkmode from './darkmode.vue';
import {useRouter} from 'vue-router';
const router = useRouter();
const openButton = ref(null);
const closeButton = ref(null);
const isMobile = ref(false);
const isOpened = ref(false);
const updateDeviceType = () => {
isMobile.value = window.matchMedia('(max-width: 768px)').matches;
};
const toggleMenu = () => {
isOpened.value = true;
setTimeout(() => {
isMobile && closeButton.value.focus();
}, 50);
};
const closeMenu = () => {
isOpened.value = false;
setTimeout(() => {
isMobile && openButton.value.focus();
}, 50);
};
onMounted(() => {
updateDeviceType(); // Set initial state
window.addEventListener('resize', updateDeviceType);
});
onUnmounted(() => {
window.removeEventListener('resize', updateDeviceType);
});
router.beforeEach((newValue, oldValue) => {
isOpened.value = false;
});
</script>
<style scoped>
.menu-container {
/* Common styles for the menu container */
transition: max-height 0.3s ease;
}

.menu-container.collapsed {
/* Styles for the collapsed state */
max-height: 0;
overflow: hidden;
}

#mobile {
/* Styles for mobile menu */
}

#desktop {
/* Styles for desktop menu */
}
</style>
