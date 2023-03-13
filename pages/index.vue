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
/**
 * On page load, we need to show one countries information
 */

const config = useRuntimeConfig();

const { fetchCountries } = useLoad();

fetchCountries(config);
</script>
