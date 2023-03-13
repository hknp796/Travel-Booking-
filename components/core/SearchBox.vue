<template>
  <div class="w-full flex flex-col items-center justify-center gap-7">
    <div class="relative flex justify-center items-center w-full">
      <div
        class="absolute inset-y-0 flex items-center pl-3 pointer-events-none w-[50%]"
      >
        <Icon name="material-symbols:search-sharp" size="20" />
      </div>
      <input
        type="search"
        id="default-search"
        v-model="keyword"
        class="block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none w-[50%]"
        placeholder="Search"
        required
      />
    </div>
    <ButtonPrimary type="button" :is-loading="loading" @click="search"
      >Search</ButtonPrimary
    >
  </div>
</template>

<script setup>
const keyword = ref("");

const loading = ref(false);

function search() {
  loading.value = true;
}
</script>
