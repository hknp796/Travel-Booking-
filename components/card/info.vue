<template>
  <div class="min-w-[230px] flex flex-col" @click="redirect">
    <img
      :src="imageUrl"
      :alt="imageCaptionName"
      class="rounded-lg mb-3 w-full h-[90%] object-cover cursor-pointer"
    />
    <div class="flex items-center gap-3">
      <span class="font-medium text-[24px]">{{ cityName }}</span> --
      <span class="font-medium text-[24px]">{{ countryName }}</span>
    </div>

    <div class="w-full mt-auto flex items-center justify-between">
      <h3 class="font-bold text-[18px]">{{ tourName }}</h3>
      <div class="flex items-center gap-2">
        <span class="text-[14px]">({{ reviewCount }})</span>
        <BaseBadge which="yellow" :rating="rating" />
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();

const props = defineProps({
  imagePath: String, // image path
  imageCaptionName: String, // image alt

  cityTourType: String,
  // tourShortDescription: String,
  tourName: String,
  tourId: Number,

  cityName: String,
  countryName: String,

  reviewCount: Number,

  content: String,
  rating: Number,
});

const imageUrl = computed(() => {
  return `https://d2g4iwshf24scx.cloudfront.net${props.imagePath}`;
});

function redirect() {
  router.push(`/tours/${props.tourId}`);
}
</script>

<style lang="scss" scoped></style>
