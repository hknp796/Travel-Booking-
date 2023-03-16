import { defineStore } from "pinia";
import { useGlobal } from "./global";

const global = useGlobal();

export const usePopular = defineStore("popular", () => {
  async function fetchTourStaticData(config, info) {
    const tourStaticData = ref([]);
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

  return { fetchTourStaticData };
});
