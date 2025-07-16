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

const quizFeatures = [
  "Modern Tech Stack: Developed using Vue 3 with the Composition API, TypeScript for type safety, and state management handled by Pinia.",
  "Smooth Navigation: Vue Router ensures seamless transitions between quiz pages.",
  "Responsive UI: Styled with TailwindCSS and Element Plus for a clean and user-friendly design.",
  "Instant Feedback: After completing the quiz, users receive their results, displaying both their selected answers and the correct ones.",
  "Color-Coded Results: Answers are highlighted with appropriate colors—green for correct responses and red for incorrect ones—making it easy to review mistakes.",
];

const quizDescription =
  "This is a simple quiz application built with Vue 3, TypeScript, Pinia, Vue Router, Element Plus, and TailwindCSS. The app consists of 10 multiple-choice questions, each with only one correct answer, selected using radio buttons.";

const weatherFeatures = [
  "Modern Tech Stack: Built with Vue 3 and TypeScript for a robust and scalable application.",
  "State Management: Pinia ensures smooth handling of user input and API responses.",
  "User-Friendly UI: Styled with TailwindCSS and Element Plus for a clean and intuitive experience.",
  "Comprehensive Weather Data: Displays essential details like temperature, humidity, and wind speed, along with advanced metrics like latitude and longitude.",
  "Live Search: Users can enter any location to instantly fetch the latest weather conditions.",
];

const weatherDescription =
  "A weather application built with Vue 3, TypeScript, Pinia, Element Plus, and TailwindCSS. Users can search for any location to retrieve real-time weather data from the OpenWeatherMap API.";

const uiFeatures = [
  "Custom Design System: Built with Vue 3 and TypeScript, offering a reusable and scalable UI component library.",
  "Dual Color Palettes: Includes separate light and dark HSL-based palettes for consistent theming across UI components.",
  "Button Components: Support multiple sizes, border styles, and one of seven predefined themes for visual variety.",
  "Utility-First Styling: TailwindCSS ensures rapid development with consistent spacing, typography, and responsive behavior.",
  "Consistent UX Patterns: Components follow predictable structure and interactions to provide a smooth user experience.",
];
const uiDescription =
  "A custom UI component library built with Vue 3, TypeScript, and TailwindCSS. Features a flexible HSL-based color system and a suite of interactive, accessible button components ready for integration in modern web apps.";

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
          class="flex flex-col gap-3 md:gap-5 p-3 md:p-5 text-center items-center justify-center h-full bg-radial from-main-100 to-main-200"
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
        <div
          class="flex items-center justify-center h-full bg-radial from-main-200 to-main-300"
        >
          <div
            class="flex flex-col gap-3 md:gap-5 p-3 md:p-5 items-center justify-center bg-main-400"
          >
            <p class="text-xl md:text-3xl font-bold">Quiz App</p>
            <p class="text-center text-base md:text-xl font-bold text-main-800">
              Answer 10 various trivia questions
            </p>
            <p class="max-w-[60%] text-base text-main-800">
              {{ quizDescription }}
            </p>
            <a
              href=""
              target="_blank"
              aria-label="Quiz App site"
              class="bg-main-800 hover:bg-main-900 text-main-300 hover:text-main-200 duration-100 p-1 md:p-3 rounded-full"
              >Visit website</a
            >
          </div>
        </div>
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
