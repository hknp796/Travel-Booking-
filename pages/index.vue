<template>
  <div class="lg:per-65-container flex flex-col gap-10">
    <CoreTabs class="lg:hidden" />

    <SectionsDestinations class="mt-52" />

    <SectionsExperience />

    <!-- Add categories -->
    <!--  -->

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
