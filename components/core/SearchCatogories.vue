<template>
  <div class="w-[700px] p-2 sm:px-0 bg-white rounded-xl shadow-lg -mb-5">
    <TabGroup>
      <TabList class="flex mx-auto">
        <Tab
          v-for="category in Object.values(categories)"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full   text-sm font-medium ',
              selected
                ? 'bg-white  text-[#70C3D4] border-b-2 border-[#70C3D4]  focus:bg-white focus:outline-none border-none'
                : 'text-black hover:bg-white/[0.12] ',
            ]"
          >
            <Icon :name="category.icon" width="40" height="40" />
            <p>
              {{ category.name }}
            </p>
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel> </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const categories = ref([
  {
    name: "Flight",
    icon: "material-symbols:flight",
  },
  {
    name: "Hotels",
    icon: "ri:hotel-line",
  },
  {
    name: "Visa",
    icon: "fluent:share-screen-person-overlay-inside-16-regular",
  },
  {
    name: "Cabs",
    icon: "fluent:vehicle-cab-16-regular",
  },
  {
    name: "Buses",
    icon: "fluent:vehicle-bus-24-regular",
  },
  {
    name: "Homestays",
    icon: "material-symbols:home-work-outline",
  },
]);
</script>
