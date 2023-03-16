import { defineStore } from "pinia";
import { useGlobal } from "./global";

const global = useGlobal();

export const usePopular = defineStore("popular", () => {
  const tourStaticData = ref([]);

  const topCategories = ref([
    { id: 0, title: "Tours", image: "", alt: "Tour icon" },
    { id: 1, title: "Tickets", image: "", alt: "Tickets icon" },
    {
      id: 2,
      title: "Ariel Sightseeing",
      image: "",
      alt: "Ariel sightseeing icon",
    },
    { id: 3, title: "Cruises", image: "", alt: "cruises icon" },
    { id: 4, title: "Connectivity", image: "", alt: "connectivity icon" },
    { id: 5, title: "Adventure", image: "", alt: "adventure icon" },
    { id: 6, title: "Water Activities", image: "", alt: "water activity icon" },
    {
      id: 7,
      title: "Nature & Wildlife",
      image: "",
      alt: "nature & wildlife icon",
    },
    { id: 8, title: "Wellness", image: "", alt: "wellness icon" },
    { id: 9, title: "Food & Drinks", image: "", alt: "food and drinks icon" },
    { id: 10, title: "Transportation", image: "", alt: "transportation icon" },
  ]);

  async function fetchTourStaticData(config, info) {
    /**
     * Expects: countryId and cityId
     */

    global.setPageLoading(true);

    try {
      const { result } = await $fetch(
        `${config.apiBase}/api/Tour/tourstaticdata`,
        {
          headers: {
            Authorization: `Bearer ${config.apiSecret}`,
          },
          method: "POST",
          body: info,
        }
      );

      tourStaticData.value = result;

      global.setPageLoading(false);
    } catch (error) {
      console.log(error);
      global.setPageLoading(false);
    }
  }

  return { fetchTourStaticData, tourStaticData, topCategories };
});
