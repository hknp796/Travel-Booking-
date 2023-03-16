<template>
  <div class="lg:per-65-container flex flex-col gap-10">
    <CoreTabs class="lg:hidden" />

    <SectionsDestinations class="mt-52" />

    <SectionsGroup class="my-5" />

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
