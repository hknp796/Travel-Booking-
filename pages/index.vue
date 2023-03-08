<template>
  <div class="lg:w-[1350px] lg:mx-auto">
    <CoreTabs class="lg:hidden" />
    <!-- Booking section -->
    <!--  -->

    <CoreSearchCatogories class="hidden lg:flex mx-auto" />

    <!-- Best deals on flights -->
    <!--  -->

    <!-- Top destination -->
    <SectionsDestinations class="lg:mt-52" />
    <!--  -->
    <ButtonNextButton />

    <!-- Popular experience -->
    <SectionsExperience />
    <!--  -->

    <!-- Top Categories -->
    <SectionsCategories />
    <!--  -->

    <!-- Why klahsra -->
    <StaticWhy />
    <!--  -->
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
