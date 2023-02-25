<template>
  <button
    id="dropdownDividerButton"
    data-dropdown-toggle="dropdownDivider"
    class="text-white bg-transparent text-sm px-4 py-2.5 inline-flex items-center"
    type="button"
  >
    {{ props.items }}
    <svg
      class="w-4 h-4 ml-2"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  </button>

  <!-- Dropdown menu -->
  <div
    id="dropdownDivider"
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
  >
    <ul
      class="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownDividerButton"
    >
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Dashboard</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Settings</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Earnings</a
        >
      </li>
    </ul>
    <div class="py-2">
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >Separated link</a
      >
    </div>
  </div>
</template>

<script setup>
import { initDropdowns } from "flowbite";
onMounted(() => {
  initDropdowns();
});

const props = defineProps({ items: String });
</script>

<style lang="scss" scoped></style>
