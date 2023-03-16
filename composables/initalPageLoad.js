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
      image: "",
    },
    {
      cityId: 13236,
      cityName: "Abu Dhabi",
      image: "",
    },
    {
      cityId: 13668,
      cityName: "Dubai City",
      image: "",
    },
    {
      cityId: 13765,
      cityName: "Fujairah",
      image: "",
    },
    {
      cityId: 14644,
      cityName: "Ras al Khaimah",
      image: "",
    },
    {
      cityId: 14777,
      cityName: "Sharjah",
      image: "",
    },
  ]);

  return { staticCountry, staticCities };
});
