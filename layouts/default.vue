<template>
  <!-- mobile container needs to be removed -->
  <main
    class="flex flex-col justify-between relative"
    :class="`${pageLoading ? 'custom-blur' : ''}`"
  >
    <div
      v-if="pageLoading"
      id="loader"
      class="w-full h-[100%] custom-blur bg-red-100/30 absolute z-20"
    >
  
  </div>

    <CoreNavbar />
    <slot />

    <CoreFooter class="" />
  </main>
</template>

<script setup>
import { storeToRefs } from "pinia";

const global = useGlobal();
const { pageLoading } = storeToRefs(global);
</script>
