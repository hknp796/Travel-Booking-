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
        <label>Departure</label>
        <h3 ref="depDate" class="cursor-pointer" @click="showDatePicker">
          {{ testDate }}
        </h3>
      </div>

      <div class="flex flex-col items-end">
        <label>To</label>
        <h3 ref="depTo" class="cursor-pointer">{{ testDate }}</h3>
      </div>
    </div>

    <!--  -->
  </div>
</template>

<script setup>
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
