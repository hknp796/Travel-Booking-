<template>
  <!-- mobile container needs to be removed -->
  <main class="relative">
    <div
      v-if="pageLoading"
      id="loader"
      class="w-full h-screen bg-red-100/30 absolute z-20 flex items-center justify-center"
    >
      <!-- <img
        src="/svg/BalloonLoader.svg"
        al="3 ballons"
        class="w-[150px] h-[150px]"
      /> -->
      <CoreBalloon />
    </div>
    <div
      class="flex flex-col justify-between relative"
      :class="`${pageLoading ? 'custom-blur' : ''}`"
    >
      <CoreNavbar />
      <slot />

      <CoreFooter class="" />
    </div>
  </main>
</template>

<script setup>
import { storeToRefs } from "pinia";

const global = useGlobal();
const { pageLoading } = storeToRefs(global);
</script>
