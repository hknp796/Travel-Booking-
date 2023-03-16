<template>
  <div
    class="min-w-[200px] h-[200px] rounded-lg p-10 border-2 border-black cursor-pointer"
  >
    <div class="flex flex-col justify-center items-center">
      <img :src="image" alt="" />

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
