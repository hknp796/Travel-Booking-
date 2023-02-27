<template>
  <div class="w-full py-2 sm:px-0">
    <TabGroup>
      <TabList class="flex">
        <Tab
          v-for="category in Object.keys(categories)"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full  py-2.5 text-sm font-medium ',
              selected
                ? 'bg-white  text-[#70C3D4] border-b-2 border-[#70C3D4]  focus:bg-white focus:outline-none'
                : 'text-[#70C3D4] hover:bg-white/[0.12] ',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel>
          <SectionsSearch />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";

const categories = ref({
  Flight: [],
  Activites: [],
  More: [],
});
</script>
