<template>
  <div>Hello youre in the new page</div>
</template>

<script setup>
const route = useRoute();

const config = useAppConfig();

const popular = usePopular();

const { fetchTourStaticDataById } = popular;

onMounted(() => {
  fetchTourStaticDataById(config, {
    
  });
});

definePageMeta({
  layout: "empty",
});
</script>
