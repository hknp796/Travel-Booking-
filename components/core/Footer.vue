<template>
  <div class="bg-[#243E50] text-white">
    <div class="per-90-container py-10 flex flex-col items-center gap-10">
      <img src="/svg/logo.svg" alt="" />

      <ul class="flex gap-3 font-thin">
        <li v-for="link in footer.pageLinks" :key="link.id">
          <NuxtLink :to="link.to">{{ link.page }}</NuxtLink>
        </li>
      </ul>

      <div class="w-full flex justify-between gap-4">
        <NuxtLink
          v-for="social in footer.socialLinks"
          :key="social.id"
          :to="social.to"
        >
          <Icon :name="social.icon" size="30" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const footer = useFooter();
</script>
