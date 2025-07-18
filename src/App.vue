<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import ProjectComponent from "../src/components/ProjectComponent.vue";

const activeAnchor = ref("about");
const navItems = [
  { id: 1, href: "#about", label: "About" },
  { id: 2, href: "#projects", label: "Projects" },
  { id: 3, href: "#contact", label: "Contact" },
];

const quizData = {
  name: "Trivia Quiz",
  shortDescription: "Answer 10 various trivia questions",
  description:
    "This is a simple quiz application built with Vue 3, TypeScript, Pinia, Vue Router, Element Plus, and TailwindCSS. The app consists of 10 multiple-choice questions, each with only one correct answer, selected using radio buttons.",
  techStack: [
    "Vue.js",
    "TypeScript",
    "Pinia",
    "Vue Router",
    "Element Plus",
    "TailwindCSS",
  ],
  ariaLabel: "Trivia Quiz Site",
  icon: "bx bx-check-circle",
};
const weatherData = {
  name: "Weather Forecast",
  shortDescription: "Check the weather at any location",
  description:
    "A weather application built with Vue 3, TypeScript, Pinia, Element Plus, and TailwindCSS. Users can search for any location to retrieve real-time weather data from the OpenWeatherMap API.",
  techStack: ["Vue.js", "TypeScript", "Pinia", "Element Plus", "TailwindCSS"],
  ariaLabel: "Weather Forecast Site",
  icon: "bx bx-cloud-rain",
};
const uiData = {
  name: "UI Library",
  shortDescription: "Build interfaces faster with custom-styled UI components",
  description:
    "A custom UI component library built with Vue 3, TypeScript, and TailwindCSS. Features a flexible HSL-based color system and a suite of interactive, accessible button components ready for integration in modern web apps.",
  techStack: ["Vue.js", "TypeScript", "TailwindCSS"],
  ariaLabel: "UI Library Site",
  icon: "bx bx-code-alt",
};
const monocolorData = {
  name: "Monocolor Landing Page",
  shortDescription: "Discover modern HSL palette usage",
  description:
    "A minimal landing page built using just one hue. Change it manually (0–360) or enable animated color rotation.",
  techStack: ["Vue.js", "TypeScript", "TailwindCSS"],
  ariaLabel: "Monocolor Landing Page Site",
  icon: "bx bx-palette",
};

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
        :aria-label="item.label"
        >{{ item.label }}</a
      >
    </div>
    <div>
      <div id="about" class="h-screen pt-[130px] pb-[50px] pl-[50px] pr-[50px]">
        <div
          class="pattern flex flex-col gap-3 md:gap-5 p-3 md:p-5 text-center items-center justify-center h-full bg-radial from-main-100 to-main-200"
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
          <a
            href="#projects"
            aria-label="Relocate to projects section"
            class="flex justify-center items-center text-base md:text-xl bg-main-800 hover:bg-main-900 text-main-300 hover:text-main-200 duration-100 p-1 md:p-3 rounded-full"
            ><i class="bx bx-down-arrow-alt"
          /></a>
        </div>
      </div>
      <div
        id="projects"
        class="h-screen pt-[130px] pb-[50px] pl-[50px] pr-[50px]"
      >
        <div
          class="grid grid-cols-2 grid-rows-2 gap-3 p-3 h-full bg-radial from-main-200 to-main-300"
        >
          <ProjectComponent :data="quizData" />
          <ProjectComponent :data="weatherData" />
          <ProjectComponent :data="uiData" />
          <ProjectComponent :data="monocolorData" />
        </div>
      </div>
      <div
        id="contact"
        class="h-screen pt-[130px] pb-[50px] pl-[50px] pr-[50px]"
      >
        <div
          class="flex flex-col justify-center items-center text-center h-full bg-radial pattern from-main-100 to-main-200"
        >
          <div class="flex items-center justify-center gap-1">
            <i class="bx bx-envelope" />
            <a
              href="mailto:jakubhajduk53@gmail.com"
              aria-label="Jakub Hajduk's Email"
              class="underline"
              >jakubhajduk53@gmail.com</a
            >
          </div>
          <div class="flex items-center justify-center gap-1">
            <i class="bx bx-phone" />
            <p>+48 509 778 233</p>
          </div>

          <div class="flex items-center justify-center gap-1">
            <i class="bx bxl-github" />
            <a
              href="https://github.com/jakubhajduk53"
              target="_blank"
              aria-label="Jakub Hajduk's Github Profile"
              class="underline"
              >github.com/jakubhajduk53</a
            >
          </div>

          <div class="flex items-center justify-center gap-1">
            <i class="bx bxl-linkedin-square" />
            <a
              href="https://www.linkedin.com/in/jakub-hajduk-ab0122286"
              target="_blank"
              aria-label="Jakub Hajduk's LinkedIn Profile"
              class="underline"
              >linkedin.com/in/jakub-hajduk-ab0122286/</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
