import { defineStore } from "pinia";
import { useGlobal } from "./global";

const global = useGlobal();

export const usePopular = defineStore("popular", () => {
  const tourStaticData = ref([]);

  const tourStaticDataById = ref([]);

  const topCategories = ref([
    { id: 0, title: "Tours", image: "/svg/tours.svg", alt: "Tour icon" },
    { id: 1, title: "Tickets", image: "/svg/ticket.svg", alt: "Tickets icon" },
    {
      id: 2,
      title: "Ariel Sightseeing",
      image: "/svg/flights.svg",
      alt: "Ariel sightseeing icon",
    },
    { id: 3, title: "Cruises", image: "/svg/cruises.svg", alt: "cruises icon" },
    {
      id: 4,
      title: "Connectivity",
      image: "/svg/connectivity.svg",
      alt: "connectivity icon",
    },
    {
      id: 5,
      title: "Adventure",
      image: "/svg/adventure.svg",
      alt: "adventure icon",
    },
    {
      id: 6,
      title: "Water Activities",
      image: "/svg/water.svg",
      alt: "water activity icon",
    },
    {
      id: 7,
      title: "Nature & Wildlife",
      image: "/svg/nature.svg",
      alt: "nature & wildlife icon",
    },
    {
      id: 8,
      title: "Wellness",
      image: "/svg/health.svg",
      alt: "wellness icon",
    },
    {
      id: 9,
      title: "Food & Drinks",
      image: "/svg/food.svg",
      alt: "food and drinks icon",
    },
    {
      id: 10,
      title: "Transportation",
      image: "/svg/transportation.svg",
      alt: "transportation icon",
    },
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

  async function fetchTourStaticDataById(config, info) {
    global.setPageLoading(true);
    try {
      const { result } = await $fetch(
        `${config.apiBase}/api/Tour/tourStaticDataById`,
        {
          headers: {
            Authorization: `Bearer ${config.apiSecret}`,
          },
          method: "POST",
          body: info,
        }
      );

      tourStaticDataById.value = result;

      global.setPageLoading(false);
    } catch (error) {
      console.log(error);

      global.setPageLoading(false);
    }
  }

  return {
    fetchTourStaticData,
    fetchTourStaticDataById,
    tourStaticData,
    topCategories,
  };
});
