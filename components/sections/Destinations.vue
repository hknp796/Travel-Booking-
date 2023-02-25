<template>
  <div class="p-4">
    <BaseRedirectTitle title="Top Destination" to="/top-destination" />

    <div class="grid gap-2 rounded-xl mt-4">
      <div class="col-span-2"><CardImage v-bind="dummy" /></div>
      <div><CardImage v-bind="dummy" /></div>
      <div><CardImage v-bind="dummy" /></div>
    </div>
  </div>
</template>

<script setup>
const dummy = {
  image: "https://www.arabianbusiness.com/cloud/2021/11/09/Dubai-Metro.jpg",
  alt: "Rando Image of a dubai",
  title: "Dubai",
  subtitle: "United Arab Emirates",
};
</script>
