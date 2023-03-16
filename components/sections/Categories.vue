<template>
  <div class="p-4 relative">
    <BaseRedirectTitle title="Top Categories" to="/top-categories" />
    <div
      class="flex overflow-x-scroll mt-4 gap-5 lg:w-full"
      ref="scrollSection"
    >
      <button
        type="button"
        class="text-black bg-white border hover:bg-gray-200 font-medium rounded-full text-sm p-2.5 text-center items-center absolute -right-3 top-[200px] hidden lg:block"
        @click="scrolling"
      >
        <Icon name="mdi-light:arrow-right" width="30" height="30" />
      </button>
    </div>
  </div>
</template>

<script setup>
const scrollSection = ref(null);
function scrolling() {
  scrollSection.value.scrollBy({
    left: 900,
    behavior: "smooth",
  });
}
</script>
