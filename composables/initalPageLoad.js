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
      subtitle: "Ajman is good",
    },
    {
      cityId: 13236,
      cityName: "Abu Dhabi",
      image: "/cities/Abu-dhabi.jpeg",
      subtitle: "Abu Dhabi is good",
    },
    {
      cityId: 13668,
      cityName: "Dubai City",
      image: "/cities/Dubai.jpeg",
      subtitle: "Dubai is good",
    },
    {
      cityId: 13765,
      cityName: "Fujairah",
      image: "/cities/Fujairah.jpeg",
      subtitle: "Fujairah is good",
    },
    {
      cityId: 14644,
      cityName: "Ras al Khaimah",
      image: "/cities/Ras-al-khaimah.jpeg",
      subtitle: "Ras al khaima is good",
    },
    {
      cityId: 14777,
      cityName: "Sharjah",
      image: "/cities/Sharja.jpeg",
      subtitle: "Sharja is good",
    },
  ]);

  return { staticCountry, staticCities };
});
