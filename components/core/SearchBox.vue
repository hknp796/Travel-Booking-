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
    <select
      id="countries"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
      <option>Choose a country</option>
      <option
        v-for="country in countries"
        :key="country.countryId"
        :value="country.countryId"
      >
        {{ country.countryName }}
      </option>
    </select>
    <ButtonPrimary type="button" :is-loading="loading" @click="search"
      >Search</ButtonPrimary
    >
  </div>
</template>

<script setup>
const keyword = ref("");

const loading = ref(false);

const { countries } = useLoad();

function search() {
  loading.value = true;
}
</script>
