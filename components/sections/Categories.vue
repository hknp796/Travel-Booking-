<template>
  <div class="p-4">
    <BaseRedirectTitle title="Top Categories" to="/top-categories" />
    <div class="flex overflow-x-scroll mt-4 gap-5">
      <CardInfo v-bind="test" />
      <CardInfo v-bind="test2" />
      <CardInfo v-bind="test" />
      <CardInfo v-bind="test" />
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
