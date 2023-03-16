import { defineStore } from "pinia";

export const useStatic = defineStore("static", () => {
  const staticCountry = ref({
    countryId: 13063,
    countryName: "United Arab Emirates",
  });

  const staticCities = ref([
    {
      cityId: 13160,
      cityName: "Ajman",
      image: "/cities/Ajman.png",
    },
    {
      cityId: 13236,
      cityName: "Abu Dhabi",
      image: "/cities/Abu-dhabi.jpeg",
    },
    {
      cityId: 13668,
      cityName: "Dubai City",
      image: "/cities/Dubai.jpeg",
    },
    {
      cityId: 13765,
      cityName: "Fujairah",
      image: "/cities/Fujairah.jpeg",
    },
    {
      cityId: 14644,
      cityName: "Ras al Khaimah",
      image: "/cities/Ras-al-khaimah.jpeg",
    },
    {
      cityId: 14777,
      cityName: "Sharjah",
      image: "/cities/Sharja.jpeg",
    },
  ]);

  return { staticCountry, staticCities };
});
