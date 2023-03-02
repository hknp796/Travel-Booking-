<template>
  <div class="flex flex-col border p-7 shadow-2xl rounded-2xl">
    <div class="flex gap-7">
      <div class="flex gap-2">
        <input
          type="radio"
          name="flight-type"
          value="oneway"
          class="radio radio-accent radio-sm"
          checked
        />
        <label for="" class="text-xs">Oneway</label>
      </div>

      <div class="flex item-center gap-2">
        <input
          type="radio"
          name="flight-type"
          value="round_trip"
          class="radio radio-accent radio-sm"
        />
        <label for="" class="text-xs">Round trip</label>
      </div>

      <div class="flex item-center gap-2">
        <input
          type="radio"
          name="flight-type"
          value="multicity"
          class="radio radio-accent radio-sm"
        />
        <label for="" class="text-xs">Multicity</label>
      </div>
    </div>
    <div
      class="flex justify-between items-start cursor-pointer border border-gray-300 rounded-xl mt-10"
    >
      <div class="border-r border-gray-300 flex-1 relative">
        <div
          class="hover:bg-[#70C3D4] rounded-l-xl p-4 transition ease-in-out duration-300 dropdown"
          @click="showInput = true"
          tabindex="0"
        >
          <p>From</p>
          <h1 class="font-bold text-3xl">Mumbai</h1>
          <p class="">CCJ,Calicut airport india</p>

          <!-- flight suggestion -->
          <div tabindex="0" class="dropdown-content card shadow bg-white">
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <Icon name="material-symbols:search-sharp" />
              </div>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                placeholder="From"
              />
            </div>
          </div>
          <!--  -->
        </div>
        <div
          class="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#70C3D4] shadow rounded-[50%] p-2"
        >
          <Icon name="ph:arrows-left-right-thin" size="20" />
        </div>
      </div>

      <div
        class="border-r border-gray-300 flex-1 py-4 hover:bg-[#70C3D4] pl-8 transition ease-in-out duration-300"
      >
        <p class="">To</p>
        <h1 class="font-bold text-3xl">Jaipur</h1>
        <p class="">JAI</p>
      </div>
      <div
        class="border-r border-gray-300 flex-1 p-4 hover:bg-[#70C3D4] transition ease-in-out duration-300"
      >
        <p class="">Deaparture</p>
        <p class=""><span class="text-3xl font-bold">24</span>March 23</p>
        <p>Friday</p>
      </div>
      <div
        class="flex-1 p-4 border-r border-gray-300 hover:bg-[#70C3D4] transition ease-in-out duration-300"
      >
        <p class="">Return</p>
        <p class=""><span class="text-3xl font-bold">24</span>March 23</p>
        <p>Friday</p>
      </div>
      <div
        class="flex-1 p-4 border-gray-300 hover:bg-[#70C3D4] rounded-r-xl transition ease-in-out duration-300"
      >
        <p>Travelleres and class</p>
        <p><span class="font-bold text-3xl">1</span>Traveller</p>
        <p>Economy,Premium</p>
      </div>
    </div>
    <button
      type="button"
      class="text-gray-900 bg-white border border-gray-300 font-medium rounded-lg text-sm px-9 py-3 w-36 mx-auto mt-4"
    >
      Search
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const form = ref({
  flightType: "oneway",
});
const showInput = ref(false);
</script>
