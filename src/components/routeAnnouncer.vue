<script setup>
import { ref, onMounted, watch, inject} from 'vue';
import { useRoute, useRouter} from 'vue-router';
const route = useRoute();
const router = useRouter();
const config = inject('appConfig');
const getMessageFromPath = (path) => {
const segments = path.split('/');
const lastSegment = segments[segments.length - 1];
return `${lastSegment ? lastSegment.replace(/-/g, ' ').replace(/.html/g, '')+' | ' : ''}${config.title || "Tech Assistant for Blind"}`;
};
const message = ref(getMessageFromPath(route.path));
onMounted(() => {
// document.title = message.value;
});
watch(() => route.path, (newValue) => {
message.value = getMessageFromPath(newValue);
// document.title = message.value;
});
</script>
<template>
<p role="alert" aria-live="assertive" aria-atomic="true">{{ message }}</p>
</template>
