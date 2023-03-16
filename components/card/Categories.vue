<template>
  <div class="border-2 border-gray-500 rounded-lg cursor-pointer">
    <div class="flex flex-col justify-center items-center">
      <img :src="image" alt="" class="w-32 h-32" />

      <p class="text-sm font-medium text-gray-700">{{ title }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  image: String,
  alt: String,
});
</script>
