<template>
  <!-- mobile container needs to be removed -->
  <main
    class="w-full mobile-container min-h-screen flex flex-col justify-between"
  >
    <CoreNavbar />
    <slot />

    <CoreFooter />
  </main>
</template>

<script setup></script>
