<template>
  <div class="p-3 min-w-[230px] flex flex-col">
    <img :src="image" :alt="alt" class="rounded-lg mb-3 w-full" />

    <p class="text-gray-300 text-[12px] break-words">
      {{ content }}
    </p>

    <div class="w-full mt-auto flex items-center justify-between">
      <h3 class="font-bold text-[15px]">{{ title }}</h3>
      <BaseBadge which="yellow" :rating="rating" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  content: String,
  rating: Number,
  image: String,
  alt: String,
});
</script>

<style lang="scss" scoped></style>
