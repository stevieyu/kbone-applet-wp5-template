<template>
<div class="text-center py-1" @click="onClick">{{ a }}</div>
</template>

<script setup>
let a = $ref(0);

const onClick = () => {
  a++;
};
</script>
