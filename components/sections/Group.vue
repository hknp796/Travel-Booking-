<template>
  <div class="p-4">
    <div class="mb-7 text-lg">
      <h2>Categories</h2>
    </div>
    <div class="flex gap-4 overflow-scroll lg:w-full">
      <CardCategories
        v-bind="dummy"
        v-for="(item, index) in 10"
        :key="index"
        class="w-64"
      />
    </div>
  </div>
</template>

<script setup>
const dummy = {
  image: "/svg/ticket.svg",
  alt: "",
  title: "Tickets",
};
</script>
