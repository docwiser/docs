<script setup>
import {ref} from 'vue';
const props = defineProps({lang: {type: String}});
const copyButton = ref(null);
const copyText = ref(null);
const copyCode = () => {
navigator.clipboard.writeText(copyText.value.textContent).then(() => copyButton.value.innerHTML = "Coppyed").catch((e) => copyButton.value.innerHTML = `Copy Failed. Error: ${e}`);
}
</script>
<template>
<div role="region" aria-label="Interactive Code Block">
<button ref="copyButton" @click="copyCode">Copy to Clipboard</button>
<p v-if="props.lang">{{props.lang}}</p>
<div ref="copyText"><slot></slot></div>
</div>
</template>