<template>
  <div
    class="relative bg-[url('/png/flight.jpg')] bg-no-repeat bg-cover h-[500px]"
  >
    <div class="flex justify-end">
      <CoreDropdown
        v-for="(item, index) in itemsForNav"
        :key="index"
        :items="item.name"
      />
    </div>

    <img
      src="/svg/logo.svg"
      alt="Klashra icon"
      class="absolute top-40 left-0 right-0 m-auto"
    />
    <CoreSearchCatogories
      class="hidden lg:flex absolute -bottom-[30%] z-10 left-1/2 transform -translate-x-1/2"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
const itemsForNav = ref([
  { name: "MENU", items: "" },
  { name: "AED", items: "" },
]);
</script>

<style lang="scss" scoped></style>
