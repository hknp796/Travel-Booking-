<template>
  <div class="relative">
    <img :src="image" :alt="alt" class="rounded-lg" />
    <div
      class="absolute inset-0 bg-gradient-to-r to-transparent from-gray-900 rounded-lg"
    ></div>

    <div class="absolute inset-0 text-white flex flex-col justify-end p-4">
      <h1 class="text-xl font-bold">{{ title }}</h1>
      <p class="text-sm">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: "",
  alt: "",
  title: "",
  subtitle: "",
});
</script>
