<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div
    class="min-h-screen-minus-80 pattern flex flex-col gap-3 md:gap-5 p-3 md:p-5 text-center items-center justify-center h-full"
  >
    <div>
      <p class="text-xl md:text-3xl font-bold">
        Building responsive websites with Vue.js
      </p>
      <p class="text-base md:text-xl font-bold text-main-800">
        a Software Engineer specialized in Front-End development
      </p>
    </div>
    <p class="text-base md:text-xl text-main-800">
      Dive into my work & explore the tools that bring my code to life
    </p>
    <RouterLink
      to="/projects"
      aria-label="Relocate to projects section"
      class="flex justify-center items-center text-xl bg-main-800 hover:bg-main-900 text-main-300 hover:text-main-200 duration-100 p-2 md:p-3 rounded-full shadow-sm"
      ><i class="bx bx-down-arrow-alt"
    /></RouterLink>
  </div>
</template>

<style scoped></style>
