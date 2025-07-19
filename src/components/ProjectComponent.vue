<script setup lang="ts">
interface Project {
  name?: string;
  shortDescription?: string;
  description?: string;
  techStack?: string[];
  ariaLabel?: string;
  icon?: string;
  href?: string;
}

const { data } = defineProps<{ data: Project }>();

const {
  name,
  shortDescription,
  description,
  techStack,
  ariaLabel,
  icon,
  href,
} = data ?? {};

const techColors: Record<string, string> = {
  "Vue.js": "bg-vue-dark text-vue-light",
  TypeScript: "bg-typescript-dark text-typescript-light",
  Pinia: "bg-pinia-dark text-pinia-light",
  "Vue Router": "bg-vuerouter-dark text-vuerouter-light",
  "Element Plus": "bg-elementplus-dark text-elementplus-light",
  TailwindCSS: "bg-tailwindcss-dark text-tailwindcss-light",
};
</script>

<template>
  <div
    class="flex flex-col gap-1 md:gap-3 items-center justify-center bg-main-400 h-full overflow-y-auto"
  >
    <div
      class="flex justify-center items-center gap-1 text-base md:text-xl font-bold"
    >
      <p>{{ name }}</p>
      <i :class="icon" />
    </div>
    <p class="text-center text-sm md:text-base font-bold text-main-800">
      {{ shortDescription }}
    </p>
    <p class="max-w-[80%] md:max-w-[60%] overflow-auto text-sm text-main-800">
      {{ description }}
    </p>
    <div
      class="flex items-center justify-center gap-1 md:gap-5 m-1 md:m-3 flex-wrap"
    >
      <span
        v-for="technology in techStack"
        :class="`${techColors[technology]} text-sm p-1 rounded-md`"
      >
        {{ technology }}
      </span>
    </div>
    <a
      :href="href"
      target="_blank"
      :aria-label="ariaLabel"
      class="flex items-center justify-center gap-1 text-sm bg-main-800 hover:bg-main-900 text-main-300 hover:text-main-200 duration-100 p-1 md:p-3 rounded-full"
      >Visit website <i class="bx bx-right-top-arrow-circle text-base"></i
    ></a>
  </div>
</template>

<style scoped></style>
