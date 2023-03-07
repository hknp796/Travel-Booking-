<template>
  <div class="lg:w-[1350px] lg:mx-auto">
    <CoreTabs class="lg:hidden" />
    <!-- Booking section -->
    <!--  -->
    <div class="-mt-[250px] z-20 absolute">
      <CoreSearchCatogories class="hidden lg:flex mx-auto relative" />
      <FlightWebSearch class="hidden lg:flex lg:w-[1350px]" />
    </div>
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

<script setup></script>
