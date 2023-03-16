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
      image: "/cities/Ajman.png",
      subTitle: "Ajman is good",
    },
    {
      cityId: 13236,
      cityName: "Abu Dhabi",
      image: "/cities/Abu-dhabi.jpeg",
      subTitle: "Ajman is good",
    },
    {
      cityId: 13668,
      cityName: "Dubai City",
      image: "/cities/Dubai.jpeg",
      subTitle: "Ajman is good",
    },
    {
      cityId: 13765,
      cityName: "Fujairah",
      image: "/cities/Fujairah.jpeg",
      subTitle: "Ajman is good",
    },
    {
      cityId: 14644,
      cityName: "Ras al Khaimah",
      image: "/cities/Ras-al-khaimah.jpeg",
      subTitle: "Ajman is good",
    },
    {
      cityId: 14777,
      cityName: "Sharjah",
      image: "/cities/Sharja.jpeg",
      subTitle: "Ajman is good",
    },
  ]);

  return { staticCountry, staticCities };
});
