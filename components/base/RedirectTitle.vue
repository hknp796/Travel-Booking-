<template>
  <div class="flex justify-between">
    <h1 class="text-lg">{{ title }}</h1>
    <NuxtLink :to="to" class="text-gray-400 text-sm font-light">
      view all
      <span><Icon name="pajamas:arrow-right" class="text-black" /></span>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  to: String,
});
</script>
