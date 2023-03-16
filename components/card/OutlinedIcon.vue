<template>
  <div
    class="min-w-[200px] h-[200px] rounded-lg p-5 border-2 border-black cursor-pointer text-center"
  >
    <div class="h-full w-full flex flex-col justify-center items-center">
      <img :src="image" :alt="alt" class="w-[50%] h-[50%]" />

      <p class="text-[18px] font-medium text-gray-700">{{ title }}</p>
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
