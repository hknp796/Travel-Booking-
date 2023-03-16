<template>
  <div class="p-4 relative">
    <BaseRedirectTitle title="Top Categories" to="/top-categories" />
    <div
      class="flex overflow-x-scroll mt-4 gap-5 lg:w-full"
      ref="scrollSection"
    >
      <CardOutlinedIcon v-for="index in 16" :key="index" v-bind="dummy" />

      <button
        type="button"
        class="text-black bg-white border hover:bg-gray-200 font-medium rounded-full text-sm p-2.5 text-center items-center absolute -right-3 top-[55%] hidden lg:block"
        @click="scrollingRight"
      >
        <Icon name="mdi-light:arrow-right" width="30" height="30" />
      </button>
      <button
        type="button"
        class="text-black bg-white border hover:bg-gray-200 font-medium rounded-full text-sm p-2.5 text-center items-center absolute -left-3 top-[55%] hidden lg:block"
        @click="scrollingLeft"
      >
        <Icon name="mdi-light:arrow-left" width="30" height="30" />
      </button>
    </div>
  </div>
</template>

<script setup>
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

const dummy = {
  image: "/svg/ticket.svg",
  alt: "",
  title: "Tickets",
};
</script>
