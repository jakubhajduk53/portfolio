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
  <div class="font-tiktok-sans text-main-900 bg-main-100">
    <div
      class="flex flex-wrap items-center justify-around text-center px-[50px] h-[80px] bg-main-100 w-full fixed top-0 left-0 z-50"
    >
      <p class="font-playfair-display font-semibold text-base md:text-xl">
        JAKUB HAJDUK
      </p>
      <a
        v-for="item in navItems"
        :key="item.id"
        :href="item.href"
        :class="{
          'text-sm md:text-base font-semibold':
            activeAnchor === item.href.substring(1),
          'text-sm md:text-base text-main-800':
            activeAnchor !== item.href.substring(1),
        }"
        >{{ item.label }}</a
      >
    </div>
    <div>
      <div id="about" class="h-screen pt-[130px] pb-[50px] pl-[50px] pr-[50px]">
        <div
          class="flex flex-col gap-3 md:gap-5 items-center justify-center h-full bg-radial from-main-100 to-main-200"
        >
          <div>
            <p class="text-xl md:text-3xl font-bold">
              Building responsive websites with Vue.js
            </p>
            <p class="text-base md:text-xl font-bold text-main-800">
              a Software Engineer specialized in Front-End development
            </p>
          </div>
          <div>
            <p class="text-base md:text-xl text-main-800">
              Dive into my work & explore the tools that bring my code to life
            </p>
          </div>
        </div>
      </div>
      <div id="quiz" class="h-screen pt-[130px] pb-[50px] pl-[50px] pr-[50px]">
        <div class="h-full bg-radial from-main-200 to-main-300"></div>
      </div>
      <div id="ui" class="h-screen pt-[130px] pb-[50px] pl-[50px] pr-[50px]">
        <div class="h-full bg-radial from-main-100 to-main-200"></div>
      </div>
      <div
        id="weather"
        class="h-screen pt-[130px] pb-[50px] pl-[50px] pr-[50px]"
      >
        <div class="h-full bg-radial from-main-200 to-main-300"></div>
      </div>
      <div
        id="contact"
        class="h-screen pt-[130px] pb-[50px] pl-[50px] pr-[50px]"
      >
        <div class="h-full bg-radial from-main-100 to-main-200"></div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
