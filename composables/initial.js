import { defineStore } from "pinia";

export const useLoad = defineStore("load", () => {
  const countries = ref([]);
  const cities = ref([]);

  async function fetchCountries(config) {
    try {
      const { data } = await useLazyFetch(
        `${config.apiBase}/api/Tour/countries`,
        {
          headers: {
            Authorization: `Bearer ${config.apiSecret}`,
          },
          method: "get",
        }
      );

      countries.value = data.value.result;
    } catch (error) {
      console.log(error);
    }
  }

  return { fetchCountries, countries };
});
