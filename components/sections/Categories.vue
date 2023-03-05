<template>
  <div class="p-4">
    <BaseRedirectTitle title="Top Categories" to="/top-categories" />
    <div class="flex overflow-x-scroll mt-4 gap-5 lg:w-full">
      <CardInfo
        v-bind="test"
        class="lg:min-w-[430px] lg:min-h-[325px]"
        v-for="(item, index) in 6"
        :key="index"
      />
      <CardInfo v-bind="test2" class="lg:min-w-[430px] lg:min-h-[325px]" />
    </div>
  </div>
</template>

<script setup>
const test = {
  title: "Title",
  content:
    "jahgdsjajhsgdhgajshdgajhsgdhjagsdjhgajhsdgjhasgdjhasgdhjagsdjhagsjhdgajhsgdjhasgdjhagsdjhgasjhdgajshgdjasdgj",
  rating: 4.5,
  image: "/png/Flight.png",
  alt: "",
};

const test2 = {
  title: "Title",
  content: "jahgdsjajhsgdhgajsj",
  rating: 4.5,
  image: "/png/Flight.png",
  alt: "",
};
</script>
