<template>
  <div>
    <div v-if="which === 'green'" class="badge badge-success text-white gap-1">
      <Icon name="ic:baseline-star-rate" size="6" />
      {{ rating }}
    </div>
    <div
      v-else-if="which === 'yellow'"
      class="badge badge-warning text-white gap-1"
    >
      <Icon name="ic:baseline-star-rate" size="6" />
      <span>{{ rating }}</span>
    </div>
    <div v-else class="badge badge-error text-white gap-1">
      <Icon name="ic:baseline-star-rate" size="6" />
      <span>{{ rating }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  which: String,
  rating: Number,
});
</script>
