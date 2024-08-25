<script setup>
import {inject} from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import RouteAnnouncer from './components/routeAnnouncer.vue';
import Menu from './components/menu.vue';
import Sidebar from './components/sidebar.vue';
const config = inject('appConfig');
config.enableSidebar = true;
</script>
<template>
<Metadata />
<a v-if="config.enableSkipLink" href="#content">Skip to main Content</a>
<header v-if="config.enableHeader">
<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
<RouterLink v-if="config.title" to="/">{{config.title}}</RouterLink>
<Menu />
</header>
<Sidebar />
<main id="content">
<RouterView />
</main>
<footer v-if="config.enableFooter">
<p>Except as otherwise noted, the content of this page is licensed under the <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 License(Opens in a new tab)</a>and code samples are licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0 License(opens in a new tab)</a>.</p>
<nav aria-label="Footer Links">
<ul style="list-style-type:none;">
<li><a href="/docs">Documentation</a></li>
<li><a href="/docs/introduction">Quickstart</a></li>
<li><a href="https://www.techassistantforblind.com/blog">Blog</a></li>
<li><a href="https://www.techassistantforblind.com/events">Events</a></li>
<li><a href="https://www.techassistantforblind.com/developers">Developers</a></li>
<ul aria-label="Utility Links" style="list-style-type:none;">
<li><a href="https://www.techassistantforblind.com/privacy-policy">Privacy Policy</a>|</li>
<li><a href="https://www.techassistantforblind.com/terms">Terms and Conditions</a></li>
</ul>
</ul>
</nav>
<p>&copy; copyright Tech Assistant for Blind {{new Date().getFullYear()}}</p>
</footer>
<RouteAnnouncer />
</template>
<style scoped>
header {
line-height: 1.5;
max-height: 100vh;
}

.logo {
display: block;
margin: 0 auto 2rem;
}

nav {
width: 100%;
font-size: 12px;
text-align: center;
margin-top: 2rem;
}

nav a.router-link-exact-active {
color: var(--color-text);
}

nav a.router-link-exact-active:hover {
background-color: transparent;
}

nav a {
display: inline-block;
padding: 0 1rem;
border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
border: 0;
}

@media (min-width: 1024px) {
header {
display: flex;
place-items: center;
padding-right: calc(var(--section-gap) / 2);
}

.logo {
margin: 0 2rem 0 0;
}

header .wrapper {
display: flex;
place-items: flex-start;
flex-wrap: wrap;
}

nav {
text-align: left;
margin-left: -1rem;
font-size: 1rem;

padding: 1rem 0;
margin-top: 1rem;
}
}
</style>
