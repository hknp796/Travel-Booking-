import { defineStore } from "pinia";

export const usePopular = defineStore("popular", () => {
  const initPopularExperience = ref({
    countryId: 13063,
    cityId: 13236,
  });

  async function fetchTourStaticData(config, info) {
    /**
     * Expects: countryId and cityId
     */
    try {
      const data = await $fetch(`${config.apiBase}/api/Tour/tourstaticdata`, {
        headers: {
          Authorization: `Bearer ${config.apiSecret}`,
        },
        method: "POST",
        body: info,
      });
    } catch (error) {
      console.log(error);
    }

    console.log(data);
  }

  return { initPopularExperience };
});
