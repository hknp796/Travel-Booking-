<template>
  <div
    class="border-solid border border-gray-500 rounded-xl px-2 bg-white text-black"
  >
    <div
      class="flex justify-between items-center border-b border-gray-300 py-4"
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9O4CWj2W5kCymUDCOiUSxv4uoU4p-yOo-IzXjOaBmB88OaXojGvPoKVAt28WowdHwoA&usqp=CAU"
        alt=""
        width="50"
        class="rounded-md"
      />
      <div>
        <p class="font-bold">02:00</p>
        <p class="text-gray-400 text-xs">
          CCJ <Icon name="pajamas:arrow-right" /> DXB
        </p>
      </div>
      <span class="text-xs">3h 35m</span>
      <div>
        <p class="font-bold">02:00</p>
        <p class="text-gray-400 text-xs">non-stop</p>
      </div>
      <span class="font-bold">₹8015</span>
      <span
        ><button class="btn btn-active btn-accent btn-xs">Book</button></span
      >
    </div>

    <button class="btn btn-outline btn-xs rounded-md flex ml-auto my-2">
      Flight details
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
