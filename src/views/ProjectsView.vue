<script setup lang="ts">
import ProjectComponent from "../components/ProjectComponent.vue";

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
  href: "https://quiz-2025.vercel.app/",
};
const weatherData = {
  name: "Weather Forecast",
  shortDescription: "Check the weather at any location",
  description:
    "A weather application built with Vue 3, TypeScript, Pinia, Element Plus, and TailwindCSS. Users can search for any location to retrieve real-time weather data from the OpenWeatherMap API.",
  techStack: ["Vue.js", "TypeScript", "Pinia", "Element Plus", "TailwindCSS"],
  ariaLabel: "Weather Forecast Site",
  icon: "bx bx-cloud-rain",
  href: "https://weather-app-jakubhajduk53s-projects.vercel.app/",
};
const uiData = {
  name: "UI Library",
  shortDescription: "Build interfaces faster with custom-styled UI components",
  description:
    "A custom UI component library built with Vue 3, TypeScript, and TailwindCSS. Features a flexible HSL-based color system and a suite of interactive, accessible button components ready for integration in modern web apps.",
  techStack: ["Vue.js", "TypeScript", "TailwindCSS"],
  ariaLabel: "UI Library Site",
  icon: "bx bx-code-alt",
  href: "https://my-ui-jakubhajduk53s-projects.vercel.app/",
};
const monocolorData = {
  name: "Monocolor Landing Page",
  shortDescription: "Discover modern HSL palette usage",
  description:
    "A minimal landing page built using just one hue. Change it manually (0–360) or enable animated color rotation.",
  techStack: ["Vue.js", "TypeScript", "TailwindCSS"],
  ariaLabel: "Monocolor Landing Page Site",
  icon: "bx bx-palette",
  href: "https://monocolor-landing-page.vercel.app/",
};
</script>

<template>
  <div id="projects" class="h-screen-minus-80">
    <div
      class="grid grid-cols-2 grid-rows-2 gap-3 p-3 h-full bg-radial from-main-200 to-main-300"
    >
      <ProjectComponent :data="quizData" />
      <ProjectComponent :data="weatherData" />
      <ProjectComponent :data="uiData" />
      <ProjectComponent :data="monocolorData" />
    </div>
  </div>
</template>

<style scoped></style>
