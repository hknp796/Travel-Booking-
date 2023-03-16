import { defineStore } from "pinia";

export const useStatic = defineStore("static", () => {
  const selectedCountryAndCity = ref({
    countryId: 13063,
    cityId: 13236,
  });

  return { selectedCountryAndCity };
});
