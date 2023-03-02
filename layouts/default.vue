<template>
  <!-- mobile container needs to be removed -->
  <main class="flex flex-col justify-between lg:w-[1350px] lg:mx-auto">
    <CoreNavbar />
    <slot />

    <CoreFooter />
  </main>
</template>

<script setup></script>
