<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();
const activeAnchor = ref(route.path.substring(1));

watch(route, (newRoute) => {
  activeAnchor.value = newRoute.path.substring(1);
});
const navItems = [
  { id: 1, to: "/", label: "About" },
  { id: 2, to: "/projects", label: "Projects" },
  { id: 3, to: "/contact", label: "Contact" },
];
</script>

<template>
  <div
    class="flex flex-wrap items-center justify-around text-center h-[80px] bg-main-100 w-full"
  >
    <p class="font-playfair-display font-semibold text-base md:text-xl">
      JAKUB HAJDUK
    </p>
    <RouterLink
      v-for="item in navItems"
      :key="item.id"
      :to="item.to"
      :class="{
        'text-sm md:text-base font-semibold':
          activeAnchor === item.to.substring(1),
        'text-sm md:text-base text-main-800':
          activeAnchor !== item.to.substring(1),
      }"
      :aria-label="item.label"
      >{{ item.label }}</RouterLink
    >
  </div>
</template>

<style scoped></style>
