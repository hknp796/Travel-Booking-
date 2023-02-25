<template>
  <div class="max-w-[500px]">
    <img src="/png/Flight.png" alt="" class="h-full w-full rounded-lg mb-3" />

    <span class="text-gray-300 text-[12px]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, voluptas.
    </span>

    <div class="flex items-center justify-between mt-3">
      <h3 class="font-bold text-[20px]">From AED 55 Per Adults</h3>
      <BaseBadge which="yellow" :rating="4.5" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
