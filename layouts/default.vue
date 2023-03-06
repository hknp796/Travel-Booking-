<template>
  <!-- mobile container needs to be removed -->
  <main class="flex flex-col justify-between">
    <CoreNavbar />
    <slot />

    <CoreFooter class="lg:w-[1350px] lg:mx-auto" />
  </main>
</template>

<script setup></script>
