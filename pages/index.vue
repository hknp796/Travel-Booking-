<template>
  <div class=" ">
    <CoreTabs class="lg:hidden" />

    <SectionsDestinations class="mt-40" />

    <ButtonNextButton />

    <SectionsExperience />

    <SectionsCategories />

    <StaticWhy />
  </div>
</template>

<script setup>
// const config = useRuntimeConfig();

// const {
//   data: response,
//   error,
//   refresh,
//   pending,
// } = await useLazyFetch("http://sandbox.raynatours.com/api/Tour/countries", {
//   headers: {
//     Authorization: `Bearer ${config.apiSecret}`,
//   },
//   method: "get",
// });

// console.log(response);
</script>
