<template>
  <div class="p-4 relative">
    <BaseRedirectTitle title="Popular Experience" to="/popular-experience" />
    <div
      class="flex overflow-x-scroll mt-4 gap-5 lg:w-full"
      ref="scrollSection"
    >
      <CardInfo
        class="lg:min-w-[430px] lg:min-h-[325px]"
        v-for="popular in tourStaticData"
        v-bind="popular"
        :key="index"
      />

      <button
        type="button"
        class="text-black bg-white border hover:bg-gray-200 font-medium rounded-full text-sm p-2.5 text-center items-center absolute -right-3 top-[45%] hidden lg:block"
        @click="scrollingRight"
      >
        <Icon name="mdi-light:arrow-right" width="30" height="30" />
      </button>
      <button
        type="button"
        class="text-black bg-white border hover:bg-gray-200 font-medium rounded-full text-sm p-2.5 text-center items-center absolute -left-3 top-[45%] hidden lg:block"
        @click="scrollingLeft"
      >
        <Icon name="mdi-light:arrow-left" width="30" height="30" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
const popular = usePopular();

const config = useRuntimeConfig();

const { tourStaticData } = storeToRefs(popular);

const { fetchTourStaticData } = popular;

onMounted(() => {
  fetchTourStaticData(config, { countryId: 13063, cityId: 13236 });
});

const scrollSection = ref(null);
function scrollingRight() {
  scrollSection.value.scrollBy({
    left: 900,
    behavior: "smooth",
  });
}
function scrollingLeft() {
  scrollSection.value.scrollBy({
    left: -900,
    behavior: "smooth",
  });
}
</script>
