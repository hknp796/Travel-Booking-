import { defineStore } from "pinia";

export const useStatic = defineStore("staticData", () => {
  const staticCountry = ref({
    countryId: 13063,
    countryName: "United Arab Emirates",
  });

  const staticCities = ref([
    {
      cityId: 13160,
      cityName: "Ajman",
    },
    {
      cityId: 13236,
      cityName: "Abu Dhabi",
    },
    {
      cityId: 13668,
      cityName: "Dubai City",
    },
    {
      cityId: 13765,
      cityName: "Fujairah",
    },
    {
      cityId: 14644,
      cityName: "Ras al Khaimah",
    },
    {
      cityId: 14777,
      cityName: "Sharjah",
    },
  ]);

  return { staticCountry, staticCities };
});
