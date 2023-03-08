<template>
  <div class="lg:w-[1350px] lg:mx-auto">
    <CoreTabs class="lg:hidden" />

    <CoreSearchCatogories class="hidden lg:flex mx-auto" />

    <SectionsDestinations />

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
