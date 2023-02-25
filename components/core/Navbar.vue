<template>
  <div class="bg-[url('/png/Flight.png')] bg-no-repeat bg-contain h-96">
    <div class="flex justify-end">
      <CoreDropdown
        v-for="(item, index) in itemsForNav"
        :key="index"
        :items="item.name"
      />
    </div>

    <img src="/svg/logo.svg" alt="Klashra icon" />
  </div>
</template>

<script setup>
import { ref } from "vue";
const itemsForNav = ref([
  { name: "LOG IN ", items: "" },
  { name: "MENU", items: "" },
  { name: "AED", items: "" },
]);
</script>

<style lang="scss" scoped></style>
