<template>
  <div class="w-full flex flex-col gap-6">
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
      class="flex justify-between items-center cursor-pointer border border-gray-300 rounded-xl"
    >
      <!-- From -->
      <div class="border-r border-gray-300 relative">
        <div
          class="hover:bg-[#70C3D4] flex-1 rounded-l-xl p-4 transition ease-in-out duration-300 dropdown"
          @click="showInput = true"
          tabindex="0"
        >
          <p>From</p>
          <h1 class="font-bold text-3xl">{{ from.city_name }}</h1>
          <p class="truncate w-64">{{ from.code }},{{ from.airport_name }}</p>

          <!-- flight suggestion -->
          <div
            tabindex="0"
            class="dropdown-content card shadow bg-white w-72 rounded-md"
          >
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
            <div class="h-80 overflow-scroll">
              <ul>
                <li
                  class="p-4 flex justify-between hover:bg-slate-100"
                  v-for="(airport, index) in airports"
                  :key="index"
                  @click="fromAirport(airport)"
                >
                  <div>
                    <p>{{ airport.city_name }}</p>
                    <p class="text-gray-300">
                      {{ airport.airport_name }}
                    </p>
                  </div>
                  <p>{{ airport.IATA_code }}</p>
                </li>
              </ul>
            </div>
          </div>
          <!--  -->
        </div>
        <div
          class="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#70C3D4] shadow rounded-[50%] z-20 px-2 py-[6px]"
        >
          <button @click="switchDestination">
            <Icon name="ph:arrows-left-right-thin" size="20" />
          </button>
        </div>
      </div>

      <!-- To  -->
      <div
        class="border-r border-gray-300 flex-1 py-4 hover:bg-[#70C3D4] pl-8 transition ease-in-out duration-300 dropdown"
        tabindex="0"
      >
        <p class="">To</p>
        <h1 class="font-bold text-3xl">{{ to.city_name }}</h1>
        <p class="truncate w-64">{{ to.code }},{{ to.airport_name }}</p>

        <div
          tabindex="0"
          class="dropdown-content card shadow bg-white w-72 rounded-lg"
        >
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <Icon name="material-symbols:search-sharp" />
            </div>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
              placeholder="To"
            />
          </div>
          <div class="h-80 overflow-scroll">
            <ul>
              <li
                class="p-4 flex justify-between hover:bg-slate-100"
                v-for="(airport, index) in airports"
                :key="index"
                @click="toAirport(airport)"
              >
                <div>
                  <p>{{ airport.city_name }}</p>
                  <p class="text-gray-300">
                    {{ airport.airport_name }}
                  </p>
                </div>
                <p>{{ airport.IATA_code }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="border-r border-gray-300 flex-1 p-4 hover:bg-[#70C3D4] transition ease-in-out duration-300"
      >
        <p class="">Deaparture</p>
        <p class=""><span class="text-3xl font-bold mr-2">24</span>March 23</p>
        <p>Friday</p>
      </div>
      <div
        class="flex-1 p-4 border-r border-gray-300 hover:bg-[#70C3D4] transition ease-in-out duration-300"
      >
        <p class="">Return</p>
        <p class=""><span class="text-3xl font-bold mr-2">24</span>March 23</p>
        <p>Friday</p>
      </div>
      <div
        class="flex-1 p-4 border-gray-300 hover:bg-[#70C3D4] rounded-r-xl transition ease-in-out duration-300"
      >
        <p>Travelleres and class</p>
        <p><span class="font-bold text-3xl mr-2">1</span>Traveller</p>
        <p>Economy,Premium</p>
      </div>
    </div>
    <div class="flex justify-center">
      <button
        type="button"
        class="text-gray-900 bg-white border border-gray-300 font-medium rounded-lg text-sm px-9 py-3 w-36 hover:bg-slate-100"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  flightType: "oneway",
});

const showInput = ref(false);

function switchDestination() {
  const temp = { ...from.value };

  from.value.city_name = to.value.city_name;
  from.value.code = to.value.code;
  from.value.airport_name = to.value.airport_name;

  to.value.city_name = temp.city_name;
  to.value.code = temp.code;
  to.value.airport_name = temp.airport_name;
}

const from = ref({
  city_name: "Dubai",
  code: "DXB",
  airport_name: "Dubai International Airport",
});

const to = ref({
  city_name: "New York",
  code: "NYC",
  airport_name: "New York International Airport",
});

function toAirport(airport) {
  to.value.city_name = airport.city_name;
  to.value.code = airport.IATA_code;
  to.value.airport_name = airport.airport_name;
}

function fromAirport(airport) {
  from.value.city_name = airport.city_name;
  from.value.code = airport.IATA_code;
  from.value.airport_name = airport.airport_name;
}

const airports = [
  {
    IATA_code: "AGX",
    ICAO_code: "VOAT",
    airport_name: "Agatti Island Airport",
    city_name: "Agatti Island",
  },
  {
    IATA_code: "AMD",
    ICAO_code: "VAAH",
    airport_name: "Ahmedabad Airport",
    city_name: "Ahmedabad",
  },
  {
    IATA_code: "AJL",
    ICAO_code: "VEAZ",
    airport_name: "Aizawl Airport",
    city_name: "Aizawl",
  },
  {
    IATA_code: "AKD",
    ICAO_code: "VAAK",
    airport_name: "Akola Airport",
    city_name: "Akola",
  },
  {
    IATA_code: "IXV",
    ICAO_code: "VEAN",
    airport_name: "Along Airport",
    city_name: "Along",
  },
  {
    IATA_code: "LKO",
    ICAO_code: "VILK",
    airport_name: "Amausi Airport",
    city_name: "Lucknow",
  },
  {
    IATA_code: "LUH",
    ICAO_code: "VILD",
    airport_name: "Amritsar Airport",
    city_name: "Ludhiana",
  },
  {
    IATA_code: "IXB",
    ICAO_code: "VEBD",
    airport_name: "Bagdogra Airport",
    city_name: "Bagdogra",
  },
  {
    IATA_code: "IXE",
    ICAO_code: "VOML",
    airport_name: "Bajpe Airport",
    city_name: "Mangalore",
  },
  {
    IATA_code: "IXL",
    ICAO_code: "VILH",
    airport_name: "Bakula Rimpoche Airport",
    city_name: "Leh",
  },
  {
    IATA_code: "RGH",
    ICAO_code: "VEBG",
    airport_name: "Balurghat Airport",
    city_name: "Balurghat",
  },
  {
    IATA_code: "IXD",
    ICAO_code: "VIAL",
    airport_name: "Bamrauli Airport",
    city_name: "Allahabad",
  },
  {
    IATA_code: "SHL",
    ICAO_code: "VEBI",
    airport_name: "Barapani Airport",
    city_name: "Shillong",
  },
  {
    IATA_code: "BEK",
    ICAO_code: "VOPN",
    airport_name: "Bareli Airport",
    city_name: "Bareli",
  },
  {
    IATA_code: "BEP",
    ICAO_code: "VOBI",
    airport_name: "Bellary Airport",
    city_name: "Bellary",
  },
  {
    IATA_code: "BLR",
    ICAO_code: "VOBG",
    airport_name: "Bengaluru International Airport",
    city_name: "Bangalore",
  },
  {
    IATA_code: "BUP",
    ICAO_code: "VIBT",
    airport_name: "Bhatinda Airport",
    city_name: "Bhatinda",
  },
  {
    IATA_code: "BHU",
    ICAO_code: "VABV",
    airport_name: "Bhavnagar Airport",
    city_name: "Bhavnagar",
  },
];
</script>
