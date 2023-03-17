import { defineStore } from "pinia";

import { useGlobal } from "./global";

const global = useGlobal();

export const useLoad = defineStore("load", () => {
  const countries = ref([
    { countryId: 13063, countryName: "United Arab Emirates" },
  ]);
  const cities = ref([]);

  async function fetchCountries(config) {
    global.setPageLoading(true);
    try {
      const { result } = await $fetch("/api/Tour/countries", {
        headers: {
          Authorization: `Bearer ${config.apiSecret}`,
        },
        method: "get",
      });

      countries.value = result;
      global.setPageLoading(false);
    } catch (error) {
      console.log(error);
      global.setPageLoading(false);
    }
  }

  async function fetchCities(config, countryId) {
    global.setPageLoading(true);
    try {
      const { result } = await $fetch("/api/Tour/cities", {
        headers: {
          Authorization: `Bearer ${config.apiSecret}`,
        },
        method: "POST",
        body: {
          CountryId: countryId,
        },
      });

      cities.value = result;
      global.setPageLoading(false);
    } catch (error) {
      global.setPageLoading(false);
      console.log(error);
    }
  }

  return { fetchCountries, fetchCities, countries, cities };
});
