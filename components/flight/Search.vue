<template>
  <div class="py-5 flex flex-col">
    <!-- Radio -->
    <div class="flex items-center justify-between">
      <div class="flex item-center gap-2">
        <input
          v-model="form.flightType"
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
          v-model="form.flightType"
          type="radio"
          name="flight-type"
          value="round_trip"
          class="radio radio-accent radio-sm"
        />
        <label for="" class="text-xs">Round trip</label>
      </div>

      <div class="flex item-center gap-2">
        <input
          v-model="form.flightType"
          type="radio"
          name="flight-type"
          value="multicity"
          class="radio radio-accent radio-sm"
        />
        <label for="" class="text-xs">Multicity</label>
      </div>
    </div>
    <!--  -->

    <!-- From to -->
    <div class="flex items-center justify-between gap-4 pt-5">
      <!-- Input field first -->
      <input
        type="text"
        placeholder="From"
        v-model="form.from"
        class="input input-bordered w-full h-[30px]"
      />

      <!--  -->
      <button @click="switchDestination">
        <Icon name="ph:arrows-left-right-fill" size="25" />
      </button>

      <!-- Input field second -->
      <input
        type="text"
        placeholder="To"
        v-model="form.to"
        class="input input-bordered w-full h-[30px]"
      />

      <!--  -->
    </div>
    <!--  -->
    <div class="divider"></div>

    <!-- Departure -->
    <div class="flex items-center justify-between">
      <div class="flex flex-col items-start">
        <label class="text-gray-400">Departure</label>
        <h3 ref="depDate" class="cursor-pointer" @click="showDatePicker">
          {{ testDate }}
        </h3>
      </div>

      <div class="flex flex-col items-end">
        <label class="text-gray-400"> Return </label>
        <h3 ref="depTo" class="cursor-pointer">{{ testDate }}</h3>
      </div>
    </div>
    <div class="divider"></div>
    <div>
      <CoreModal />

      <!-- Dropdown menu -->
      <div
        id="dropdownDelay"
        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          class="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDelayButton"
        >
          <li>
            <a
              href="#"
              class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >Sign out</a
            >
          </li>
        </ul>
      </div>
    </div>
    <p><span>1 Adult,</span>Economy</p>

    <button class="btn btn-accent mt-10 text-white">Search flights</button>
    <!--  -->
  </div>
</template>

<script setup>
import { initDropdowns } from "flowbite";

const testDate = ref("Sat, 28 Jun");

const form = ref({
  flightType: "oneway",
});

function switchDestination() {
  const temp = form.value.from;
  form.value.from = form.value.to;
  form.value.to = temp;
}
</script>
