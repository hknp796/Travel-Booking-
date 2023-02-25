import { defineStore } from "pinia";

export const useExample = defineStore("example", () => {
  const text = ref("some text");

  return { text };
});
