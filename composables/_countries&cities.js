import { defineStore } from "pinia";

export const useLoad = defineStore("load", () => {
  const countries = ref([]);
  const cities = ref([]);

  async function fetchCountries(config) {
    try {
      const { result } = await $fetch(`${config.apiBase}/api/Tour/countries`, {
        headers: {
          Authorization: `Bearer ${config.apiSecret}`,
        },
        method: "get",
      });

      countries.value = result;
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCities(config, countryId) {
    try {
      const { result } = await $fetch(`${config.apiBase}/api/Tour/cities`, {
        headers: {
          Authorization: `Bearer ${config.apiSecret}`,
        },
        method: "POST",
        body: {
          CountryId: countryId,
        },
      });

      cities.value = result;
    } catch (error) {
      console.log(error);
    }
  }

  return { fetchCountries, fetchCities, countries };
});
