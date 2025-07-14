<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
const activeAnchor = ref("about");
const navItems = [
  { id: 1, href: "#about", label: "About" },
  { id: 2, href: "#quiz", label: "Project 1: Quiz" },
  { id: 3, href: "#ui", label: "Project 2: MyUI" },
  { id: 4, href: "#weather", label: "Project 3: WeatherApp" },
  { id: 5, href: "#contact", label: "Contact" },
];

let observer: IntersectionObserver;

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeAnchor.value = entry.target.id;
      }
    });
  }, options);

  navItems.forEach((item) => {
    const section = document.getElementById(item.href.substring(1));
    if (section) observer.observe(section);
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<template>
  <div class="font-playfair-display text-main-900">
    <div
      class="flex items-center justify-around h-[50px] bg-gradient-to-b from-main-100 to-main-200 shadow-[0px_1px_5px_hsla(210,11%,15%,0.5)] w-full fixed top-0 left-0 z-50"
    >
      <p class="font-semibold text-lg">JAKUB HAJDUK</p>
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="item.href"
        :class="{
          'font-semibold': activeAnchor === item.href.substring(1),
          'text-main-800': activeAnchor !== item.href.substring(1),
        }"
        >{{ item.label }}</a
      >
    </div>
    <div>
      <div
        id="about"
        class="bg-radial from-main-400 to-main-500 h-screen pt-[50px]"
      ></div>
      <div
        id="quiz"
        class="bg-radial from-main-500 to-main-600 h-screen pt-[50px]"
      ></div>
      <div
        id="ui"
        class="bg-radial from-main-400 to-main-500 h-screen pt-[50px]"
      ></div>
      <div
        id="weather"
        class="bg-radial from-main-500 to-main-600 h-screen pt-[50px]"
      ></div>
      <div
        id="contact"
        class="bg-radial from-main-400 to-main-500 h-screen pt-[50px]"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
