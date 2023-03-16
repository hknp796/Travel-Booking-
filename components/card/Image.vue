<template>
  <div class="relative cursor-pointer w-full h-full">
    <img
      :src="image"
      :alt="cityName"
      class="rounded-2xl w-full h-full bg-cover shadow-2xl"
    />

    <div class="absolute inset-0 text-white flex flex-col justify-end p-4 z-10">
      <h1 class="text-xl font-bold">{{ cityName }}</h1>
      <p class="text-sm">{{ subtitle }}</p>
    </div>

    <div
      class="absolute inset-0 bg-gradient-to-r from-[#000000ab] rounded-2xl shadow-2xl"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: "",
  cityName: "",
  subtitle: "",
});
</script>
