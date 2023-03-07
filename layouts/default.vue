<template>
  <!-- mobile container needs to be removed -->
  <main class="flex flex-col justify-between">
    <CoreNavbar />
    <slot />

    <CoreFooter class="lg:w-[1350px] lg:mx-auto" />
    <button @click="call">click</button>
  </main>
</template>

<script setup>
const config = useRuntimeConfig();

const {
  data: response,
  error,
  refresh,
  pending,
} = await useFetch("/api/Tour/countries", {
  headers: {
    Authorization: `Bearer ${config.apiSecret}`,
  },
  method: "get",
});

console.log(response);
</script>
