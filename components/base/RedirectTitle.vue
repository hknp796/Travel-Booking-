<template>
  <div class="flex justify-between items-end mb-10">
    <h1 class="text-4xl font-bold">{{ title }}</h1>
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
