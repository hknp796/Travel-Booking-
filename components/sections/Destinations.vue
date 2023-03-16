<template>
  <div class="p-4">
    <BaseRedirectTitle title="Top Destination" to="/top-destination" />

    <div
      class="grid grid-cols-2 gap-2 rounded-xl mt-4 md:grid-cols-2 md:grid-rows-3 md:gap-4"
    >
      <div class="col-span-2 md:col-span-1 md:row-span-1">
        <CardImage v-bind="staticCities[0]" />
      </div>
      <div class="md:col-span-1 md:row-span-2 flex flex-col">
        <CardImage v-bind="staticCities[1]" />
      </div>
      <div class="md:col-span-1 md:row-span-1">
        <CardImage v-bind="staticCities[2]" />
      </div>
      <div class="md:col-span-1 md:row-span-1">
        <CardImage v-bind="staticCities[3]" />
      </div>
      <div class="md:col-span-1 md:row-span-1">
        <CardImage v-bind="staticCities[4]" />
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * Import static details
 */
const staticData = useStatic();

const { staticCities } = staticData;
</script>
