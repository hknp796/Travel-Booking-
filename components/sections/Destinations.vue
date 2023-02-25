<template>
  <div class="p-4">
    <div class="flex justify-between">
      <h1 class="text-2xl">Top Destinations</h1>
      <button class="text-gray-400">
        view all
        <span><Icon name="pajamas:arrow-right" class="text-black" /></span>
      </button>
    </div>
    <!-- title redirect button -->

    <!-- grid -->
    <div class="grid gap-2 rounded-xl mt-4">
      <div class="col-span-2"><CardImage /></div>
      <div><CardImage /></div>
      <div><CardImage /></div>
    </div>
  </div>
</template>

<script setup></script>
