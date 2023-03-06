<template>
  <div class="lg:w-[1350px] lg:mx-auto">
    <CoreTabs class="lg:hidden" />
    <!-- Booking section -->
    <!--  -->
    <div class="-mt-[250px] z-20 absolute">
      <CoreSearchCatogories class="hidden lg:block mx-auto relative" />
      <FlightWebSearch class="hidden lg:block lg:w-[1350px]" />
    </div>
    <!-- Best deals on flights -->
    <!--  -->

    <!-- Top destination -->
    <SectionsDestinations class="lg:mt-60" />
    <!--  -->
    <ButtonNextButton class="" />

    <!-- Popular experience -->
    <SectionsExperience class="lg:mt-28" />
    <!--  -->

    <!-- Top Categories -->
    <SectionsCategories class="lg:mt-40" />
    <!--  -->

    <!-- Why klahsra -->
    <StaticWhy />
    <!--  -->
  </div>
</template>

<script setup></script>
