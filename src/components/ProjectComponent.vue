<script setup lang="ts">
interface Project {
  name?: string;
  shortDescription?: string;
  description?: string;
  techStack?: string[];
  ariaLabel?: string;
  icon?: string;
}

const { data } = defineProps<{ data: Project }>();

const { name, shortDescription, description, techStack, ariaLabel, icon } =
  data ?? {};
</script>

<template>
  <div
    class="flex flex-col gap-3 md:gap-5 p-3 md:p-5 items-center justify-center bg-main-400 box-border"
  >
    <div
      class="flex justify-center items-center gap-1 text-xl md:text-3xl font-bold"
    >
      <p>{{ name }}</p>
      <i :class="icon" />
    </div>
    <p class="text-center text-base md:text-xl font-bold text-main-800">
      {{ shortDescription }}
    </p>
    <p class="max-w-[60%] text-base text-main-800">
      {{ description }}
    </p>
    <div class="flex gap-3 md:gap-5">
      <span
        v-for="technology in techStack"
        class="text-base text-main-700 bg-main-200 p-1 rounded-full"
      >
        {{ technology }}
      </span>
    </div>
    <a
      href=""
      target="_blank"
      :aria-label="ariaLabel"
      class="bg-main-800 hover:bg-main-900 text-main-300 hover:text-main-200 duration-100 p-1 md:p-3 rounded-full"
      >Visit website</a
    >
  </div>
</template>

<style scoped></style>
