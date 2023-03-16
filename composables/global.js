import { defineStore } from "pinia";

export const useGlobal = defineStore("global", () => {
  /**
   * Page loading
   */
  const pageLoading = ref(false);

  function setPageLoading(isLoading) {
    pageLoading.value = isLoading;
  }
  //

  return { pageLoading, setPageLoading };
});
