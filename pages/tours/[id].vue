<template>
  <div>Hello youre in the new page</div>
</template>

<script setup>
const route = useRoute();

onMounted(() => {
  console.log("this is the tour id", route.params.id);
});

definePageMeta({
  layout: "empty",
});
</script>
