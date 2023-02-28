<template>
  <div>
    <Popover>
      <PopoverButton class="text-black outline-none">
        <span>Travellers & Class</span>
        <Icon name="ic:outline-keyboard-arrow-down" />
      </PopoverButton>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel
          class="absolute left-1/2 z-10 mt-3 w-full -translate-x-1/2 transform px-4"
        >
          <div
            class="rounded-2xl ring-opacity-5 bg-white p-4 shadow-2xl h-screen"
          >
            <div class="flex justify-between items-center mx-5 mb-5">
              <div>
                <h1 class="font-bold">Adults</h1>
                <p class="font-bold text-gray-400">(12+ years)</p>
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
                <h1 class="font-bold">Children</h1>
                <p class="font-bold text-gray-400">(2-11 years)</p>
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
                <h1 class="font-bold">Infants</h1>
                <p class="font-bold text-gray-400">(Below 2 years)</p>
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
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

let buttons = ["Economy", "Business class", "First class", "Premium economy"];
</script>
