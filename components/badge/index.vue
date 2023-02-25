<template>
  <div>
    <div
      v-if="which === 'green'"
      class="badge badge-success gap-2 py-3 px-2 text-white"
    >
      <Icon name="ic:baseline-star-rate" size="20" />
      {{ rating }}
    </div>
    <div
      v-else-if="which === 'yellow'"
      class="badge badge-warning gap-2 py-3 px-2 text-white"
    >
      <Icon name="ic:baseline-star-rate" size="20" />
      {{ rating }}
    </div>
    <div v-else class="badge badge-error gap-2 py-3 px-2 text-white">
      <Icon name="ic:baseline-star-rate" size="20" />
      {{ rating }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  which: String,
  rating: Number,
});
</script>
