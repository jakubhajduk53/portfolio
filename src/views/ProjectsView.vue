<script setup lang="ts">
import ProjectComponent from "../components/ProjectComponent.vue";
import { quizData, weatherData, uiData, monocolorData } from "../data";
</script>

<template>
  <div
    class="min-h-screen-minus-80 grid md:grid-cols-2 md:grid-rows-2 gap-3 p-3 h-full pattern"
  >
    <ProjectComponent :data="quizData" />
    <ProjectComponent :data="weatherData" />
    <ProjectComponent :data="uiData" />
    <ProjectComponent :data="monocolorData" />
  </div>
</template>

<style scoped></style>
