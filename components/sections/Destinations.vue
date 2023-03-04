<template>
  <div class="p-4">
    <BaseRedirectTitle title="Top Destination" to="/top-destination" />

    <!-- <div class="grid grid-cols-2 gap-2 rounded-xl mt-4">
      <div class="col-span-2"><CardImage v-bind="dummy" /></div>
      <div><CardImage v-bind="dummy" /></div>
      <div><CardImage v-bind="dummy" /></div>
    </div> -->

    <div
      class="grid grid-cols-2 gap-2 rounded-xl mt-4 md:grid-cols-2 md:grid-rows-3 md:gap-4"
    >
      <div class="col-span-2 md:col-span-1 bg-gray-200 md:row-span-1">
        <CardImage v-bind="dummy" />
      </div>
      <div class="md:col-span-1 bg-gray-200 md:row-span-2 flex flex-col">
        <div class="flex-1">
          <CardImage v-bind="dummy" class="h-full" />
        </div>
      </div>
      <div class="bg-gray-300 md:col-span-1 md:row-span-1">
        <CardImage v-bind="dummy" />
      </div>
      <div class="bg-gray-400 md:col-span-1 md:row-span-1">
        <CardImage v-bind="dummy" />
      </div>
      <div class="bg-gray-500 md:col-span-1 md:row-span-1">
        <CardImage v-bind="dummy" />
      </div>
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
