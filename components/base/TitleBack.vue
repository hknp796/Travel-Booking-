<template>
  <div class="flex items-center gap-5 py-8 px-5 border-b border-[#DBDBDB]">
    <Icon
      name="material-symbols:arrow-back-ios-sharp"
      size="20"
      @click="goback"
      class="cursor-pointer"
    />
    <h3 class="text-lg">{{ title }}</h3>
  </div>
</template>

<script setup>
const router = useRouter();

const props = defineProps({
  title: String,
});

function goback() {
  router.back();
}
</script>
