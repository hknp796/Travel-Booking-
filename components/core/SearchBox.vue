<template>
  <div class="w-full flex flex-col items-center justify-center gap-7 mt-4">
    <div class="flex gap-4">
      <div class="relative flex-1">
        <div
          class="absolute inset-y-0 flex items-center pl-3 pointer-events-none"
        >
          <Icon name="material-symbols:search-sharp" size="20" />
        </div>
        <input
          type="search"
          id="default-search"
          v-model="selectedCityAndCountry.cityName"
          class="p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none flex-1 w-96"
          placeholder="Search"
          required
        />
      </div>

      <select
        id="countries"
        v-model="selected"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5"
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
    </div>
    <ButtonPrimary type="button" :is-loading="loading" @click="search"
      >Search</ButtonPrimary
    >
    <div class="flex gap-2">
      <div
        class="p-2 rounded-xl border-2 border-cta text-cta cursor-pointer"
        v-for="(city, index) in cities"
        :key="index"
        @click="selectedCity(city)"
      >
        {{ city.cityName }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
const config = useRuntimeConfig();

const selected = ref("");

const loading = ref(false);

// State
const load = useLoad();

const { fetchCities } = load;

const { countries, cities } = storeToRefs(load);

const selectedCityAndCountry = ref({
  countryId: null,
  cityId: null,
  cityName: "",
});

watch(
  () => selected.value,
  (value) => {
    selectedCityAndCountry.value = {
      countryId: null,
      cityId: null,
      cityName: "",
    };

    selectedCityAndCountry.value.countryId = value;
    fetchCities(config, value);
  }
);

async function search() {
  loading.value = true;

  loading.value = false;
}

function selectedCity(place) {
  selectedCityAndCountry.value.cityId = place.cityId;
  selectedCityAndCountry.value.cityName = place.cityName;
}
</script>
