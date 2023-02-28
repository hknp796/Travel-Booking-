<template>
  <div>
    <!-- Modal toggle -->
    <button
      data-modal-target="staticModal"
      data-modal-toggle="staticModal"
      class="text-black py-2.5 text-center"
      type="button"
    >
      Travellers & class
      <Icon name="ic:outline-keyboard-arrow-down" />
    </button>

    <!-- Main modal -->
    <div
      id="staticModal"
      data-modal-backdrop="static"
      tabindex="-1"
      aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full overflow-x-hidden overflow-y-auto h-screen"
    >
      <!-- Modal content -->
      <div class="bg-white min-h-screen">
        <!-- Modal header -->
        <div class="flex items-start justify-between">
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm p-3 ml-auto inline-flex items-center"
            data-modal-hide="staticModal"
          >
            <Icon name="line-md:close" width="20" height="20" />
          </button>
        </div>
        <!-- Modal body -->

        <div class="flex justify-between items-center mx-5 mb-5">
          <div>
            <h1 class="">Adults</h1>
            <p class="text-gray-400">(12+ years)</p>
          </div>
          <div class="flex items-center">
            <button>
              <Icon
                name="mdi:minus-circle-outline"
                width="40"
                height="40"
                class="text-gray-300"
              />
            </button>

            <p class="mx-2">1</p>
            <button>
              <Icon
                name="material-symbols:add-circle-outline-sharp"
                width="40"
                height="40"
                class="text-blue-500"
              />
            </button>
          </div>
        </div>
        <div class="flex justify-between items-center mx-5 mb-5">
          <div>
            <h1 class="">Children</h1>
            <p class="text-gray-400">(2-11 years)</p>
          </div>
          <div class="flex items-center">
            <button>
              <Icon
                name="mdi:minus-circle-outline"
                width="40"
                height="40"
                class="text-gray-300"
              />
            </button>
            <p class="mx-2">1</p>
            <button>
              <Icon
                name="material-symbols:add-circle-outline-sharp"
                width="40"
                height="40"
                class="text-blue-500"
              />
            </button>
          </div>
        </div>
        <div class="flex justify-between items-center mx-5">
          <div>
            <h1>Infants</h1>
            <p class="text-gray-400">(Below 2 years)</p>
          </div>
          <div class="flex items-center">
            <button>
              <Icon
                name="mdi:minus-circle-outline"
                width="40"
                height="40"
                class="text-gray-300"
              />
            </button>
            <p class="mx-2">1</p>
            <button>
              <Icon
                name="material-symbols:add-circle-outline-sharp"
                width="40"
                height="40"
                class="text-blue-500"
              />
            </button>
          </div>
        </div>
        <div class="ml-4 mt-5">
          <button
            type="button"
            class="text-black border rounded-3xl focus:outline outline-blue-500 focus:bg-[#EFF6FB] font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2"
            v-for="(item, index) in buttons"
            :key="index"
          >
            {{ item }}
          </button>
        </div>

        <!-- Modal footer -->
        <div class="p-5">
          <button
            data-modal-hide="staticModal"
            type="button"
            class="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { initModals } from "flowbite";

onMounted(() => {
  initModals();
});

let buttons = ["Economy", "Business class", "First class", "Premium economy"];
</script>

<style lang="scss" scoped></style>
